import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Add from './components/Add';
import Gallery from './components/Gallery';
import PictureDetails from './components/pictureDetails';
import Footer from './components/footer';


function App() {

  return (
    <Router>
      <div>
        <Nav />
         <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/picture" component={Gallery} exact  />
          <Route path="/picture/:id" component={PictureDetails} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
