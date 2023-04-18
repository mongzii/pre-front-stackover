import { Link } from "react-router-dom";

import { StyledLeftBar } from "../styles/StyledLeftSide";

const LeftSide = () => {
  return (
    <>
      <StyledLeftBar>
        <Link to="/">
          <div>Home</div>
        </Link>
        <div>PUBLIC</div>
        <Link to="/questions">
          <div>Questions</div>
        </Link>
        <Link to="/tags">
          <div>Tags</div>
        </Link>
        <Link to="/users">
          <div>Users</div>
        </Link>
        <Link to="/companies">
          <div>Companies</div>
        </Link>
      </StyledLeftBar>
    </>
  );
};

export default LeftSide;
