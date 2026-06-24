import { Link } from "react-router-dom";

/**
 * Welcome
 * First screen of the app. Offers account creation or login.
 */
export default function Welcome() {
  return (
    <div className="welcome-screen">
      <div className="welcome-screen__art" aria-hidden="true" />

      <div className="welcome-screen__content">
        <h1 className="welcome-screen__title">Welcome to PopX</h1>
        <p className="welcome-screen__subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <Link to="/signup" className="btn btn-primary welcome-screen__cta">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-outline welcome-screen__cta">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
