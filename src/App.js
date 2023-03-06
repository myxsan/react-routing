import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
          {/* <Route path="/user/:id" component={User} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
