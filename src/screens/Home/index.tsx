import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import Font from "./types";
import BlogSliderComponent from "../../components/HomeComponents/BlogSlider";
import FeaturedFontsThumbnialsComponent from "../../components/HomeComponents/FeaturedFontsThumbnials";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import FullScreenImageComponent from "../../components/HomeComponents/FullScreenImageComponent";
import {
  CustomFontsFeaturedFullScreenStore,
  FontsFeaturedFullScreenStore,
  FontsFeaturedGridStore,
  CustomFontsFeaturedGridStore,
  BlogFeaturedArticlesStore
} from "../../stores";

const Home: React.FC = () => {
  console.log("here", BlogFeaturedArticlesStore.BlogFeaturedArticles);
  return useObserver(() => (
    <div>
      {FontsFeaturedFullScreenStore.FontsFeaturedFullScreen.map(val => {
        return <FullScreenImageComponent key={val.key} ImgSrc={val} />;
      })}
      {CustomFontsFeaturedFullScreenStore.CustomFontsFeaturedFullScreen.map(
        val => {
          return <FullScreenImageComponent key={val.key} ImgSrc={val} />;
        }
      )}

      {/* <FeaturedFontsThumbnialsComponent tileData={tileData} /> */}
      <FeaturedFontsThumbnialsComponent
        tileData={
          FontsFeaturedGridStore.FontsFeaturedGrid &&
          CustomFontsFeaturedGridStore.CustomFontsFeaturedGrid
        }
      />
      <FeaturedFontsThumbnialsComponent
        tileData={CustomFontsFeaturedGridStore.CustomFontsFeaturedGrid}
      />
      <BlogSliderComponent
        Articles={BlogFeaturedArticlesStore.BlogFeaturedArticles}
      />

      {/* <TypefaceTesterComponent /> */}
    </div>
  ));
};
export default Home;
