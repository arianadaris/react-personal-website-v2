import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router basename="/">
      <div className="root">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
