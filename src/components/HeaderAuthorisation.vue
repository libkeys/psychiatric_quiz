<script>
export default {
  data() {
    return {
    //   studentName: "",
    //   studentClassAndBirth: "",
    };
  },
  methods: {
    // getStudentName() {
    //   function getCookie(name) {
    //     let matches = document.cookie.match(
    //       new RegExp(
    //         "(?:^|; )" +
    //           name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
    //           "=([^;]*)"
    //       )
    //     );
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    //   }
    //   let studentName = getCookie("studentName");
    //   let studentSurname = getCookie("studentSurame");
    //   let studentLastname = getCookie("studentLastame");
    //   let studentClassFullName = getCookie("studentClassFullName");
    //   let studentBirthDate = getCookie("studentBirthDate").slice(0, 10);
    //   if (studentName == undefined) {
    //     studentName = "";
    //   }
    //   if (studentSurname == undefined) {
    //     studentSurname = "";
    //   }
    //   if (studentLastname == undefined) {
    //     studentLastname = "";
    //   }

    //   this.studentName = `${studentName} ${studentSurname} ${studentLastname}`;
    //   this.studentClassAndBirth = `класс: ${studentClassFullName} дата рождения: ${studentBirthDate}`;
    // },
  },
  created() {
    // if (this.showStudent) {
    //   this.getStudentName();
    // }
  },
  props: {
    // showStudent: {
    //   type: Boolean,
    // },
  },
};
</script>


<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <div class="first-page__logo">
          <img
            src="../assets/images/первый экран/header лого+текст.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__student-info {
    margin-top: 20px;
    margin-bottom: -15px;
    cursor: pointer;
  }
}
</style>