import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import Assets from "../../../assets";
import "./index.css";
import { Typography, Button } from "@material-ui/core";

const FileField: React.FC<Props> = props => {
  const [file, setFile] = useState<File | string | null>(props.value);
  const [fileName, setFileName] = useState<string | null>("no file yet");
  useEffect(() => {
    setFile(props.value);
  }, [props.value]);
  const inputRef = useRef(null);

  return (
    <div
      // onClick={() => {
      //   if (inputRef.current) {
      //     (inputRef.current as any).click();
      //   }
      // }}
      className="FileField"
    >
      <input
        type="file"
        accept=".woff, .woff2"
        id={`${props.idInput}`}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={value => {
          if (value.target.files && value.target.files[0]) {
            props.setValue(value.target.files[0]);
            setFileName(value.target.files[0].name);
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
      <ul>
        <li>
          {fileName ? fileName : "no file yet"}{" "}

        </li>
      </ul>
      {/* <img src={file ? file : Assets.Files.uploadPlaceholder} style={{width: "200px;"}}/> */}
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

export default FileField;
