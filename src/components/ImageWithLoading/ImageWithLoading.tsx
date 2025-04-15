import { Skeleton } from "@telegram-apps/telegram-ui";
import { FC, useState } from "react";

interface ImageWithLoadingProps {
  src?: string;
  alt?: string;
  className?: string;
}

const ImageWithLoading: FC<ImageWithLoadingProps> = ({
  src = "",
  alt = "",
  className = "",
}) => {
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <Skeleton
      visible={!isImageLoaded}
      withoutAnimation={false}
    >
      <img
        className={className}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
    </Skeleton>
  );
};

export default ImageWithLoading;
