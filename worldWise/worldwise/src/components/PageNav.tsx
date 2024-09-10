import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

export const PageNav = () => {
  return (
    <nav className={`${styles.nav}`}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
