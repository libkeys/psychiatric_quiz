<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  data() {
    return {
    };
  },
  methods: {
    saveData(data, itemText){
      this.$emit('saveRadioDataServer', data, itemText)
    }
  },
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
    },
    references: {
      type: Array
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
      :references="references"
      @save-radio-data-group="(data, itemText) => saveData(data, itemText)"
    />
  </div>
</template>

