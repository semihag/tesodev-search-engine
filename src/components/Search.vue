<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <input
        type="text"
        class="search-box"
        v-model="searchText"
        placeholder="Search Name Surname"
        :state="isSearchBoxValid"
  
      />

      <p v-show="!isSearchBoxValid && searchText!=null" style="color: red">Error Text</p>
    </div>
    <div class="col-2">
      <button :disabled="!isSearchBoxValid" @click="Search">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: null,
    };
  },
  methods: {
    Search() {
      this.$store.dispatch("SEARCH", this.searchText);
    },
  },
  computed: {
    isSearchBoxValid() {
      return this.searchText != null && this.searchText.trim().length > 0;
    },
  },
};
</script>

<style scoped>
.search-box {
  width: 100%;
  height: 46px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
}
.search-box:hover {
  background-color: rgba(100, 100, 100, 0.08);
}

button {
  width: 138px;
  height: 46px;
  background: #204080;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 16px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 21, 09px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
button:disabled {
  background-color: gray;
  cursor:auto;
}
button:active:hover {
  background-color: #4f75c2;
}
</style>
