import { Banner, Button } from "@telegram-apps/telegram-ui";
import ImageWithLoading from "../ImageWithLoading/ImageWithLoading";
import { Dispatch, FC, SetStateAction } from "react";

interface SubscriptionBannerProps {
  setIsBannerShow: Dispatch<SetStateAction<boolean>>;
}

const SubscriptionBanner: FC<SubscriptionBannerProps> = ({
  setIsBannerShow,
}) => {
  return (
    <Banner
      className="z-[20] mb-[8px]"
      before={
        <ImageWithLoading
          src="./images/star.png"
          alt="star"
          className="w-[32px]"
        />
      }
      description="This functionality is only available for a Pro subscription."
      header="Choose a Day"
      onCloseIcon={() => setIsBannerShow(false)}
      type="section"
    >
      <>
        <Button size="s">Try it out</Button>
      </>
    </Banner>
  );
};

export default SubscriptionBanner;
