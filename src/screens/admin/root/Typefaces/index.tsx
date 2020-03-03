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
            title: "title"
          },
          {
            inContent: true,
            key: "imgURL",
            title: "Image"
          },
          {
            inContent: true,
            key: "audioURL",
            title: "Audio"
          }
        ]}
      />
    </div>
  ));
};

export default AdminTypefacesTable;
