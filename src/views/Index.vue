<template>
  <section>
    <NewsList />
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import NewsList from "@/components/NewsList";

@Options({
  name: "Index",
  components: { NewsList },
})
export default class Index extends Vue {}
</script>
