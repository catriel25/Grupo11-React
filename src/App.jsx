import { Switch, Route } from 'react-router-dom';

import SideBar from './components/SideBar';

import './App.css';
import HomePage from './pages/Home';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import Genres from './pages/Genres';
import NotFound from './pages/NotFound';
import Products from './components/Products';


function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/users" component={UserPage} />
        <Route path="/genres" component={Genres} />
        <Route path="/products/:id" component={Products}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
