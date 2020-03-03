import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import Assets from "../../../assets";
import "./index.css";
import { Typography } from "@material-ui/core";

const ImageFieldAdmin: React.FC<Props> = props => {
  const [images, setImages] = useState<File | string | null>(props.value);
  useEffect(() => {
    setImages(props.value);
  }, [props.value]);
  const inputRef = useRef(null);
  return (
    <div
      onClick={() => {
        if (inputRef.current) {
          (inputRef.current as any).click();
        }
      }}
      className="ImageFieldAdmin"
    >
      <label for="file">File upload</label>

      <input
        type="file"
        accept="image/png,image/jpeg"
        multiple={true}
        ref={inputRef}
        onChange={value => {
          if (value.target.files) {
            props.setValue(value.target.files[0]);
            const reader = new FileReader();
            // tslint:disable-next-line: only-arrow-functions
            reader.onload = (e) => {
              if (inputRef.current && e.target) {
                setImages(e.target.result as any);
              }
            };
            reader.readAsDataURL(value.target.files[0]);
          }

                  }}
      />
      {images ? (
        images.map(img => {
          return (

            // tslint:disable-next-line: jsx-key
            <img src={img} alt="" />;
          )
        })
      ) : (
        <img src={Assets.Images.uploadPlaceholder} alt="" />
      )}
      {props.error && (
        <Typography
          color="error"
          variant="caption"
          style={{
            margin: "8px 14px 0 14px"
          }}
        >
          {props.error}
        </Typography>
      )}
    </div>
  );
};

export default ImageFieldAdmin;
