import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import EpisodeStore from "../../../../../stores/Episodes/index";
import { Episode } from "../../../../../stores/Episodes/types";
import MiniDrawer from "../../../../../components/adminComponents/Drawer";

const AdminEpisodesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <MiniDrawer />
      <GeneralFormComponent<Episode>
        addAction={EpisodeStore.addEpisode}
        editAction={EpisodeStore.editEpisode}
        data={EpisodeStore.Episodes}
        formData={[
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text"
          },
          {
            inContent: true,
            key: "imgURL",
            title: "Image",
            type: "image"
          },
          {
            inContent: true,
            key: "audioURL",
            title: "Audio",
            type: "audio"
          }
        ]}
      />
    </div>
  ));
};

export default AdminEpisodesForm;
