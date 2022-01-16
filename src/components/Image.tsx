import * as React from "react";
import ImgA from "../a.png";

interface IImageProps {}

const Image: React.FunctionComponent<IImageProps> = () => {
  return <img src={ImgA} height="700" width="500" alt="Logo" />;
};

export default Image;
