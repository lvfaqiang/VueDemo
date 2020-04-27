<template>
  <div id="app">
    <!-- 单向数据流 -->
    <!-- 方法一 简写形式 -->
    <input v-model="message" placeholder="请输入内容" />
    <!-- 方法2 非简写 -->
    <input :value="message" @input="handleChange" />



    {{ message }} {{message + message }}
    <todo-list>
      <todo-item
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :del="item.del"
        @btn-click="itemClick(item)"
      >
        <span>😄</span>
        <span>😄</span>

        <!--<span slot="pre-icon">PreIcon</span>
        <span slot="suf-icon">SufIcon</span>-->

        <template v-slot:pre-icon="{value}">
          <span>PreIcon {{ value }}</span>
        </template>
        <template v-slot:suf-icon>
          <p>
            <span>11</span>
            <br />
            <span>12</span>
          </p>
        </template>
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      message: "Hello World",
      list: [
        {
          title: "Lesson1",
          del: false
        },
        {
          title: "Lesson2",
          del: true
        },
        {
          title: "Lesson3",
          del: false
        }
      ]
    };
  },
  methods: {
    itemClick(item) {
      item.del = !item.del;
      console.log("------------  clicked");
    },
    handleChange(e) {
      this.message = e.target.value;
      console.log(e);
    }
  }
};
</script>

<style>
</style>
