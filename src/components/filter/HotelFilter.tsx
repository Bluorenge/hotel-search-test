import { useContext, useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { CountriesFilter } from './CountriesFilter/CountriesFilter';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { QuantityReviewFilter } from './QuantityReviewFilter/QuantityReviewFilter';
import { STAR_RATING, StarFilter } from './StarFilter/StarFilter';
import { FilterData, HotelsStoreCtx } from '../../store/HotelsStoreProvider';
import {
    TYPE_HOUSING,
    TYPE_HOUSING_RU,
    TypeFilter
} from './TypeFilter/TypeFilter';

const initialFilter: FilterData = {
    countries: [],
    types: Object.values(TYPE_HOUSING).map((type) => ({
        value: type,
        label: TYPE_HOUSING_RU[type],
    })),
    starRating: Object.values(STAR_RATING),
    quantityReview: 0,
    priceUpTo: 0,
};

export const HotelFilter = () => {
    const { maxHotelPrice, onFilter } = useContext(HotelsStoreCtx);
    const [filters, setFilters] = useState<FilterData>(initialFilter);

    const handleFilterChange = <T extends keyof FilterData>(
        name: T,
        value: FilterData[T]
    ) => {
        setFilters({ ...filters, [name]: value });
    };

    const handleClearFilterClick = () => {
        onFilter(null);
        setFilters(initialFilter);
    };

    return (
        <>
            <CountriesFilter
                value={filters.countries}
                onFilterChange={handleFilterChange}
            />
            <TypeFilter
                value={filters.types}
                onFilterChange={handleFilterChange}
            />
            <StarFilter
                value={filters.starRating}
                onFilterChange={handleFilterChange}
            />
            <QuantityReviewFilter
                value={filters.quantityReview}
                onFilterChange={handleFilterChange}
            />
            <PriceFilter
                maxPrice={maxHotelPrice}
                value={filters.priceUpTo || maxHotelPrice}
                onFilterChange={handleFilterChange}
            />

            <HStack>
                <Button
                    colorScheme="teal"
                    onClick={() => onFilter(filters)}
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
