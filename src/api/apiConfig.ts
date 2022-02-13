import { apiParams, DetailType, SearchConfig } from "../types";
import axios from "./axios";

export const searchConfig = async (): Promise<SearchConfig[]> => {
  return (await axios.get("search/list")).data.data;
};

export const apiMethod = {
  getHome: async (page: number = 0) => {
    return (
      await axios.get("/homePage/getHome", {
        params: {
          page,
        },
      })
    ).data.data.recommendItems.filter((item: any) => item.coverType);
  },

  getMedia: (params: apiParams) => {
    const url = `/media/previewInfo`;
    return axios.get(url, params);
  },
  advancedSearch: async (
    params: string,
    configs: { [key: string]: any },
    sort: string
  ) => {
    return (
      await axios.post("search/v1/search", {
        params,
        size: 20,
        ...configs,
        sort,
      })
    ).data.data.searchResults;
  },
  getMovieDetails: async (id: string) => {
    const data = (
      await axios.get("movieDrama/get", {
        params: {
          id,
          category: 0,
        },
      })
    ).data.data;
    const sources = (
      await Promise.all(
        data.episodeVo[0].definitionList.map(
          async (quality: any) =>
            (
              await axios.get("media/previewInfo", {
                params: {
                  category: 0,
                  contentId: id,
                  episodeId: data.episodeVo[0].id,
                  definition: quality.code,
                },
              })
            ).data.data.mediaUrl
        )
      )
    )
      .map((url, index) => ({
        quality: Number(
          data.episodeVo[0].definitionList[index].description
            .toLowerCase()
            .replace("p", "")
        ),
        url,
      }))
      .sort((a, b) => b.quality - a.quality);

    const subtitles = data.episodeVo[0].subtitlingList
      .map((sub: any) => ({
        language: `${sub.language}${sub.translateType ? " (Auto)" : ""}`,
        url: sub.subtitlingUrl,
        lang: sub.languageAbbr,
      }))
      .reduce((acc: any, element: any) => {
        if (element.lang === "en") {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .reduce((acc: any, element: any) => {
        if (element.lang === "vi") {
          return [element, ...acc];
        }
        return [...acc, element];
      }, []);
    return {
      data,
      sources,
      subtitles,
    };
  },
  getTvDetails: async (id: string, episodeIndex: number) => {
    const data = (
      await axios.get("movieDrama/get", {
        params: {
          id,
          category: 1,
        },
      })
    ).data.data;

    const sources = (
      await Promise.all(
        data.episodeVo[episodeIndex].definitionList.map(
          async (quality: any) =>
            (
              await axios.get("media/previewInfo", {
                params: {
                  category: 1,
                  contentId: id,
                  episodeId: data.episodeVo[episodeIndex].id,
                  definition: quality.code,
                },
              })
            ).data.data.mediaUrl
        )
      )
    )
      .map((url, index) => ({
        quality: Number(
          data.episodeVo[episodeIndex].definitionList[index].description
            .toLowerCase()
            .replace("p", "")
        ),
        url,
      }))
      .sort((a, b) => b.quality - a.quality);

    const subtitles = data.episodeVo[episodeIndex].subtitlingList
      .map((sub: any) => ({
        language: `${sub.language}${sub.translateType ? " (Auto)" : ""}`,
        url: sub.subtitlingUrl,
        lang: sub.languageAbbr,
      }))
      .reduce((acc: any, element: any) => {
        if (element.lang === "en") {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .reduce((acc: any, element: any) => {
        if (element.lang === "vi") {
          return [element, ...acc];
        }
        return [...acc, element];
      }, []);

    return {
      data,
      sources,
      subtitles,
    };
  },
  getCategoryItems: async (categoryId: string, sort: string) => {
    return (
      await axios.post("search/v1/search", {
        size: 20,
        params: "",
        category: categoryId,
        sort,
      })
    ).data.data.searchResults;
  },
};
