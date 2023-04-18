// import { useNavigate } from "react-router-dom";

import {
  StyledFootBar,
  BigMenu,
  FootMenu1,
  FootMenu2,
  FootMenu3,
  FootMenu4,
  FootMenu5,
} from "../styles/StyledFootBar";

const FootBar = () => {
  // const navigate = useNavigate();

  return (
    <div>
      {/* <StyledFootBar> */}
      <StyledFootBar>
        <BigMenu>
          <FootMenu1>
            {/* <ul
                role="presentation"
                onClick={() => navigate("/stackoverfoot")}
                onKeyDown={this.handleKeyDown}
              >
                STACK OVERFLOW
              </ul> */}
            {/* <ul onClick={() => navigate("/stackoverfoot")}>STACK OVERFLOW</ul> */}
            <ol>
              <ul>Questions</ul>
              <ul>Help</ul>
            </ol>
          </FootMenu1>
          <FootMenu2>
            {/* <ul
                role="presentation"
                onClick={() => navigate("/productsfoot")}
                onKeyDown={this.handleKeyDown}
              >
                PRODUCTS
              </ul> */}
            {/* <ul onClick={() => navigate("/productsfoot")}>PRODUCTS</ul> */}
            <ol>
              <ul>Teams</ul>
              <ul>Advertising</ul>
              <ul>Collectives</ul>
              <ul>Talent</ul>
            </ol>
          </FootMenu2>
          <FootMenu3>
            {/* <ul
                role="presentation"
                onClick={() => navigate("/companyfoot")}
                onKeyDown={this.handleKeyDown}
              >
                COMPANY
              </ul> */}
            {/* <ul onClick={() => navigate("/companyfoot")}>COMPANY</ul> */}
            <ol>
              <ul>About</ul>
              <ul>Press</ul>
              <ul>Work Here</ul>
              <ul>Legal</ul>
              <ul>Privacy Policy</ul>
              <ul>Terms of Service</ul>
              <ul>Contact Us</ul>
              <ul>Cookie Settings</ul>
              <ul>Cookie Policy</ul>
            </ol>
          </FootMenu3>
          <FootMenu4>
            {/* <ul
                role="presentation"
                onClick={() => navigate("/stacknetworkfoot")}
                onKeyDown={this.handleKeyDown}
              >
                STACK EXCHANGE NETWORK
              </ul> */}
            {/* <ul onClick={() => navigate("/stacknetworkfoot")}>STACK EXCHANGE NETWORK</ul> */}
            <ol>
              <ul>Technology</ul>
              <ul>Culture & recreation</ul>
              <ul>Life & arts</ul>
              <ul>Science</ul>
              <ul>Professional</ul>
              <ul>Business</ul>
              <ul>API</ul>
              <ul>Data</ul>
            </ol>
          </FootMenu4>

          <FootMenu5>
            <ul>Blog</ul>
            <ul>Fackbook</ul>
            <ul>Twitter</ul>
            <ul>Linkedln</ul>
            <ul>Instagram</ul>
          </FootMenu5>
        </BigMenu>
        <div>Site design logo 2023 Stack Exchange Inc; user contributions</div>
        <div>licensed under CC BY-SA. rev 2023.4.14.43390</div>
        {/* </StyledFootBar> */}
      </StyledFootBar>
    </div>
  );
};

export default FootBar;
