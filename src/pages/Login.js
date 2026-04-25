
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />

      <button>Login</button>

      <p>
        Don't have account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;