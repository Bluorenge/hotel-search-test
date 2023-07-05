import { CheckboxGroup, VStack, Checkbox, Text } from '@chakra-ui/react';
import { FilterProps } from '../types';

export enum STAR_RATING {
    ONE_STAR = '1',
    TWO_STAR = '2',
    THREE_STAR = '3',
    FOUR_STAR = '4',
    FIVE_STAR = '5',
}

export const StarFilter = ({
    value,
    onFilterChange,
}: FilterProps<'starRating'>) => {
    const handleCheckboxChange = (selected: any) => {
        onFilterChange('starRating', selected);
    };

    return (
        <div>
            <Text mb={2}>Количество звёзд</Text>

            <CheckboxGroup
                colorScheme="green"
                onChange={handleCheckboxChange}
                value={value}
            >
                <VStack
                    spacing={2}
                    align="flex-start"
                >
                    <Checkbox value={STAR_RATING.ONE_STAR}>1 звезда</Checkbox>
                    <Checkbox value={STAR_RATING.TWO_STAR}>2 звезды</Checkbox>
                    <Checkbox value={STAR_RATING.THREE_STAR}>3 звезды</Checkbox>
                    <Checkbox value={STAR_RATING.FOUR_STAR}>4 звезды</Checkbox>
                    <Checkbox value={STAR_RATING.FIVE_STAR}>5 звезд</Checkbox>
                </VStack>
            </CheckboxGroup>
        </div>
    );
};
