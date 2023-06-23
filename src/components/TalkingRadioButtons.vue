<script>
export default {
  data() {
    return {
      picked: 0,
    };
  },
  methods: {
    saveData() {
      this.$emit("sendRadioValue", this.picked);
    },
  },
  props: {
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
        >0 баллов – обучающийся не отвечает на поставленный вопрос, даже при
        помощи педагога;</label
      >
    </div>
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="1" v-model="picked" />
      </div>
      <label class="form-check-label"
        >1 балл – обучающийся правильно отвечает на поставленный вопрос при
        значительной помощи (нескольких наводящих вопросов) педагога;</label
      >
    </div>
    <div class="buttons__item form-check">
      <div class="buttons__input-wrapper">
        <input type="radio" value="2" v-model="picked" />
      </div>
      <label class="form-check-label"
        >2 балл – обучающийся правильно отвечает на вопрос при незначительной
        помощи (не более чем одного наводящего вопроса) педагога;</label
      >
    </div>
  </div>
  <div class="buttons__item form-check">
    <div class="buttons__input-wrapper">
      <input type="radio" value="3" v-model="picked" />
    </div>
    <label class="form-check-label"
      >3 балла – обучающийся сразу правильно без помощи педагога отвечает на
      поставленный вопрос</label
    >
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