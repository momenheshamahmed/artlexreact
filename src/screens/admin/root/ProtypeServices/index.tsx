import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import ProtypeServicesStore from "../../../../stores/ProtypeServicesForm/index";
import { ProtypeServices } from "../../../../stores/ProtypeServicesForm/types";

const AdminProtypeServicesTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<ProtypeServices>
        data={ProtypeServicesStore.ProtypeServicess}
        deleteAction={ProtypeServicesStore.deleteProtypeServices}
        route={"/admin/services"}
        tableData={[
          {
            inContent: true,
            key: "richEditor1",
            title: "Title",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminProtypeServicesTable;
