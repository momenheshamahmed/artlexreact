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
          // basic info
          {
            inContent: true,
            key: "dividerforbasicinfo",
            title: "Basic Info",
            type: "divider",
            isRequired: false,
            helper: "please make sure to fille this basic info of the font."
          },
          {
            inContent: true,
            key: "websiteInternalURL",
            title: "Internal ID",
            type: "text",
            isRequired: true,
            helper: "please make sure it's a unique!!"
          },
          {
            inContent: true,
            key: "typefaceName",
            title: "Typeface Name",
            type: "text",
            isRequired: true,
            helper: "your typeface name"
          },
          {
            inContent: true,
            key: "typefaceDescription",
            title: "Typeface Description",
            type: "textarea",
            isRequired: true,
            helper: "the description of font"
          },
          {
            inContent: true,
            key: "familyStyles",
            title: "Family Styles Number",
            type: "text",
            isRequired: true,
            helper:
              "how many style in this font, don't forget to write 'STYLE' word"
          },

          {
            inContent: true,
            key: "typefaceCategory",
            title: "Typeface Category",
            type: "selecttypfacecategory",
            isRequired: true,
            helper: "to make filteration easier."
          },
          {
            inContent: true,
            key: "typefaceSorting",
            title: "Typeface Sorting",
            type: "text",
            isRequired: true,
            helper: "order is ascending"
          },
          {
            inContent: true,
            key: "fileFont",
            title: "Typeface File",
            type: "woff",
            isRequired: false,
            helper: "upload your file font  in woff type"
          },
          // font tester specs
          {
            inContent: true,
            key: "dividerfortester",
            title: "Tester",
            type: "divider",
            isRequired: false,
            helper:
              "only if you're uploaded a file font and want people to test it."
          },
          {
            inContent: true,
            key: "typefaceFeaturedTester",
            title: "Featured Tester?",
            type: "switch",
            isRequired: false,
            helper: "if free font do you want make it testable?"
          },
          {
            inContent: true,
            key: "typefaceTestWords",
            title: "Tester Words",
            type: "textarea",
            isRequired: true,
            helper: "write your words carefully."
          },
          // if the font is featured on fullscreen or it is custom font
          {
            inContent: true,
            key: "dividerforfullscreen",
            title: "Fullscreen",
            type: "divider",
            isRequired: false,
            helper:
              "if the font is featured on fullscreen or it is a custom font."
          },
          {
            inContent: true,
            key: "coverImage",
            title: "Cover Image",
            type: "image",
            isRequired: true,
            helper: "recommended size is XY"
          },
          {
            inContent: true,
            key: "typefaceFeaturedFullScreen",
            title: "Featured Fullscreen?",
            type: "switch",
            isRequired: false
          },
          // images fields
          {
            inContent: true,
            key: "dividerforimages",
            title: "Images",
            type: "divider",
            isRequired: false,
            helper:
              "upload your gallery images, you can add embeded video here with a description and make sure to upload char images."
          },
          {
            inContent: true,
            key: "galleryField",
            title: "Gallery",
            type: "gallery",
            isRequired: true,
            helper: "upload images for gallery"
          },
          {
            inContent: true,
            key: "embededVideo",
            title: "Embeded Video",
            type: "RichTextFieldEmbeded",
            isRequired: false,
            helper: "embeded video"
          },

          {
            inContent: true,
            key: "charactersImage",
            title: "characters",
            type: "image",
            isRequired: true,
            helper: "upload image for characters"
          },
          // for all fonts, if featured in grid on home
          {
            inContent: true,
            key: "dividerforfeatured",
            title: "On Grid?",
            type: "divider",
            isRequired: false,
            helper:
              "home has a grid, if you will make this font show there, please make sure upload its images, also you can show this font in footer or not, as you like."
          },
          {
            inContent: true,
            key: "typefaceFeaturedGrid",
            title: "Featured on home grid?",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "typefaceFeaturedGridNumberCover",
            title: "Featured Grid Image Cover",
            type: "image",
            isRequired: false,
            helper: "if above yes, upload cover image"
          },
          {
            inContent: true,
            key: "typefaceFeaturedGridNumberHover",
            title: "Featured Grid Image Hover",
            type: "image",
            isRequired: false,
            helper: "now, show what on hovering?"
          },

          {
            inContent: true,
            key: "showInFooter",
            title: "Show in Footer?",
            type: "switch",
            isRequired: false
          },

          // store info
          {
            inContent: true,
            key: "dividerforstore",
            title: "Store",
            type: "divider",
            isRequired: false,
            helper:
              "make sure to upload preview image for full-package font, and add url of gumroad store."
          },
          {
            inContent: true,
            key: "fullPackageImageStore",
            title: "Fullpackage store image",
            type: "image",
            isRequired: false,
            helper: "the full-package preview"
          },

          {
            inContent: true,
            key: "fullPackageStoreUrl",
            title: "Full package Store Url (gumroad)",
            type: "text",
            isRequired: false,
            helper: "gumroad full-package url"
          },
          // pair font info
          {
            inContent: true,
            key: "dividerforpair",
            title: "Pair Font",
            type: "divider",
            isRequired: false,
            helper:
              "upload image for if this font selected as paired, and select its parit fonts"
          },
          {
            inContent: true,
            key: "pairFontImage",
            title: "Pair Font Image",
            type: "image",
            isRequired: true,
            helper: "if selected as paired font, this image will show on cover"
          },

          {
            inContent: true,
            key: "pairfonts",
            title: "Pair fonts",
            type: "pairfonts",
            isRequired: false,
            helper: "select other pair fonts"
          },
          // lang supported and files (speciment & end-user agreement)
          {
            inContent: true,
            key: "dividerforlangfiles",
            title: "languages, files",
            type: "divider",
            isRequired: false,
            helper:
              "your supported languages, your speciment and font-user agreement"
          },
          {
            inContent: true,
            key: "languagesSupported",
            title: "Supported Languages?",
            type: "languages",
            isRequired: true,
            helper: "if no language supported, select no languages"
          },
          {
            inContent: true,
            key: "specimenFilePdf",
            title: "Specimen File",
            type: "pdf",
            isRequired: false,
            helper: "upload the specimen pdf file"
          },
          {
            inContent: true,
            key: "specimenFileText",
            title: "Specimen file",
            type: "text",
            isRequired: false,
            helper: "if specimen file huge, you can add a link."
          },
          {
            inContent: true,
            key: "userAgreementPdf",
            title: "User Agreement File",
            type: "pdf",
            isRequired: false,
            helper: "upload the user agreement file pdf"
          },
          {
            inContent: true,
            key: "userAgreementText",
            title: "User Agreement",
            type: "text",
            isRequired: false,
            helper: "if user agreement file huge, you can add a link."
          },
          // font info and designer info
          {
            inContent: true,
            key: "dividerforinfo",
            title: "Info Section",
            type: "divider",
            isRequired: false,
            helper: "designer url and other info"
          },
          {
            inContent: true,
            key: "version",
            title: "Version",
            type: "text",
            isRequired: true,
            helper: "version of this font?"
          },
          {
            inContent: true,
            key: "manufacturing",
            title: "Manufacturing",
            type: "text",
            isRequired: true,
            helper: "manufacturing is?"
          },
          {
            inContent: true,
            key: "copyright",
            title: "Copyright",
            type: "text",
            isRequired: true,
            helper: "the copyright back to who?"
          },
          {
            inContent: true,
            key: "releaseDate",
            title: "Release Date",
            type: "text",
            isRequired: true,
            helper: "when you released this font?"
          },
          {
            inContent: true,
            key: "designerName",
            title: "Designer Name",
            type: "text",
            isRequired: true,
            helper: "who is the designer"
          },
          {
            inContent: true,
            key: "typefaceLinkFacebook",
            title: "Designer Facebook",
            type: "text",
            isRequired: false,
            helper: "designer facebook profile"
          },
          {
            inContent: true,
            key: "typefaceLinkBehance",
            title: "Designer Behance",
            type: "text",
            isRequired: false,
            helper: "designer behance profile"
          },
          {
            inContent: true,
            key: "typefaceLinkDribbble",
            title: "Designer Dribbble",
            type: "text",
            isRequired: false,
            helper: "designer dribble profile"
          },
          {
            inContent: true,
            key: "typefaceLinkTwitter",
            title: "Designer Twitter",
            type: "text",
            isRequired: false,
            helper: "designer twitter profile"
          },
          {
            inContent: true,
            key: "typefaceLinkInstgram",
            title: "Designer Instagram",
            type: "text",
            isRequired: false,
            helper: "designer instagram profile"
          },
          {
            inContent: true,
            key: "typefaceLinkPinterest",
            title: "Designer Pinterest",
            type: "text",
            isRequired: false,
            helper: "designer pinterest profile"
          },
          {
            inContent: true,
            key: "typefaceLinkLinkedin",
            title: "Designer Linkedin",
            type: "text",
            isRequired: false,
            helper: "designer linkedin profile"
          },
          {
            inContent: true,
            key: "typefaceLinkWebsite",
            title: "Designer Website",
            type: "text",
            isRequired: false,
            helper: "designer website link"
          },
          {
            inContent: true,
            key: "dividerforfeatures",
            title: "Font Features",
            type: "divider",
            isRequired: false,
            helper: "what's featured you want on this font?"
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
