import React from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {logoutUser} from "../features/authSlice"
const NavBar = () => {
  const cartQuantity = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch=useDispatch()

 

const handleLogout=()=>{
  dispatch(logoutUser())
}

  console.log(auth);
  return (
    <nav className="nav-bar">
      <Link>
        <h2>online shopp</h2>
      </Link>
      <Link to={"/cart"}>
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartQuantity.cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
      <div>
        {!auth.username ? (
          <>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
          </>
        ) : (
          <>
            <Link to={"/"}><button onClick={handleLogout}  
                     style={{
                      color: "blue",
                      background: "white",
                      borderRadius: "5px",
                      height: "40px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      paddingLeft: "10px",
                      width: "200px",
                    }}>Logout</button></Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
