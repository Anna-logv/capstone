import {createContext, useContext, useReducer} from "react";

const BookingContext = createContext(undefined);

export const BookingProvider=({children}) => {
    function initializeTimes (){
        const times_array=[];
        for (let i=17; i<=22; i++) {
            times_array.push( {time: i+":00", free:true});
        }
        return times_array;
      }
      function updateTimes(state, used){
        return state.map((t)=>{
            if (t.time===used) t.free=false;
            return t;
        });
      }

    //const [availableTime, setAvailableTime] = useReducer(updateTimes,timeslist,initializeTimes);
    const [availableTime, setAvailableTimeProvider] = useReducer(updateTimes,[], initializeTimes);
    return (
        <BookingContext.Provider
          value={{
            availableTime,
            setAvailableTime: (used) => setAvailableTimeProvider(used),
          }}
        >
          {children}
        </BookingContext.Provider>
      );
}
export const useBookingContext=()=>useContext(BookingContext);
