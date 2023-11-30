import classes from "@/components/Products/ProductPreview/ProductPreview.module.css";
import Sample from "@/public/assets/Products/sample01.jpg";

function ProductPreview() {
  return (
    <>
      <div className={classes.previewWrapper}>
        <div className={classes.imgWrapper}>
          <img className={classes.img} src={Sample.src} loading="lazy" />
          <button className={classes.btn}>Add to cart</button>
        </div>
      </div>
      <div className={classes.nameWrapper}>
        <span className={classes.name}>Product name</span>
        <span className={classes.price}>$100</span>
      </div>
    </>
  );
}

export default ProductPreview;
