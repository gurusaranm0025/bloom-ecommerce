import classes from "@/components/Promotion/HomeBanner.module.css";
import Sample from "@/public/assets/Promotions/promotion.jpg";

function HomeBanner() {
  return (
    <div
      className={classes.bannerWrapper}
      style={{ background: `url(${Sample.src})` }}
    >
      <div className={classes.contentWrapper}>
        <h1 className={classes.heading}>Give a gift that grows</h1>
        <span className={classes.quotes}>
          Bigger, better plants. Delivered straight to you.
        </span>
        <span className={classes.quotes}>
          backed by five generations of grow-how
        </span>
        <button className={classes.btn}>SHOP PLANTS</button>
      </div>
    </div>
  );
}

export default HomeBanner;
