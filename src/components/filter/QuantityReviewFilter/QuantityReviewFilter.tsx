import { Box, Text, Input } from '@chakra-ui/react';
import { FilterProps } from '../types';

export const QuantityReviewFilter = ({
    value,
    onFilterChange,
}: FilterProps<'quantityReview'>) => {
    const handleInputChange = (event: any) => {
        const value = event.target.value;
        const sanitizedValue = value.replace(/[^-0-9]/g, '');

        onFilterChange('quantityReview', sanitizedValue);
    };

    return (
        <Box w="100%">
            <Text mb={2}>Количество отзывов (от)</Text>

            <Input
                type="number"
                step={1}
                value={value}
                placeholder="Например, от 10"
                onChange={handleInputChange}
            />
        </Box>
    );
};
