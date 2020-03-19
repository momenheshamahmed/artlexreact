import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import Assets from "../../../assets";
import "./index.css";
import { Typography, Button } from "@material-ui/core";

const PdfFileField: React.FC<Props> = props => {
  const [file, setFile] = useState<File | string | null>(props.value);
  useEffect(() => {
    setFile(props.value);
  }, [props.value]);
  const inputRef = useRef(null);

  return (
    <div className="PdfFileField">
      <input
        type="file"
        accept=".pdf"
        id={props.idInput}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={value => {
          if (value.target.files && value.target.files[0]) {
            props.setValue(value.target.files[0]);
            const reader = new FileReader();
            reader.onload = function(e) {
              if (inputRef.current && e.target) {
                setFile(e.target.result as any);
              }
            };

            reader.readAsDataURL(value.target.files[0]);
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
        Upload file
      </Button>
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

export default PdfFileField;
