<template>
  <div class="row">
    <div
      class="col-8 offset-1 results-pane"
      :class="{ bordered: limit }"
      v-if="this.results.length > 0"
    >
      <div class="order-box" v-if="!limit">
        <img src="../assets/order.png" alt="" />
        <select v-model="selectedOrder" name="orderby">
          <option value="0">Name ascending</option>
          <option value="1">Name descending</option>
          <option value="2">Year ascending</option>
          <option value="3">Year descending</option>
        </select>
      </div>

      <ul>
        <li v-for="data in results" :key="data.id">
          {{ data[0] }} | E-mail: {{ data[2] }} - {{ data[3] }}
          <hr />
        </li>
      </ul>
      <router-link v-if="limit" class="show" to="/listpage"
        >Show more...</router-link
      >
    </div>
    <div class="col-8 offset-1" v-if="!limit">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a @click="previousPage()" class="page-link" href="#">Previous</a>
          </li>
          <li
            v-for="pageNumber in totalPages"
            :key="pageNumber.id"
            class="page-item"
          >
            <a @click="setPage(pageNumber)" class="page-link" href="#">{{
              pageNumber
            }}</a>
          </li>
          <li @click="nextPage()" class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["limit"],
  data() {
    return {
      selectedOrder: 0,
      currentPage: 1,
      perPage: 7,
    };
  },
  computed: {
    ...mapGetters(["FILTERED_RESULTS", "RESULTS"]),

    results() {
      return this.limit
        ? this.RESULTS.slice(0, 3)
        : this.RESULTS.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage
          );
    },
    totalPages() {
      return Math.ceil(this.RESULTS.length / this.perPage);
    },
  },
  watch: {
    selectedOrder(val) {
      if (val == 0) {
        this.RESULTS.sort();
      } else if (val == 1) {
        this.RESULTS.reverse();
      } else if (val == 2) {
        this.RESULTS.sort((a, b) => {
          return this.FormatDate(a[3]) - this.FormatDate(b[3]);
        });
      } else if (val == 3) {
        this.RESULTS.sort((a, b) => {
          return this.FormatDate(b[3]) - this.FormatDate(a[3]);
        });
      }
    },
  },
  methods: {
    FormatDate(dateText) {
      let dateArray = dateText.split("/");
      return Date.parse(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    previousPage() {
      if (this.currentPage != 1) this.currentPage = this.currentPage - 1;
    },
    nextPage() {
      if (this.currentPage != this.totalPages)
        this.currentPage = this.currentPage + 1;
    },
  },
};
</script>

<style scoped>
.show {
  font-size: 12px;
  display: flex;
  justify-content: center;

  text-decoration: none;
  color: rgba(0, 0, 0, 1);
}
ul {
  list-style-type: none;
}
.results-pane {
  padding: 15px;
  margin-top: 20px;
 
}
.bordered {
  border: 1px solid #484848;
  box-sizing: border-box;
  border-radius: 4px;
}
.order-box {
  display: flex;
  margin-left: 100%;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
