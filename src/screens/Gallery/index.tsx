import React, { useRef } from "react";
import { useObserver } from "mobx-react";

import { Button, useMediaQuery, Typography } from "@material-ui/core";
//   Styles
import "./styles.css";

const Gallery: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <>
      <main>
      <h2>#Empowring_Womens</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        eius alias sequi labore sunt recusandae.
      </p>
      <a href="#"><button className="btn share">share your work</button></a>
      <div className="first-grid">
        <figure>
          <img
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
            alt="Art Gallery"
          />
          <figcaption>
            <a className="artist-link" href="#" target="_blank">
              Name
            </a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
            alt="Art Gallery"
          />
          <figcaption>
            <a className="artist-link" href="#" target="_blank">
              Name
            </a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1575396574188-ccf23d32d4b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=405&q=80"
            alt="Art Gallery"
          />
          <figcaption>
            <a className="artist-link" href="#" target="_blank">
              Name
            </a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1575396574188-ccf23d32d4b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=405&q=80"
            alt="Art Gallery"
          />
          <figcaption>
            <a className="artist-link" href="#" target="_blank">
              Name
            </a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1575396574188-ccf23d32d4b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=405&q=80"
            alt="Art Gallery"
          />
          <figcaption>
            <a className="artist-link" href="#" target="_blank">
              Name
            </a>
          </figcaption>
        </figure>
      </div>
    </main>
    </>
  ));
};
export default Gallery;
