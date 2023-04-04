<script>
export default {
  data() {
    return {
      studentName: "",
      studentSurname: "",
      studentLastname: "",
      studentBirthDate: "",
      studentClass: "",
      studentClassNumber: 0,
      studentClassLetter: "",
    };
  },
  methods: {
    getDataStudent() {
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
      let studentId = getCookie('studentId');
      let requestData = {
        studentId: studentId,
      };
      console.log(studentId);
      try {
        let result = fetch("http://localhost:3000/get_student_by_id", {
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
          const dataParsed = JSON.parse(data)[0];
          this.studentName = dataParsed.studentName;
          this.studentSurname = dataParsed.studentSurname;
          this.studentLastname = dataParsed.studentLastname;
          this.studentBirthDate = new Date(
            dataParsed.studentBirthDate
          ).toLocaleDateString();
          this.studentClassNumber = dataParsed.classNumber;
          this.studentClassLetter = dataParsed.classLetter;
          console.log(dataParsed);
          console.log(this.studentBirthDay);
        });
      } catch (error) {
        console.log(error);
      }
    },
    updateStudent() {
      const birthDateComponents = new Date(this.studentBirthDate)
        .toLocaleDateString("en-US")
        .split("/");
      const birthDate = `${birthDateComponents[2]}-${birthDateComponents[0]}-${birthDateComponents[1]}`;
      const formData = {
        studentName: this.studentName,
        studentSurname: this.studentSurname,
        studentLastname: this.studentLastname,
        studentBirthDate: birthDate,
        studentClassNumber: this.studentClassNumber,
        studentClassLetter: this.studentClassLetter,
      };

      try {
        fetch("http://localhost:3000/update_student", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((data) => {
            let answer = data.text();
            return answer;
          })
          .then((data) => {
            console.log(data);
            // Do something with the response from the server
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataStudent();
  },
};
</script>


<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Страница ученика</p>
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

          <!-- временное решение -->
          <div class="form__element"></div>

          <div class="form__element">
            <label class="form__label">Дата рождения</label>
            <p>{{ studentBirthDate }}</p>
          </div>

          <div class="form__element form__element_margin">
            <label class="form__label">Изменить дату рождения</label>
            <input
              v-model="studentBirthDate"
              type="date"
              class="form__input form__date"
              placeholder="11.11.2011"
            />
          </div>

          <div class="form__element">
            <label class="form__label">Номер класса</label>
            <select
              v-model="studentClassNumber"
              class="form__input form__select"
              placeholder="Класс"
            >
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

          <div class="form__element">
            <label class="form__label">Буква класса</label>
            <input
              type="text"
              name="item-letter"
              id="letter"
              class="form__input"
              placeholder="Введите букву"
              v-model="studentClassLetter"
            />
          </div>

          <!-- <div class="main__two-button button"> -->
        </form>
      </div>

      <div class="main__two-button button">
        <div @click="updateStudent" class="btn btn-success">
          Обновить данные
        </div>
        <div class="button__container button__container--two-button">
          <RouterLink to="../data_monitoring">
            <div onclick="abbsToDate()" class="button__text">
              Перейти к мониторингу
            </div>
          </RouterLink>
          <div class="button__row">
            <img src="image/beegining of work/bow__row-icon.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="title">
        <p class="title__text-title">Результаты мониторинга</p>
      </div>
      <div class="dateinner"></div>
      <!-- <div class="list">
                        <div class="list__container">
                            <div class="list__title">
                                <p>Личностные базовые учебные действия</p>
                            </div>
                            <div class="list__elem-block">
                                <input type="checkbox" name="" id="">
                                <p class="list__elem-text">
                                    Осознание себя как ученика, заинтересованного посещением школы, обучением, занятиями, как члена семьи, одноклассника, друга 
                                </p>
                                <img src="image/row_down.svg" class="list__elem-row" alt="">
                                <div class="list__ellips">
                                    1b
                                </div>
                            </div>
                        </div>
                </div> -->
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.form {
  &__element {
    width: 200px;
    label {
      height: 50px;
    }
  }
}

.main__two-button {
  display: flex;
  align-items: flex-start;
  .btn {
    margin-right: 120px;
  }
  .button__row {
  }
}
</style>