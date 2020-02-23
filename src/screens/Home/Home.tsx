import React from "react";
import { useObserver } from "mobx-react";
import { Container } from 'react-bootstrap'
import styled from "styled-components";
import Assets from '../../assets/index'
import Font from './types'

const Home: React.FC = () => {
    const H1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
    const Fonts: Font = [
        {
            fontName: "Momen",
            url: "momen",
            featuredCarousel: false,
            featuredThumbnial: false,
            controls: {
                first: false
            }
        }
    ];
    const FullScreenImage = styled.div`
    width: 100vw;
    height: 110vh;
    background-image: url(${props => props.urlImage});
    background-attachment: fixed;
    `
    return useObserver(() => (
        <div>
            <FullScreenImage urlImage={Assets.Images.logo}>Momen</FullScreenImage>
            <FullScreenImage urlImage={Assets.Images.uploadPlaceholder}>Hesham</FullScreenImage>
        
        </div>
    ));
};
export default Home;
