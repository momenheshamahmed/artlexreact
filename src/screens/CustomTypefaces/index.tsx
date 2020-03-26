import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/CustomTypefacesCompnents/FullScreenImageComponent";
import { TypefaceStore } from "../../stores";
const CustomTypefaces: React.FC = () => {
  return useObserver(() => (
    <div style={{ marginTop: 101 }}>
      {TypefaceStore.Typefaces.length > 0 ? (
        TypefaceStore.Typefaces.map(val => {
          if (val.content.en.typefaceCategory === "Custom") {
            return <FullScreenImageComponent ImgSrc={val} key={val.key}/>;
          }
        })
      ) : (
        <h1>Loaading ....</h1>
      )}
    </div>
  ));
};
export default CustomTypefaces;
