<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  data() {
    return {};
  },
  methods: {
    // check() {
    //   console.log(`${this.typeOfRadio} \n`);
    //   console.log(`${this.title} \n`);
    //   console.log(`${this.items} \n`);
    //   console.log(`${this.references} \n`);
    // },
    saveData(data, itemText, addition) {
      this.$emit("saveRadioDataServer", data, itemText, addition);
    },
  },
  components: {
    QuestionItem,
  },
  created() {
  },
  props: {
    typeOfRadio: {
      type: Number,
    },
    title: {
      type: String,
    },
    items: {
      typeof: Array,
    },
    references: {
      type: Array,
    },
  },
};
</script>

<template>
  <div>
    <QuestionItem
      :title="title"
      :type="typeOfRadio"
      :items="items"
      :references="references"
      @save-radio-data-group="
        (data, itemText, addition) => saveData(data, itemText, addition)
      "
    />
  </div>
</template>

