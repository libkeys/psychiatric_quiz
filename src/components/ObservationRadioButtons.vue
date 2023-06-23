<script>
export default {
  data() {
    return {
      picked: this.points,
    };
  },
  methods: {
    saveData() {
      this.$emit("sendRadioValue", this.picked);
    },
  },
  props: {
    points: {
      type: Number
    },
    updateRadioValue: {
      type: Boolean,
    },
    indexCreated: {
      type: Number,
    },
    indexToUpdate: {
      type: Number,
    },
  },
  watch: {
    updateRadioValue: function (newVal, oldVal) {
      if (this.updateRadioValue) {
        if (this.indexCreated == this.indexToUpdate) {
          this.$emit("sendRadioData", this.picked);
        }
      }
    },
  },
};
</script>


<template>
  <div class="buttons">
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="0" v-model="picked" />
      </div>
      <label class="form-check-label"
        >0 баллов – поведение (действие) по обозначенному индикатору не
        осуществляется даже под руководством педагога;</label
      >
    </div>
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="1" v-model="picked" />
      </div>
      <label class="form-check-label"
        >1 балл – поведение (действие) по обозначенному индикатору
        осуществляется только под руководством педагога;</label
      >
    </div>
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="2" v-model="picked" />
      </div>
      <label class="form-check-label"
        >2 балла – поведение (действие) по обозначенному индикатору
        осуществляется при однократном напоминании со стороны педагога;</label
      >
    </div>
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="3" v-model="picked" />
      </div>
      <label class="form-check-label"
        >3 балла – поведение (действие) по обозначенному индикатору
        осуществляется без напоминания со стороны педагога.</label
      >
    </div>
  </div>
</template>

<style lang="scss">
.buttons {
  display: block;
  &__item {
    display: flex;
    width: 1000px;
    padding: 12px 50px;

    &__label {
    }
  }
  &__input-wrapper {
    width: 20px;
    height: 20px;
    margin-right: 25px;
    margin-left: -10px;
    input {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-top: 14px;
    }
  }
}
</style>