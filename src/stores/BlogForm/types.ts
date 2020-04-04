import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Blog {
  key: string;
  id: number;
  content: Record<Languages, BlogContent>;
}

// tslint:disable-next-line: interface-name
export interface BlogContent {
  articleInternalURL: string;
  title: string;
  gridNumberCols: string;
  gridNumberRows: string;
  image1: string;
  thumbnialImage: string;
  articleCategory: string;
  richEditor1: string;
  relatedArticles: Array<string | object |null>;
  sortArticle: string;
  featuredHome: boolean;
}
