<script>
import GroupOfQuestions from "../components/GroupOfQuestions.vue";

export default {
  components: {
    GroupOfQuestions,
  },
  methods: {
    saveRadio(data, itemText) {
      console.log(itemText)
      // console.log(data + ' ' + id)
      let requestData = {
        data: data,
        itemText: itemText
      }
      try {
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
  data() {
    return {
      content: [
        {
          title: `Осознание себя как ученика, заинтересованного посещением школы, обучением, 
            занятиями, как члена семьи, одноклассника, друга`,
          items: [
            "проявляет ответственное поведение (трансляция заданий учителя дома взрослым, беспокойство по поводу соблюдения требований)",
            "следит за своим внешним видом, аккуратно и сдержанно принимает пищу",
          ],
          references: [""],
        },
        {
          title: `Способность к осмыслению социального окружения, своего места в
            нем, принятие соответствующих возрасту социальных ролей`,
          items: [
            `соблюдает правила поведения во время посещения общественных мест,
            культурно-значимых объектов`,
            `обращается на Вы ко взрослым`,
            `контролирует потенциально неприятные другим естественные
              проявления`,
          ],
          references: [""],
        },
        {
          title: `Положительное отношение к окружающей действительности, готовность
              к организации взаимодействия с ней и эстетическому ее восприятию`,
          items: [
            `проявляет вежливость вербально и невербально при общении с другими
              людьми (улыбка при встрече, обращении)`,
            `сочувствует другим при затруднениях и неприятностях`,
            `проявляет заинтересованность в процессе прослушивания музыкальных
              и литературных произведений`,
            `стремится поддерживать порядок и чистоту вокруг себя, быть
              красивым`,
            `способен делиться с другими`,
          ],
          references: [""],
        },
        {
          title: `Целостный, социально ориентированный взгляд на мир в единстве его
              природной и социальной частей`,
          items: [
            `Замечает красоту в природе, окружающем предметном мире и в людях`,
            `делает попытки самостоятельно создавать что-либо красивое`,
            `стремится слушать книги, музыку, с желанием посещает внеурочные
              занятия`,
          ],
          references: [""],
        },
        {
          title: `Самостоятельность в выполнении учебных заданий, поручений,
              договоренностей`,
          items: [
            `может самостоятельно выполнять доступные учебные задания`,
            `без напоминаний выполняет поручения взрослого, следует
              договоренности, участвует в уборке класса, стремится овладеть
              какими-либо потенциально доступными бытовыми и трудовыми умениями`,
            `стремится к совершенствованию речевых, двигательных,
              коммуникативных умений`,
            `оказывает родителям посильную помощь по дому (накрыть на стол и
              убрать посуду, вымыть посуду, навести порядок в комнате, вытереть
              пыль, пропылесосить, подмести, вынести мусор)`,
          ],
          references: [""],
        },
        {
          title: `Понимание личной ответственности за свои поступки на основе
              представлений об этических нормах и правилах поведения в
              современном обществе`,
          items: [
            `может признаться в неправильном поведении, правдиво отвечает на
              вопросы взрослых и детей`,
          ],
          references: [""],
        },
        {
          title: `Готовность к безопасному и бережному поведению в природе и
              обществе`,
          items: [
            `имеет представления о правилах питания, полезных и вредных
              продуктах`,
            `соблюдает правила личной гигиены, может одеваться в соответствии с
              погодными условиями и социальной ситуацией`,
            `соблюдает правила безопасного поведения (во время прогулки, на
              городской улице, в городском транспорте, при действиях с бытовыми
              электроприборами, инструментами и острыми предметами, огнем,
              водой, бытовой химией, лекарствами и др.)`,
            `адекватно ведет себя вести в магазине, поликлинике, общественном
              транспорте в кафе, кинотеатре, театре, музее`,
            `проявляет в поведении бережное отношение а) к школьному имуществу;
              б) к своим учебным принадлежностям и одежде`,
          ],
          references: [""],
        },
        {
          title: `Умение вступать в контакт и работать в коллективе`,
          items: [
            `знает правила коммуникации в разных ситуациях`,
            `умеет обратиться с вопросом, просьбой;`,
            `может согласованно выполнять необходимые действия (игровые,
              трудовые, спортивные) в паре и в малой группе, не разрушая общего
              замысла`,
          ],
          references: [""],
        },
        {
          title: `Использование принятых ритуалов социального взаимодействия с
              одноклассниками и учителем`,
          items: [
            `использует правила и ритуалы социального взаимодействия с
              одноклассниками и учителем`,
            `может контролировать импульсивные желания (не трогает чужие
              предметы без разрешения)`,
          ],
          references: [""],
        },
        {
          title: `Обращение за помощью и умение принимать помощь`,
          items: [`обращается за помощью и использует помощь`],
          references: [""],
        },
        {
          title: `Умение сотрудничать с взрослыми и сверстниками в разных социальных
              ситуациях`,
          items: [
            `
                сотрудничает с взрослыми и сверстниками в разных социальных
              ситуациях`,
          ],
          references: [""],
        },
        {
          title: `Доброжелательное отношение к другим людям, способность к
              сопереживанию и конструктивному взаимодействию с людьми`,
          items: [
            `доброжелательно относится к другим людям; сопереживает другим
              людям`,
          ],
          items: [`конструктивно взаимодействует с людьми`],
          references: [""],
        },
        {
          title: `Умение договариваться и изменять свое поведение в соответствии с
              объективным мнением большинства в конфликтных или иных ситуациях
              взаимодействия с окружающим`,
          items: [
            `способен договариваться и изменять свое поведение в соответствии с
              объективным мнением большинства в конфликтных или иных ситуациях
              взаимодействия с окружающими`,
          ],
          references: [""],
        },
        {
          title: `Адекватное соблюдение ритуалов школьного поведения`,
          items: [
            `соблюдает правила поведения на уроке (встает для приветствия
              учителя в начале урока, поднимает руку для ответа и ждет, когда
              педагог предложит ответить, выполняет указания учителя и т. д.)`,
          ],
          references: [""],
        },
        {
          title: `Соотношение своих действий и их результатов с заданными образцами,
              принятие оценки деятельности, оценивание ее с учетом предложенных
              критериев, коррекция своей деятельности с учетом выявленных
              недочетов`,

          items: [`принимает от педагога оценку своей деятельности`],
          references: [""],
        },
        {
          title: `Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности`,
          items: [
            `наблюдает под руководством взрослого за предметами и явлениями
              окружающей действительности`,
          ],
          references: [""],
        },
      ],
    };
  },
};
</script>


<template>
  <HeaderStandart />
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
            @save-radio-data-server="(data, itemText) => saveRadio(data, itemText)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[1].title"
            :items="content[1].items"
            :references="content[1].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[2].title"
            :items="content[2].items"
            :references="content[2].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[3].title"
            :items="content[3].items"
            :references="content[3].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[4].title"
            :items="content[4].items"
            :references="content[4].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[5].title"
            :items="content[5].items"
            :references="content[5].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[6].title"
            :items="content[6].items"
            :references="content[6].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[7].title"
            :items="content[7].items"
            :references="content[7].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[8].title"
            :items="content[8].items"
            :references="content[8].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[9].title"
            :items="content[9].items"
            :references="content[9].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[10].title"
            :items="content[10].items"
            :references="content[10].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[11].title"
            :items="content[11].items"
            :references="content[11].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[12].title"
            :items="content[12].items"
            :references="content[12].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <div class="list__title">
            <p>Регулятивные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[13].title"
            :items="content[13].items"
            :references="content[13].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />

          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[14].title"
            :items="content[14].items"
            :references="content[14].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="1"
            :title="content[15].title"
            :items="content[15].items"
            :references="content[15].references"
            @save-radio-data-server="(data) => saveRadio(data)"
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



