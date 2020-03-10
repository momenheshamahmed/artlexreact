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
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceCategory",
            title: "Typeface Category",
            type: "selecttypfacecategory",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceDescription",
            title: "Typeface Description",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "designerName",
            title: "Designer Name",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "version",
            title: "Version",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "manufacturing",
            title: "Manufacturing",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "copyright",
            title: "Copyright",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "releaseDate",
            title: "Release Date",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "storeUrl",
            title: "Store Url",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "familyStyles",
            title: "Family Styles Number",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceTestWords",
            title: "Tester Words",
            type: "textarea",
            isRequired: true
          },
          {
            inContent: true,
            key: "galleryField",
            title: "Gallery",
            type: "gallery",
            isRequired: true
          },
          {
            inContent: true,
            key: "charactersImage",
            title: "characters",
            type: "image",
            isRequired: true
          },
          {
            inContent: true,
            key: "pairfonts",
            title: "Pair fonts",
            type: "pairfonts",
            isRequired: false
          },

          {
            inContent: true,
            key: "typefaceLinkFacebook",
            title: "Designer Facebook",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkBehance",
            title: "Designer Behance",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkDribbble",
            title: "Designer Dribbble",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkTwitter",
            title: "Designer Twitter",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkWebsite",
            title: "Designer Website",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "openTypeFeatureOne",
            title: "Open Type Feature One",
            type: "switch",
            isRequired: false
          },

          {
            inContent: true,
            key: "openTypeFeatureTwo",
            title: "Open Type Feature Two",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "openTypeFeatureThree",
            title: "Open Type Feature Three",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "openTypeFeatureFour",
            title: "Open Type Feature Four",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "openTypeFeatureFive",
            title: "Open Type Feature Five",
            type: "switch",
            isRequired: false
          },
        ]}
      />
    </div>
  ));
};

export default AdminTypefacesForm;
