<script>
export default {
  data() {
    return {
      dateChosen: "",
    };
  },
  methods: {
    saveDate() {
      if (this.dateChosen == "") {
        const dateCurrent = new Date();
        if (dateCurrent.getMonth() >= 10) {
          document.cookie = `datePoll=${dateCurrent.getFullYear()}-${dateCurrent.getMonth()}-${dateCurrent.getDate()}`;
        } else {
          document.cookie = `datePoll=${dateCurrent.getFullYear()}-0${dateCurrent.getMonth()}-${dateCurrent.getDate()}`;
        }
      } else {
        document.cookie = `datePoll=${this.dateChosen}`;
        console.log(this.dateChosen);
      }
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
      let datePoll = getCookie('datePoll')
      let studentId = getCookie('studentId')
      let requestData = {
        date: datePoll,
        studentId: studentId,
      };
      try {
        let result = fetch("http://localhost:3000/choose_date", {
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
};
</script>


<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Выберите дату мониторинга</p>
      </div>

      <div class="datefrm">
        <div class="form__element">
          <label class="form__label">Дата мониторинга</label>
          <input
            v-model="dateChosen"
            type="date"
            id="datamon"
            class="form__input form__date"
          />
        </div>

        <div class="main__two-button button btndate">
          <RouterLink to="../choice_of_method">
            <div class="button__container button__container--blue">
              <div
                id="datamonbtn"
                class="button__text button__text--white"
                @click="saveDate"
              >
                Сохранить
              </div>
            </div>
          </RouterLink>
          <div
            onclick="bowToaddstudent()"
            class="button__container button__container--two-button"
          >
            <div class="button__text">Назад</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>
