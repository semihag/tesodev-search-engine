<template>
  <div class="list-page">
    <div class="row">
      <div class="col-lg-2 ">
        <img
          class="list-logo"
          src="../assets/tesodev-logo.png"
          alt="tesodev-logo"
        />
      </div>

      <div class="col-10">
        <Search />
      </div>
    </div>

    <div class="row">
      <div class="offset-2 col-10">
        <SearchResults :limit="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import SearchResults from "./SearchResults.vue";
export default {
  data() {
    return {};
  },
  components: { Search, SearchResults },
};
</script>

<style scoped>
.list-page {
  margin-top: 50px;
}
.order {
  color: rgba(72, 72, 72, 1);
  margin-right: 0%;
  vertical-align: bottom;
}
.list-logo {
  width: 149px;
  height: 63px;
  margin-left: 100px;


}
</style>
