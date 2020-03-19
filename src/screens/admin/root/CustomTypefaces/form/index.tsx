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
            key: "CustomTypefaceName",
            title: "CustomTypeface Name",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "CustomTypefaceDescription",
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
            key: "familyStyles",
            title: "Family Styles Number",
            type: "text",
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
            key: "coverImage",
            title: "Cover Image",
            type: "image",
            isRequired: true
          },
          {
            inContent: true,
            key: "specimenFile",
            title: "specimenFile",
            type: "pdf",
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
            key: "CustomTypefaceLinkFacebook",
            title: "Designer Facebook",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "CustomTypefaceLinkBehance",
            title: "Designer Behance",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "CustomTypefaceLinkDribbble",
            title: "Designer Dribbble",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "CustomTypefaceLinkTwitter",
            title: "Designer Twitter",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "CustomTypefaceLinkWebsite",
            title: "Designer Website",
            type: "text",
            isRequired: false
          }
        ]}
      />
    </div>
  ));
};

export default AdminCustomTypefacesForm;
