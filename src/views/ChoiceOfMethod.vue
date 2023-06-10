<script>
export default {
  methods: {
    saveType(type) {
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
      let studentId = getCookie("studentId");
      let requestData = {
        type: type,
        date : datePoll,
        studentId : studentId
      };
      let result = fetch("http://localhost:3000/save_monitoring", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
    },
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
        <p class="title__text-title">Выбор методики обследования</p>
      </div>

      <div class="choice-card">
        <RouterLink to="observation_test">
          <div class="choice-card__card">
            <img
              src="../assets/images/methodChoice/observation.svg"
              alt="observation"
            />

            <p class="choice-card__title">Наблюдение</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 16 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink @click="saveType(2)" to="../speaking_test">
          <div class="choice-card__card">
            <img
              onclick="cmToMs()"
              src="../assets/images/methodChoice/speaking.svg"
              alt="conversation"
            />

            <p class="choice-card__title">Беседа</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 8 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink @click="saveType(3)" to="../experiment_test">
          <div class="choice-card__card">
            <img
              src="../assets/images/methodChoice/experiment.svg"
              alt="experiment"
            />

            <p class="choice-card__title">Эксперимент</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 14 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <RouterLink to="../student_page">
        <div class="main__button button">
          <div class="button__container">
            <div onclick="cmToSp()" class="button__text">Назад</div>

            <div class="button__row">
              <!-- <img src="image/beegining of work/bow__row-icon.svg" alt="" /> -->
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <FooterStandart />
</template>
