/*eslint-disable*/
import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import Assets from "../../../assets";
import "./index.css";
import { Typography, Button } from "@material-ui/core";

const GalleryField: React.FC<Props> = props => {
  const [images, setImages] = useState<Array<File | string | null>>(
    props.value
  );
  useEffect(() => {
    const processImages = async () => {
      const processedImages: any[] | ((prevState: (string | File)[]) => (string | File)[]) = [];
      const promisesArray = props.value.map((image, index) => {
        return new Promise(res => {
          if (typeof image === "string") {
            processedImages[index] = image;
            res();
          } else {
            const reader = new FileReader();
            reader.onload = function(e) {
              if (inputRef.current && e.target) {
                processedImages[index] = e.target.result as any;
                res();
              }
            };
            reader.readAsDataURL(image);
          }
        });
      });
      await Promise.all(promisesArray);
      setImages(processedImages);
    };
    processImages();
  }, [props.value]);
  const inputRef = useRef(null);
  return (
    <div
      // onClick={() => {
      //   if (inputRef.current) {
      //     (inputRef.current as any).click();
      //   }
      // }}
      className="ImageField"
    >
      <input
        type="file"
        multiple={true}
        accept="image/png,image/jpeg"
        id={`${props.idInput}`}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={value => {
          if (value.target.files && value.target.files[0]) {
            const numOfFiles = value.target.files.length;
            const filesArray = [];
            for (let i = 0; i < numOfFiles; i++) {
              filesArray.push(value.target.files[i]);
            }
            props.setValue(props.value.concat(filesArray));
          }
        }}
      />
      <Button
        id={`${props.idButton}`}
        variant="outlined"
        fullWidth={true}
        onClick={() => {
          document.getElementById(`${props.idInput}`).click();
        }}
      >
        upload files
      </Button>
      <div>
        {images
          ? images.map((image, index) => (
              <>
                <img
                  draggable="false"
                  src={image ? image : Assets.Images.uploadPlaceholder}
                  style={{ width: "200px" }}
                />
                <Button
                  onClick={() => {
                    const a = props.value.slice(0);
                    a.splice(index, 1);
                    props.setValue(a);
                  }}
                >
                  X
                </Button>
              </>
            ))
          : null}
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
