<script>
export default {
  data() {
    return {
      studentName: "",
      studentSurname: "",
      studentLastname: "",
      studentBirthDate: "",
      studentClass: "Выберете класс",
      addedClasses: [],
      addedStudent: "",
    };
  },
  methods: {
    addStudent() {
      const self = this;
      function displayStudent() {
        let targetClass = self.addedClasses.find(
          (item) => item.id === responseData.studentClass
        );
        self.addedStudent = `${responseData.studentName} ${responseData.studentSurname} ${responseData.studentLastname} дата рождения: ${responseData.studentBirthDate} класс: ${targetClass.classNumber}${targetClass.classLetter}`;
      }
      // const displayStudent = (addedClasses) => {
      //   this.addedStudent = `${responseData.studentName} ${
      //     responseData.studentSurname
      //   } ${responseData.studentLastname} дата рождения: ${
      //     responseData.studentBirthDate
      //   } класс: ${addedClasses[responseData.studentClass]}`;
      // };
      let responseData = {
        studentName: this.studentName,
        studentSurname: this.studentSurname,
        studentLastname: this.studentLastname,
        studentBirthDate: this.studentBirthDate,
        studentClass: this.studentClass,
      };
      try {
        console.log(responseData);
        let result = fetch("http://localhost:3000/add_student", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(responseData),
        }).then((data) => {
          let answer = data.text();
          return answer;
        });

        result.then((data) => {
          this.getClasses();
          displayStudent();
        });
      } catch (error) {
        console.log(error);
      }
    },
    getClasses() {
      try {
        let result = fetch("http://localhost:3000/get_classes", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((data) => {
          let answer = data.text();
          return answer;
        });

        result.then((data) => {
          this.addedClasses = JSON.parse(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getClasses();
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
        <p class="title__text-title">Добавление ученика</p>
      </div>

      <div class="form">
        <form action="#" class="form__addstudent" id="addStd">
          <div class="form__element">
            <label class="form__label">Имя ученика</label>
            <input
              type="text"
              id="inp-name"
              class="form__input"
              placeholder="Иван"
              v-model="studentName"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Фамилия</label>
            <input
              type="text"
              id="inp-Sname"
              class="form__input"
              placeholder="Иванов"
              v-model="studentSurname"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Отчество</label>
            <input
              type="text"
              id="inp-Lname"
              class="form__input"
              placeholder="Иванович"
              v-model="studentLastname"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Дата рождения</label>
            <input
              type="date"
              id="inp-data"
              class="form__input form__date"
              placeholder="11.11.2011"
              v-model="studentBirthDate"
            />
          </div>

          <div class="form__element select-class">
            <label class="form__label">Класс</label>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              v-model="studentClass"
            >
              <option selected>Выберете класс</option>
              <option
                v-for="classItem in addedClasses"
                :key="classItem.id"
                :value="classItem.id"
              >
                {{ classItem.classNumber + classItem.classLetter }}
              </option>
            </select>
          </div>

          <!-- ----------------------------------- -->

          <div class="main__button button">
            <div class="button__form-container">
              <!-- <div onclick="abbsTocreateclass()" class="button__form-text"> -->
              <div @click="addStudent" class="button__form-text">
                Создать ученика
              </div>
            </div>
          </div>

          <!-- ----------------------------------- -->
        </form>
      </div>

      <div class="created-student">
        <p>Вы добавили:</p>
        <p>{{ addedStudent }}</p>
      </div>

      <div class="main__two-button button">
        <div class="button__container button__container--two-button">
          <div onclick="abbsToDate()" class="button__text">
            Перейти к мониторингу
          </div>

          <div class="button__row">
            <img src="image/beegining of work/bow__row-icon.svg" alt="" />
          </div>
        </div>
        <RouterLink to="../create_class">
          <div class="button__container button__container--two-button">
            <div onclick="abbsToDate()" class="button__text">
              Добавить класс
            </div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="../beginning_of_work">
          <div class="button__container button__container--blue">
            <div onclick="abbsTobow()" class="button__text button__text--white">
              Сохранить и вернуться
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.select-class {
  // height: 44px;
}
</style>