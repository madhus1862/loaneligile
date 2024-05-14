import './App.css'; 
import LoginForm from './Components/LoginForm/LoginForm'; 
import {
  BrowserRouter as Router,Routes,Route
} from 'react-router-dom';
import RegisterForm from './Components/LoginForm/RegisterForm';
import Homepage from './Components/Home/Homepage';
import loan from './Components/Loan/loan';
import Form from './Components/Form/form';
import TravelForm from './Components/Form/travel';
import BusinessLoanForm from './Components/Form/business';
import EducationLoanForm from './Components/Form/education';
import MedicalLoanForm from './Components/Form/medical';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/login' Component={LoginForm} />
      <Route exact path='/register' Component={RegisterForm} />
      <Route exact path='/' Component={Homepage} />
      <Route exact path='/loan' Component={loan} />           
      <Route exact path='/form' Component={Form} />           
      <Route exact path='/travelform' Component={TravelForm} />           
      <Route exact path='/BusinessLoanForm' Component={BusinessLoanForm} />           
      <Route exact path='/EducationLoanForm' Component={EducationLoanForm} />           
      <Route exact path='/MedicalLoanForm' Component={MedicalLoanForm} />           
      <Route exact path='/service' Component={Service} />           
      <Route exact path='/contact' Component={Contact} />           

      </Routes>
    </Router>
  );
}

export default App;
