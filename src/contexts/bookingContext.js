import {createContext, useContext, useEffect, useReducer, useState} from "react";

const BookingContext = createContext(undefined);

export const BookingProvider=({children}) => {

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
    function initializeTimes (){
        //const today = (date=='') ? new Date() : date;
        const curr_list=localStorage.getItem(selectedDate);
        let external_times=[];

        if (!curr_list) {
          const date=new Date(selectedDate);
          external_times=fetchAPI(date);
          localStorage.setItem(selectedDate, JSON.stringify({data:external_times}));
          //console.log("N",external_times);
        } else {
          external_times=JSON.parse(curr_list).data;
          //console.log("S",external_times);
        }
        //console.log(external_times.data);
        return external_times;
      }

      function updateTimes(state, action){
          if (action.type==='delete') {
            const new_external_tames=[];
            state.map((t)=>{
                if (t!==action.value) new_external_tames.push(t);
            });
            localStorage.setItem(selectedDate, JSON.stringify({data:new_external_tames}));
            return new_external_tames;
          } else if (action.type==='refresh') {
              //const date=new Date(action.value);
              //console.log(action.value)
              setSelectedDate(action.value);
              return initializeTimes();
          }

      }

    const [selectedDate, setSelectedDate] = useState(today());
    const [availableTime, setAvailableTimeProvider] = useReducer(updateTimes,[], initializeTimes);

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
