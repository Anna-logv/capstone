import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import { BookingProvider} from './contexts/bookingContext';
function Main() {

  return (
  <BookingProvider>
    <Routes> 
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/booking" element={<BookingPage/>}></Route>
      <Route path="*" element={<HomePage/>}></Route>
  </Routes>
 </BookingProvider>
  );
}

export default Main;