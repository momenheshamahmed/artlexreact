import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedGridStore from "../../../../stores/CustomFontsFeaturedGridForm/index";
import { CustomFontFeaturedGrid } from "../../../../stores/CustomFontsFeaturedGridForm/types";

const AdminCustomFontsFeaturedGridTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<CustomFontFeaturedGrid>
        data={FontsFeaturedGridStore.CustomFontsFeaturedGrid}
        deleteAction={FontsFeaturedGridStore.deleteFontFeaturedGrid}
        route={"/admin/CustomFontsFeaturedGrid"}
        tableData={[
          {
            inContent: true,
            key: "selectField",
            title: "select",
            type: "selecttypface"
          }
        ]}
      />
    </div>
  ));
};

export default AdminCustomFontsFeaturedGridTable;
