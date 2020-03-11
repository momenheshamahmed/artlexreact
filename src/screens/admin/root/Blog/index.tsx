import React from "react";
import GeneralTableComponent from "../../../../components/GeneralTableComponent";
import { useObserver } from "mobx-react";

import BlogStore from "../../../../stores/BlogForm/index";
import { Blog } from "../../../../stores/BlogForm/types";

const AdminBlogTable: React.FC = () => {
  return useObserver(() => (
    <div>
      <GeneralTableComponent<Blog>
        data={BlogStore.Blog}
        deleteAction={BlogStore.deleteBlog}
        route={"/admin/blog"}
        tableData={[
          {
            inContent: true,
            key: "selectTypeface",
            title: "Select Your Typeface",
            type: "selecttypface"
          }
        ]}
      />
    </div>
  ));
};

export default AdminBlogTable;
