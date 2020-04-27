<template>
  <div>
    <p>props.info: {{info}}</p>
    <p>props.name: {{name}}</p>
    <p>data.a: {{a}}</p>
    <p>
      <button @click="handleChangeA">Change a</button>
      <button @click="handleChangeB">Change b</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "PropsAndData",
  props: {
    name: String,
    info: Object
  },
  data() {
    return {
      a: "hello", // 属性 a  在 Dom 有绑定，Dom 会对该属性添加一个监听 ，所以数据变更后，会更新当前组件，
      b: "world"  // 属性 b  未使用，也就没有添加到 watcher 中，所以不会更新当前组件。
    };
  },
  updated() {
    console.log("PropsAndData 组件发生了更新");
  },
  methods: {
    handleChangeA() {
      this.a = "vue" + Date.now();
      console.log("PropsAndData A changed");
    },
    handleChangeB() {
      this.b = "vue" + Date.now();
      console.log("PropsAndData B changed");
    }
  }
};
</script>

<style>
</style>