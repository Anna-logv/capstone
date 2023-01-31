import {createContext, useContext, useReducer} from "react";

const BookingContext = createContext(undefined);

export const BookingProvider=({children}) => {
    function initializeTimes (){
        return [
          {time:"17:00", free:true},
          {time:"18:00", free:true},
          {time:"19:00", free:true},
          {time:"20:00", free:true},
          {time:"21:00", free:true},
          {time:"22:00", free:true}
      ]
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
