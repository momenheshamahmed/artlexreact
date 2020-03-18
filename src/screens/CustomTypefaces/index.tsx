import React from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/CustomTypefacesCompnents/FullScreenImageComponent";
import Assets from "../../assets/index";
import { CustomTypefaceStore } from "../../stores";
const CustomTypefaces: React.FC = () => {
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.typefaceFullscreen}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.typefaceFullscreenTwo}`,
      alt: "Momen"
    }
  ];
  return useObserver(() => (
    <>
      <FullScreenImageComponent ImgSrc={CustomTypefaceStore.CustomTypefaces} />
    </>
  ));
};
export default CustomTypefaces;
