import { useNavigate } from "react-router-dom";

// import { StyledNavList, StyledNavBar } from "../styles/StyledNavBar";
import { StyledNavBar } from "../styles/StyledNavBar";
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
      {/* <StyledNavList>
      </StyledNavList> */}
    </div>
  );
};

export default NavBar;
