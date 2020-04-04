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
            title: "Typeface File",
            type: "woff",
            isRequired: false
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
            key: "typefaceName",
            title: "Typeface Name",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "typefaceSorting",
            title: "Typeface Sorting",
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
            key: "typefaceCategory",
            title: "Typeface Category",
            type: "selecttypfacecategory",
            isRequired: true,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "showInFooter",
            title: "Show in Footer?",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceFeaturedFullScreen",
            title: "Featured Fullscreen?",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceFeaturedGrid",
            title: "Featured on Grid?",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceFeaturedGridNumber",
            title: "Featured Grid Number",
            type: "text",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceFeaturedGridNumberCover",
            title: "Featured Grid Image Cover",
            type: "image",
            isRequired: false,
            helper: "image"
          },
          {
            inContent: true,
            key: "typefaceFeaturedGridNumberHover",
            title: "Featured Grid Image Hover",
            type: "image",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceFeaturedTester",
            title: "Featured Tester?",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "typefaceDescription",
            title: "Typeface Description",
            type: "textarea",
            isRequired: true
          },
          {
            inContent: true,
            key: "languagesSupported",
            title: "Supported Languages?",
            type: "languages",
            isRequired: true
          },
          {
            inContent: true,
            key: "specimenFilePdf",
            title: "Specimen File",
            type: "pdf",
            isRequired: false
          },
          {
            inContent: true,
            key: "specimenFileText",
            title: "Specimen file",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "userAgreementPdf",
            title: "User Agreement File",
            type: "pdf",
            isRequired: false
          },
          {
            inContent: true,
            key: "userAgreementText",
            title: "User Agreement",
            type: "text",
            isRequired: false
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
            key: "familyStyles",
            title: "Family Styles Number",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "fullPackageImageStore",
            title: "Fullpackage store image",
            type: "image",
            isRequired: false
          },

          {
            inContent: true,
            key: "fullPackageStoreUrl",
            title: "Full package Store Url (gumroad)",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "pairFontImage",
            title: "Pair Font Image",
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
            key: "typefaceLinkInstgram",
            title: "Designer Instagram",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkPinterest",
            title: "Designer Pinterest",
            type: "text",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceLinkLinkedin",
            title: "Designer Linkedin",
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
            isRequired: false,
            helper: "Standard"
          },
          {
            inContent: true,
            key: "contextuaLalternates",
            title: "contextual alternates",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "discretionLigatures",
            title: "discretion ligatures",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "swash",
            title: "swash",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "fractions",
            title: "fractions",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticOne",
            title: "Stylistic 1",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticTwo",
            title: "Stylistic 2",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticThree",
            title: "Stylistic 3",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticFour",
            title: "Stylistic 4",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticFive",
            title: "Stylistic 5",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticSix",
            title: "Stylistic 6",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          },
          {
            inContent: true,
            key: "stylisticSeven",
            title: "Stylistic 7",
            type: "switch",
            isRequired: false,
            helper: "Select Category"
          }
        ]}
      />
    </div>
  ));
};

export default AdminTypefacesForm;
