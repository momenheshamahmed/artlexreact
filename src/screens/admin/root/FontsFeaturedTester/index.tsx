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
            key: "selectField",
            title: "select",
            type: "selecttypface"
          },
          {
            inContent: true,
            key: "title",
            title: "title",
            type: "text"
          },
        ]}
      />
    </div>
  ));
};

export default AdminFontsFeaturedTesterTable;
