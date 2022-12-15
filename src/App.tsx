import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UsersList } from './libs/users/pages/users';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from 'react-router-dom';
import { EditUser } from './libs/users/pages/edit-user';
import { Cache } from './libs/users/pages/cache';
import { HomePage } from './libs/users/pages/home-page';

function App() {
  return (
    <Router>
      <div className="main-container">
        {/* NAVIGATION */}
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-element">
              <NavLink exact activeClassName="selected" to="/">
                Home
              </NavLink>
            </li>
            <li className="navigation-list-element">
              <NavLink exact activeClassName="selected" to="/users">
                Users
              </NavLink>
            </li>
            <li className="navigation-list-element">
              <NavLink exact activeClassName="selected" to="/cache">
                Cache
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* CONTENT */}
        <div className="content-container">
          <Switch>
          <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/users">
              <UsersList />
            </Route>
            <Route exact path="/edit/:id">
              <EditUser />
            </Route>
            <Route exact path="/cache">
              <Cache />
            </Route>
          </Switch>
        </div>
      </div>
      
      <ToastContainer />
    </Router>
  );
}

export default App;
