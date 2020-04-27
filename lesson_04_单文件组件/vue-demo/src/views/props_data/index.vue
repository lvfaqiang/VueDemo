<template>
  <div>
    <p>
      <button @click="handleChangeName">Change this.name</button>
      <button @click="handleChangeInfo">Change this.info</button>
    </p>
    <PropsAndData :name="name" :info="info" />
  </div>
</template>

<script>
import PropsAndData from "./PropsAndData";
let name = "Hello World";
export default {
  components: {
    PropsAndData
  },
  data() {
    return {
      name: name,
      // info: {
      //   number: undefined
      // }
      info: {}, // 如果当前 info 中 number 未声明，则不会更新 info 对象。
    };
  },
  methods: {
    handleChangeName() {
      this.name = "vue" + Date.now();
      console.log("index  - handleChangeName invoked");
    },
    handleChangeInfo() {
      this.info.number = 1;
      console.log("index  - handleChangeInfo invoked");
    }
  }
};
</script>

<style>
</style>