<template>
  <div class="d-block text-center">
    <span class="spinner-border-sm text-white spinner-border"></span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "InlineLoader",
})
export default class InlineLoader extends Vue {}
</script>

<style lang="scss" scoped></style>
