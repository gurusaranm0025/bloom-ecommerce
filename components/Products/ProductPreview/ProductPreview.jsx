import classes from "@/components/Products/ProductPreview/ProductPreview.module.css";
import Image from "next/image";
import Sample from "@/public/assets/Products/sample01.jpg";

function ProductPreview() {
  return (
    <div className={classes.previewWrapper}>
      <div className={classes.imgWrapper}>
        <Image className={classes.img} alt="plant image" src={Sample} />
        <button className={classes.btn}>Add to cart</button>
      </div>
      <div className={classes.detailsWrapper}>
        <span className={classes.name}>Product name</span>
        <span className={classes.price}>price</span>
      </div>
    </div>
  );
}

export default ProductPreview;
