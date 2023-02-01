import { Link } from 'react-router-dom';
function ConfirmedBooking (props) {
    return (
        <div  className="main-block">
            <h1>Reservation confirmation</h1>
            <div className="b-confirmation">
            Booking has been confirmed! <br/>
            <Link to="/">Back to the homepage</Link>
            </div>
            
        </div>
    )
  }

  export default ConfirmedBooking ;