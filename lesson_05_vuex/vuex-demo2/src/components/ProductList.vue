<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }} 数量 {{product.inventory}}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">加入购物车</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductList",
  computed: mapState({
    products: state => state.products.all // 这个可以理解为   function（state）{ return state.produts.all}
  }),
  //  等同于
  // computed: {
  //   products() {
  //     return this.$store.state.products.all;
  //   }
  // }

  // method: mapActions("cart", ["addProductToCart"]), // 如果有多个，则 在 [] 中以 逗号分隔. eg: ['addProductToCart', 'xxxxx']
  // 等同于
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    }
  },
  //  需要注意的是，mapActions 可以理解为 声明该 action ，调用的时候有参数的话，还是正常添加参数

  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style>
</style>