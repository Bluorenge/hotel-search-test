import { Box, Text, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const QuantityReviewFilter = ({ value, onFilterChange }: FilterProps) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => setInputValue(value ?? ''), [value]);

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        const sanitizedValue = value.replace(/[^-0-9]/g, '');

        setInputValue(sanitizedValue);
        onFilterChange('quantityReview', sanitizedValue);
    };

    return (
        <Box w="100%">
            <Text mb={2}>Количество отзывов (от)</Text>

            <Input
                type="number"
                step={1}
                value={inputValue}
                placeholder="Например, от 10"
                onChange={handleInputChange}
            />
        </Box>
    );
};
