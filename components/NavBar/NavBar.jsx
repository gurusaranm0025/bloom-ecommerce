import classes from "@/components/NavBar/NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.nav}>
      <div className="logo-wrapper">
        <span className={classes.logo}>BLOOM</span>
      </div>
      {/* Todo: Future Search bar */}
      <div className={classes.navOptions}>
        <a href="/" className={classes.link}>
          Plants
        </a>
        <a href="/" className={classes.link}>
          Care tools
        </a>
        <a href="/" className={classes.link}>
          Gifts
        </a>
        <a href="/" className={classes.link}>
          Learn
        </a>
        <a href="/" className={classes.link}>
          Corporate Gifts
        </a>
        <a href="/" className={classes.link}>
          Account
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
