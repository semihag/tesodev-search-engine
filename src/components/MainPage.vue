<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="../assets/tesodev-logo.png" alt="tesodev-logo" />
      <span class="slogan">Search web app</span>
    </div>
    <Search />
    <SearchResults :limit="true"/>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import SearchResults from "../components/SearchResults.vue";

export default {
  components: {
    Search,
    SearchResults,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  width: 278px;
  height: 115px;
}
.slogan {
  margin-left: 250px;
  font-weight: normal;
  font-size: 14px;
}
.header {
  margin-top: 10%;
  margin-bottom:5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
