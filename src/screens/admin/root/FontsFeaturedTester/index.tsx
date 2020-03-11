import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedTesterStore from "../../../../stores/FontsFeaturedTesterForm/index";
import { FontFeaturedTester } from "../../../../stores/FontsFeaturedTesterForm/types";

const AdminFontsFeaturedTesterTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<FontFeaturedTester>
        data={FontsFeaturedTesterStore.FontsFeaturedTester}
        deleteAction={FontsFeaturedTesterStore.deleteFontFeaturedTester}
        route={"/admin/FontsFeaturedTester"}
        tableData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "Select Your Typeface",
            type: "selecttypface"
          }
        ]}
      />
    </div>
  ));
};

export default AdminFontsFeaturedTesterTable;
