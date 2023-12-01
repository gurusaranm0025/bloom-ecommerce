import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.ipsum}>
          <p className={classes.ipsumHeading}>Stay in the loop</p>
          <span className={classes.ipsumContent}>
            Stay in the loop with special offers, plant-parenting tips, and
            more.
          </span>
        </div>
        <div className={classes.column}>
          <p className={classes.columnHeading}>Company</p>
          <p className={classes.columnOption}>About</p>
          <p className={classes.columnOption}>Careers</p>
          <p className={classes.columnOption}>Reviews</p>
          <p className={classes.columnOption}>Press</p>
          <p className={classes.columnOption}>Our Guarantee</p>
          <p className={classes.columnOption}>Corporate Gifting</p>
          <p className={classes.columnOption}>Trade Program</p>
        </div>
        <div className={classes.column}>
          <p className={classes.columnHeading}>Support</p>
          <p className={classes.columnOption}>Help + FAQ</p>
          <p className={classes.columnOption}>Track your Order</p>
          <p className={classes.columnOption}>Shipping</p>
          <p className={classes.columnOption}>Returns</p>
          <p className={classes.columnOption}>Contact Support</p>
        </div>
        <div className={classes.column}>
          <p className={classes.columnHeading}>Plant Questions</p>
          <p className={classes.columnOption}>Plant Care Tips</p>
          <p className={classes.columnOption}>Plant Life Blog</p>
          <p className={classes.columnOption}>Vera Plant Care App</p>
          <p className={classes.columnOption}>Contact the Grow-How Team</p>
        </div>
      </div>
      <div className={classes.smallLinksWrapper}>
        <div className={classes.nonMediaLinksWrapper}>
          <a className={classes.nonMediaLink} href="">
            Terms
          </a>
          <a className={classes.nonMediaLink} href="">
            Privacy Policy
          </a>
          <a className={classes.nonMediaLink} href="">
            Do Not Sell Information
          </a>
          <a className={classes.nonMediaLink} href="">
            Accessibility
          </a>
        </div>
        <div className={classes.socialMediaLinksWrapper}>
          <a className={classes.socialMediaLink}>
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a className={classes.socialMediaLink}>
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a className={classes.socialMediaLink}>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className={classes.socialMediaLink}>
            <ion-icon name="logo-pinterest"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
