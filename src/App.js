import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import routes from './config/Routes';
import AuthProvider from './provider/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
            <Switch>
              {routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </Switch>
          </Router>
        </AuthProvider>
    </>
  );
}

export default App;


function RouteWithSubRoutes(route) {
  
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

