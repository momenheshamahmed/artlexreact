import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import CustomFontsInUseStore from "../../../../stores/CustomFontsInUseForm/index";
import { CustomFontInUse } from "../../../../stores/CustomFontsInUseForm/types";

const AdminCustomFontsInUseTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<CustomFontInUse>
        data={CustomFontsInUseStore.CustomFontsInUse}
        deleteAction={CustomFontsInUseStore.deleteCustomFontInUse}
        route={"/admin/customfontsinuse"}
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

export default AdminCustomFontsInUseTable;
