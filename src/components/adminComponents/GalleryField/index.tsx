import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import Assets from "../../../assets";
import "./index.css";
import { Typography } from "@material-ui/core";

const GalleryField: React.FC<Props> = props => {
  const [images, setImages] = useState<(File | string | null)[]>(props.value);
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
      className="ImageField"
    >
      <label htmlFor="file">File upload</label>

      <input
        type="file"
        multiple
        accept="image/png,image/jpeg"
        ref={inputRef}
        onChange={value => {
          if (value.target.files && value.target.files[0]) {
            const numOfFiles = value.target.files.length;
            const filesArray = [];
            const imagesArray = [];
            for (let i = 0; i < numOfFiles; i++) {
              filesArray.push(value.target.files[i]);
            }
            console.warn(numOfFiles)
            console.warn(filesArray)
            props.setValue(filesArray);
            filesArray.forEach(file => {
              if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                  if (inputRef.current && e.target) {
                    imagesArray.push(e.target.result as any);
                    if (imagesArray.length === numOfFiles) {
                      setImages(imagesArray);
                    }
                  }
                };
                reader.readAsDataURL(file);
              }
            })
          }
        }}
      />
      <div>
        {
          images ? 
          
          images.map(image => (
            <img src={image ? image : Assets.Images.uploadPlaceholder} style={{width: "200px;"}}/>
          ))
          : 
          null 
        }
      </div>
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

export default GalleryField;
