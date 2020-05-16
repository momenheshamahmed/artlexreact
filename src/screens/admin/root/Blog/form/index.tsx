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
            isRequired: true,
            helper: "please make sure it's a unique!!"
          },
          {
            inContent: true,
            key: "image1",
            title: "Your Cover Image",
            type: "image",
            isRequired: true,
            helper: "recommended size is XY"
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
            isRequired: true,
            helper: "'it's ascending order"
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
            isRequired: true,
            helper: "min is 1, max is 4"
          },
          {
            inContent: true,
            key: "gridNumberRows",
            title: "Grid Number Rows",
            type: "text",
            isRequired: true,
            helper: "min is 1, max is 4"
          },
          {
            inContent: true,
            key: "articleCategory",
            title: "Article Category",
            type: "selectarticlecategory",
            isRequired: true,
            helper: "to make filteration easier."
          },
          {
            inContent: true,
            key: "relatedArticles",
            title: "Select Related Articles",
            type: "relatedarticles",
            isRequired: true,
            helper: "if there no related articles, please select 'no related'"
          },

          {
            inContent: true,
            key: "thumbnialImage",
            title: "Your Thumbnial Image",
            type: "image",
            isRequired: true,
            helper: "size is based on rows and cols."
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
