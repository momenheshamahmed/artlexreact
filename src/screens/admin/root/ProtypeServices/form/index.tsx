import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import ProtypeServicesStore from "../../../../../stores/ProtypeServicesForm/index";
import { ProtypeServices } from "../../../../../stores/ProtypeServicesForm/types";

const AdminProtypeServicesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<ProtypeServices>
        addAction={ProtypeServicesStore.addProtypeServices}
        editAction={ProtypeServicesStore.editProtypeServices}
        data={ProtypeServicesStore.ProtypeServicess}
        formData={[
          {
            inContent: true,
            key: "gallery1",
            title: "Your Gallery Image",
            type: "gallery",
            isRequired: true
          },
          {
            inContent: true,
            key: "richEditor1",
            title: "Write Your Content",
            type: "RichTextField",
            isRequired: true
          },
          {
            inContent: true,
            key: "gallery2",
            title: "Your Gallery Image",
            type: "gallery",
            isRequired: true
          },
          {
            inContent: true,
            key: "richEditor2",
            title: "Write Your Content",
            type: "RichTextField",
            isRequired: true
          },
        ]}
      />
    </div>
  ));
};

export default AdminProtypeServicesForm;
