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
      studentId: 0,
      content: [
        {
          sectionTitle: "Личностные базовые учебные действия",
          title: `Осознание себя как ученика, заинтересованного посещением школы, обучением, 
            занятиями, как члена семьи, одноклассника, друга`,
          items: [
            {
              text: "проявляет ответственное поведение (трансляция заданий учителя дома взрослым, беспокойство по поводу соблюдения требований)",
              idQuestion: 47,
              points: 0,
            },
            {
              text: "следит за своим внешним видом, аккуратно и сдержанно принимает пищу",
              idQuestion: 48,
              points: 0,
            },
          ],
        },
        {
          title: `Способность к осмыслению социального окружения, своего места в нем, принятие соответствующих возрасту социальных ролей`,
          items: [
            {
              points: 0,
              idQuestion: 1,
              text: `соблюдает правила поведения во время посещения общественных мест, культурно-значимых объектов`,
            },
            { points: 0, idQuestion: 2, text: `обращается на Вы ко взрослым` },
            {
              points: 0,
              idQuestion: 3,
              text: `контролирует потенциально неприятные другим естественные проявления`,
            },
          ],
        },
        {
          title: `Положительное отношение к окружающей действительности, готовность к организации взаимодействия с ней и эстетическому ее восприятию`,
          items: [
            {
              points: 0,
              idQuestion: 4,
              text: `проявляет вежливость вербально и невербально при общении с другими людьми (улыбка при встрече, обращении)`,
            },
            {
              points: 0,
              idQuestion: 5,
              text: `сочувствует другим при затруднениях и неприятностях`,
            },
            {
              points: 0,
              idQuestion: 6,
              text: `проявляет заинтересованность в процессе прослушивания музыкальных и литературных произведений`,
            },
            {
              points: 0,
              idQuestion: 7,
              text: `стремится поддерживать порядок и чистоту вокруг себя, быть красивым`,
            },
            { points: 0, idQuestion: 8, text: `способен делиться с другими` },
          ],
        },
        {
          title: `Целостный, социально ориентированный взгляд на мир в единстве его природной и социальной частей`,
          items: [
            {
              points: 0,
              idQuestion: 9,
              text: `Замечает красоту в природе, окружающем предметном мире и в людях`,
            },
            {
              points: 0,
              idQuestion: 10,
              text: `делает попытки самостоятельно создавать что-либо красивое`,
            },
            {
              points: 0,
              idQuestion: 11,
              text: `стремится слушать книги, музыку, с желанием посещает внеурочные занятия`,
            },
          ],
        },
        {
          title: `Самостоятельность в выполнении учебных заданий, поручений,
              договоренностей`,
          items: [
            {
              points: 0,
              idQuestion: 12,
              text: `может самостоятельно выполнять доступные учебные задания`,
            },
            {
              points: 0,
              idQuestion: 13,
              text: `без напоминаний выполняет поручения взрослого, следует
              договоренности, участвует в уборке класса, стремится овладеть
              какими-либо потенциально доступными бытовыми и трудовыми умениями`,
            },
            {
              points: 0,
              idQuestion: 14,
              text: `стремится к совершенствованию речевых, двигательных,
              коммуникативных умений`,
            },
            {
              points: 0,
              idQuestion: 15,
              text: `оказывает родителям посильную помощь по дому (накрыть на стол и
              убрать посуду, вымыть посуду, навести порядок в комнате, вытереть
              пыль, пропылесосить, подмести, вынести мусор)`,
            },
          ],
        },
        {
          title: `Понимание личной ответственности за свои поступки на основе
              представлений об этических нормах и правилах поведения в
              современном обществе`,
          items: [
            {
              points: 0,
              idQuestion: 16,
              text: `может признаться в неправильном поведении, правдиво отвечает на
              вопросы взрослых и детей`,
            },
          ],
        },
        {
          title: `Готовность к безопасному и бережному поведению в природе и
              обществе`,
          items: [
            {
              points: 0,
              idQuestion: 17,
              text: `имеет представления о правилах питания, полезных и вредных
              продуктах`,
            },
            {
              points: 0,
              idQuestion: 18,
              text: `соблюдает правила личной гигиены, может одеваться в соответствии с
              погодными условиями и социальной ситуацией`,
            },
            {
              points: 0,
              idQuestion: 19,
              text: `соблюдает правила безопасного поведения (во время прогулки, на
              городской улице, в городском транспорте, при действиях с бытовыми
              электроприборами, инструментами и острыми предметами, огнем,
              водой, бытовой химией, лекарствами и др.)`,
            },
            {
              points: 0,
              idQuestion: 20,
              text: `адекватно ведет себя вести в магазине, поликлинике, общественном
              транспорте в кафе, кинотеатре, театре, музее`,
            },
            {
              points: 0,
              idQuestion: 21,
              text: `проявляет в поведении бережное отношение а) к школьному имуществу;
              б) к своим учебным принадлежностям и одежде`,
            },
          ],
        },
        {
          sectionTitle: "Коммуникативные базовые учебные действия",
          title: `Умение вступать в контакт и работать в коллективе`,
          items: [
            {
              points: 0,
              idQuestion: 22,
              text: `знает правила коммуникации в разных ситуациях`,
            },
            {
              points: 0,
              idQuestion: 23,
              text: `умеет обратиться с вопросом, просьбой;`,
            },
            {
              points: 0,
              idQuestion: 24,
              text: `может согласованно выполнять необходимые действия (игровые,
              трудовые, спортивные) в паре и в малой группе, не разрушая общего
              замысла`,
            },
          ],
        },
        {
          title: `Использование принятых ритуалов социального взаимодействия с
              одноклассниками и учителем`,
          items: [
            {
              points: 0,
              idQuestion: 25,
              text: `использует правила и ритуалы социального взаимодействия с
              одноклассниками и учителем`,
            },
            {
              points: 0,
              idQuestion: 26,
              text: `может контролировать импульсивные желания (не трогает чужие
              предметы без разрешения)`,
            },
          ],
        },
        {
          title: `Умение сотрудничать с взрослыми и сверстниками в разных социальных
              ситуациях`,
          items: [
            {
              points: 0,
              idQuestion: 27,
              text: `
                сотрудничает с взрослыми и сверстниками в разных социальных
              ситуациях`,
            },
          ],
        },
        {
          title: `Доброжелательное отношение к другим людям, способность к
              сопереживанию и конструктивному взаимодействию с людьми`,
          items: [
            // {
            //   points: 0,
            //   idQuestion: 1,
            //   text: `доброжелательно относится к другим людям; сопереживает другим
            //   людям`,
            // },
            {
              points: 0,
              idQuestion: 28,
              text: `конструктивно взаимодействует с людьми`,
            },
          ],
        },
        {
          title: `Умение договариваться и изменять свое поведение в соответствии с
              объективным мнением большинства в конфликтных или иных ситуациях
              взаимодействия с окружающим`,
          items: [
            {
              points: 0,
              idQuestion: 29,
              text: `способен договариваться и изменять свое поведение в соответствии с
              объективным мнением большинства в конфликтных или иных ситуациях
              взаимодействия с окружающими`,
            },
          ],
        },
        {
          sectionTitle: "Регулятивные базовые учебные действия",
          title: `Адекватное соблюдение ритуалов школьного поведения`,
          items: [
            {
              points: 0,
              idQuestion: 30,
              text: `соблюдает правила поведения на уроке (встает для приветствия
              учителя в начале урока, поднимает руку для ответа и ждет, когда
              педагог предложит ответить, выполняет указания учителя и т. д.)`,
            },
          ],
        },
        {
          title: `Соотношение своих действий и их результатов с заданными образцами,
              принятие оценки деятельности, оценивание ее с учетом предложенных
              критериев, коррекция своей деятельности с учетом выявленных
              недочетов`,

          items: [
            {
              text: `принимает от педагога оценку своей деятельности`,
              points: 0,
              idQuestion: 31,
            },
          ],
        },
        {
          sectionTitle: "Познавательные базовые учебные действия",
          title: `Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности`,
          items: [
            {
              points: 0,
              idQuestion: 49,
              text: `наблюдает под руководством взрослого за предметами и явлениями
              окружающей действительности`,
            },
          ],
        },
      ],
    };
  },
  methods: {
    checkSectionTitle(item) {
      if (item.sectionTitle == undefined) {
        return false;
      } else {
        return true;
      }
    },
    isFirstSection(index) {
      if (index == 0) {
        return true;
      } else {
        // console.log(index);
        false;
      }
    },
    checkDeclination(points) {
      console.log(points)
      let answer = "";
      switch (points) {
        case 0:
          answer = "баллов";
          break;
        // console.log(points + 0)
        case 1:
          answer = "балл";
          break;
          // console.log(points + 1)
        case 2:
        case 3:
          answer = "балла";
          break;
          // console.log(points + 2)
      }
      return answer
    },
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
      let studentId = getCookie("studentId");
      //присваивание глобальной переменной значение из куки чтобы потом использовать при обновлении данных
      this.studentId = studentId;
      let requestData = {
        studentId: studentId,
      };
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
          const dataParsed = JSON.parse(data).resultStudent[0];
          this.studentName = dataParsed.studentName;
          this.studentSurname = dataParsed.studentSurname;
          this.studentLastname = dataParsed.studentLastname;
          this.studentBirthDate = new Date(
            dataParsed.studentBirthDate
          ).toLocaleDateString();
          this.studentClassNumber = dataParsed.classNumber;
          this.studentClassLetter = dataParsed.classLetter;
          // console.log(dataParsed);

          let dataFull = JSON.parse(data);
          let idQuestionsArray = [];
          dataFull.resultAnswers.forEach((element, index) => {
            idQuestionsArray.push(element.idQuestion);
          });
          console.log(idQuestionsArray);

          this.content.forEach((element, index) => {
            element.items.forEach((elementQuestion, indexQuestion) => {
              if (idQuestionsArray.includes(elementQuestion.idQuestion)) {
                let sourceElement = dataFull.resultAnswers.find(
                  (elementGot) => {
                    console.log("server element " + elementGot.idQuestion);
                    return elementGot.idQuestion == elementQuestion.idQuestion;
                  }
                );
                this.content[index].items[indexQuestion].points =
                  sourceElement.answerPoints;
                console.log(this.content);
                // console.log(idQuestionsArray, ' ', element, ' ', elementQuestion);
              }
            });
          });
          // console.log(this.studentBirthDay);
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
        studentId: this.studentId,
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

        <div class="results">
          <div
            v-for="(item, index) in content"
            class="results__item"
            :key="index"
          >
            <div
              :class="{ 'results__section-title_first': isFirstSection(index) }"
              class="results__section-title"
              v-if="checkSectionTitle(item)"
            >
              <p>{{ item.sectionTitle }}</p>
            </div>
            <div class="results__title">
              <p>
                {{ item.title }}
              </p>
            </div>
            <div
              class="results__question"
              v-for="(question, indexQuestion) in item.items"
              :key="indexQuestion"
            >
              <div class="results__checkbox-wrap">
                <div class="results__checkbox" :class="{'results__checkbox_filled' : question.points > 0}"></div>
              </div>
              <p>
                {{ question.text }}
              </p>
              <div class="results__points">
                {{ question.points }} {{ checkDeclination(question.points) }}
              </div>
            </div>
          </div>
        </div>
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

.results {
  &__item {
  }
  &__section-title {
    display: flex;
    justify-content: flex-start;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 28px;

      padding-bottom: 30px;
      margin-top: 80px;
    }

    &_first {
      p {
        margin-top: 30px;
      }
    }
  }
  &__title {
    display: flex;
    justify-content: flex-start;
    p {
      text-align: left;
      margin: 30px 0;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 28px;
    }
  }
  &__question {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
    // height: 60px;
    p {
      text-align: left;
      margin: auto 0;
      width: 1000px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
    }
  }
  &__checkbox-wrapper {
    display: flex;
    align-items: center;
  }
  &__checkbox {
    // display: flex;
    // justify-self: center;
    display: flex;
    width: 30px;
    height: 30px;
    border: 2px solid gray;
    // position: absolute;
    border-radius: 5px;
    margin-top: 0px;
    margin-right: 50px;

    &_filled {
      background-image: url("./src/assets/images/checkbox.png");
      background-position: center;
      background-repeat: no-repeat;
      background-color: #3b5da4;
    }
  }
  &__points {
    margin-left: 100px;
    width: 120px;
    height: 40px;
    background: #3b5da4;
    color: white;
    font-size: 20px;
    border-radius: 5px;
  }
}
</style>