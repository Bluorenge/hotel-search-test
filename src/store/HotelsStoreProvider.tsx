import { createContext, useEffect, useMemo, useState } from 'react';
import hotelData from './hotelsMock.json';

interface Hotel {
    name: string;
    country: string;
    address: string;
    stars: number;
    type: string;
    description: string;
    services: string[];
    min_price: number;
    currency: string;
    rating: number;
    reviews_amount: number;
    last_review: string;
}

export interface FilterData {
    countries: TObj[];
    types: any[];
    starRating: string[];
    quantityReview: number;
    priceUpTo: number;
}

interface HotelsStoreCtxType {
    onFilter: (filter: FilterData | null) => void;
    onPaginate: (page: number) => void;
    page: number;
    totalPage: number;
    maxHotelPrice: number;
    hotels: Hotel[];
}

export const HotelsStoreCtx = createContext({} as HotelsStoreCtxType);

const PER_PAGE = 3;

const data: Hotel[] = hotelData.hotels;

export const HotelsStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filters, setFilters] = useState<FilterData | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [filters]);

    const filteredHotels = useMemo<Hotel[]>(
        () =>
            filters
                ? data.filter((item) => {
                    const isEqualCountry = filters.countries.find(
                        (country) => country.label === item.country
                    );
                    const isEqualType = filters.types.find(
                        (type) => type.label === item.type
                    );
                    const isEqualStarRating = filters.starRating.find(
                        (star) => +star === item.stars
                    );
                    const isQuntityReviewMore =
                          filters.quantityReview &&
                          filters.quantityReview >= item.reviews_amount;
                    const isPriceMore =
                          filters.priceUpTo &&
                          filters.priceUpTo <= item.min_price;

                    if (
                        (filters.countries.length !== 0 && !isEqualCountry) ||
                          !isEqualType ||
                          !isEqualStarRating ||
                          isQuntityReviewMore ||
                          isPriceMore
                    ) {
                        return false;
                    }

                    return true;
                })
                : data,
        [filters]
    );

    const startIndex = (page - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const totalPage = Math.ceil(filteredHotels.length / PER_PAGE);

    const hotels = useMemo<Hotel[]>(
        () => filteredHotels.slice(startIndex, endIndex),
        [filteredHotels, startIndex, endIndex]
    );

    const maxHotelPrice = useMemo(
        () =>
            data.reduce((acc, item) => {
                if (item.min_price > acc) {
                    acc = item.min_price;
                }

                return acc;
            }, 0),
        []
    );

    const value = useMemo<HotelsStoreCtxType>(
        () => ({
            onFilter: setFilters,
            onPaginate: setPage,
            page,
            totalPage,
            hotels,
            maxHotelPrice,
        }),
        [hotels, page, totalPage, maxHotelPrice]
    );

    return (
        <HotelsStoreCtx.Provider value={value}>
            {children}
        </HotelsStoreCtx.Provider>
    );
};
