<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Выберите дату мониторинга</p>
      </div>

      <div class="datefrm">
        <div class="form__element">
          <label class="form__label">Дата мониторинга</label>
          <input type="date" id="datamon" class="form__input form__date" />
        </div>

        <div class="main__two-button button btndate">
          <div class="button__container button__container--blue">
            <div
              onclick="dateToChoiseMethod()"
              id="datamonbtn"
              class="button__text button__text--white"
            >
              Сохранить
            </div>
          </div>

          <div
            onclick="bowToaddstudent()"
            class="button__container button__container--two-button"
          >
            <div class="button__text">Назад</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>
