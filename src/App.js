import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {useEffect} from 'react';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import { BookingProvider} from './contexts/bookingContext';
function App() {
  useEffect(()=>{
    localStorage.clear();
  })
  return (
    <BrowserRouter>
    <BookingProvider>
     <header>
      <Header/>
    </header>
    <main>
      <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
