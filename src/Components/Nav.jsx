import { NavLink } from "react-router-dom";
import { NavigationStyle } from "../StyledComponents/ComponentStyles";

export const Nav = () => {
  return (
    <NavigationStyle>
      <ul>
        <li>
          <NavLink to="/about">
            <button className="link menu-opt1">About</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <button className="link menu-opt2">blog</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/works">
            <button className="link menu-opt1">works</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <button className="link menu-opt2">contact</button>
          </NavLink>
        </li>
      </ul>
    </NavigationStyle>
  );
};
