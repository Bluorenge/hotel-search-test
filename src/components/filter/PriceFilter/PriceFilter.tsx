import {
    Text,
    Input,
    HStack,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Box
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { debounce } from '../../../utils/debounce';

export const PriceFilter = ({
    value,
    maxPrice,
    onFilterChange,
}: {
    value: string | null;
    maxPrice: number;
    onFilterChange: any;
}) => {
    const [inputValue, setInputValue] = useState<string | number>(maxPrice);

    useEffect(() => setInputValue(value ?? maxPrice), [maxPrice, value]);

    const handleInputChange = (event: any) => {
        const inputValueChangeEvent = event[1];
        setInputValue(inputValueChangeEvent);
        debounce(onFilterChange('priceUpTo', inputValueChangeEvent), 300);
    };

    return (
        <Box w="100%">
            <Text mb={2}>Цена до</Text>

            <RangeSlider
                min={0}
                max={maxPrice}
                step={30}
                aria-label={['min', 'max']}
                value={[0, +inputValue]}
                onChange={handleInputChange}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
            </RangeSlider>

            <HStack>
                <Input
                    readOnly
                    value={inputValue}
                />
            </HStack>
        </Box>
    );
};
