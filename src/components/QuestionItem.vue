<script>
import ObservationRadioButtons from "./ObservationRadioButtons.vue";
import TalkingRadioButtons from "./TalkingRadioButtons.vue";
import ExperimentRadioButtons from "./ExperimentRadioButtons.vue";

export default {
  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
    },
    type: {
      type: Number,
    },
    reference: {
      type: String,
    },
  },
  data() {
    return {
      showList: false,
      picked: "",
      scoped: false,
      showAddition: false,
      updateRadioValue: false,
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
      this.scoped = !this.scoped;
    },
    checkFirstType() {
      let answer = this.type === 1 ? true : false;
      return answer;
    },
    checkSecondType() {
      let answer = this.type === 2 ? true : false;
      return answer;
    },
    checkThirdType() {
      let answer = this.type === 3 ? true : false;
      return answer;
    },
    toggleAddition() {
      this.showAddition = !this.showAddition;
    },
    changeUpdateRadio(index) {
      this.updateRadioValue = true;
      this.indexToUpdate = index;
    },
    saveRadioData(data) {
      console.log(data);
      this.updateRadioValue = false;
    },
    checkReference() {
      if (this.reference != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    ObservationRadioButtons,
    TalkingRadioButtons,
    ExperimentRadioButtons,
  },
};
</script>

<template>
  <div class="question-group" :class="{ 'question-group_scoped': scoped }">
    <div class="question-group__title-group">
      <img
        src="../assets/images/right-arrow.png"
        alt=""
        class="question-group__arrow"
        @click="toggleList"
        :class="{ 'question-group__arrow_active': showList }"
      />
      <p class="question-group__title" @click="toggleList">{{ title }}</p>
    </div>
    <transition name="question-group__transition">
      <div
        v-if="showList"
        class="question-group__list"
        :class="{ 'question-group__list_active': showList }"
      >
        <div
          class="question-group__item"
          v-for="(item, index) in items"
          :key="index"
        >
          <p class="question-group__text-item" v-if="checkReference">
            {{ item }}
          </p>
          <div class="question-group__text-item-wrapper" v-if="!checkReference">
            <p class="question-group__text-item">
              {{ item }}
            </p>
            <img
              class="question-group__reference"
              src="../assets/images/первый экран/header faq.svg"
            />
          </div>
          <div class="question-group__radio-buttons" v-if="checkFirstType()">
            <ObservationRadioButtons
              :indexCreated="index"
              :indexToUpdate="indexToUpdate"
              :updateRadioValue="updateRadioValue"
              @send-radio-data="saveRadioData"
            />
          </div>
          <div class="question-group__radio-buttons" v-if="checkSecondType()">
            <TalkingRadioButtons />
          </div>
          <div class="question-group__radio-buttons" v-if="checkThirdType()">
            <ExperimentRadioButtons />
          </div>
          <div class="question-group__buttons">
            <button
              class="question-group__button-addition btn btn-primary"
              @click="toggleAddition"
            >
              Добавить примечание
            </button>
            <button
              class="question-group__button-save btn btn-light"
              @click="changeUpdateRadio(index)"
            >
              Сохранить
            </button>
          </div>
          <div class="question-group__addition" v-if="showAddition">
            <textarea
              class="form-control"
              rows="4"
              v-bind="addition"
              placeholder="примечание"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.question-group {
  // margin: 10px 0px 40px 0px;
  &__arrow {
    width: 25px;
    height: 25px;
    margin-bottom: 18px;
    margin-right: 25px;
    cursor: pointer;
    transition: 0.4s;
    &_active {
      transform: rotate(90deg);
      transition: 0.4s;
    }
  }
  &__title {
    cursor: pointer;
    &:hover {
      color: #3b5da4;
      transition: 0.3s;
    }
  }
  &__title-group {
    display: flex;
    align-items: center;
  }
  &__list {
    margin-top: -300px;
    transition: 0.4s;
    &_active {
      margin-top: 0;
      transition: 0.4s;
    }
  }
  &_scoped {
    margin-bottom: 70px;
  }
  &__title {
    font-size: 22px;
  }
  &__transition {
  }
  &__item {
    margin-bottom: 35px;
    &:first-child {
      margin-top: 50px;
    }
  }
  &__text-item {
    font-size: 20px;
    font-family: "Inter";
  }
  &__text-item-wrapper{
    display: flex;
  }
  &__reference{

  }
  &__buttons {
    margin-top: 10px;
    button {
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  &__addition {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    // label{
    //   margin-bottom: 10px;
    // }
    textarea {
      border: 2px solid gray;
      width: 800px;
      // height: 120px;
      font-size: 20px;
    }
  }
}
</style>