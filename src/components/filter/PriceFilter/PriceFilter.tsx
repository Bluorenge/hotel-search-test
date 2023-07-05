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
import { FilterProps } from '../types';

export const PriceFilter = ({
    value,
    maxPrice,
    onFilterChange,
}: FilterProps<'priceUpTo'> & {
    maxPrice: number;
}) => {
    const handleInputChange = (event: any) => {
        const inputValueChangeEvent = event.target?.value ?? event[1];
        onFilterChange('priceUpTo', inputValueChangeEvent);
    };

    return (
        <Box w="100%">
            <Text mb={2}>Цена до</Text>

            <RangeSlider
                min={0}
                max={maxPrice}
                step={30}
                aria-label={['min', 'max']}
                value={[0, value]}
                onChange={handleInputChange}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
            </RangeSlider>

            <HStack>
                <Input
                    type="number"
                    step={30}
                    value={value}
                    onChange={handleInputChange}
                />
            </HStack>
        </Box>
    );
};
