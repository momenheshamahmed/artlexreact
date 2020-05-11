import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import TickerStore from "../../../../stores/TickerForm/index";
import { Ticker } from "../../../../stores/TickerForm/types";

const AdminTickerTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<Ticker>
        data={TickerStore.Tickers}
        deleteAction={TickerStore.deleteTicker}
        route={"/admin/ticker"}
        tableData={[
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text"
          },
          {
            inContent: true,
            key: "href",
            title: "href",
            type: "text"
          },
          {
            inContent: true,
            key: "order",
            title: "Order",
            type: "text"
          },

        ]}
      />
    </div>
  ));
};

export default AdminTickerTable;
