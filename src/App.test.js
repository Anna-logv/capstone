import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BookingProvider} from './contexts/bookingContext';
import { act } from 'react-dom/test-utils';

const myday = (d) => {
  let date
  switch(d){
    case 'yesterday':
      date = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
      break;
    case 'tomorrow':
      date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      break;
    case 'after_tomorrow':
      date = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
      break;
    default:
      date = new Date();
  }
  let dd = date.getDate();
  let mm = date.getMonth() + 1; //January is 0!
  let yyyy = date.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return yyyy + '-' + mm + '-' + dd;
};

test('Test1 [static text] : Renders the BookingForm button (text inside button tag)', async () => {
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
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );

   })
  const dateInput=screen.getByLabelText(/Choose date/);
  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('tomorrow')}});
  });

  const testTimeValue1_1=screen.getByLabelText(/Choose time/).textContent;

  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('after_tomorrow')}});
  });

  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('tomorrow')}});
  });
  const testTimeValue1_3=screen.getByLabelText(/Choose time/).textContent;
  expect( testTimeValue1_1).toBe(testTimeValue1_3);
});
q
test('Test4 [Validation] date field)', async  () => {
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );
   })

   const button = screen.getByText("Book Now");
   const dateInput=screen.getByLabelText(/Choose date/);

   let errorMessages = screen.getByLabelText(/Choose date/).parentElement.getElementsByClassName('s-error').length;
   expect(errorMessages).toBe(0);// beginning

  await act(() => {
    fireEvent.change(dateInput,{target:{value:''}});
    fireEvent.click(button);
  });

  errorMessages = screen.getByLabelText(/Choose date/).parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); //empty

  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('tomorrow')}});
    fireEvent.click(button);
  });

  errorMessages = screen.getByLabelText(/Choose date/).parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0);//tomorrow

  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('yesterday')}});
    fireEvent.click(button);
  });

  errorMessages = screen.getByLabelText(/Choose date/).parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1);//yesterday

  await act(() => {
    fireEvent.change(dateInput,{target:{value:myday('today')}});
    fireEvent.click(button);
  });

  errorMessages = screen.getByLabelText(/Choose date/).parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0);//today
});

test('Test5 [Validation] time field)', async  () => {
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );
   })

   const button = screen.getByText("Book Now");
   const timeInput=screen.getByLabelText(/Choose time/);

   let errorMessages = timeInput.parentElement.getElementsByClassName('s-error').length;
   expect(errorMessages).toBe(0); //beginning

  await act(() => {
    fireEvent.change(timeInput,{target:{value:''}});
    fireEvent.click(button);
  });

  errorMessages = timeInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1);//empty

  let testTimeValue=screen.getByTestId("booking-time-option-2").value;
  await act(() => {
    fireEvent.change(timeInput,{target:{value:testTimeValue}});
  });
  errorMessages = timeInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0);//second option

  testTimeValue=screen.getByTestId("booking-time-option-0").value;
  await act(() => {
    fireEvent.change(timeInput,{target:{value:testTimeValue}});
  });
  errorMessages = timeInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); // empty option

  testTimeValue=screen.getByTestId("booking-time-option-1").value;
  await act(() => {
    fireEvent.change(timeInput,{target:{value:testTimeValue}});
  });
  errorMessages = timeInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0); // first option
});

test('Test6 [Validation] guests field)', async  () => {
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );
   })

   const button = screen.getByText("Book Now");
   const guestsInput=screen.getByLabelText(/Number of guests/);

   let errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
   expect(errorMessages).toBe(0); // beginning

  await act(() => {
    fireEvent.change(guestsInput,{target:{value:0}});
    fireEvent.click(button);
  });

  errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); // 0 guests

  await act(() => {
    fireEvent.change(guestsInput,{target:{value:5}});
    fireEvent.click(button);
  });

  errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0); // 5 guests

  await act(() => {
    fireEvent.change(guestsInput,{target:{value:11}});
    fireEvent.click(button);
  });

  errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); // 11 guests

  await act(() => {
    fireEvent.change(guestsInput,{target:{value:1}});
    fireEvent.click(button);
  });

  errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0); // 1 guests


  await act(() => {
    fireEvent.change(guestsInput,{target:{value:'test'}});
    fireEvent.click(button);
  });

  errorMessages = guestsInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); // 'test' guests
});

test('Test7 [Validation] Occasion field)', async  () => {
  await act(() => {
      render(
        <BookingProvider>
          <BookingPage/>
        </BookingProvider>
        );
   })

   const button = screen.getByText("Book Now");
   const occasionInput=screen.getByLabelText("Occasion");

   let errorMessages = occasionInput.parentElement.getElementsByClassName('s-error').length;
   expect(errorMessages).toBe(0); // beginning

  let testOcValue=screen.getByTestId("occasion-option-2").value;
  await act(() => {
    fireEvent.change(occasionInput,{target:{value:testOcValue}});
    fireEvent.click(button);
  });
  errorMessages = occasionInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(0);// Birthday

  await act(() => {
    fireEvent.change(occasionInput,{target:{value:''}});
    fireEvent.click(button);
  });
  errorMessages = occasionInput.parentElement.getElementsByClassName('s-error').length;
  expect(errorMessages).toBe(1); // Empty

});
