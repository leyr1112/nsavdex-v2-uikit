import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img src="images/logowithtext.png" width="130" height="26"/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
