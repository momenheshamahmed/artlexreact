import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedGridStore from "../../../../stores/FontsFeaturedGridForm/index";
import { FontFeaturedGrid } from "../../../../stores/FontsFeaturedGridForm/types";

const AdminFontsFeaturedGridTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<FontFeaturedGrid>
        data={FontsFeaturedGridStore.FontsFeaturedGrid}
        deleteAction={FontsFeaturedGridStore.deleteFontFeaturedGrid}
        route={"/admin/fontsfeaturedgrid"}
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

export default AdminFontsFeaturedGridTable;
