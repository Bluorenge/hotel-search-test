import { Box, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { HotelCard } from '../HotelCard/HotelCard';
import { useEffect, useState } from 'react';

export const HotelList = ({ hotels }: { hotels: any }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [hotels]);

    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageHotels = hotels.slice(startIndex, endIndex);
    const pageCount = Math.ceil(hotels.length / 3);

    const renderPageButtons = () => {
        const buttons = [];

        for (let page = 1; page <= pageCount; page++) {
            buttons.push(
                <Button
                    key={page}
                    colorScheme={currentPage === page ? 'blue' : 'gray'}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </Button>
            );
        }

        return buttons;
    };

    return (
        <>
            <VStack gap={8}>
                {currentPageHotels.map((hotel: any) => (
                    <HotelCard
                        key={hotel.name}
                        hotelData={hotel}
                    />
                ))}

                {pageCount > 1 ? (
                    <Box>
                        <ButtonGroup>{renderPageButtons()}</ButtonGroup>
                    </Box>
                ) : null}
            </VStack>
        </>
    );
};
