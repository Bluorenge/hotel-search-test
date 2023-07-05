import { Box, Button, ButtonGroup, VStack, Text } from '@chakra-ui/react';
import { HotelCard } from '../HotelCard/HotelCard';
import { useContext } from 'react';
import { HotelsStoreCtx } from '../../../store/HotelsStoreProvider';

export const HotelList = () => {
    const { page, totalPage, hotels, onPaginate } = useContext(HotelsStoreCtx);

    const renderPageButtons = () => {
        const buttons = [];

        for (let i = 1; i <= totalPage; i++) {
            buttons.push(
                <Button
                    key={i}
                    colorScheme={page === i ? 'blue' : 'gray'}
                    onClick={() => onPaginate(i)}
                >
                    {i}
                </Button>
            );
        }

        return buttons;
    };

    if (!hotels.length) {
        return <Text>Записей не найдено</Text>;
    }

    return (
        <VStack gap={8}>
            {hotels.map((hotel) => (
                <HotelCard
                    key={hotel.name}
                    hotelData={hotel}
                />
            ))}

            {totalPage > 1 ? (
                <Box>
                    <ButtonGroup>{renderPageButtons()}</ButtonGroup>
                </Box>
            ) : null}
        </VStack>
    );
};
