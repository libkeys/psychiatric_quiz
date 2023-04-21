<script>
export default({
  props: {
    showStudent: {
      type: Boolean
    }
  }
})
</script>


<template>
  <HeaderStandart :showStudent="showStudent"/>

  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">
          Приветствуем Вас в программе “Мониторинг”!
        </p>
      </div>

      <div class="main__subtitle">
        <p class="main__text-subtitle">
          Выберите категорию обучающихся, по которой Вы будете проводить
          мониторинг
        </p>
      </div>

      <div class="choice-card">
        <div class="choice-card__card yyd">
          <img src="../assets/images/первый экран/main УУД.svg" alt="test1" />

          <p class="choice-card__title">
            Обучающиеся с задержкой психического развития
          </p>
        </div>

        <RouterLink to="/beginning_of_work">
          <div class="choice-card__card">
            <img
              onclick="indexTobow()"
              src="../assets/images/первый экран/main БУД.svg"
              alt="test2"
            />

            <p class="choice-card__title">
              Обучающиеся с умственной отсталостью
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>

<style lang="scss">
  .main{
    // display: flex;
    // align-items: center;
    padding-top: 100px;
    padding-block: 100px;
  }
</style>