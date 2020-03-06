import React, { useRef, useState, useEffect } from "react";
import { Props } from "./types";
import "./index.css";
import { Typography } from "@material-ui/core";

const FileUploadField: React.FC<Props> = props => {
  const [files, setFiles] = useState<File | string | null>(props.value);
  useEffect(() => {
    setFiles(props.value);
  }, [props.value]);
  const inputRef = useRef(null);
  return (
    <div
      onClick={() => {
        if (inputRef.current) {
          (inputRef.current as any).click();
        }
      }}
      className="FileUploadField"
    >
      <label htmlFor="file">File upload</label>

      <input
        type="file"
        accept="*.woff, *.woff2"
        ref={inputRef}
        onChange={value => {
          if (value.target.files) {
            props.setValue(value.target.files[0]);
            const reader = new FileReader();
            // tslint:disable-next-line: only-arrow-functions
            reader.onload = e => {
              if (inputRef.current && e.target) {
                setFiles(e.target.result as any);
              }
            };
            reader.readAsDataURL(value.target.files[0]);
          }
        }}
      />

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

export default FileUploadField;
