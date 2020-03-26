import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsInUseStore from "../../../../stores/FontsInUseForm/index";
import { FontInUse } from "../../../../stores/FontsInUseForm/types";

const AdminFontsInUseTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<FontInUse>
        data={FontsInUseStore.FontsInUse}
        deleteAction={FontsInUseStore.deleteFontInUse}
        route={"/admin/fontsinuse"}
        tableData={[
          {
            inContent: true,
            key: "ID",
            title: "Selected Typeface",
            type: "text"
          },
        ]}
      />
    </div>
  ));
};

export default AdminFontsInUseTable;
