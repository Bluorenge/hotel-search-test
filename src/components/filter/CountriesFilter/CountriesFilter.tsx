import { useMemo } from 'react';
import { Text } from '@chakra-ui/react';
import Select from 'react-select';

import countriesList from './countriesList.json';

export const CountriesFilter = ({ value, onFilterChange }: FilterProps) => {
    const selectData = useMemo(
        () =>
            countriesList.map((country) => ({
                value: country.value.toLowerCase(),
                label: country.name,
            })),
        []
    );

    const handleSelectChange = (selected: any) => {
        onFilterChange('countries', selected);
    };

    return (
        <div>
            <Text mb={2}>Страна</Text>

            <Select
                styles={{
                    option: (baseStyles) => ({
                        ...baseStyles,
                        color: 'black',
                    }),
                    container: (baseStyles) => ({
                        ...baseStyles,
                        width: '280px',
                    }),
                }}
                isMulti
                options={selectData}
                onChange={handleSelectChange}
                value={value}
            />
        </div>
    );
};
