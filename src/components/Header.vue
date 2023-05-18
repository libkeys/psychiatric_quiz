<script>
export default {
  data() {
    return {
      studentName: "",
      studentClassAndBirth: "",
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
      this.studentClassAndBirth = `класс: ${studentClassFullName} дата рождения: ${studentBirthDate}`;
    },
  },
  created() {
    if (this.showStudent) {
      this.getStudentName();
    }
  },
  props: {
    showStudent: {
      type: Boolean,
    },
  },
};
</script>


<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <RouterLink to="../">
          <div class="first-page__logo">
            <img
              src="../assets/images/первый экран/header лого+текст.svg"
              alt="logo"
            />
          </div>
        </RouterLink>
        <RouterLink to="../student_page" v-if="showStudent">
          <div class="header__student-info">
            <p>{{ studentName }}<br />{{ studentClassAndBirth }}</p>
          </div>
        </RouterLink>
        <RouterLink to="../account">
          <div class="header__login">
            <img src="../assets/images/login.png" alt="" />
          </div>
        </RouterLink>
        <!-- <div class="first-page__info">
          <img
            src="../assets/images/первый экран/header faq.svg"
            alt="information"
          />
        </div> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  // height: 111px;
  &__student-info {
    margin-top: 20px;
    margin-bottom: -15px;
    cursor: pointer;
  }
  &__login {
    img {
      width: 52px;
      cursor: pointer;
      transition: 0.2s;
      opacity: 1;
      &:hover {
        opacity: 0.7;
        transition: 0.2s;
      }
    }
  }
}
</style>