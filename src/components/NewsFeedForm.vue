<template>
  <div>
    <div class="form-group">
      <div class="text-start fw-bold">Title</div>
      <input
        class="form-control"
        v-model="form.title"
        type="text"
        placeholder="Title"
      />
    </div>
    <div class="form-group mt-4">
      <div class="text-start fw-bold">Author</div>
      <div class="text-start">
        <small class="text-muted">
          I add this since we should be able to sort by it. Reason I added a default value.
        </small>
      </div>
      <input
        class="form-control"
        v-model="form.author"
        type="text"
        placeholder="Title"
      />
    </div>
    <div class="form-group my-3">
      <div class="text-start fw-bold">Description</div>
      <textarea
        class="form-control"
        type="text"
        v-model="form.body"
        placeholder="Body"
      ></textarea>
    </div>
    <div class="text-start">
      <button
        class="btn btn-primary"
        :disabled="submittingForm || Object.values(form).some((v) => !v)"
        @click="addOrUpdateFeed"
      >
        <InlineLoader v-if="submittingForm">Submit</InlineLoader>
        <span v-else>Submit</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import InlineLoader from "@/components/InlineLoader.vue";

@Options({
  name: "NewsFeedForm",
  components: {
    InlineLoader,
  },
  props: {
    feed: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        author: "Lucas Adebayo"
      },
      submittingForm: false,
    };
  },
  computed: {
    ...mapGetters({
      newsFeedCount: "newsFeedsCount",
    }),
  },
  mounted() {
    if (this.feed) {
      // spreading the original object prevents mutating the object from state directly
      this.form = { ...this.feed };
    }
  },
  methods: {
    addOrUpdateFeed(): void {
      this.submittingForm = true;

      setTimeout(() => {
        if (this.feed) {
          this.$store.dispatch("updateFeed", this.form);
        } else {
          this.$store.dispatch("addFeed", {
            ...this.form,
            // assuming these to be a backend thing and not user input
            id: this.newsFeedCount + 1,
          });
        }

        this.submittingForm = false;
        this.form = {};
        this.$emit("form:submitted", true);
      }, 100);
    },
  },
})
export default class NewsFeedForm extends Vue {}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: #ffffff9c;
  border: 1px solid #d8e4f1 !important;
}
.feeds {
  background: #f4f7fb;
}
</style>
