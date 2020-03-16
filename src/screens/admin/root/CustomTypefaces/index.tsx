import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import CustomTypefacestore from "../../../../stores/CustomTypefaces/index";
import { CustomTypeface } from "../../../../stores/CustomTypefaces/types";

const AdminCustomTypefacesTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<CustomTypeface>
        data={CustomTypefacestore.CustomTypefaces}
        deleteAction={CustomTypefacestore.deleteTypeface}
        route={"/admin/CustomTypefaces"}
        tableData={[
          {
            inContent: true,
            key: "typefaceName",
            title: "CustomTypeface Name",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminCustomTypefacesTable;
