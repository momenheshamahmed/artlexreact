import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedFullscreenStore from "../../../../stores/FontsFeaturedFullscreenForm/index";
import { CustomFonsFeaturedFullScreen } from "../../../../stores/FontsFeaturedFullscreenForm/types";

const AdminCustomFontsFeaturedFullscreenTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<CustomFonsFeaturedFullScreen>
        data={FontsFeaturedFullscreenStore.CustomFontsFeaturedFullScreen}
        deleteAction={FontsFeaturedFullscreenStore.deleteFontFeaturedFullscreen}
        route={"/admin/CustomFontsFeaturedFullScreen"}
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

export default AdminCustomFontsFeaturedFullscreenTable;
