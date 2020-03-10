import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import TypefaceStore from "../../../../../stores/Typefaces/index";
import { Typeface } from "../../../../../stores/Typefaces/types";

const AdminTypefacesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<Typeface>
        addAction={TypefaceStore.addTypeface}
        editAction={TypefaceStore.editTypeface}
        data={TypefaceStore.Typefaces}
        formData={[
          // designerName: string;
          // version: string;
          // manufacturing: string;
          // copyright: string;
          // releaseDate: string;
          // {
          //   inContent: true,
          //   key: "fileFont",
          //   title: "File Font",
          //   type: "woff"
          // },
          {
            inContent: true,
            key: "typefaceName",
            title: "Typeface Name",
            type: "text"
          },
          {
            inContent: true,
            key: "typefaceDescription",
            title: "Typeface Description",
            type: "text"
          },
          {
            inContent: true,
            key: "designerName",
            title: "Designer Name",
            type: "text"
          },
          {
            inContent: true,
            key: "version",
            title: "Version",
            type: "text"
          },
          {
            inContent: true,
            key: "manufacturing",
            title: "Manufacturing",
            type: "text"
          },
          {
            inContent: true,
            key: "copyright",
            title: "Copyright",
            type: "text"
          },
          // {
          //   inContent: true,
          //   key: "releaseDate",
          //   title: "Release Date",
          //   type: "date"
          // },
          {
            inContent: true,
            key: "storeUrl",
            title: "Store Url",
            type: "text"
          },
          {
            inContent: true,
            key: "familyStyles",
            title: "Family Styles Number",
            type: "text"
          },
          {
            inContent: true,
            key: "typefaceTestWords",
            title: "Tester Words",
            type: "textarea"
          },
          {
            inContent: true,
            key: "galleryField",
            title: "Gallery",
            type: "gallery"
          },
          {
            inContent: true,
            key: "charactersImage",
            title: "characters",
            type: "image"
          },
          {
            inContent: true,
            key: "pairfonts",
            title: "Pair fonts",
            type: "pairfonts"
          },

        ]}
      />
    </div>
  ));
};

export default AdminTypefacesForm;
