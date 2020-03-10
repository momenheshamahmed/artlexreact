import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsInUseStore from "../../../../../stores/FontsInUseForm/index";
import { FontInUse } from "../../../../../stores/FontsInUseForm/types";

const AdminFontsInUseForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<FontInUse>
        addAction={FontsInUseStore.addFontInUse}
        editAction={FontsInUseStore.editFontInUse}
        data={FontsInUseStore.FontsInUse}
        formData={[
          {
            inContent: true,
            key: "selectField",
            title: "Select",
            type: "select"
          },
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text"
          },
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text"
          },
        ]}
      />
    </div>
  ));
};

export default AdminFontsInUseForm;
