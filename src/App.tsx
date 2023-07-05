import { ChakraProvider } from '@chakra-ui/react';
import { HotelFilterPage } from './pages/HotelFilterPage';
import { HotelsStoreProvider } from './store/HotelsStoreProvider';

function App() {
    return (
        <ChakraProvider>
            <HotelsStoreProvider>
                <HotelFilterPage />
            </HotelsStoreProvider>
        </ChakraProvider>
    );
}

export default App;
