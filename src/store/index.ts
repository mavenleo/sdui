import { createStore } from "vuex";
import { NewsFeedsState } from "@/types/news-feed-types";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

const state: NewsFeedsState = {
  newsFeeds: [],
  filteredNewsFeeds: [],
  filterOptions: {
    q: "",
    sortBy: {
      direction: "ASC",
      property: "",
    },
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
