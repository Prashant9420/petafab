import './App.css';
import Navbar from './components/navbar/navbar';
import background from '../src/assets/asset18.jpeg'
import Intro from './components/intro/intro'
import Cards from './components/cards/cards'
import Outro from './components/outro/outro'
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <img src={background} className='bgImg' alt="bg"/>
      <Navbar/>
      <Intro/>
      <Cards/>
      <Outro/>
      <Footer/>
    </div>
  );
}

export default App;
