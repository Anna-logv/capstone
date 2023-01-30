import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
function Main() {
  return (
  <Routes> 
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/booking" element={<BookingPage/>}></Route>
    <Route path="*" element={<HomePage/>}></Route>
 </Routes>
  );
}

export default Main;