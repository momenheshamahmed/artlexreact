import { BlogFeaturedArticle } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class BlogFeaturedArticleStore {
  @observable public BlogFeaturedArticles: BlogFeaturedArticle[] = [];

  @action
  public addBlogFeaturedArticle = async (value: Omit<BlogFeaturedArticle, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/blogfeaturedarticles/");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editBlogFeaturedArticle = async (
    key: string,
    value: Omit<BlogFeaturedArticle, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`blogfeaturedarticles/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteBlogFeaturedArticle = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`blogfeaturedarticles/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchBlogFeaturedArticles = () => {
    const dbRef = database().ref("/blogfeaturedarticles");
    dbRef.on("value", snapshot => {
      const data: Record<string, BlogFeaturedArticle> = snapshot.val();
      if (data) {
        const mappedData: BlogFeaturedArticle[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.BlogFeaturedArticles = mappedData;
      }
    });
  };
}

export default new BlogFeaturedArticleStore();
