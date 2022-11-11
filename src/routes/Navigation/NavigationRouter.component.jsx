import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as SiteLogo } from "../../assets/icon.svg";
import "./NavigationRouter.component.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utility";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // making sure signout is getting triggered based on user cconetxt and not just from firebase signout util

  const signOutHandler = async () => {
    await signOutUser();
    // since we have successfully called signout method , set current user to null
    setCurrentUser(null);
  };
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
