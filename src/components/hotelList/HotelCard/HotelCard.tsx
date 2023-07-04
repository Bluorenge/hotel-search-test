import {
    Card,
    Stack,
    CardBody,
    Heading,
    Button,
    Text,
    Box,
    Icon,
    HStack
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { numberDeclension } from '../../../utils/numberDeclension';

export const HotelCard = ({ hotelData }: { hotelData: any }) => {
    const {
        name,
        description,
        type,
        reviews_amount,
        address,
        min_price,
        stars,
    } = hotelData;

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            w="100%"
        >
            <Stack>
                <CardBody>
                    <Heading size="md">{name}</Heading>

                    <HStack
                        spacing={4}
                        mb={6}
                    >
                        <Box>
                            {[...Array(stars)].map((_, index) => (
                                <Icon
                                    as={StarIcon}
                                    key={index}
                                    color="yellow.500"
                                    boxSize={3}
                                />
                            ))}
                        </Box>

                        <Text>{type}</Text>
                        <Text>
                            {reviews_amount}{' '}
                            {numberDeclension(
                                reviews_amount,
                                'отзыв',
                                'отзыва',
                                'отзывов'
                            )}
                        </Text>
                        <Text>{address}</Text>

                        <Box
                            ms="auto"
                            textAlign="right"
                        >
                            <Text fontSize="2xl">{min_price} ₽</Text>
                            <Text fontSize="xs">Цена за 1 ночь</Text>
                        </Box>
                    </HStack>

                    <HStack spacing={4}>
                        <Text py="2">{description}</Text>

                        <Button
                            variant="solid"
                            colorScheme="blue"
                            flexShrink={0}
                        >
                            Забронировать
                        </Button>
                    </HStack>
                </CardBody>
            </Stack>
        </Card>
    );
};
