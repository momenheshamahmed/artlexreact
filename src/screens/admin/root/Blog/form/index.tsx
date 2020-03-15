import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import BlogStore from "../../../../../stores/BlogForm/index";
import { Blog } from "../../../../../stores/BlogForm/types";

const AdminBlogForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<Blog>
        addAction={BlogStore.addBlog}
        editAction={BlogStore.editBlog}
        data={BlogStore.Blogs}
        formData={[
          {
            inContent: true,
            key: "articleInternalURL",
            title: "Article Internal URL",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "title",
            title: "title",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "gridNumber",
            title: "Grid Number",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "articleCategory",
            title: "Article Category",
            type: "selectarticlecategory",
            isRequired: true
          },
          {
            inContent: true,
            key: "image1",
            title: "Your Cover Image",
            type: "image",
            isRequired: true
          },
          {
            inContent: true,
            key: "richEditor1",
            title: "Write Your Content",
            type: "RichTextField",
            isRequired: true
          }
        ]}
      />
    </div>
  ));
};

export default AdminBlogForm;
