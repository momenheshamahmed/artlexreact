import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontStore from "../../../../stores/FontsForm/index";
import { Font } from "../../../../stores/FontsForm/types";

const AdminFontsTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<Font>
        data={FontStore.Fonts}
        deleteAction={FontStore.deleteFont}
        route={"/admin/fonts"}
        tableData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "ID",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminFontsTable;
