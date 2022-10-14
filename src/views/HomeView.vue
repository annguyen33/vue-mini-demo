<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <section class="section-bg">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section-title">
            <h2>Products</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl3">
          <div class="single-product">
            <div class="product-thumb">
              <img src="" alt="product 1" />
            </div>
            <div class="product-title">
              <h3><a href="#">Revlutionary Android OnePlus</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
