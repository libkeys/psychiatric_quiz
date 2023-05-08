<script>
export default {
  data() {
    return {
      exist: true
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteClass() {
      console.log(this.item.id);
      let requestData = {
        id: this.item.id
      }
      try {
        let result = fetch("http://localhost:3000/delete_class", {
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
          this.exist = false
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <li v-if="exist">
    <p>{{ item.classNumber }}{{ item.classLetter }}</p>
    <button @click="deleteClass" class="btn btn-danger">удалить</button>
  </li>
</template>

<style lang="scss">
li {
  display: flex;
  list-style-type: none;
  align-items: center;
  text-align: center;
  position: relative;
  height: 45px;
  p {
    position: absolute!important;
    top: 5px;
    left: 0;
  }
  button {
    margin-left: 0px;
  }
  // height: 30px;
  // width: 80px;
  // border: 2px solid gray;
  // border-radius: 2px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 40px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
}
</style>