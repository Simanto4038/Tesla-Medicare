import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainBody from './Components/Main/MainBody';
import Navigationbar from './Components/Navbar/Navigationbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <Switch>
        <Route exact path='/'>
          <MainBody/>
        </Route>
        <Route path='/home'>
          <MainBody/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
