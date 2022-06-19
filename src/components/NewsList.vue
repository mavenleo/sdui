<template>
  <div>
    <div class="col-md-8 offset-2 card border rounded content-wrapper p-5">
      <div class="d-flex justify-content-between align-content-end">
        <Filter />

        <div>
          <button class="btn btn-primary" @click="showNewsFeedForm = true">
            Post feed
          </button>
        </div>
      </div>

      <div class="feeds border rounded mt-4">
        <div v-if="!newsFeeds.length" class="p-5 alert alert-info">
          No record found.
        </div>
        <div v-else>
          <NewsFeedCard
            v-for="feed in newsFeeds"
            @edit:feed="
              () => {
                selectedFeed = feed;
                showNewsFeedForm = true;
              }
            "
            :key="feed.id"
            :feed="feed"
          />
        </div>
      </div>

      <LightBox
        :title="dialogTitle"
        @lightbox:close="showNewsFeedForm = false"
        :showDialog="showNewsFeedForm"
      >
        <NewsFeedForm
          :feed="selectedFeed"
          :key="Date.now()"
          @form:submitted="
            () => {
              showNewsFeedForm = false;
              selectedFeed = null;
            }
          "
        />
      </LightBox>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import LightBox from "./LightBox";
import NavBar from "./NavBar";
import NewsFeedCard from "./NewsFeedCard";
import NewsFeedForm from "./NewsFeedForm";
import Filter from "./Filter";
import { mapState } from "vuex";

@Options({
  name: "NewsFeeds",
  components: { LightBox, NavBar, NewsFeedCard, NewsFeedForm, Filter },
  computed: {
    ...mapState({
      newsFeeds: "filteredNewsFeeds",
    }),
  },
  mounted() {
    this.$store.dispatch("filterFeeds");
  },
  data() {
    return {
      showNewsFeedForm: false,
      dialogTitle: "Create news feed",
      selectedFeed: null,
    };
  },
})
export default class NewsFeeds extends Vue {}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: #ffffff9c;
  border: 1px solid #d8e4f1 !important;
}
.feeds {
  background: #f4f7fb;
  height: 500px;
  overflow-y: auto;
}
.filter-input-width {
  width: 150px;
}
</style>
