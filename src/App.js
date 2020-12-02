import Nav from './components/Nav'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Home from './components/Home';
// import Send from './components/Send';
// import Navigator from './components/Navigator';
// import Heart from './components/Heart';

import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Switch>
            <Route exact path="/" />
           
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


