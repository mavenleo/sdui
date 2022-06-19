import { Commit } from "vuex";
import { MutationEnum } from "@/enums/mutation-enum";
import { NewsFeed } from "@/types/news-feed-types";

const actions = {
  addFeed({ commit }: { commit: Commit }, payload: NewsFeed): void {
    commit(MutationEnum.ADD_FEED, payload);
    commit(MutationEnum.FILTER_FEEDS);
  },
  updateFeed({ commit }: { commit: Commit }, payload: NewsFeed): void {
    commit(MutationEnum.UPDATE_FEED, payload);
    commit(MutationEnum.FILTER_FEEDS);
  },
  saveFilterOptions(
    { commit }: { commit: Commit },
    payload: {
      q: string;
      sortBy: {
        property: string;
        direction: string;
      };
    }
  ): void {
    commit(MutationEnum.SAVE_FILTER_OPTIONS, payload);
    commit(MutationEnum.FILTER_FEEDS);
  },
  filterFeeds({ commit }: { commit: Commit }): void {
    commit(MutationEnum.FILTER_FEEDS);
  },
};

export default actions;
