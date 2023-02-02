import {createContext, useContext, useReducer, useState} from "react";

const BookingContext = createContext(undefined);

export const BookingProvider=({children}) => {

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

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
    function initializeTimes (date_selected){
        const curr_list=localStorage.getItem(date_selected);
        let external_times=[];

        if (!curr_list) {
          const date=new Date(date_selected);
          external_times=fetchAPI(date);
          //console.log('N', date_selected, external_times);
          localStorage.setItem(date_selected, JSON.stringify({data:external_times}));
        } else {
          external_times=JSON.parse(curr_list).data;
          //console.log('S', date_selected, external_times);
        }
        return external_times;
      }

      function updateTimes(state, action){
          if (action.type==='delete') {
            const new_external_tames=[];
            for (let i=0;i<state.length; i++) {
              if (state[i]!==action.value) new_external_tames.push(state[i]);
            }
            localStorage.setItem(selectedDate, JSON.stringify({data:new_external_tames}));
            return new_external_tames;
          } else if (action.type==='refresh') {
              setSelectedDate(action.value);
              //console.log('reinit date - '+action.value);
              return initializeTimes(action.value);
          }

      }

    const [selectedDate, setSelectedDate] = useState(today());
    const init_timelist=initializeTimes(today());
    const [availableTime, setAvailableTimeProvider] = useReducer(updateTimes, init_timelist);

    return (
        <BookingContext.Provider
          value={
            {
              availableTime,
              setAvailableTime: (action) => setAvailableTimeProvider(action)
            }
          }
        >
          {children}
        </BookingContext.Provider>
      );
}
export const useBookingContext=()=>useContext(BookingContext);
