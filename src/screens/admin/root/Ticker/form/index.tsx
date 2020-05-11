import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import TickerStore from "../../../../../stores/TickerForm/index";
import { Ticker } from "../../../../../stores/TickerForm/types";

const AdminTickerForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<Ticker>
        addAction={TickerStore.addTicker}
        editAction={TickerStore.editTicker}
        data={TickerStore.Tickers}
        formData={[
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "href",
            title: "URL",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "order",
            title: "Order",
            type: "text",
            isRequired: true
          }
        ]}
      />
    </div>
  ));
};

export default AdminTickerForm;
