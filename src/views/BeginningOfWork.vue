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

      <div class="choice-card">
        <RouterLink to="../add_student">
          <div class="choice-card__card">
            <img
              onclick="bowToaddstudent()"
              src="../assets/images/beegining of work/addstudent.svg"
              alt="addstudent"
            />
            <p class="choice-card__title">Добавить ученика</p>
          </div>
        </RouterLink>

        <RouterLink to="../create_class">
          <div class="choice-card__card">
            <img
              onclick="bowTocreateclass()"
              src="../assets/images/beegining of work/createclass.svg"
              alt="createclass"
            />
            <p class="choice-card__title">Создать класс</p>
          </div>
        </RouterLink>

        <RouterLink to="../student_search">
          <div class="choice-card__card">
            <img
              onclick="bowTostudentsearch()"
              src="../assets/images/beegining of work/findstudent.svg"
              alt="findstudent"
            />

            <p class="choice-card__title">Поиск ученика</p>
          </div>
        </RouterLink>
      </div>
      <RouterLink to="../">
        <div class="main__button button">
          <div class="button__container">
            <div onclick="bowToindex()" class="button__text">
              Вернуться к категориям
            </div>
            <div class="button__row">
              <img
                src="../assets/images/beegining of work/bow__row-icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <div id="app"></div>
  <FooterStandart />
</template>