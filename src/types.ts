export interface props {
  children: JSX.Element | JSX.Element[];
}
export type MovieItemsProps = {
  title: string;
  releaseDate?: string;
  imgURL: string;
};
export type FeatureProps = {
  hiddenCondition?: string;
};
export type BtnProps = {
  hasBorder: boolean;
  btnContent: string;
  backgroundColor?: string;
};
export type NavbarProps = {
  hiddenCondition?: string;
  absolute: boolean;
};
export interface apiParams {}

export interface DetailType {
  aliasName: string;
  areaList: { id: number; name: string }[];
  areaNameList: string[];
  category: number;
  collect: boolean;
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  drameTypeVo: {
    drameName: string;
    drameType: string;
  };
  episodeCount?: any;
  episodeVo: {
    definitionList: {
      code: string;
      description: string;
      fullDescription: string;
    }[];
    id: number;
    name: string;
    resourceType: number;
    seriesNo: number;
    subtitlingList: {
      language: string;
      languageAbbr: string;
      subtitlingUrl: string;
      translateType: number;
    }[];
    vid: string;
  }[];
  id: string;
  introduction: string;
  likeList: {
    areaList: {
      id: number;
      name: string;
    }[];
    areaNameList: string[];
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    score: number;
    tagList: {
      id: number;
      name: string;
    }[];
    tagNameList: string[];
    upImgUrl: string;
    upName: string;
    year: number;
  }[];
  name: string;
  refList: {
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    seriesNo: number;
  }[];
  reserved: boolean;
  score: number;
  seriesNo: number;
  showSetName: boolean;
  tagList: {
    id: number;
    name: string;
  }[];
  tagNameList: string[];
  translateType: number;
  upInfo: {
    upId: number;
    upImgUrl: string;
    upName: string;
  };
  updateInfo?: any;
  year: number;
}

export interface HomeSection {
  bannerProportion?: any;
  coverType?: any;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: {
    contentType: string;
    id: number;
    imageUrl: string;
    jumpAddress: string;
    jumpType: string;
    needLogin: boolean;
    resourceNum?: any;
    resourceStatus?: any;
    showMark: boolean;
    title: string;
  }[];
  refId?: any;
  refRedirectUrl: string;
}
export interface SearchConfig {
  id: number;
  name: string;
  params: string;
  screeningItems: {
    id?: number;
    items: {
      name: string;
      params: string;
      screeningType: string;
    }[];
    name: string;
  }[];
}
export interface CategoryItemType {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
  sort: string;
}
export interface HomeSliderListProps {
  category?: number;
  contentType: string;
  id: number;
  imageUrl: string;
  jumpAddress: string;
  jumpType: string;
  needLogin: boolean;
  resourceNum?: number | null;
  resourceStatus?: number;
  showMark: boolean;
  title: string;
}
