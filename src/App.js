import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import CreateResipe from './pages/CreateResipe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/create-recipe' exact component={CreateResipe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
