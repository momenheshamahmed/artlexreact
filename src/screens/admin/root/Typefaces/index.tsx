import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import TypefaceStore from "../../../../stores/Typefaces/index";
import { Typeface } from "../../../../stores/Typefaces/types";

const AdminTypefacesTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<Typeface>
        data={TypefaceStore.Typefaces}
        deleteAction={TypefaceStore.deleteTypeface}
        route={"/admin/typefaces"}
        tableData={[
          {
            inContent: true,
            key: "title",
            title: "title",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminTypefacesTable;
