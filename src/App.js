import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/mainpage/content/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
