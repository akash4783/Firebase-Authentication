
import './App.css';
import Login from './component/Login';
import SignUp from './component/Signup';
import {Routes,Route} from "react-router-dom"
import { Container,Col,Row } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './component/ProtectedRoute';
import Home from './component/Home';

function App() {
  return (
  <Container>
    <Row>
      <Col>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/home" element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </UserAuthContextProvider>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
