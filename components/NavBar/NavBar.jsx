import classes from "@/components/NavBar/NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav className={classes.nav}>
        <div className="logo-wrapper">
          <span className="logo">BLOOM</span>
        </div>
        <div className="nav-options">
          <a href="/">Plants</a>
          <a href="/">Care tools</a>
          <a href="/">Gifts</a>
          <a href="/">Learn</a>
          <a href="/">Corporate Gifts</a>
          <a href="/">Account</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
