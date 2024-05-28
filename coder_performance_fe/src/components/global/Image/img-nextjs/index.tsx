
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
      width={300}
      height={300}
      className={classNames(className)}
      alt=""
      loading="lazy"
      // fill
      // blurDataURL={imageBlur}
      {...props}
    />
  );
};
