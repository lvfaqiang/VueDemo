<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号：{{ email }}</p>
    <hr />
    <h2>产品列表</h2>
    <ProductList />
    <hr />
    <h2>总计</h2>
    <ShoppingCart />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
export default {
  name: "App",
  components: {
    ProductList,
    ShoppingCart
  },
  computed: mapState({
    email: state => state.userInfo.email
  })
};
</script>

<style>
</style>
