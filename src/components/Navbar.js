import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    alert("Logged Out");

    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#eee",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/create">
        Create Post
      </Link>

      <Link to="/login">
        Login
      </Link>

      <Link to="/register">
        Register
      </Link>

      <Link to="/edit">
        Edit Post
      </Link>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;