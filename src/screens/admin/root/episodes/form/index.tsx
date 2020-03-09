import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import EpisodeStore from "../../../../../stores/Episodes/index";
import { Episode } from "../../../../../stores/Episodes/types";
import NewFormComponent from "../../Typefaces/Newform";

const AdminEpisodesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<Episode>
        addAction={EpisodeStore.addEpisode}
        editAction={EpisodeStore.editEpisode}
        data={EpisodeStore.Episodes}
        formData={[
          // {
          //   inContent: true,
          //   key: "imgUrl",
          //   title: "Image Url",
          //   type: "image"
          // },
          // {
          //   inContent: true,
          //   key: "typefacename",
          //   title: "Typeface name",
          //   type: "text"
          // },
          // {
          //   inContent: true,
          //   key: "description",
          //   title: "Description",
          //   type: "textarea"
          // },
          // {
          //   inContent: true,
          //   key: "typefacelanguages",
          //   title: "Font Languages",
          //   type: "textarea"
          // },
          // {
          //   inContent: true,
          //   key: "family",
          //   title: "Family",
          //   type: "text"
          // },

          // {
          //   inContent: true,
          //   key: "releasedate",
          //   title: "Release Date",
          //   type: "date"
          // },
          // {
          //   inContent: true,
          //   key: "charactersenabled",
          //   title: "Characters",
          //   type: "switch",
          //   switchValue: false
          // },

          // {
          //   inContent: true,
          //   key: "designername",
          //   title: "Designer Name",
          //   type: "text"
          // },

          // {
          //   inContent: true,
          //   key: "version",
          //   title: "Version",
          //   type: "text"
          // },
          // {
          //   inContent: true,
          //   key: "manufuctring",
          //   title: "manufuctring",
          //   type: "text"
          // },
          {
            inContent: true,
            key: "copyright",
            title: "copyright",
            type: "text"
          },
          // {
          //   inContent: true,
          //   key: "editorState",
          //   title: "copyright",
          //   type: "editor"
          // },
          // {
          //   inContent: true,
          //   key: "fontinuse",
          //   title: "copyright",
          //   type: "gallery"
          // },
          // {
          //   inContent: true,
          //   key: "selectpairfonts",
          //   title: "copyright",
          //   type: "select"
          // },
          {
            inContent: true,
            key: "fontinuse",
            title: "Font Weights",
            type: "items",
            items: [
              {
               key: "weight2", type: "text", title: "texxt"
              },
              { key: "weight1", type: "text", title: "texxt" },
              { key: "weight3 ", type: "image", title: "texxt" },
              // { key: "weight4 ", type: "text", title: "texxt" },

            ]
          }
        ]}
      />
    </div>
  ));
};

export default AdminEpisodesForm;
