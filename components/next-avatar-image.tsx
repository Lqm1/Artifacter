import { getImageProps, type ImageProps } from "next/image";
import { AvatarImage } from "./ui/avatar";

export function NextAvatarImage(props: ImageProps) {
  const { props: imageProps } = getImageProps(props);
  return <AvatarImage {...imageProps} />;
}
