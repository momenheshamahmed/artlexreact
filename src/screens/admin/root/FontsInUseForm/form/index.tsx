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
            key: "selectTypeface",
            title: "Select Typeface",
            type: "selecttypface",
            isRequired: true
          },
          {
            inContent: true,
            key: "imageGrid",
            title: "Grid Number",
            type: "text",
            isRequired: true
          },

        ]}
      />
    </div>
  ));
};

export default AdminFontsInUseForm;
