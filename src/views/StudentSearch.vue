<script>
export default {
  data() {
    return {
      studentName: "",
      studentSurname: "",
      studentLastname: "",
      studentClass: "Выберете класс",
      addedClasses: [],
      addedStudent: "",
      students: [],
    };
  },
  methods: {
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
    getStudent() {
      let requestData = {
        studentName: this.studentName,
        studentSurname: this.studentSurname,
        studentLastname: this.studentLastname,
        studentClass: this.studentClass,
      };
      try {
        let result = fetch("http://localhost:3000/get_student", {
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
          this.students = JSON.parse(data);
          console.log(JSON.parse(data));
        });
      } catch (error) {
        console.log(error);
      }
    },
    allStudents() {
      try {
        let result = fetch("http://localhost:3000/all_students", {
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
          this.students = JSON.parse(data);
          console.log(this.students[0].id);
        });
      } catch (error) {
        console.log(error);
      }
    },
    deleteStudent(studentID) {
      let requestData = {
        id: studentID,
      };
      try {
        let result = fetch("http://localhost:3000/delete_student", {
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
          this.getClasses();
          this.students = this.students.filter(
            (element) => element.id != studentID
          );
          console.log(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    studentIdSave(id) {
      document.cookie = `studentId=${id}`;
      // запись значений выбранного ученика в куки для избежания дополнительного запроса к БД
      let currentStudent = this.students.find((element) => element.id == id);
      document.cookie = `studentName=${currentStudent.studentName}`;
      document.cookie = `studentName=${currentStudent.studentSurname}`;
      document.cookie = `studentName=${currentStudent.studentLastname}`;
      let classStudent =
        currentStudent.classNumber + currentStudent.classLetter;
      document.cookie = `studentClassFullName=${classStudent}`;
      document.cookie = `studentBirthDate=${currentStudent.studentBirthDate}`;
      // let requestData = {
      //   id: id
      // }
      //   try {
      //     let result = fetch("http://localhost:3000/save_id_student", {
      //       method: "POST",
      //       mode: "cors",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(requestData),
      //     }).then((data) => {
      //       let answer = data.text();
      //       return answer;
      //     });

      //     result.then((data) => {
      //       console.log(data)
      //     });
      //   } catch (error) {
      //     console.log(error);
      //   }
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
        <p class="title__text-title">Поиск ученика</p>
      </div>

      <div class="form">
        <form action="#" class="form__addstudent">
          <div class="form__element">
            <label class="form__label">Имя ученика</label>
            <input
              v-model="studentName"
              type="text"
              class="form__input"
              placeholder="Иван"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Фамилия</label>
            <input
              v-model="studentSurname"
              type="text"
              class="form__input"
              placeholder="Иванов"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Отчество</label>
            <input
              v-model="studentLastname"
              type="text"
              class="form__input"
              placeholder="Иванович"
            />
          </div>

          <div class="form__element">
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

          <button
            @click="getStudent"
            type="button"
            class="button-search btn btn-primary"
          >
            Найти
          </button>
        </form>
      </div>

      <div class="main__two-button button">
        <div class="button__container button__container--blue">
          <div @click="allStudents" class="button__text button__text--white">
            Показать всех
          </div>
        </div>

        <div
          onclick="bowToaddstudent()"
          class="button__container button__container--two-button"
        >
          <div class="button__text">Добавить нового ученика</div>

          <div class="button__row">
            <img src="image/beegining of work/bow__row-icon.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="list">
        <div class="main__subtitle">
          <p class="main__text-subtitle main__text-subtitle--left">
            По вашему запросу найдено:
          </p>
        </div>

        <div class="list-classes">
          <li v-for="student in students" :key="student.id">
            <RouterLink @click="studentIdSave(student.id)" to="../student_page">
              <p class="list-classes__name">
                {{ student.studentName }} {{ student.studentSurname }}
                {{ student.studentLastname }}
              </p>
            </RouterLink>
            <p class="list-classes__class">класс: {{ student.studentClass }}</p>
            <button @click="deleteStudent(student.id)" class="btn btn-danger">
              удалить
            </button>
          </li>
        </div>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.button-search {
  height: 44px;
  margin-top: 20px;
}
.list-classes {
  li {
    p {
      position: relative;
    }
    button {
      margin-top: -5px;
      margin-left: 75px;
    }
  }
  &__name {
    width: 300px;
    text-align: left;
    cursor: pointer;
  }
  &__class {
  }
}
</style>