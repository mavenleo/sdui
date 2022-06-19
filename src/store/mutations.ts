import { MutationTree } from "vuex";
import { NewsFeed, NewsFeedsState } from "@/types/news-feed-types";
import { MutationTypes } from "@/types/state-mutation-types";
import { MutationEnum } from "@/enums/mutation-enum";

// declare mutations
const mutations: MutationTree<NewsFeedsState> & MutationTypes = {
  [MutationEnum.ADD_FEED](state: NewsFeedsState, payload: NewsFeed) {
    state.newsFeeds.push(payload);
  },

  [MutationEnum.UPDATE_FEED](state: NewsFeedsState, payload: NewsFeed) {
    const feedIndex = state.newsFeeds.findIndex(
      (feed: NewsFeed) => feed.id === payload.id
    );
    state.newsFeeds[feedIndex] = payload;
    state.newsFeeds = [...state.newsFeeds];
  },

  [MutationEnum.SAVE_FILTER_OPTIONS](
    state: NewsFeedsState,
    payload: {
      q: string;
      sortBy: {
        property: string;
        direction: string;
      };
    }
  ) {
    state.filterOptions = payload;
  },

  [MutationEnum.FILTER_FEEDS](state: NewsFeedsState) {
    let feeds = [...state.newsFeeds];
    const filter = state.filterOptions;

    if (filter.q) {
      feeds = feeds.filter((v: NewsFeed) =>
        v.title.toLowerCase().includes(filter.q.toLowerCase())
      );
    }

    if (filter.sortBy.property) {
      feeds = feeds.sort((a: NewsFeed, b: NewsFeed) => {
        const property = filter.sortBy.property;
        const direction = filter.sortBy.direction === "ASC" ? 1 : -1;

        const result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;

        return result * direction;
      });
    }

    state.filteredNewsFeeds = [...feeds];
  },
};

export default mutations;
