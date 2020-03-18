import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsFeaturedGridStore from "../../../../../stores/FontsFeaturedGridForm/index";
import { FontFeaturedGrid } from "../../../../../stores/FontsFeaturedGridForm/types";

const AdminFontsFeaturedGridForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<FontFeaturedGrid>
        addAction={FontsFeaturedGridStore.addFontFeaturedGrid}
        editAction={FontsFeaturedGridStore.editFontFeaturedGrid}
        data={FontsFeaturedGridStore.FontsFeaturedGrid}
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
            key: "gridNumber",
            title: "Grid Number",
            type: "text",
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

export default AdminFontsFeaturedGridForm;
