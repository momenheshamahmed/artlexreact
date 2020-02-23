import React from 'react'
import '../../screens/App.css';

import { useObserver } from 'mobx-react';


import { EpisodeStore } from '../../stores';

import {css} from '@emotion/core';

import colors from '../../assets/css/colors'

const Home: React.FC = () => {
    const episodestore = EpisodeStore;
 
    return useObserver(() => (
        <div css={css`
            background-color: ${colors.primary};`}>
            Momen
            <h1>Momen</h1>
        </div>
    ))
  };
  export default Home;
