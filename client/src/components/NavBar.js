import { useNavigate } from "react-router-dom";

import { StyledNavList, StyledNavBar } from "../styles/StyledNavBar";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledNavBar>
        <div>stackoverflow</div>
        <div>about</div>
        <div>Products</div>
        <div>For Teams</div>
        <input type="text" placeholder="search"></input>
        <button onClick={() => navigate("/login")}>Log in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </StyledNavBar>
      <StyledNavList>
        {/* <li onClick={() => navigate("/questions")}>Questions</li>
        <li onClick={() => navigate("/tags")}>Tags</li>
        <li onClick={() => navigate("/users")}>Users</li> */}
        {/* <li
          role="presentation"
          onClick={() => navigate("/questions")}
          onKeyDown={handleKeyDown}
        >
          Questions
        </li> */}
        {/* <li
          role="presentation"
          onClick={() => navigate("/tags")}
          onKeyDown={this.handleKeyDown}
        >
          Tags
        </li> */}
        {/* <li
          role="presentation"
          onClick={() => navigate("/users")}
          onKeyDown={this.handleKeyDown}
        >
          Users
        </li> */}
        {/* <li
          role="presentation"
          onClick={() => navigate("/companies")}
          onKeyDown={this.handleKeyDown}
        >
          Companies
        </li> */}
      </StyledNavList>
    </div>
  );
};

export default NavBar;
