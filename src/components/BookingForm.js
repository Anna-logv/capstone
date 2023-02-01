import { useBookingContext} from '../contexts/bookingContext';
import { useFormik } from "formik";
import * as Yup from 'yup';
function BookingForm(props) {

      function today() {
        const date = new Date();
        let dd = date.getDate();
        let mm = date.getMonth() + 1; //January is 0!
        let yyyy = date.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return yyyy + '-' + mm + '-' + dd;
            //   return mm + '/' + dd + '/' +yyyy ;
       }
       const { availableTime, setAvailableTime } = useBookingContext();

       const formik = useFormik({
        initialValues: {
        date: today(),
        time: '',
        guests: '',
        occasion: '',
      },
      validationSchema: Yup.object({
        date: Yup.date()
            .min(today(),'Select today or later')
            .required('Select date'),
        time: Yup.string()
            .required('Select time'),
        guests: Yup.number()
            .min(1, 'Mast be from 1 to 10')
            .max(10, 'Mast be from 1 to 10')
            .required('Fill in number of guests'),
            occasion: Yup.string()
            .required('Select occasion'),
      }),
      onSubmit: (values,actions) => {
        //props.onSubmit({'date':date.value, 'time':time.value, 'guests':guests.value, 'occasion':occasion.value});
        props.onSubmit(values);
        actions.setSubmitting(false);
      },
    });
    return (
        <form method='post' id='form_booking' onSubmit={formik.handleSubmit}>
        <label>
                <span className="s-label">Choose date</span>

                <span className={(formik.touched.date && formik.errors.date) ? 's-input s-input-error' : 's-input'}>
                    <input type="date"  data-testid="booking-date" data-date-format="DD-YYYY-MM"
                        onChange={ (e) => {
                                setAvailableTime({type:'refresh', value:formik.values.date});
                                formik.handleChange(e);
                              }
                        }
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        id="date"
                    />
                    <span className='s-error'>{formik.errors.date}</span>
                </span>
        </label>
        <label>
                <span  className="s-label">Choose time</span>
                <span className={(formik.touched.time && formik.errors.time) ? 's-input s-input-error' : 's-input'}>

                <select data-testid="booking-time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                    id="time"
                >
                    <option value="" key="0"  data-testid="booking-time-option-0">---Select time---</option>
                    {
                        availableTime.map((t,index)=>{
                            return (
                                <option value={t} key={index+1}  data-testid={"booking-time-option-"+(index+1).toString()}>{t}</option>
                            )
                        })
                    }
                </select>
                <span className='s-error'>{formik.errors.time}</span>
                </span>
        </label>
        <label>
                <span className="s-label">Number of guests</span>
                <span className={(formik.touched.guests && formik.errors.guests) ? 's-input s-input-error' : 's-input'}>
                <input 
                    type="number" placeholder="1" min="1" max="10" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.guests}
                    id="guests"
                />
                <span className='s-error'>{formik.errors.guests}</span>
                </span>
        </label>
        <label>
                <span className="s-label">Occasion</span>
                <span  className={(formik.touched.occasion && formik.errors.occasion) ? 's-input s-input-error' : 's-input'}>
                <select 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occasion}
                    id="occasion"
                >
                    <option value="">---Select occasion---</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <span className='s-error'>{formik.errors.occasion}</span> 
                </span>
        </label>

        <div>
        <button 
            type="submit" 
            className="button"
        >Book Now</button>
        </div>
        </form>

    );
  }

  export default BookingForm;