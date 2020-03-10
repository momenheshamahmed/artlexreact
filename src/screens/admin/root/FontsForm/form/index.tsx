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
            key: "title",
            title: "Title",
            type: "text"
          },
          {
            inContent: true,
            key: "selectField",
            title: "Select",
            type: "select"
          },
        ]}
      />
    </div>
  ));
};

export default AdminFontsForm;
