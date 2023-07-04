import { ChakraProvider } from '@chakra-ui/react';
import { HotelFilterPage } from './pages/HotelFilterPage';

function App() {
    return (
        <ChakraProvider>
            <HotelFilterPage />
        </ChakraProvider>
    );
}

export default App;
