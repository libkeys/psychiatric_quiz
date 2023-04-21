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
        console.log('addition: ', this.additionValue)
        this.$emit("saveAddition", this.additionValue);
      }
    },
    additionValue: function(newVal, oldVal){
      console.log(this.additionValue)
    }
  },
};
</script>


<template>
  <div class="question-group__addition">
    <textarea
      class="form-control"
      rows="4"
      :value="additionValue"
      placeholder="примечание"
    />
  </div>
</template>
