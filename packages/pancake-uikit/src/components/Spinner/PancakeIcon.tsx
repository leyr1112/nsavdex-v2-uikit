import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/logo.png" width="128" height="128"/>
  );
};

export default Icon;
