import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import CustomFontsInUseStore from "../../../../../stores/CustomFontsInUseForm/index";
import { CustomFontInUse } from "../../../../../stores/CustomFontsInUseForm/types";

const AdminCustomFontsInUseForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<CustomFontInUse>
        addAction={CustomFontsInUseStore.addCustomFontInUse}
        editAction={CustomFontsInUseStore.editCustomFontInUse}
        data={CustomFontsInUseStore.CustomFontsInUse}
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
          {
            inContent: true,
            key: "imageInUse",
            title: "Image",
            type: "image",
            isRequired: true
          },

        ]}
      />
    </div>
  ));
};

export default AdminCustomFontsInUseForm;
