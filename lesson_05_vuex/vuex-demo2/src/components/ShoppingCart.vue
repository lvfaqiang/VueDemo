<template>
  <div>
    <h2>清单</h2>
    <p v-show="!products.length">
      <i>请添加产品到购物车</i>
    </p>

    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} - {{product.price}} x {{product.quantity}}</li>
    </ul>

    <p>合计：{{totalPrice}}</p>

    <p>
      <button :disabled="!products.length" @click="checkout(products)">提交</button>
    </p>
    <p v-show="checkoutState">提交 {{checkoutState}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutState: state => state.cart.checkoutState
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      totalPrice: "cartTotalPrice"
    })
    // 等同于
    // ...mapGetters({
    //   products: "cart/cartProducts",
    //   totalPrice: "cart/cartTotalPrice"
    // })
  },

  // 以上 computed 写法 等同于
  // computed: {
  //   checkoutState() {
  //     return this.$store.state.cart.checkoutState;
  //   },
  //   products() {
  //     return this.$store.getters["cart/cartProducts"];
  //   },
  //   totalPrice() {
  //     return this.$store.getters["cart/cartTotalPrice"];
  //   }
  // }

  methods: mapActions("cart", ["checkout"])
  // methods: {
  // ...mapActions({ checkout: "cart/checkout", check: "cart/checkout" }) // 这种方式，适用于多个配置，单个的会报错。
  // }
  // methods: {
  //   checkout(products) {
  //     this.$store.dispatch("cart/checkout", products);
  //   }
  // }
};
</script>

<style>
</style>