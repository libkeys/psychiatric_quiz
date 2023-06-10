<script>
import ObservationRadioButtons from "./ObservationRadioButtons.vue";
import TalkingRadioButtons from "./TalkingRadioButtons.vue";
import ExperimentRadioButtons from "./ExperimentRadioButtons.vue";
import AdditionComponent from "./Addition.vue";

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
    references: {
      type: Array,
    },
  },
  data() {
    return {
      showList: false,
      picked: "",
      scoped: false,
      //словарь для сохранения значений для каждого блока addition
      showAddition: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      },
      showInfo: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      },
      updateRadioValue: false,
      updateAddition: false,
      showReference: false,
      idArray: [],
      itemToSave: "",
      addition: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
      },
      indexForAddition: 0,
    };
  },
  computed: {},
  methods: {
    getQuestionsId() {
      let requestData = {
        type: this.type,
      };
      try {
        let result = fetch("http://localhost:3000/get_questions_id", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }).then((data) => {
          let answer = data.text();
          return answer;
        });

        result.then((data) => {
          this.idArray = data;
          console.log(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
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
    toggleAddition(index) {
      this.showAddition[index + 1] = !this.showAddition[index + 1];
    },
    checkAddition(index) {
      //index начинается с нуля, словарь значений с единицы
      return this.showAddition[index + 1];
    },
    //метод вызывается при нажатии на кнопку сохранить, item - текст вопроса, необходимо
    //для того чтобы потом сохранить результат в базе данных
    changeUpdateRadio(index, item) {
      this.updateAddition = true;
      this.updateRadioValue = true;
      this.indexToUpdate = index;
      this.itemToSave = item;
    },
    saveRadioData(data, index) {
      let idRadio = this.idArray[index - 1]; //don't need maybe
      //необходимо чтобы данные addition записались
      setTimeout(() => {
        this.$emit(
          "saveRadioDataGroup",
          data,
          this.itemToSave,
          this.addition[index]
        );
      }, 1);
      this.updateRadioValue = false;
    },
    checkReference(item) {
      if (item.reference != "" && item.reference != undefined) {
        return true;
      } else {
        console.log(item);
        return false;
      }
    },
    toggleReference() {
      this.showReference = !this.showReference;
    },
    saveAddition(value, index) {
      this.updateAddition = false;
      this.addition[index] = value;
    },
    createdAddition() {
      this.items.forEach((el, index) => {
        // console.log(el.addition);
        // console.log(Reflect.get(el, 'addition'));
        // el.forEach((elQuestion, indexQuestion) => {
        //   if (elQuestion.addition) {
        //     this.showAddition[index + 1] = elQuestion.addition;
        //   }
        // });
      });
      // console.log(this.showAddition);
    },
    toggleInfo(index) {
      this.showInfo[index + 1] = !this.showInfo[index + 1];
      // console.log(this.showInfo)
    },
    existsInfo(item) {
      let info = item.reference;
      if (info) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.createdAddition();
    // console.log(this.items);
  },
  components: {
    ObservationRadioButtons,
    TalkingRadioButtons,
    ExperimentRadioButtons,
    AdditionComponent,
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
    <transition
      name="show-list"
      enter-active-class="question-group__transition_enter"
      leave-active-class="question-group__transition_leave"
    >
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
          <div class="question-group__text-wrapper" v-if="existsInfo(item)">
            <p class="question-group__text-item">
              {{ item.text }}
            </p>
            <img
              @click="toggleInfo(index)"
              class="question-group__reference"
              src="../assets/images/firstScreen/headerFaq.svg"
            />
            <!-- <img
              v-if="existsInfo(item)"
              class="question-group__info-icon"
              src="../assets/images/question.png"
              alt=""
              @click="toggleInfo(index)"
            /> -->
          </div>
          <!-- <div
            class="question-group__info"
            :class="{ 'question-group__info_active': showInfo[index + 1] }"
          >
            <p>{{ item.info }}</p>
          </div> -->
          <div class="question-group__extended" v-if="existsInfo(item)">
            <div
              class="question-group__text-extended-wrapper"
              :class="{
                'question-group__text-extended-wrapper_active':
                  showInfo[index + 1],
              }"
            >
              <p class="question-group__text-item">
                {{ item.reference }}
              </p>
            </div>
            <!-- <div class="question-group__reference" v-if="showReference">
              <p>{{ references[index] }}</p>
            </div> -->
          </div>
          <div
            class="question-group__radio-buttons"
            v-if="checkFirstType()"
            :class="{
              'question-group__radio-buttons_active': showInfo[index + 1],
            }"
          >
            <ObservationRadioButtons
              :indexCreated="index"
              :indexToUpdate="indexToUpdate"
              :updateRadioValue="updateRadioValue"
              :points="item.points"
              @send-radio-data="(data) => saveRadioData(data, index)"
            />
          </div>
          <div class="question-group__radio-buttons" v-if="checkSecondType()">
            <TalkingRadioButtons
              :indexCreated="index"
              :indexToUpdate="indexToUpdate"
              :updateRadioValue="updateRadioValue"
              :points="item.points"
              @send-radio-data="saveRadioData"
            />
          </div>
          <div class="question-group__radio-buttons" v-if="checkThirdType()">
            <ExperimentRadioButtons
              :options="item.options"
              :indexCreated="index"
              :indexToUpdate="indexToUpdate"
              :updateRadioValue="updateRadioValue"
              :points="item.points"
              @send-radio-data="saveRadioData"
            />
          </div>
          <div class="question-group__buttons">
            <button
              class="question-group__button-addition btn btn-primary"
              @click="toggleAddition(index)"
            >
              Добавить примечание
            </button>
            <button
              class="question-group__button-save btn btn-light"
              @click="changeUpdateRadio(index, item)"
            >
              Сохранить
            </button>
          </div>
          <AdditionComponent
            v-if="checkAddition(index)"
            @save-addition="(value) => saveAddition(value, index)"
            :updateAddition="updateAddition"
            :additionValueGotten="item.addition"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.question-group {
  // margin: 10px 0px 40px 0px;
  // overflow: hidden;
  position: relative;
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
  // &__list {
  //   margin-top: -300px;
  //   transition: 0.4s;
  //   &_active {
  //     margin-top: 0;
  //     transition: 0.4s;
  //   }
  // }
  &_scoped {
    margin-bottom: 70px;
  }
  &__title {
    font-size: 22px;
    z-index: 10;
  }
  &__item {
    margin-bottom: 100px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
    &:first-child {
      margin-top: 50px;
    }
  }
  &__text-item {
    font-size: 20px;
    font-family: "Inter";
  }
  &__text-item-wrapper {
    display: flex;
  }
  &__reference {
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
  &__transition {
    // &_enter {
    //   animation-name: show-top;
    //   animation-duration: 1s;
    // }
    // &_leave {
    //   animation-name: show-top reverse;
    //   animation-duration: 1s;
    // }
  }
  &__extended {
  }
  &__text-extended-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0px;
    transition: 0.5s;
    p {
      width: 800px;
      margin-left: -1000px;
      transition: 0.5s;
    }
    img {
      margin-top: -20px;
      margin-right: 10px;
      cursor: pointer;
    }
    &_active {
      height: 100%;
      transition: 0.5s;
      p {
        margin-left: 0;
        transition: 0.5s;
      }
    }
  }
  &__reference {
    cursor: pointer;
  }
  &__text-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .question-group__text-item {
      width: 800px;
    }
  }
  &__info-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  &__radio-buttons {
    margin-top: 0;
    transition: 0.5s;
    &_active {
      // margin-top: 300px;
      // margin-bottom: 200px;
      transition: 0.5s;
    }
  }
  &__info {
    margin-left: -450px;
    transition: 0.5s;
    &_active {
      margin-left: 0px;
      transition: 0.5s;
    }
  }
}

// .show-list-enter-active,
// .show-list-leave-active {
//   transition: margin, all 1s ease;
//   margin-left: 0;
//   opacity: 1;
// }
// .show-list-enter-from,
// .show-list-leave-to {
//   margin-left: -1400px;
//   opacity: 0;
// }
.show-list-enter-active {
  animation: show-top 1s;
}
.show-list-leave-active {
  animation: show-top 1s reverse;
}
.show-list-enter-from {
}
.show-list-leave-to {
  // margin-top: 400px!important;
}

@keyframes show-top {
  0% {
    margin-top: -1400px;
  }

  100% {
    margin-top: 00px;
  }
}
</style>