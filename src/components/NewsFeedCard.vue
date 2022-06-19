<template>
  <section class="card border feed-card text-start p-3 m-3">
    <div class="fw-bold fs-4">{{ feed.title }}</div>
    <div class="fw-lighter">
      <div>{{ feed.body }}</div>
    </div>

    <LineDivider />
    <div class="d-flex justify-content-between align-items-center">
      <div class="fst-italic">{{ feed.author }}</div>
      <div class="d-flex">
        <button class="btn btn-outline-primary" @click="$emit('edit:feed')">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z"
              fill="#296DB3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import LineDivider from "@/components/LineDivider";

@Options({
  name: "NewsFeedCard",
  components: { LineDivider },
  props: {
    feed: Object,
  },
})
export default class NewsFeedCard extends Vue {}
</script>

<style lang="scss" scoped>
.line-divider {
  background-color: #d8e4f1;
  height: 1px;
  margin: {
    top: 20px;
    bottom: 20px;
  }
}
.feed-card:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
}
</style>
