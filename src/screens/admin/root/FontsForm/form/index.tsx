import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import FontStore from "../../../../../stores/FontsForm/index";
import { Font } from "../../../../../stores/FontsForm/types";

const AdminFontsForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<Font>
        addAction={FontStore.addFont}
        editAction={FontStore.editFont}
        data={FontStore.Fonts}
        formData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "Select",
            type: "selecttypface",
            isRequired: true
          },

          {
            inContent: true,
            key: "fontImage",
            title: "Font Image",
            type: "image",
            isRequired: true
          },
          {
            inContent: true,
            key: "fontUrl",
            title: "Font Url",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "backgroundColor",
            title: "Background Color",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "buttonColor",
            title: "Font Weight",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "textColor",
            title: "Font Weight",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "fontWeight",
            title: "Font Weight",
            type: "text",
            isRequired: false
          }
        ]}
      />
    </div>
  ));
};

export default AdminFontsForm;
