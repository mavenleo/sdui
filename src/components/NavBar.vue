<template>
  <nav
    class="navbar navbar-dark bg-primary navbar-expand-lg px-lg-5 mb-5 px-md-5"
  >
    <router-link to="/" class="navbar-brand" href="#">sDui</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">News feeds</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link">Services</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  name: "NavBar",
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped></style>
