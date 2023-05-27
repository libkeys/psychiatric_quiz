<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      outputShow: false,
      output: "",
      label: "",
      showLabel: false,
      successfulLabel: false,
      declinedLabel: false,
    };
  },
  methods: {
    signIn() {
      try {
        let requestData = {
          login: this.login,
          password: this.password,
        };

        let result = fetch("http://localhost:3000/sign_in_data", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        result
          .then((data) => {
            let answer = data.text();
            return answer;
          })
          .then((data) => {
            let answer = JSON.parse(data);
            if (answer.message == "incorrect data") {
              this.label = "incorrect data, try again";
              this.showLabel = true;
              this.declinedLabel = true;
              this.successfulLabel = false;
            }
            if (answer.message == "successful login") {
              this.label = "successful login";
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 1500);
              document.cookie = `userLogin=${this.login}`
              document.cookie = `userPassword=${this.password}`
              this.showLabel = true;
              this.successfulLabel = true;
              this.declinedLabel = false;
            }
          });
      } catch (err) {
        console.log(err);
      }
    },
    signUp() {
      try {
        let requestData = {
          login: this.login,
          password: this.password,
        };

        let result = fetch("http://localhost:3000/sign_up_data", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        result
          .then((data) => {
            let answer = data.text();
            return answer;
          })
          .then((data) => {
            let answer = JSON.parse(data);
            if (answer.message == "account is already taken") {
              this.label = "account is already taken";
              this.showLabel = true;
              this.declinedLabel = true;
              this.successfulLabel = false;
            }
            if (answer.message == "successful registration") {
              this.label = "successful registration";
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 1500);
              document.cookie = `userLogin=${this.login}`
              document.cookie = `userPassword=${this.password}`
              this.showLabel = true;
              this.successfulLabel = true;
              this.declinedLabel = false;
            }
          });
      } catch (err) {
        console.log(err);
      }
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
  <HeaderAuthorisation />
  <div class="authorisation">
    <h3
      :class="[
        { authorisation__label_active: showLabel },
        { authorisation__label_successful: successfulLabel },
        { authorisation__label_declined: declinedLabel },
      ]"
      class="authorisation__label"
    >
      {{ label }}
    </h3>
    <h2 class="authorisation__title">Авторизация</h2>
    <div class="authorisation__input-wrapper">
      <p class="authorisation__label-input">логин</p>
      <input
        type="text"
        v-model="login"
        class="authorisation__input form-control"
        placeholder="логин"
      />
    </div>
    <div class="authorisation__input-wrapper">
      <p class="authorisation__label-input">пароль</p>
      <input
        type="text"
        v-model="password"
        class="authorisation__input form-control"
        placeholder="пароль"
      />
    </div>
    <p v-if="outputShow" class="authorization__output">{{ output }}</p>
    <div class="authorisation__buttons">
      <button @click="signIn" class="authorisation__button btn btn-primary">
        войти
      </button>
      <button @click="signUp" class="authorisation__button btn btn-primary">
        зарегистрироваться
      </button>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
.authorisation {
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__label {
    height: 26px;
    margin-bottom: 30px;
    opacity: 0;
    &_active {
      opacity: 1;
    }
    &_successful {
      color: green;
    }
    &_declined {
      color: red;
    }
  }
  &__buttons {
    width: 350px;
    display: flex;
    justify-content: space-between;
    // background-color: blue;
    margin-left: 30px;
    margin-top: 80px;
  }
  &__title {
  }
  &__input {
    width: 280px;
    margin-left: -40px;
  }
  &__input-wrapper{
    margin-top: 30px;
  }
  &__label-input{
    margin-left: -40px;
  }
  &__button {
  }
}
</style>