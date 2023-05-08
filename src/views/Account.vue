<script>
export default {
  data() {
    return {
      login: "",
    };
  },
  methods: {
    getLogin() {
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

      this.login = getCookie("userLogin");
    },
    signOut() {
      document.cookie = `userLogin=signedOut`;
      document.cookie = `userPassword=signedOut`;
      this.$router.push({ path: "/authorisation" });
    },
  },
  created() {
    this.getLogin();
  },
};
</script>

<template>
  <HeaderStandart />
  <div class="account">
    <div class="account__info">
      <p class="account__label">Ваш логин</p>
      <p class="account__output">{{ login }}</p>
      <button @click="signOut" class="account__sing-out-button btn btn-danger">Выйти</button>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.account {
  height: 800px;
  display: flex;
  justify-content: center;

  &__info {
    width: 300px;
    margin-top: 200px;
  }

  &__label {
    margin-bottom: 15px;
  }

  &__output {
    margin-bottom: 50px;
  }
}
</style>