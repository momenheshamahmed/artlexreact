import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsFeaturedGridStore from "../../../../../stores/CustomFontsFeaturedGridForm/index";
import { CustomFontFeaturedGrid } from "../../../../../stores/CustomFontsFeaturedGridForm/types";

const AdminCustomFontsFeaturedGridForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<CustomFontFeaturedGrid>
        addAction={FontsFeaturedGridStore.addFontFeaturedGrid}
        editAction={FontsFeaturedGridStore.editFontFeaturedGrid}
        data={FontsFeaturedGridStore.CustomFontsFeaturedGrid}
        formData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "Select Typeface",
            type: "selectcustomtypface",
            isRequired: true
          },
          {
            inContent: true,
            key: "sortTypeface",
            title: "Sorting",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "coverImageGrid",
            title: "Cover Image",
            type: "image",
            isRequired: true
          },
          {
            inContent: true,
            key: "hooooverImageGrid2",
            title: "On Hover image",
            type: "image",
            isRequired: true
          }
        ]}
      />
    </div>
  ));
};

export default AdminCustomFontsFeaturedGridForm;
