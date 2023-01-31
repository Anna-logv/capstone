import BookingForm from "./components/BookingForm"

function BookingPage(props) {
    return (
      <div  className="main-block">
        <h1>Reserve a table</h1>
        
          <BookingForm />

      </div>
    );
  }
  
  export default BookingPage;