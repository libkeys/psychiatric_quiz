<template>
  <input type="radio" id="one" value="Один" v-model="picked" />
  <label for="one">Один</label>
  <input type="radio" id="two" value="Два" v-model="picked" />
  <label for="one">Один</label>
  <p>{{ picked }}</p>
</template>
