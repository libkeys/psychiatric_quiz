<script>
import ClassItem from "../components/ClassItem.vue";

export default {
  data() {
    return {
      classNumber: "Выберете номер класса",
      classLetter: "",
      addedClasses: [],
    };
  },
  methods: {
    addClass() {
      function getCookie(name) {
        let matches = document.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      let login = getCookie('userLogin')

      let requestData = {
        classNumber: this.classNumber,
        classLetter: this.classLetter,
        login: login
      };
      try {
        let result = fetch("http://localhost:3000/add_class", {
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
          console.log(data);
          this.getClasses();
        });
      } catch (error) {
        console.log(error);
      }
    },
    getClasses() {
      function getCookie(name) {
        let matches = document.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      let login = getCookie('userLogin')
      let requestData = {
        login: login
      }

      try {
        let result = fetch("http://localhost:3000/get_classes", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData)
        }).then((data) => {
          let answer = data.text();
          return answer;
        });

        result.then((data) => {
          this.addedClasses = JSON.parse(data);
          console.log(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getClasses();
  },
  components: {
    ClassItem,
  },
  props: {
    showStudent: {
      type: Boolean,
    },
  },
};
</script>


<template>
  <HeaderStandart :showStudent="showStudent" />

  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Создание класса</p>
      </div>

      <div class="form">
        <form class="form__addstudent">
          <div class="form__element main__select">
            <label class="form__label">Номер класса</label>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              v-model="classNumber"
            >
              <option selected>Выберете номер класса</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>

          <div class="form__element main__input">
            <label class="form__label">Буква класса</label>
            <input
              type="text"
              name="item-letter"
              id="letter"
              class="form__input"
              placeholder="Введите букву"
              v-model="classLetter"
            />
          </div>
          <!-- 
          <div  class="main__button button">
            <div class="button__form-container">
              <div class="button__form-text">
                <input @click="addClass()" class="main__button-itself" type="submit" value="Добавить" />
              </div>
            </div>
          </div> -->
          <button
            @click="addClass"
            type="button"
            class="btn btn-primary main__button-submit"
          >
            Добавить
          </button>
        </form>
      </div>

      <div class="list-classes">
        <p>Вы добавили...</p>
        <ul>
          <ClassItem
            v-for="classItem in addedClasses"
            :key="classItem.id"
            :item="classItem"
          />
        </ul>
      </div>

      <div class="main__two-button button">
        <RouterLink to="../add_student">
          <div
            onclick="bowToaddstudent()"
            class="button__container button__container--two-button"
          >
            <div class="button__text">Добавить нового ученика</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>
        </RouterLink>

        <RouterLink to="../beginning_of_work">
          <div
            onclick="abbsTobow()"
            class="button__container button__container--blue"
          >
            <div class="button__text button__text--white">
              Сохранить и вернуться
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- ----- -->
  <FooterStandart />
</template>

<style lang="scss">
.main__select {
  select {
    padding: 6px; /* add padding to the select element to make it more visible */
    background: white;
    border: 2px solid #ababb5;
    border-radius: 2px;
    padding-right: 15px;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    height: 44px;
    margin-top: 4px;
  }

  select option {
    font-size: 14px; /* change the font size of the options */
  }
}

.main__input {
  input {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    padding: 6px;
    padding: 8px;
    height: 44px;
    margin-top: 4px;
  }
}

.main__button-submit {
  height: 44px;
  margin-top: 28px;
}
</style>