import useAuth from './../Hooks/useAuth';
import {Route,Redirect} from 'react-router-dom'
import { CircularProgress } from '@mui/material';

function PrivateRoute({ children, ...rest }) {

    let {loggedUser,loading} = useAuth();
    if(loading){
        return   <CircularProgress />
      }
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute