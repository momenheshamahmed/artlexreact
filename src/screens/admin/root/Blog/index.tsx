import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import BlogStore from "../../../../stores/BlogForm/index";
import { Blog } from "../../../../stores/BlogForm/types";

const AdminBlogTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<Blog>
        data={BlogStore.Blogs}
        deleteAction={BlogStore.deleteBlog}
        route={"/admin/blog"}
        tableData={[
          {
            inContent: true,
            key: "title",
            title: "Title",
            type: "text"
          },
          {
            inContent: true,
            key: "articleCategory",
            title: "Article Category",
            type: "text"
          },
        ]}
      />
    </div>
  ));
};

export default AdminBlogTable;
