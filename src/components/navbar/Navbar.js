import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
const PP = "https://blogapp-backend-production.up.railway.app/images/";
const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/">HOME</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/write">WRITE</Link>
              </li>
              <li class="nav-item dropdown">
                {user ? (
                  <li className="topListItem link">
                    {" "}
                    <Link to="#" className="link" onClick={handleLogout}>
                      LOGOUT
                    </Link>
                  </li>
                ) : null}
                {user ? (
                  <>
                    <li className="topListItem link">
                      {" "}
                      <Link to="/settings" className="link">
                        SETTINGS
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="topListItem link">
                      {" "}
                      <Link to="/register" className="link">
                        REGISTER
                      </Link>
                    </li>
                    <li className="topListItem link">
                      {" "}
                      <Link to="/login" className="link">
                        LOGIN
                      </Link>
                    </li>
                  </>
                )}
              </li>
            </ul>
            <div className="topRight">
              <Link to="/settings">
                <img
                  src={PP + user?.user?.profilePic}
                  alt="Profile Pic"
                  className="topImg"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//    let res = await axios.get(api)
//    let user = res.data

// //  user : {
//       fn : "gag"
//       ln : "gag1"
//       yn : "gag2"
//       tn : "gag3"
// }

//    user.map((element)=>{
// console.log(user?.ln   it is checking that the key is present or not if the property ln exists then go inside and bring value rlse return

//  user && user.ln   it is checking that user exists or not(first)   if user exist -> then only get inside the "ln" key value);
// console.log(user?.ln);
// })
