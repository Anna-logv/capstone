import {useState,useEffect} from 'react';
import { useBookingContext} from '../contexts/bookingContext';
function BookingForm(props) {


      function today() {
        const date = new Date();
        let dd = date.getDate();
               var mm = date.getMonth() + 1; //January is 0!
               var yyyy = date.getFullYear();
               if (dd < 10) {
                 dd = '0' + dd;
               }
               if (mm < 10) {
                 mm = '0' + mm;
               }
               return yyyy + '-' + mm + '-' + dd;
                 //   return mm + '/' + dd + '/' +yyyy ;
       }


    const { availableTime, setAvailableTime } = useBookingContext();

    const [date, setDate] = useState({value:today(), touched:false});
    const [time, setTime] = useState({value:"", touched:false});
    const [guests, setGuests] = useState({value:"", touched:false});
    const [occasion, setOccasion] = useState({value:"", touched:false});
    useEffect(()=>{
        //localStorage.clear();
        setDate({value:today(), touched:false});
        setAvailableTime({type:"refresh", value:today()});
    },[]);
    const getIsFormValid = () => {
        return (
            date.value.toString()!=='' &&
            time.value.toString()!=='' &&
            Number(guests.value) > 0 &&
            Number(guests.value) <= 10 &&
            occasion.value.toString()!==''
        );
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        return;
      };
    return (
        <form method='post' id='form_booking' onSubmit={handleSubmit}>
        <label>
                <span className="s-label">Choose date</span>
                <span className="s-input">
                    <input type="date"  data-testid="booking-date" data-date-format="DD-YYYY-MM"
                            value={date.value} 
                            onChange={
                                (e)=>{
                                    setDate({...date, value:e.target.value});
                                    setAvailableTime({type:"refresh", value:e.target.value});
                                }
                            }
                            onBlur={(e)=>setDate({...date, touched:true})}
                    />
                    {date.touched && date.value === '' && <span className='s-error'>Select date</span> } 
                </span>
        </label>
        <label>
                <span  className="s-label">Choose time</span>
                <span className="s-input">
                <select  value={time.value}  data-testid="booking-time"
                            onChange={
                                (e)=>{
                                    setTime({...time, value:e.target.value});
                                }
                            }
                            onBlur={(e)=>setTime({...time, touched:true})}
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
                {time.touched && time.value.toString() === '' && <span className='s-error'>Select time</span> } 
                </span>
        </label>
        <label>
                <span className="s-label">Number of guests</span>
                <span className="s-input">
                <input 
                    type="number" placeholder="1" min="1" max="10" 
                    value={guests.value} 
                    onChange={(e)=>setGuests({...guests, value:e.target.value})}
                    onBlur={(e)=>setGuests({...guests, touched:true})}
                />
                {guests.touched && (Number(guests.value)<=0 || Number(guests.value)>10) && <span className='s-error'>Mast be from 1 to 10</span> } 
                </span>
        </label>
        <label>
                <span className="s-label">Occasion {occasion.value}</span>
                <span className="s-input">
                <select 
                    value={occasion.value} 
                    onChange={(e)=>setOccasion({...occasion, value:e.target.value})}
                    onBlur={(e)=>setOccasion({...occasion, touched:true})}
                >
                    <option value="">---Select occasion---</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {occasion.touched && occasion.value === '' && <span className='s-error'>Select occasion</span> } 
                </span>
        </label>

        <div>
        <button 
            type="submit" 
            disabled={!getIsFormValid()} 
            className="button"
            onClick={(e)=>props.onSubmit({'date':date.value, 'time':time.value, 'guests':guests.value, 'occasion':occasion.value})}
        >Book Now</button>
        </div>
        </form>

    );
  }

  export default BookingForm;