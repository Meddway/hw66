import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <NavLink to="/" className="nav-link">Calorie Tracker</NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Toolbar;
