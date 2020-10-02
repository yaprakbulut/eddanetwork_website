import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Biography from './Pages/Biography';
import Interiors from './Pages/Interiors';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Inspirations from './Pages/Inspirations';
import Default from './Pages/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';


import './App.css';

function App() {
  return (
    
    <div className="App">
    
    {/* common navbar for all pages */}
      <Navbar />
    {/*end of common navbar for all pages */}

     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/interiors" component={Interiors} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/inspirations" component={Inspirations} />
        <Route  component={Default} />
     </Switch>


    {/* common footer for all pages */}
        <Footer />
    {/*end of common footer for all pages */}
     
    </div>
   
  );
}

export default App;
