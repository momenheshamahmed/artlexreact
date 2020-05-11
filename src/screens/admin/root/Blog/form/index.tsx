import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

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
            key: "sortArticle",
            title: "Sorting",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "featuredHome",
            title: "Featured Home?",
            type: "switch",
            isRequired: false
          },
          {
            inContent: true,
            key: "gridNumberCols",
            title: "Grid Number Cols",
            type: "text",
            isRequired: true
          },
          {
            inContent: true,
            key: "gridNumberRows",
            title: "Grid Number Rows",
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
            key: "relatedArticles",
            title: "Select Related Articles",
            type: "relatedarticles",
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
            key: "thumbnialImage",
            title: "Your Thumbnial Image",
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
