<template>
  <div>
    <div
      class="d-flex align-content-end justify-content-between my-2 my-lg-0 col-md-9"
    >
      <div class="form-group">
        <div class="text-muted text-start">Search</div>
        <input
          class="form-control filter-input-width me-3"
          type="search"
          v-model="searchValue"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <div class="text-muted text-start">Select property</div>
        <div>
          <select
            :aria-expanded="true"
            class="form-control filter-input-width me-1"
            v-model="sortBy.property"
          >
            <option
              v-for="(prop, i) in sortByProperties"
              :key="i"
              :value="prop"
            >
              {{ prop }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="text-muted text-start">Select direction</div>
        <div>
          <select
            class="form-control filter-input-width"
            v-model="sortBy.direction"
          >
            <option
              v-for="(direction, i) in sortByDirections"
              :key="`dir${i}`"
              :value="direction"
            >
              {{ direction }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "FilterFeeds",
  data() {
    return {
      searchValue: "",
      sortBy: {
        direction: "ASC",
      },
      sortByProperties: ["title", "body", "author"],
      sortByDirections: ["ASC", "DESC"],
    };
  },
  watch: {
    searchValue() {
      this.$store.dispatch("saveFilterOptions", {
        q: this.searchValue,
        sortBy: this.sortBy,
      });
    },
    "sortBy.property"() {
      this.$store.dispatch("saveFilterOptions", {
        q: this.searchValue,
        sortBy: this.sortBy,
      });
    },
    "sortBy.direction"() {
      this.$store.dispatch("saveFilterOptions", {
        q: this.searchValue,
        sortBy: this.sortBy,
      });
    },
  },
})
export default class FilterFeeds extends Vue {}
</script>

<style lang="scss" scoped>
.filter-input-width {
  width: 150px;
}
</style>
