import { fireEvent, render, screen } from '@testing-library/react';
import Select from 'react'
import BookingForm from './components/BookingForm';
import { BookingProvider} from './contexts/bookingContext';



test('Test1 [static text)] : Renders the BookingForm button (text inside button tag)', () => {
  //render(<BookingForm />);
  render(
    <BookingProvider>
      <BookingForm />
    </BookingProvider>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Test2 [initializeTimes] List of available times returns the correct expected value)', () => {
  
  const testTimeValue="18:00";

  render(
    <BookingProvider>
      <BookingForm />
    </BookingProvider>
  );
  const inputTime=screen.getByLabelText(/Choose time/);
  fireEvent.change(inputTime,{target:{value:testTimeValue}});

  expect(inputTime).toHaveValue(testTimeValue);

});

test('Test3 [updateTimes] Returns the same value that is provided in the state)', () => {

  const tomorrow = () => {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };
  
  const testDateValue = tomorrow();
  const testTimeValue="19:00";
  const testGuestsValue="2";
  const testOccasionValue="Birthday";

  render(
    <BookingProvider>
      <BookingForm />
    </BookingProvider>
  );
  const dateInput=screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInput,{target:{value:testDateValue}});

  const inputTime=screen.getByLabelText(/Choose time/);
  fireEvent.change(inputTime,{target:{value:testTimeValue}});
  
  expect(inputTime).toHaveValue(testTimeValue);

  const questsInput=screen.getByLabelText(/Number of guests/);
  fireEvent.change(questsInput,{target:{value:testGuestsValue}});

  const occasionInput=screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput,{target:{value:testOccasionValue}});

  const btn=screen.getByRole("button");
  fireEvent.click(btn);
  
  expect(inputTime).not.toHaveValue(testTimeValue);

});
