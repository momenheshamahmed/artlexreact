import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsFeaturedFullscreenStore from "../../../../../stores/CustomFontsFeaturedFullscreenForm/index";
import { CustomFontFeaturedFullScreen } from "../../../../../stores/CustomFontsFeaturedFullscreenForm/types";

const AdminCustomFontsFeaturedFullscreenForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<CustomFontFeaturedFullScreen>
        addAction={FontsFeaturedFullscreenStore.addCustomFontFeaturedFullScreen}
        editAction={FontsFeaturedFullscreenStore.editCustomFontFeaturedFullScreen}
        data={FontsFeaturedFullscreenStore.CustomFontsFeaturedFullScreen}
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

export default AdminCustomFontsFeaturedFullscreenForm;
