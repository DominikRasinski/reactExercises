import { Outlet } from "react-router-dom";
import { AppNav } from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>WorldWise &copy; 2021</p>
      </footer>
    </div>
  );
};
