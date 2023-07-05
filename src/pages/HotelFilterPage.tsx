import { Container, Flex, VStack, Box } from '@chakra-ui/react';

import { HotelFilter } from '../components/filter/HotelFilter';
import { HotelList } from '../components/hotelList/HotelList/HotelList';

export const HotelFilterPage = () => {
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
                    <HotelFilter />
                </VStack>

                <Box flex="9">
                    <HotelList />
                </Box>
            </Flex>
        </Container>
    );
};
