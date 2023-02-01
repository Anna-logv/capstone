import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BookingProvider} from './contexts/bookingContext';
import { act } from 'react-dom/test-utils';

test('Test1 [static text)] : Renders the BookingForm button (text inside button tag)', async () => {
  act(() => {
    render(
      <BookingProvider>
        <BookingPage/>
      </BookingProvider>
      );
    })
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Test2 [initializeTimes] List of available times returns the correct expected value)', async () => {

  await act(() => {
    render(
      <BookingProvider>
        <BookingPage/>
      </BookingProvider>
      );
  })
  const secondOption=screen.getByTestId("booking-time-option-2");
  await act(() => {
  expect(secondOption).toBeInTheDocument();
  })
  const testTimeValue=secondOption.value;
  const inputTime=screen.getByLabelText(/Choose time/);
  
  await act(() => {
    fireEvent.change(inputTime,{target:{value:testTimeValue}});
  });

    expect(inputTime).toHaveValue(testTimeValue);

});

test('Test3 [updateTimes] Returns the same value that is provided in the state)', async  () => {

  const tomorrow = () => {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };
  const after_tomorrow = () => {
    let today = new Date();
    today.setDate(today.getDate());
    return today.toISOString().split('T')[0];
  };
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );

   })
  const dateInput=screen.getByLabelText(/Choose date/);
  //const inputTime=screen.getByLabelText(/Choose time/);
  await act(() => {
  fireEvent.change(dateInput,{target:{value:tomorrow()}});
  });

  const testTimeValue1_1=screen.getByLabelText(/Choose time/).textContent;

  await act(() => {
  fireEvent.change(dateInput,{target:{value:after_tomorrow()}});
  });

  const testTimeValue1_2=screen.getByLabelText(/Choose time/).textContent;

  await act(() => {
  fireEvent.change(dateInput,{target:{value:tomorrow()}});

  });
  const testTimeValue1_3=screen.getByLabelText(/Choose time/).textContent;
  expect( testTimeValue1_1).toBe(testTimeValue1_3);
});

