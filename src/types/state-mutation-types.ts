import { NewsFeedsState, NewsFeed } from "@/types/news-feed-types";
import { MutationEnum } from "@/enums/mutation-enum";

export type MutationTypes<S = NewsFeedsState> = {
  [MutationEnum.ADD_FEED](state: S, payload: NewsFeed): void;

  [MutationEnum.UPDATE_FEED](state: S, payload: NewsFeed): void;

  [MutationEnum.SAVE_FILTER_OPTIONS](
    state: S,
    payload: {
      q: string;
      sortBy: {
        property: string;
        direction: string;
      };
    }
  ): void;

  [MutationEnum.FILTER_FEEDS](state: S): void;
};
