import React, { useEffect, useState } from "react";
import { Props } from "./types";
import { useObserver } from "mobx-react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ArticlesComponent: React.FC<Props> = (props) => {
  const [editors, setEditors] = useState<Array<string | null>>(props.value);
  useEffect(() => {
    const processEditors = async () => {
      const processedEditors = [];
      setEditors(processedEditors);
    };
    processEditors();
  }, [props.value]);
  const config = {
    options: [
      "embedded",
      "inline",
      "blockType",
      "fontSize",
      "list",
      "textAlign",
      "colorPicker",
      "link",
      "history"
    ]
  };

  return useObserver(() => (
    <>
      <Editor
        editorState={}
        onEditorStateChange={(e: any) => {}}
        toolbar={config}
        handlePastedText={() => false}
      />
    </>
  ));
};
export default ArticlesComponent;
