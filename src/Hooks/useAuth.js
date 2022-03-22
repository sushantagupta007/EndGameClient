import { AuthContext } from './../AuthProvider/AuthProvider';
import {useContext} from 'react'; 


function useAuth() {
    return useContext(AuthContext);
  }

  export default useAuth