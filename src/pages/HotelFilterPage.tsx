import { Container, Flex, VStack, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { HotelFilter } from '../components/filter/HotelFilter';
import { HotelList } from '../components/hotelList/HotelList/HotelList';
import hotelData from './hotelsMock.json';

export const HotelFilterPage = () => {
    const [hotelList, setHotelList] = useState(hotelData?.hotels);

    const handleSetHotelList = (list: any) => {
        setHotelList(list);
    };

    return (
        <Container
            centerContent
            maxW={1280}
        >
            <Flex
                w="100%"
                gap={8}
                p={8}
            >
                <VStack
                    flex="3"
                    spacing={8}
                    align="flex-start"
                >
                    <HotelFilter
                        hotels={hotelData?.hotels}
                        onFilterChangeClick={handleSetHotelList}
                    />
                </VStack>

                <Box flex="9">
                    {hotelList.length !== 0 ? (
                        <HotelList hotels={hotelList} />
                    ) : (
                        <Text>Записей не найдено</Text>
                    )}
                </Box>
            </Flex>
        </Container>
    );
};
