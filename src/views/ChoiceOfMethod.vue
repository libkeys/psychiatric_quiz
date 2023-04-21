<script>
export default({
  props: {
    showStudent: {
      type: Boolean,
    },
  },
})
</script>


<template>
  <HeaderStandart :showStudent="showStudent" />

  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Выбор методики обследования</p>
      </div>

      <div class="choice-card">
        <RouterLink to="observation_test">
          <div class="choice-card__card">
            <img
              onclick="cmToMs2()"
              src="../assets/images/выбор методики/наблюдение.svg"
              alt="observation"
            />

            <p class="choice-card__title">Наблюдение</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 16 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="../speaking_test">
          <div class="choice-card__card">
            <img
              onclick="cmToMs()"
              src="../assets/images/выбор методики/беседа.svg"
              alt="conversation"
            />

            <p class="choice-card__title">Беседа</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 8 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="../experiment_test">
          <div class="choice-card__card">
            <img
              onclick="cmToMs3()"
              src="../assets/images/выбор методики/эксперемент.svg"
              alt="experiment"
            />

            <p class="choice-card__title">Эксперимент</p>

            <div class="choice-card__container-checkbox">
              <input
                class="choice-card__checkbox"
                type="checkbox"
                name=""
                id=""
              />
              <p class="choice-card__checkbox-title">
                # из 14 заданий выполнено
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <RouterLink to="../student_page">
        <div class="main__button button">
          <div class="button__container">
            <div onclick="cmToSp()" class="button__text">Назад</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <FooterStandart />
</template>
