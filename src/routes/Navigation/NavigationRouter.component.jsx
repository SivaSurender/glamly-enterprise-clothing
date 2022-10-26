import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as SiteLogo } from "../../assets/icon.svg";
import "./NavigationRouter.component.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SiteLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
