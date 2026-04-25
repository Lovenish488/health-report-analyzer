import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signup</h1>

      <input type="text" placeholder="Enter Name" /><br /><br />
      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />

      <button>Signup</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;