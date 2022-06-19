<template>
  <div :class="{ 'd-none': !active }" class="light-box">
    <div @click.prevent="closeLightBox" class="light-box-overlay"></div>

    <div class="light-box-content">
      <div class="d-flex justify-content-between align-items-center">
        <slot name="title">
          <h5>{{ title }}</h5>
        </slot>

        <slot name="close-button">
          <svg
            @click.prevent="closeLightBox"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9999 1L1.00049 11"
              stroke="#1E5083"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M0.99997 1L10.9994 11"
              stroke="#1E5083"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </slot>
      </div>
      <LineDivider class="light-box-divider" />

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import LineDivider from "./LineDivider.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  name: "LightBox",
  components: { LineDivider },
  props: {
    showDialog: Boolean,
    title: String,
  },
  computed: {
    active(): boolean {
      return !!this.showDialog;
    },
  },
  watch: {
    showDialog(value: boolean) {
      if (!value) {
        this.closeLightBox();
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        this.closeLightBox();
      }
    });
  },
  methods: {
    closeLightBox(): void {
      this.$emit("input", false);

      this.$emit("lightbox:close");
    },
  },
})
export default class LightBox extends Vue {}
</script>

<style lang="scss">
.light-box,
.light-box-overlay,
.light-box-content {
  position: fixed;
  top: 0;
  margin: 0 !important;
}

.light-box {
  height: 100vh;
  width: 100%;
  left: 0;

  .light-box-overlay {
    height: 100%;
    width: inherit;
    left: 0;
    background: rgba(15, 62, 88, 0.5);
  }

  .light-box-content {
    right: 0;
    overflow: scroll;
    height: 100vh;
    width: 444px;
    background-color: #ffffff;
    padding: 24px 32px;

    .light-box-divider {
      margin: 12px auto 33px;
    }
  }

  z-index: 999999999;
}
</style>
