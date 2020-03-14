import { Blog } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class BlogStore {
  @observable public Blogs: Blog[] = [];

  @action
  public addBlog = async (value: Omit<Blog, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/blog");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      console.log(error)
      return Promise.reject();
    }
  };

  @action
  public editBlog = async (
    key: string,
    value: Omit<Blog, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`blog/${value.content.en.articleCategory}/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteBlog = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`blog/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchBlogs = () => {
    const dbRef = database().ref("/blog");
    dbRef.on("value", snapshot => {
      const data: Record<string, Blog> = snapshot.val();
      if (data) {
        const mappedData: Blog[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.Blogs = mappedData;
      }
    });
  };
}

export default new BlogStore();
