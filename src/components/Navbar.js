import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "space-around", 
      background: "black", 
      padding: "15px" 
    }}>
      
      <Link to="/" style={{color: "white"}}>Login</Link>
      <Link to="/signup" style={{color: "white"}}>Signup</Link>
      <Link to="/dashboard" style={{color: "white"}}>Dashboard</Link>
      <Link to="/upload" style={{color: "white"}}>Upload</Link>
      <Link to="/reminder" style={{color: "white"}}>Reminder</Link>

    </div>
  );
}

export default Navbar;