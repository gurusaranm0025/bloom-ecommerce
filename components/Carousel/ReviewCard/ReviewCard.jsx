import classes from "./ReviewCard.module.css";

function ReviewCard() {
  return (
    <div className={classes.reviewWrapper}>
      <h2 className={classes.heading}>
        Great customer service beautiful plants.
      </h2>
      <p className={classes.content}>
        Great customer service beautiful plants. Second order very pleased.
      </p>
      <span className={classes.author}>Paul H.</span>
      <span>11/18/23</span>
    </div>
  );
}

export default ReviewCard;
