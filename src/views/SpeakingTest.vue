<script>
import GroupOfQuestions from "../components/GroupOfQuestions.vue";

export default {
  components: {
    GroupOfQuestions,
  },
  methods: {
    saveRadio(data) {
      requestData = {};
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
          sectionTitle: "Личностные базовые учебные действия",
          title: `Осознание себя как ученика, заинтересованного посещением школы,
              обучением, занятиями, как члена семьи, одноклассника, друга`,
          items: [
            {
              text: `может назвать полностью свое имя, отчество и фамилию, свой возраст
              и дату рождения, половую принадлежность`,
              reference: `Беседа 1:
– Как тебя зовут? Назови своё полное имя, фамилию и отчество.
– Сколько тебе лет? Когда у тебя день рождения?
– Ты мальчик или девочка?`,
              points: 0,
              idQuestion: 66,
            },
            {
              text: `может обозначить свою социальную роль (школьник, ученик)`,
              reference: `Беседа 1:
– Ты уже учишься в школе, верно? Как тебя можно назвать, раз ты учишься в школе?
– Для мамы и папы ты…
а. Сын 
б. Дочь
в. Друг
г. Сосед
– Для ребят в классе ты ….
а. Сын 
б. Дочь
в. Одноклассник
г. Сосед
`,
              idQuestion: 67,
              points: 0,
            },
            {
              text: `может назвать класс, в котором учится`,
              reference: `Беседа 1:
– В каком классе ты учишься?`,
              points: 0,
              idQuestion: 68,
            },
          ],
        },
        {
          title: `Способность к осмыслению социального окружения, своего места в
              нем, принятие соответствующих возрасту социальных ролей`,
          items: [
            {
              text: `знает Ф.И.О. родителей, учителя, может назвать имена своих
              одноклассников`,
              reference: `Беседа 1:
– Как зовут твою маму? Назови полное имя, фамилию и отчество мамы.
– Как зовут твоего папу? Назови полное имя, фамилию и отчество папы.
–Как зовут твоего учителя? Назови полное имя, фамилию и отчество учителя. 
– Кто учится у тебя в классе? Назови имена своих одноклассников.`,
              points: 0,
              idQuestion: 69,
            },
          ],
        },
        {
          title: `Положительное отношение к окружающей действительности, готовность
              к организации взаимодействия с ней и эстетическому ее восприятию`,
          items: [
            {
              text: `различает красивое и некрасивое`,
              points: 0,
              reference: `Беседа 4:
– Что ты считаешь красивым? Что для тебя красиво?`,
              idQuestion: 70,
            },
          ],
        },
        {
          title: `Целостный, социально ориентированный взгляд на мир в единстве его
              природной и социальной частей`,
          items: [
            {
              text: `осознает свои предпочтения (люблю - не люблю)`,
              reference: `Беседа 4:
– Ты любишь слушать музыку? Какую музыку ты любишь?  
– А слушать сказки, рассказы тебе нравится? Какая твоя любимая сказка?
– А что ты ещё любишь делать? Бывает много интересных занятий, посмотри на картинку. А какие из них нравятся тебе?`,
              points: 0,
              idQuestion: 71,
            },
            {
              text: `знает свой домашний адрес, путь от дома до школы (с названиями
              ориентиров - улиц или номеров общественного транспорта)`,
              reference: `Беседа 1:
– Где ты живёшь? Назови свой адрес.
Если не знает/не может назвать точно: Расскажи, ты ходишь домой сам? Можешь рассказать, как пройти домой? На каком транспорте ты едешь?`,
              points: 0,
              idQuestion: 72,
            },
            {
              text: `знает занятия родителей, функции социально значимых учреждений
              (почта, вокзал, музей и пр.), сезонные изменения в природе и жизни
              человека`,
              reference: `Беседа 1:
– Кем мама работает? Что делает на работе?
– Кем папа работает? Что делает на работе?
– Какое сейчас время года? Как ты узнал, что сейчас весна? Что происходит весной с природой?
Вопросы из беседы 3 (магазин, поликлиника)
Беседа 5:
– Посмотри на картинку, что на ней изображено? Расскажи, для чего нужны вокзалы?
– Посмотри на картинку, что на ней изображено? (почта) Расскажи, для чего нужна почта?
– Посмотри на картинку, что на ней изображено? (музей) Для чего люди ходят в музей?
– Назови характерные признаки осени. Какую одежду мы носим осенью? 
– Назови характерные признаки зимы. Какую одежду мы носим зимой? 
– Назови характерные признаки весны. Какую одежду мы носим весной? 
– Назови характерные признаки лета. Какую одежду мы носим летом? 
– Какую одежду ты наденешь в спортзал? А на пляж? А в школу? В кинотеатр?
`,
              points: 0,
              idQuestion: 73,
            },
          ],
        },
        {
          title: `Понимание личной ответственности за свои поступки на основе
              представлений об этических нормах и правилах поведения в
              современном обществе`,
          items: [
            {
              text: `знает этические нормы и правила поведения в обществе`,
              reference: `Беседа 2: 
– Когда ты встречаешь человека, что нужно ему сказать?
– Какое слово мы говорим, когда просим другого человека о чем-то?
– Ты съел на улице шоколадку. Что нужно сделать с бумажной оберткой, если рядом нет урны?
– Ты подошёл к двери подъезда одновременно с соседкой. Как ты поступишь?
– Что нужно обязательно делать перед едой?`,
              points: 0,
              idQuestion: 74,
            },
          ],
        },
        {
          title: `Готовность к безопасному и бережному поведению в природе и
              обществе`,
          items: [
            {
              text: `знает правила безопасного поведения (во время прогулки, на
              городской улице, в городском транспорте, при действиях с бытовыми
              электроприборами, инструментами и острыми предметами, огнем,
              водой, бытовой химией, лекарствами и др.)`,
              points: 0,
              reference: `Беседа 3
- Расскажи, как правильно обращаться с электроприборами/инструментами?
- Посмотри на картинку. Что здесь нарисовано? (люди в автобусе/троллейбусе/трамвае) Как правильно вести себя в общественном транспорте?
-	Посмотри на картинку. Что здесь изображено? Расскажи, как нужно себя вести в поликлинике/на улице?
`,
              idQuestion: 75,
            },
            {
              text: `знает правила дорожного движения, безопасного поведения на
              транспорте`,
              points: 0,
              reference: `Беседа 3:
– Посмотри на картинки. Давай вспомним правила дорожного движения. Расскажи, какие правила ты знаешь.`,
              idQuestion: 76,
            },
            {
              text: `знает правила безопасного пользования компьютера`,
              reference: `Беседа 3:
- Как правильно вести себя при работе с компьютером? Что нужно сделать после того, как работал с компьютером?`,
              points: 0,
              idQuestion: 77,
            },
            {
              text: `соблюдает правила личной гигиены, может одеваться в соответствии с погодными условиями и социальной ситуацией`,
              points: 0,
              reference: `Беседа 2:
 – Расскажи, какие полезные продукты ты знаешь?
`,
              idQuestion: 78,
            },
          ],
        },
        {
          sectionTitle: "Коммуникативные базовые учебные действия",
          title: `Использование принятых ритуалов социального взаимодействия с
              одноклассниками и учителем`,
          items: [
            {
              text: `знает принятые правила и ритуалы социального взаимодействия с
              одноклассниками и учителем`,
              points: 0,
              idQuestion: 79,
              reference: `.	Когда ты встречаешь человека, что нужно ему сказать?\n
    • До свидания\n
    • Спасибо\n
    • Здравствуйте\n
2.	Какое слово мы говорим, когда просим другого человека о чем-то\n
    • Спасибо\n
    • Пожалуйста\n
    • Здравствуй\n
3.	Ты съел на улице шоколадку. Что нужно сделать с бумажной оберткой, если рядом нет урны?\n
    • Свернуть бумажку и положить в карман или сумку, чтобы выбросить дома в мусорное ведро.\n
    • Бросить бумажку в траву или кусты \n
    • Подарить бумажную обертку прохожему.\n
4.	Ты подошёл к двери подъезда одновременно с соседкой. Как ты поступишь?\n
    • Откроешь дверь и пропустишь соседку вперед, и только потом войдешь сам.\n
    • Войдешь в дверь первым и захлопнешь ее перед носом у соседки.\n
    • Будешь ждать, когда перед тобой откроют дверь.\n`,
            },
          ],
        },
        {
          sectionTitle: "Познавательные базовые учебные действия",
          title: `Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности`,
          items: [
            {
              text: `выделяет признаки предметов и явлении окружающей действительности`,
              points: 0,
              idQuestion: 80,
              reference: `Беседа 2
6.	Какую одежду мы одеваем зимой? А летом?\n
7.	Какое сейчас время года? Как ты узнал, что сейчас весна? Что происходит весной с природой?`,
            },
          ],
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
        <p class="title__text-title">Беседа</p>
      </div>

      <div class="list">
        <div class="list__container">
          <div class="list__title">
            <p>Личностные базовые учебные действия</p>
          </div>

          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[0].title"
            :items="content[0].items"
            :references="content[0].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[1].title"
            :items="content[1].items"
            :references="content[1].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[2].title"
            :items="content[2].items"
            :references="content[2].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[3].title"
            :items="content[3].items"
            :references="content[3].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[4].title"
            :items="content[4].items"
            :references="content[4].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[5].title"
            :items="content[5].items"
            :references="content[5].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[6].title"
            :items="content[6].items"
            :references="content[6].references"
            @save-radio-data-server="(data) => saveRadio(data)"
          />
          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>
          <GroupOfQuestions
            :typeOfRadio="2"
            :title="content[7].title"
            :items="content[7].items"
            :references="content[7].references"
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


  <!-- 
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Беседа</p>
      </div>

      <div class="list">
        <div class="list__container">
          <div class="list__title">
            <p>Личностные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Осознание себя как ученика, заинтересованного посещением школы,
              обучением, занятиями, как члена семьи, одноклассника, друга
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>

          <ul onclick="msToTest()" class="list__ul" id="ul">
            <li>
              может назвать полностью свое имя, отчество и фамилию, свой возраст
              и дату рождения, половую принадлежность
            </li>
            <li>может обозначить свою социальную роль (школьник, ученик)</li>
            <li>может назвать класс, в котором учится</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Способность к осмыслению социального окружения, своего места в
              нем, принятие соответствующих возрасту социальных ролей
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest2()" class="list__ul" id="ul">
            <li>
              знает Ф.И.О. родителей, учителя, может назвать имена своих
              одноклассников
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Положительное отношение к окружающей действительности, готовность
              к организации взаимодействия с ней и эстетическому ее восприятию
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest3()" class="list__ul" id="ul">
            <li>различает красивое и некрасивое</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Целостный, социально ориентированный взгляд на мир в единстве его
              природной и социальной частей
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest4()" class="list__ul" id="ul">
            <li>осознает свои предпочтения (люблю - не люблю)</li>
            <li>
              знает свой домашний адрес, путь от дома до школы (с названиями
              ориентиров - улиц или номеров общественного транспорта)
            </li>
            <li>
              знает занятия родителей, функции социально значимых учреждений
              (почта, вокзал, музей и пр.), сезонные изменения в природе и жизни
              человека
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Понимание личной ответственности за свои поступки на основе
              представлений об этических нормах и правилах поведения в
              современном обществе
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest5()" class="list__ul" id="ul">
            <li>знает этические нормы и правила поведения в обществе</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Готовность к безопасному и бережному поведению в природе и
              обществе
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest6()" class="list__ul" id="ul">
            <li>
              знает правила безопасного поведения (во время прогулки, на
              городской улице, в городском транспорте, при действиях с бытовыми
              электроприборами, инструментами и острыми предметами, огнем,
              водой, бытовой химией, лекарствами и др.)
            </li>
            <li>
              знает правила дорожного движения, безопасного поведения на
              транспорте
            </li>
            <li>знает правила безопасного пользования компьютера</li>
          </ul>

          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Использование принятых ритуалов социального взаимодействия с
              одноклассниками и учителем
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest7()" class="list__ul" id="ul">
            <li>
              знает принятые правила и ритуалы социального взаимодействия с
              одноклассниками и учителем
            </li>
          </ul>

          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest8()" class="list__ul" id="ul">
            <li>
              выделяет признаки предметов и явлении окружающей действительности
            </li>
          </ul>
        </div>

        <div class="main__two-button button">
          <div
            onclick="bowToaddstudent()"
            class="button__container button__container--two-button button__container--blue"
          >
            <div class="button__text--white">Начать мониторинг</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>

          <div onclick="msToCh()" class="button__container">
            <div class="button__text button__text--blue">Назад</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FoouterStandar /> -->
