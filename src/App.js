import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
     <header>
      <Header/>
    </header>
    <main>
      <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
  );
}

export default App;
