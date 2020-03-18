import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedFullscreenStore from "../../../../stores/FontsFeaturedFullscreenForm/index";
import { FontFeaturedFullscreen } from "../../../../stores/FontsFeaturedFullscreenForm/types";

const AdminFontsFeaturedFullscreenTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<FontFeaturedFullscreen>
        data={FontsFeaturedFullscreenStore.FontsFeaturedFullScreen}
        deleteAction={FontsFeaturedFullscreenStore.deleteFontFeaturedFullscreen}
        route={"/admin/fontsfeaturedfullscreen"}
        tableData={[
          {
            inContent: true,
            key: "selectField",
            title: "select",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminFontsFeaturedFullscreenTable;
