/*
 * This override is needed to add xmlns and xmlnsXlink to SvgProps:
 * https://github.com/software-mansion/react-native-svg/issues/1638
 */

import "react-native-svg";

declare module "react-native-svg" {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}
