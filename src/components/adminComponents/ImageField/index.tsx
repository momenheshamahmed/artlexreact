import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import "./index.css";
import { Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const ImageField: React.FC<Props> = props => {
  const [image, setImage] = useState<File | string | null>(props.value);
  const styledImage = styled.img`
    display: (${props => (props.src !== null ? "inline" : "none")});
  `;
  useEffect(() => {
    setImage(props.value);
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
        accept="image/png,image/jpeg,image/gif"
        id={props.idInput}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={value => {
          if (value.target.files && value.target.files[0]) {
            props.setValue(value.target.files[0]);
            const reader = new FileReader();
            reader.onload = function(e) {
              if (inputRef.current && e.target) {
                setImage(e.target.result as any);
              }
            };
            reader.readAsDataURL(value.target.files[0]);
          }
        }}
      />
      <div>
        <Button
          id={`${props.idButton}`}
          variant="outlined"
          fullWidth={true}
          onClick={() => {
            document.getElementById(`${props.idInput}`).click();
          }}
        >
          Upload Image
        </Button>
        <img
          src={image ? image : null}
          style={{
            display: image ? "inline" : "none",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        />
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

export default ImageField;
