import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp/SignUp';
import AuthProvider from './AuthProvider/AuthProvider';
import SignIn from './Component/SignIn/SignIn';
import Appointment from './Component/Appointment/Appointment';
import PrivateRoute from './PrivateRoute/PrivarteRoute';
import Home from './Component/Home/Home';
import Payment from './Component/Payment/Paymet';
import UserService from './Component/UserService/UserService';
import Footer from './Component/Footer/Footer';
import Review from './Component/Review/Review';
import ReviewCard from './Component/ReviewCard/ReviewCard';
import Admin from './Component/Admin/Admin';
import AdminReview from './Component/AdminReview/AdminReview';
import HomePage from './Pages/Home/HomePage';

import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch> 
          <Route path="/home"> <HomePage></HomePage></Route>
          <Route path="/signup">  <SignUp></SignUp> </Route>
          <Route path="/signin"> <SignIn></SignIn></Route>
          <Route path="/bill"> <Payment></Payment></Route>
          <Route path='/userService'> <UserService></UserService></Route>
          <Route path="/review"> <Review></Review></Route>
          <Route path="/admin"> <Admin></Admin></Route>
          
          <Route path="/reviewCard"> <ReviewCard></ReviewCard></Route>
          <Route path="/footer"> <Footer></Footer></Route>

          <PrivateRoute path="/appointment"> <Appointment></Appointment></PrivateRoute>
        </Switch>
        
    
      </Router>
    
    </AuthProvider>
  );
}

export default App;
