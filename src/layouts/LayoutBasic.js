import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import {ConsoleBanner} from '../components/ConsoleBanner';


const LayoutBasic = ({routes}) => {
    useEffect(()=>{
        ConsoleBanner();
    },[]);

    return (
            <div className="App">
            <LoadRouters 
                routes = {routes}/>
            {//<div className="App-footer"/>
            }
        </div>
    );
}
 
export default LayoutBasic;

function LoadRouters({routes}){
  
    return (
        
        <Switch>
            {routes.map((route, index) =>(
              <Route 
                  key= {index}
                  path = {route.path}
                  exact = {route.exact}
                  component = {route.component}//no se van a renderizar mas componentes mediante rutas
              />
          ))}
        </Switch>
    );
  }