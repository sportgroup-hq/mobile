import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path
      fill="#5ec08f"
      d="M16 11.516c0 3.064-2.436 5.5-5.5 5.5S5 14.58 5 11.516s2.436-5.5 5.5-5.5 5.5 2.436 5.5 5.5z"
    />
    <Path
      fill="#bbffd6"
      d="M15.921 10.652A4.58 4.58 0 0 1 12.7 9.316a4.585 4.585 0 0 1-1.336-3.221 5.236 5.236 0 0 0-1.571 0c0 1.571.629 3.143 1.807 4.321s2.75 1.807 4.321 1.807a5.23 5.23 0 0 0 0-1.571zM9.4 12.616a6.133 6.133 0 0 0-4.321-1.807 5.236 5.236 0 0 0 0 1.571c1.179 0 2.279.471 3.221 1.414.943.943 1.336 2.043 1.414 3.221.55.079 1.021.079 1.571 0-.078-1.649-.706-3.22-1.885-4.399z"
    />
    <Path
      fill="#e0dddc"
      d="M44 15.5C44 22.375 38.375 28 31.5 28S19 22.375 19 15.5 24.625 3 31.5 3 44 8.625 44 15.5z"
    />
    <Path
      fill="#bfbfbf"
      d="m21.937 12.763.395-1.186 4.921 1.641-.395 1.186-4.921-1.641zM30.875 5.5h1.25v5h-1.25v-5zM25.011 23.169l3.189-4.784 1.04.693-3.189 4.784-1.04-.693zM33.76 19.079l1.04-.693 3.189 4.784-1.04.693-3.189-4.784zM33.86 13.846l6.819-2.27.395 1.186-6.819 2.27-.395-1.186z"
    />
    <Path
      fill="#546e7a"
      d="m26.5 13.625 5-3.75 5 3.75-1.875 5.625h-6.25L26.5 13.625zm8.75-10.062C34.063 3.188 32.813 3 31.5 3s-2.563.188-3.75.563l-1 1.813L31.5 6.75l4.375-1.25-.625-1.937zm7.5 13.187L44 15.5c0-3.125-1.125-5.938-3-8.125l-1.375.188v5.063l3.125 4.124zm-6.125 5.5-2.688 4.25 1.438.875c2.813-.938 5.188-2.813 6.688-5.25l-.5-1.813-4.938 1.938zm-13.187-9.625-.063-5.063L22 7.375c-1.875 2.188-3 5-3 8.125l1.25 1.25 3.188-4.125zm-2 7.75-.5 1.813c1.563 2.438 3.875 4.313 6.688 5.25l1.375-1-2.563-4.125-5-1.938z"
    />
    <Path
      fill="#d6d1d0"
      d="m4.886 27.124.806-1.809 22.865 10.186-.806 1.809L4.886 27.124zm2.516-3.214.806-1.809 21.021 9.287-.806 1.809L7.402 23.91zm18.64 14.806-.806 1.809-21.057-9.38.806-1.809 21.057 9.38z"
    />
    <Path
      fill="#d6d1d0"
      d="m10.143 38.38 7.308-16.407 1.809.805-7.309 16.407zM6.143 37.38l7.308-16.407 1.809.805L7.95 38.185zM13.76 39.99l7.308-16.406 1.809.805-7.309 16.407zM26.587 25.966l-7.402 16.442-1.809-.805 7.309-16.407z"
    />
    <Path
      fill="#c93d18"
      d="m37.801 39.774-.806 1.809c-5.297-2.359-6.808-5.742-8.342-8.903-1.57-3.254-3.082-6.637-8.629-9.65l.935-1.751c6.1 3.337 7.884 7.15 9.49 10.498 1.569 3.253 2.83 5.983 7.352 7.997z"
    />
    <Path
      fill="#c93d18"
      d="m37.801 39.774-.806 1.809c-4.651-2.072-7.523-1.184-10.769-.153-3.562 1.045-7.684 2.305-14.151-.034l.676-1.866c5.95 2.109 9.512 1.064 12.945-.039 3.376-.974 6.902-2.112 12.105.283z"
    />
    <Path
      fill="#ff754c"
      d="M5.751 31.612c-.466-1.214-.902-3.189-.003-5.033.806-1.809 2.645-3.157 5.086-3.772 2.758-.629 5.909-.232 8.88 1.092 3.488 1.554 6.2 4.155 7.31 7.049.466 1.214.902 3.189.003 5.033-.806 1.809-2.645 3.157-5.086 3.772-2.757.629-5.909.232-8.88-1.092-3.452-1.46-6.2-4.155-7.31-7.049M2.95 32.686c1.361 3.548 4.546 6.825 8.845 8.817 7.363 3.28 15.413 1.37 17.888-4.185 1.036-2.325.923-4.853-.008-7.28-1.361-3.548-4.546-6.825-8.845-8.817-7.363-3.28-15.413-1.37-17.888 4.185-.978 2.196-.923 4.853.008 7.28z"
    />
    <Path
      fill="#37474f"
      d="m46.271 42.308.716 1.867-.575 1.292-1.867.716-7.751-3.453-.537-1.4.863-1.938 1.4-.537 7.751 3.453z"
    />
    <Path
      fill="#546e7a"
      d="m37.956 43.249 1.809.806 1.726-3.875-1.809-.806-1.726 3.875zm7.188-1.365-1.809-.806-1.726 3.875 1.809.806 1.726-3.875z"
    />
  </Svg>
);
export default SvgComponent;
