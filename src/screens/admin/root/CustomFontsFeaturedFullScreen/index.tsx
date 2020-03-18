import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import FontsFeaturedFullscreenStore from "../../../../stores/CustomFontsFeaturedFullscreenForm/index";
import { CustomFontFeaturedFullScreen } from "../../../../stores/CustomFontsFeaturedFullscreenForm/types";

const AdminCustomFontsFeaturedFullscreenTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<CustomFontFeaturedFullScreen>
        data={FontsFeaturedFullscreenStore.CustomFontsFeaturedFullScreen}
        deleteAction={FontsFeaturedFullscreenStore.deleteCustomFontFeaturedFullScreen}
        route={"/admin/customfontsfeaturedfullscreen"}
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
