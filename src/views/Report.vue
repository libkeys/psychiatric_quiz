<script>
export default {
  data() {
    return {
      studentName: "",
      studentClass: "",
      studentBirthDate: "",
    };
  },
  methods: {
    getStudentName() {
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
      let studentName = getCookie("studentName");
      let studentSurname = getCookie("studentSurame");
      let studentLastname = getCookie("studentLastame");
      let studentClassFullName = getCookie("studentClassFullName");
      let studentBirthDate = getCookie("studentBirthDate").slice(0, 10);
      const dateParts = studentBirthDate.split("-");
      const transformedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
      if (studentName == undefined) {
        studentName = "";
      }
      if (studentSurname == undefined) {
        studentSurname = "";
      }
      if (studentLastname == undefined) {
        studentLastname = "";
      }

      this.studentName = `${studentName} ${studentSurname} ${studentLastname}`;
      this.studentClass = `${studentClassFullName}`;
      this.studentBirthDate = transformedDate;
    },
  },
  created() {
    this.getStudentName();
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
  <div class="report">
    <h2 class="report__title">Отчет</h2>
    <div class="report__student-info">
      <div class="report__student-info-item">
        <p class="report__student-info-subtitle">Ф.И.О.</p>
        <p class="report__student-info-text">{{ studentName }}</p>
      </div>
      <div class="report__student-info-item">
        <p class="report__student-info-subtitle">Класс</p>
        <p class="report__student-info-text">{{ studentClass }}</p>
      </div>
      <div class="report__student-info-item">
        <p class="report__student-info-subtitle">Дата рождения</p>
        <p class="report__student-info-text">{{ studentBirthDate }}</p>
      </div>
    </div>
    <div class="report__monitoring-subtitle">
      <h3>Результаты мониторинга</h3>
      <p>за</p>
    </div>
    <div class="report__main"></div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500&display=swap");
.report {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  &__title {
    display: flex;
    justify-content: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-top: 60px;
    margin-bottom: 0;
    line-height: 26px;
  }
  &__student-info {
    margin-left: 145px;
    margin-top: 52px;
  }
  &__student-info-item {
    display: flex;
    &:first-child {
      margin-top: 0;
    }
    margin-top: 37px;
  }
  &__student-info-subtitle {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
  }
  &__student-info-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-top: 8px;
    margin-left: 30px;
  }
  &__monitoring-subtitle {
    display: flex;
    justify-content: center;
    margin-top: 66px;
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
    }
    p {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
    }
  }
  &__main {
    margin-top: 40px;
  }
}
</style>