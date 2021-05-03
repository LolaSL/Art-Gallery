import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ArtGalleryPage } from './pages/ArtGalleryPage';
import AlertWithButton from './components/AlertWithButton';
import { Navbar } from './components/Navbar';
import CollectionPage from './pages/CollectionPage';
import { EventsPage } from './pages/EventsPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import ArtViewPage from './pages/ArtViewPage';





function App() {


  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <AlertWithButton />
          <Switch>
            <Route exact path='/' component={ArtGalleryPage} />
            <Route path='/collection' component={CollectionPage} />
            <Route path='/artView/:id' component={ArtViewPage} />
            <Route path='/events' component={EventsPage} />
            <Route path='/booking' component={BookingPage} />
            <Route path='/about' component={AboutPage} />
          </Switch>
        </div>
      </Router>

    </>

  );
}

export default App; 
