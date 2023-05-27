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
    additionValueGotten: {
      type: String
    }
  },
  watch: {
    updateAddition: function (newVal, oldVal) {
      if (newVal) {
        console.log('addition: ', this.additionValue)
        this.$emit("saveAddition", this.additionValue);
      }
    }
  },
  created(){
    console.log(this.additionValueGotten)
    if (this.additionValueGotten){
      this.additionValue = this.additionValueGotten
    }
  }
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
