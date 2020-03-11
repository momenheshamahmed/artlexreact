import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import FontsFeaturedTesterStore from "../../../../../stores/FontsFeaturedTesterForm/index";
import { FontFeaturedTester } from "../../../../../stores/FontsFeaturedTesterForm/types";

const AdminFontsFeaturedTesterForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<FontFeaturedTester>
        addAction={FontsFeaturedTesterStore.addFontFeaturedTester}
        editAction={FontsFeaturedTesterStore.editFontFeaturedTester}
        data={FontsFeaturedTesterStore.FontsFeaturedTester}
        formData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "Select Typeface",
            type: "selecttypface",
            isRequired: true
          }
        ]}
      />
    </div>
  ));
};

export default AdminFontsFeaturedTesterForm;
