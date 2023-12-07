export default function UserProfile({ isLogged }) {
  if (isLogged) {
    return (
      <div className="">
        <button className="btn btn-outline-primary mx-2">Login</button>
        <button className="btn btn-outline-info">Signup</button>
      </div>
    );
  }
  return <button className="btn btn-outline-info mx-2">Mr.xxx</button>;
}

UserProfile.defaultProps = {
  isLogged: false,
};

/**
 * if-> used for mainly returing element or component based on condition
 * && - > used for showcase element or component based on condition
 * ?: ->either one show
 */
