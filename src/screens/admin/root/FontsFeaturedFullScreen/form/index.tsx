import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsFeaturedFullscreenStore from "../../../../../stores/FontsFeaturedFullscreenForm/index";
import { FontFeaturedFullscreen } from "../../../../../stores/FontsFeaturedFullscreenForm/types";

const AdminFontsFeaturedFullscreenForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<FontFeaturedFullscreen>
        addAction={FontsFeaturedFullscreenStore.addFontFeaturedFullscreen}
        editAction={FontsFeaturedFullscreenStore.editFontFeaturedFullscreen}
        data={FontsFeaturedFullscreenStore.FontsFeaturedFullscreen}
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
            key: "coverImage",
            title: "Cover Image",
            type: "image",
            isRequired: true
          },

        ]}
      />
    </div>
  ));
};

export default AdminFontsFeaturedFullscreenForm;
