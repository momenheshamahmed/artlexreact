import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import CustomTypefacestore from "../../../../../stores/CustomTypefaces/index";
import { CustomTypeface } from "../../../../../stores/CustomTypefaces/types";

const AdminCustomTypefacesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<CustomTypeface>
        addAction={CustomTypefacestore.addTypeface}
        editAction={CustomTypefacestore.editTypeface}
        data={CustomTypefacestore.CustomTypefaces}
        formData={[
          {
            inContent: true,
            key: "websiteInternalURL",
            title: "Internal ID",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "fileFont",
            title: "CustomTypeface File",
            type: "woff",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceName",
            title: "CustomTypeface Name",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceCategory",
            title: "CustomTypeface Category",
            type: "selecttypfacecategory",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceDescription",
            title: "CustomTypeface Description",
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
            key: "standardLigatures",
            title: "Standard Ligatures",
            type: "switch",
            isRequired: false
          },

          {
            inContent: true,
            key: "contextuaLalternates",
            title: "contextual alternates",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "discretionLigatures",
            title: "discretion ligatures",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "swash",
            title: "swash",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "fractions",
            title: "fractions",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticOne",
            title: "Stylistic 1",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticTwo",
            title: "Stylistic 2",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticThree",
            title: "Stylistic 3",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticFour",
            title: "Stylistic 4",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticFive",
            title: "Stylistic 5",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticSix",
            title: "Stylistic 6",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "stylisticSeven",
            title: "Stylistic 7",
            type: "switch",
            isRequired: false
          }
        ]}
      />
    </div>
  ));
};

export default AdminCustomTypefacesForm;
