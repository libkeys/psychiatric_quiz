<script>
import GroupOfQuestions from "../components/GroupOfQuestions.vue";

export default {
  components: {
    GroupOfQuestions,
  },
  methods: {
    // получение выбранных очков если мониторинг перепроходят или допроходят
    getActualPoints() {
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
      this.studentId = studentId;
      if (studentId == undefined) {
        this.$router.push({ path: "/authorisation" });
      }
      let requestData = {
        studentId: studentId,
      };

      try {
        if (studentId != undefined) {
          let result = fetch("http://localhost:3000/get_student_by_id", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          }).then((data) => {
            let answer = data.json();
            return answer;
          });

          //подставление полученных значений в points каждого элемента на этой странице с последующей передачей
          //вложенным компонентам
          result.then((answer) => {
            let idQuestionsArray = [];
            answer.resultAnswers.forEach((element, index) => {
              idQuestionsArray.push(element.idQuestion);
            });
            console.log(idQuestionsArray);

            this.content.forEach((element, index) => {
              element.items.forEach((elementQuestion, indexQuestion) => {
                if (idQuestionsArray.includes(elementQuestion.idQuestion)) {
                  let sourceElement = answer.resultAnswers.find(
                    (elementGot) => {
                      // console.log("server element " + elementGot.idQuestion);
                      return (
                        elementGot.idQuestion == elementQuestion.idQuestion
                      );
                    }
                  );
                  this.content[index].items[indexQuestion].points =
                    sourceElement.answerPoints;
                  this.content[index].items[indexQuestion].addition =
                    sourceElement.addition;
                  // console.log(this.content);
                  // console.log(idQuestionsArray, ' ', element, ' ', elementQuestion);
                }
              });
            });
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    saveRadio(data, itemText, addition) {
      console.log(addition)
      // console.log(data + ' ' + id)
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
      let datePoll = getCookie("datePoll");
      let requestData = {
        data: data,
        itemText: itemText,
        datePoll: datePoll,
      };
      if (addition != undefined) {
        requestData.addition = addition;
      }
      console.log(addition);
      console.log(requestData);
      try {
        // let result = fetch("http://localhost:3000/save_radio", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "X-HTTP-Method-Override": "POST"
        //   },
        //   body: JSON.stringify(requestData),

        let result = fetch("http://localhost:3000/save_radio", {
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
          this.addedClasses = JSON.parse(data);
          console.log(data);
          this.exist = false;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getActualPoints();
  },
  data() {
    return {
      content: [
        {
          sectionTitle: "Личностные базовые учебные действия",
          title: `Осознание себя как ученика, заинтересованного посещением школы, обучением, 
            занятиями, как члена семьи, одноклассника, друга`,
          items: [
            {
              text: "проявляет ответственное поведение (трансляция заданий учителя дома взрослым, беспокойство по поводу соблюдения требований)",
              idQuestion: 34,
              points: 0,
            },
            {
              text: "следит за своим внешним видом, аккуратно и сдержанно принимает пищу",
              idQuestion: 35,
              points: 0,
            },
          ],
          // references: [""],
        },
        {
          title: `Способность к осмыслению социального окружения, своего места в нем, принятие соответствующих возрасту социальных ролей`,
          items: [
            {
              points: 0,
              addition: '',
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
        },
        {
          title: `Обращение за помощью и умение принимать помощь`,
          items: [
            {
              points: 0,
              idQuestion: 33,
              text: `обращается за помощью и использует помощь`,
            },
          ],
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
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
          // references: [""],
        },
        {
          title: `Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности`,
          items: [
            {
              points: 0,
              idQuestion: 32,
              text: `наблюдает под руководством взрослого за предметами и явлениями
              окружающей действительности`,
            },
          ],
          // references: [""],
        },
      ],
    };
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
        <p class="title__text-title">Наблюдение</p>
      </div>

      <div class="list">
        <div class="list__container">
          <div class="list__title">
            <p>Личностные базовые учебные действия</p>
          </div>

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[0].title"
            :items="content[0].items"
            :references="content[0].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[1].title"
            :items="content[1].items"
            :references="content[1].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[2].title"
            :items="content[2].items"
            :references="content[2].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[3].title"
            :items="content[3].items"
            :references="content[3].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[4].title"
            :items="content[4].items"
            :references="content[4].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[5].title"
            :items="content[5].items"
            :references="content[5].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[6].title"
            :items="content[6].items"
            :references="content[6].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />
          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[7].title"
            :items="content[7].items"
            :references="content[7].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[8].title"
            :items="content[8].items"
            :references="content[8].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[9].title"
            :items="content[9].items"
            :references="content[9].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[10].title"
            :items="content[10].items"
            :references="content[10].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[11].title"
            :items="content[11].items"
            :references="content[11].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[12].title"
            :items="content[12].items"
            :references="content[12].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />
          <div class="list__title">
            <p>Регулятивные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[13].title"
            :items="content[13].items"
            :references="content[13].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[14].title"
            :items="content[14].items"
            :references="content[14].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />
          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[15].title"
            :items="content[15].items"
            :references="content[15].references"
            @save-radio-data-server="
              (data, itemText, addition) => saveRadio(data, itemText, addition)
            "
          />
        </div>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.list {
  &__title {
    margin-top: 70px;
    font-size: 28px;
    margin-left: -20px;
  }
}
</style>



