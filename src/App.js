import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home } from './pages/pHome';
import Tech from './pages/pTech';
import NotFound from './pages/pNotfound';

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tech/1" component={Tech} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
