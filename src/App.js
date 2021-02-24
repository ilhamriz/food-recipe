import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import CreateResipe from './pages/CreateResipe';
import Footer from './components/Footer';
import AllRecipe from './pages/AllRecipe';
import Recipe from './pages/Recipe';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/create-recipe' exact component={CreateResipe}/>
          <Route path='/all-recipe' exact component={AllRecipe}/>
          <Route path='/recipe' exact component={Recipe}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
