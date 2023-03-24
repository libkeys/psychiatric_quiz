<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  data() {
    return {
    };
  },
  methods: {},
  components: {
    QuestionItem,
  },
  created() {},
  props: {
    typeOfRadio: {
        type: Number
    },
    title: {
        type: String
    },
    items: {
        typeof: Array
    }
  }
};
</script>

<template>
  <div>
    <QuestionItem
      :title="title"
      :type="typeOfRadio"
      :items="items"
    />
  </div>
</template>

