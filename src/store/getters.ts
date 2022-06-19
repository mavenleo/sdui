import { GetterTree } from "vuex";
import { NewsFeedsState } from "@/types/news-feed-types";

const Getters: GetterTree<NewsFeedsState, any> = {
  newsFeedsCount(state) {
    return state.newsFeeds.length;
  },
};

export default Getters;
