import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import BlogFeaturedArticlesStore from "../../../../stores/BlogFeaturedArticlesForm/index";
import { BlogFeaturedArticle } from "../../../../stores/BlogFeaturedArticlesForm/types";

const AdminBlogFeaturedArticlesTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<BlogFeaturedArticle>
        data={BlogFeaturedArticlesStore.BlogFeaturedArticles}
        deleteAction={BlogFeaturedArticlesStore.deleteBlogFeaturedArticle}
        route={"/admin/blogfeaturedarticles"}
        tableData={[
          {
            inContent: true,
            key: "selectArticle.content.en.title",
            title: "Select Your Typeface",
            type: "text"
          }
        ]}
      />
    </div>
  ));
};

export default AdminBlogFeaturedArticlesTable;
