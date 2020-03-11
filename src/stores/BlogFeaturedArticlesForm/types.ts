import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface BlogFeaturedArticle {
  key: string;
  id: number;
  content: Record<Languages, BlogFeaturedArticleContent>;
}

// tslint:disable-next-line: interface-name
export interface BlogFeaturedArticleContent {
  selectArticle: Array<string | File | null>;
}
