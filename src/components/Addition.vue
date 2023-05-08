<script>
export default {
  data() {
    return {
      additionValue: '',
    }
  },
  props: {
    updateAddition: {
      type: Boolean,
    },
  },
  watch: {
    updateAddition: function (newVal, oldVal) {
      if (newVal) {
        // console.log('addition: ', this.additionValue)
        this.$emit("saveAddition", this.additionValue);
      }
    }
  },
};
</script>


<template>
  <div class="question-group__addition">
    <textarea
      class="form-control"
      rows="4"
      v-model="additionValue"
      placeholder="примечание"
    />
  </div>
</template>
