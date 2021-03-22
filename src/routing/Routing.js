import React,{useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavContext from "../shared/nav/context/navContext";

//layout
import FloatNav from '../shared/floatNav/FloatNav';
import Nav from '../shared/nav/Nav';
import Footer from '../shared/footer/Footer';

//pages
import ScreenSupport from '../screens/others/screenSupport/ScreenSupport';
import Home from '../screens/home/Home';
import Blog from '../screens/blog/Blog';
import Section from '../screens/section/Section';
import Article from '../screens/article/Article';
import Portfolio from '../screens/portfolio/Portfolio';
import Service from '../screens/service/Service';
import ContactUs from '../screens/contact/Contact';

//other pages
import PageNotFound from '../screens/others/PageNotFound/PageNotFound';
import Privacy from '../screens/others/privacy/Privacy';
import Imprint from '../screens/others/imprint/Imprint';
import Conditions from '../screens/others/conditions/Conditions';

const Routing = () => {

  const navContext =useContext(NavContext);
  const{isMobile}=navContext;

  return (
    <Router>
      <FloatNav/>
      <Nav/>
        <Switch>
          {isMobile?
            <Route exact path='/' component={Home}/>
          : <Route exact path='/' component={Home}/>
          }
          
    
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/section/:name' component={Section} />
          <Route exact path='/article/:slug' component={Article} />

          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/service' component={Service}/>
          <Route exact path='/contact' component={ContactUs} /> 
          {/* other pages */}
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/imprint' component={Imprint} />
          <Route exact path='/conditions' component={Conditions} /> 
          {/* Admin */}
          {/* <PrivateRoute exact path='/messages' component={Messages} />
          <PrivateRoute exact path='/section' component={AdminSection} />
          <PrivateRoute exact path='/new-section' component={AddSection} />
          <PrivateRoute exact path='/edit-section' component={EditSection} />
          <PrivateRoute exact path='/article' component={AdminArticle} />
          <PrivateRoute exact path='/new-article' component={AddArticle} />
          <PrivateRoute exact path='/edit-article' component={EditArticle} />
          <PrivateRoute exact path='/images' component={AdminImages} /> */}

          <Route path='*' component={PageNotFound} />
        </Switch>
       <Footer/>
    </Router>
  );
};

export default Routing;
