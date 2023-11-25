import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';
import PrivateRoute from '../../components/PrivateRouter';
import Products from './Products';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Route>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Category CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Route>
      </div>
    </div>
  );
};

export default Admin;