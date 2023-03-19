<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <li>
    <p>{{ item.classNumber }}{{ item.classLetter }}</p>
  </li>
</template>

<style lang="scss">
    li{
        list-style-type: none ;
        height: 30px;
        // width: 80px;
        // border: 2px solid gray;
        // border-radius: 2px;
        margin-block: 10px;
    }
</style>