
import RImage, { ImageProps as RImageProps } from "next/image";
// import { imageBlur } from '@/assets'
import classNames from "classnames";

export type ImageNextJSProps = Omit<RImageProps, "alt"> & {
  alt?: string;
  className?: string;
};

export const ImageNextJS = ({ className, ...props }: ImageNextJSProps) => {
  return (
    <RImage
      className={classNames(className)}
      alt=""
      loading="lazy"
      // fill
      // blurDataURL={imageBlur}
      {...props}
    />
  );
};
