<template>
  <li>
    <slot></slot>
    <slot name="pre-icon" :value="value"></slot>
    <span class="red" v-if="!del">{{ title }}</span>
    <span v-else style="text-decoration: line-through;">{{ title }}</span>
    <slot name="suf-icon">插槽默认值</slot>
    <button v-show="!del" @click="delClick()">删除</button>
    <slot></slot>
  </li>
</template>

<script>
export default {
  // name: "todo-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    del: Boolean
  },
  data: function() {
    return {
      value: Math.random()
    };
  },
  methods: {
    delClick() {
      this.$emit("btn-click");
    }
  }
};
</script>

// 添加 scoped 局部样式
<style scoped>
.red {
  color: red;
}
</style>