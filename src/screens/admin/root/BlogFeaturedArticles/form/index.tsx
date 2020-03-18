import React from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";

import BlogFeaturedArticlesStore from "../../../../../stores/BlogFeaturedArticlesForm/index";
import { BlogFeaturedArticle } from "../../../../../stores/BlogFeaturedArticlesForm/types";

const AdminBlogFeaturedArticlesForm: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralFormComponent<BlogFeaturedArticle>
        addAction={BlogFeaturedArticlesStore.addBlogFeaturedArticle}
        editAction={BlogFeaturedArticlesStore.editBlogFeaturedArticle}
        data={BlogFeaturedArticlesStore.BlogFeaturedArticles}
        formData={[
          {
            inContent: true,
            key: "selectArticle",
            title: "Select Article",
            type: "selectarticle",
            isRequired: true
          }
        ]}
      />
    </div>
  ));
};

export default AdminBlogFeaturedArticlesForm;
