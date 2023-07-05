import { useMemo, useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { CountriesFilter } from './CountriesFilter/CountriesFilter';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { QuantityReviewFilter } from './QuantityReviewFilter/QuantityReviewFilter';
import { STAR_RATING, StarFilter } from './StarFilter/StarFilter';
import {
    TYPE_HOUSING,
    TYPE_HOUSING_RU,
    TypeFilter
} from './TypeFilter/TypeFilter';

const initialFilter: {
    countries: TObj[];
    types: any[];
    starRating: string[];
    quantityReview: string | null;
    priceUpTo: string | null;
} = {
    countries: [],
    types: Object.values(TYPE_HOUSING).map((type) => ({
        value: type,
        label: TYPE_HOUSING_RU[type],
    })),
    starRating: Object.values(STAR_RATING),
    quantityReview: null,
    priceUpTo: null,
};

export const HotelFilter = ({
    hotels,
    onFilterChangeClick,
}: {
    hotels: any[];
    onFilterChangeClick: any;
}) => {
    const [filterSettings, setFilterSettings] = useState(initialFilter);
    const maxHotelPrice = useMemo(
        () =>
            hotels.reduce((acc, item) => {
                if (item.min_price > acc) {
                    acc = item.min_price;
                }

                return acc;
            }, 0),
        [hotels]
    );

    const handleFilterChange = (name: string, value: any) => {
        setFilterSettings({ ...filterSettings, [name]: value });
    };

    const filteredData = hotels.filter((item) => {
        const isEqualCountry = filterSettings.countries.find(
            (country) => country.label === item.country
        );
        const isEqualType = filterSettings.types.find(
            (type) => type.label === item.type
        );
        const isEqualStarRating = filterSettings.starRating.find(
            (star) => +star === item.stars
        );
        const isQuntityReviewMore =
            filterSettings.quantityReview &&
            filterSettings.quantityReview >= item.reviews_amount;
        const isPriceMore =
            filterSettings.priceUpTo &&
            filterSettings.priceUpTo <= item.min_price;

        if (
            (filterSettings.countries.length !== 0 && !isEqualCountry) ||
            !isEqualType ||
            !isEqualStarRating ||
            isQuntityReviewMore ||
            isPriceMore
        ) {
            return false;
        }

        return true;
    });

    const handleClearFilterClick = () => {
        setFilterSettings(initialFilter);
        onFilterChangeClick(hotels);
    };

    return (
        <>
            <CountriesFilter
                value={filterSettings.countries}
                onFilterChange={handleFilterChange}
            />
            <TypeFilter
                value={filterSettings.types}
                onFilterChange={handleFilterChange}
            />
            <StarFilter
                value={filterSettings.starRating}
                onFilterChange={handleFilterChange}
            />
            <QuantityReviewFilter
                value={filterSettings.quantityReview}
                onFilterChange={handleFilterChange}
            />
            <PriceFilter
                maxPrice={maxHotelPrice}
                value={filterSettings.priceUpTo}
                onFilterChange={handleFilterChange}
            />

            <HStack>
                <Button
                    colorScheme="teal"
                    onClick={() => onFilterChangeClick(filteredData)}
                >
                    Применить фильтр
                </Button>

                <Button onClick={handleClearFilterClick}>
                    Очистить фильтр
                </Button>
            </HStack>
        </>
    );
};
