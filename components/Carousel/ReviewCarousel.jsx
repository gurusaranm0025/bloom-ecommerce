import classes from "@/components/Carousel/ReviewCarousel.module.css";
import { Carousel, ConfigProvider } from "antd";
import ReviewCard from "./ReviewCard/ReviewCard";
import ShopAllButton from "../Buttons/ShopAllButton";

function reviewCarousel() {
  return (
    <>
      <div className={classes.reviewHeading}>
        <span>WELCOME TO OUR PLANT FAMILY</span>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#004d24",
          },
        }}
      >
        <Carousel autoplay>
          <div className={classes.carouselContent}>
            <div className={classes.carouselInnerContent}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
          <div className={classes.carouselContent}>
            <div className={classes.carouselInnerContent}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
          <div className={classes.carouselContent}>
            <div className={classes.carouselInnerContent}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
          <div className={classes.carouselContent}>
            <div className={classes.carouselInnerContent}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
          <div className={classes.carouselContent}>
            <div className={classes.carouselInnerContent}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </Carousel>
      </ConfigProvider>
      <div className={classes.btnWrapper}>
        <ShopAllButton />
      </div>
    </>
  );
}

export default reviewCarousel;
