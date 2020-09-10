import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {routeList} from './router_list';
function IndexRoute(){
    return(
        <Switch>
        {
            routeList.map((item,index)=>{
                return (
                    <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        render={item.render}
                     />
                )
            })
        }
        </Switch>
    );
}

export default IndexRoute;