import { Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import Select from 'react-select';

export enum TYPE_HOUSING {
    APARTAMENT = 'apartament',
    HOTEL = 'hotel',
}

export const TYPE_HOUSING_RU = {
    [TYPE_HOUSING.APARTAMENT]: 'Апартаменты',
    [TYPE_HOUSING.HOTEL]: 'Отель',
};

export const TypeFilter = ({ value, onFilterChange }: FilterProps) => {
    const selectData = useMemo(
        () =>
            Object.values(TYPE_HOUSING).map((type) => ({
                value: type,
                label: TYPE_HOUSING_RU[type],
            })),
        []
    );

    const handleSelectChange = (selected: any) => {
        onFilterChange('types', selected);
    };

    return (
        <div>
            <Text mb={2}>Тип</Text>
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
                isSearchable={false}
                value={value}
                options={selectData}
                onChange={handleSelectChange}
            />
        </div>
    );
};
