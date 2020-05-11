import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { EditorState } from "draft-js";
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export interface IRichTextField {
  filedType: FieldType;
  name: string;
  label: string;
  value?: EditorState;
}

interface IProps extends IRichTextField {
  errors: any;
  touched: any;
  onChange(name: string, editorState: EditorState): any;
}

class RichTextField extends Component<IProps> {
  public customEditorClassName = {
    maxHeight: 300,
    overflow: "auto",
    border: "1px solid #dadada",
    minHeight: 100,
    padding: "0 10px"
  };

  public config = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "fontFamily",
      "list",
      "textAlign",
      "colorPicker",
      "link",
      "history"
    ]
  };

  public onEditorStateChange = (editorState: EditorState) => {
    this.props.onChange(this.props.name, editorState);
  };

  public render() {
    return (
      <FormControl>
        <div>
          <Typography variant="caption" gutterBottom={true}>
            {this.props.label}
          </Typography>
          <Editor
            editorState={this.props.value}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorStyle={this.customEditorClassName}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={this.config}
            handlePastedText={() => false}
          />
        </div>
      </FormControl>
    );
  }
}

export default RichTextField;
