import classes from "@/components/Products/SuggestionRow/SuggestionRow.module.css";
import ProductPreview from "../ProductPreview/ProductPreview";

function SuggestionRow() {
  return (
    <div className={classes.suggWrapper}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>Best Sellers</h2>
        <a href="" className={classes.link}>
          Shop all
        </a>
      </div>
      <div className={classes.previewWrapper}>
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
      </div>
    </div>
  );
}

export default SuggestionRow;
