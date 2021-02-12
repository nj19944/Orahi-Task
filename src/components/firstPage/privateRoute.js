import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    return (
        // <Route path='/home' component={Vartika} />
        <Route
            {...rest}    
            
            render={props =>
            
                localStorage.getItem('rememberMe') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/" }} />
                )
            }
        />
    );
}

export default PrivateRoute;