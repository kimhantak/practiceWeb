import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
