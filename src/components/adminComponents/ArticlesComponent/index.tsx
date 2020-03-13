import React, { useEffect, useState } from "react";
import { Props } from "./types";
import { useObserver } from "mobx-react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "@material-ui/core";

import { Formik, Form, Field, FieldArray } from "formik";

const ArticlesComponent: React.FC<Props> = props => {
  const [editors, setEditors] = useState<Array<string | object | null>>(
    props.value
  );
  const [processedEditors, setProcessedEditors] = useState([
    {
      inContent: true,
      key: `richEditor`,
      title: "Write Your Content",
      type: "RichTextField",
      isRequired: true,
      editor: EditorState.createEmpty()
    }
  ]);
  const [editor, setEditor] = useState(EditorState.createEmpty());
  const initialValues = {
    friends: [
      {
        inContent: true,
        key: `richEditor2`,
        title: "Write Your Content",
        type: "RichTextField",
        isRequired: true,
        editor: EditorState.createEmpty()
      },
      {
        inContent: true,
        key: `richEditor${Math.random() * 100}`,
        title: "Write Your Content",
        type: "RichTextField",
        isRequired: true,
        editor: EditorState.createEmpty()
      }
    ]
  };
  const [counterNumbers, setCounterNumbers] = useState(3);
  useEffect(() => {
    const processEditors = async () => {
      console.log(Formik);
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
      <div>
        <Formik
          initialValues={initialValues}
          validate={() => ({ foo: true })}
          onSubmit={values => {
          }}
          render={({ values, errors, touched, handleReset }) => {
            return (
              <Form>
                <FieldArray
                  name="friends"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.friends.length > 0 &&
                        values.friends.map((friend, index) => (
                          <div className="row" key={index}>
                            <div>
                              <Field name={`friends.${index}.key`}>
                                {({ field, form, meta }) => (
                                  <Editor
                                    {...field}
                                    editorState={friend.editor}
                                    // key={`friends.${index}.key`}
                                    onEditorStateChange={(e: any) => {
                                      // setState({ ...state, [name]: event.target.checked });
                                      // props.setValue(e);
                                      friend.editor = e;
                                    }}
                                    // toolbar={config}
                                    handlePastedText={() => false}
                                  />
                                )}
                              </Field>
                              {/* {errors.friends &&
                                errors.friends[index] &&
                                errors.friends[index].editor &&
                                touched.friends &&
                                touched.friends[index].editor && (
                                  <div className="field-error">
                                    {errors.friends[index].name}
                                  </div>
                                )} */}
                            </div>

                            <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}

                      <Button
                        variant="outlined"
                        fullWidth={true}
                        onClick={() =>
                          push({
                            inContent: true,
                            key: `richEditor${Math.random() * 100}`,
                            title: "Write Your Content",
                            type: "RichTextField",
                            isRequired: true,
                            editor: EditorState.createEmpty()
                          })
                        }
                      >
                        Add More
                      </Button>
                    </div>
                  )}
                />
                <br />
                <button
                  onClick={event => {
                    event.preventDefault();
                    handleReset();
                  }}
                >
                  Reset
                </button>
                <button type="submit" onClick={()=> console.log(values.friends)}>Submit</button>
              </Form>
            );
          }}
        />
      </div>
    </>
  ));
};
export default ArticlesComponent;
