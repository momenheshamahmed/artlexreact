import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import BuyTypefaceComponent from "./BuyTypefaceComponent";

const BuyTypefaceSection: React.FC = () => {
  return useObserver(() => (
    <>
      <Typography variant="h6" component="h6" className="mb-3 mt-3">
        Buy Typeface Now
      </Typography>
      <BuyTypefaceComponent />
    </>
  ));
};
export default BuyTypefaceSection;
