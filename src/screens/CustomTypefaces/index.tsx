import React from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/FullScreenImageComponent";
import Assets from "../../assets/index";

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

      <FullScreenImageComponent ImgSrc={FullScreenSrcs} />
  </>
  ));
};
export default CustomTypefaces;
