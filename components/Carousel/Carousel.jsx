import classes from "@/components/Carousel/Carousel.module.css";

function Carousel() {
  return (
    <div className={classes.carousel}>
      <span>back</span>
      <div>reviews</div>
      <span>next</span>
    </div>
  );
}

export default Carousel;
