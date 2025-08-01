import { auth } from '../../firebase';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/login" />;
};