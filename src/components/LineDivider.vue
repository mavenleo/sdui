<template>
  <div class="line-divider"></div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "LineDivider",
})
export default class LineDivider extends Vue {}
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
</style>
