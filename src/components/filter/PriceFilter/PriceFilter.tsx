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
import { debounce } from '../../../utils/debounce';
import { FilterProps } from '../types';

export const PriceFilter = ({
    value,
    maxPrice,
    onFilterChange,
}: FilterProps<'priceUpTo'> & {
    maxPrice: number;
}) => {
    const handleInputChange = (event: any) => {
        const inputValueChangeEvent = event[1];
        debounce(() => onFilterChange('priceUpTo', inputValueChangeEvent), 300);
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
                    readOnly
                    value={value}
                />
            </HStack>
        </Box>
    );
};
