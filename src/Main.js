import { Route, Routes,useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';
import { useBookingContext} from './contexts/bookingContext';
function Main() {
  const { setAvailableTime } = useBookingContext();
  const navigate = useNavigate();
  const submitAPI = function(formData) {
    return true;
  };

  function sendFormData(formData) {
    let submitResult=false;
    try {
      submitResult=submitAPI(formData);
      } catch(e) {
        alert('Error: cannot submit data. Try again later');
        return;
      }
      if (!submitResult) {
        alert('Error: cannot save data. Try again later');
        return;
      }
      setAvailableTime({type:'delete', value:formData.time});
      navigate("/confirmation");
      return;
  }
  return (
  
    <Routes> 
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/booking" element={<BookingPage  onSubmit={sendFormData}/>}></Route>
      <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
      <Route path="*" element={<HomePage/>}></Route>
  </Routes>
  );
}

export default Main;