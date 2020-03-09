import { Languages } from "../../utils/translation/index";

export interface Episode {
  key: string;
  id: number;
  content: Record<Languages, EpisodeContent>;
  // imgUrl: string;
  // typefaceurl: string;
  // typefacename?: string;
  // description?: string;
  // typefacelanguages?: string;
  // charactersenabled?: boolean;
  // family?: string;
  // familytext?: string;
  // release?: string;
  // releasedate?: string;
  // designername?: string;
  // designerlinks?: string;
  // version?: string;
  // manufuctring?: string;
  // copyright?: string;
  // date?: string;
  // fontWeights?: object[];
  // fontinuse?: FontinuseInterface[];
}

export interface EpisodeContent {
  galleryField: (string | File | null)[];
  copyright: string;
}

export interface FontinuseInterface {
  key?: string;
  title?: string;
  items?: Fontinuseitem[];
}
export interface Fontinuseitem {
  key: string;
  title: string;
  type: string;
}
// tslint:disable-next-line: interface-name
export interface Typefacelanguages {
  id: string;
  name: string;
}
