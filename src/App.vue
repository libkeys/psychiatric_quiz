<script>
// import { RouterLink, RouterView } from 'vue-router'
export default {
  methods: {
    checkAccount() {
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
      let login = getCookie("userLogin");
      let password = getCookie("userPassword");
      console.log(login)
      if (login == undefined || login == 'signedOut') {
        this.$router.push({ path: "/authorisation" });
      }
    },
  },
  created() {
    this.checkAccount();
  },
};
</script>

<template>
  <!-- <header>

    <div class="wrapper">
      <nav>
      </nav>
    </div>
  </header> -->
  <RouterView />
</template>

<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/fonts.scss";
@import "./styles/style.scss";
</style>
