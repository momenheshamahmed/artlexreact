/// <reference types="react-scripts" />
declare module "react-upload-gallery";
declare module "@ckeditor/ckeditor5-build-classic";
declare module "@ckeditor/ckeditor5-react";

declare module "@ckeditor/ckeditor5-watchdog/src/editorwatchdog" {
  const EditorWatchdog: any;
  type EditorWatchdog = any;

  export default EditorWatchdog;
}
