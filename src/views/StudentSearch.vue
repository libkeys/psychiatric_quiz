<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Поиск ученика</p>
      </div>

      <div class="form">
        <form action="#" class="form__addstudent">
          <div class="form__element">
            <label class="form__label">Имя ученика</label>
            <input type="text" class="form__input" placeholder="Иван" />
          </div>

          <div class="form__element">
            <label class="form__label">Фамилия</label>
            <input type="text" class="form__input" placeholder="Иванов" />
          </div>

          <div class="form__element">
            <label class="form__label">Отчество</label>
            <input type="text" class="form__input" placeholder="Иванович" />
          </div>

          <div class="form__element">
            <label class="form__label">Класс</label>
            <select
              class="form__input form__select"
              id="inp-sele"
              placeholder="Класс"
            >
              <option selected disabled hidden>Выберите класс</option>
            </select>
          </div>
        </form>
      </div>

      <div class="main__two-button button">
        <div class="button__container button__container--blue">
          <div class="button__text button__text--white">Показать всех</div>
        </div>

        <div
          onclick="bowToaddstudent()"
          class="button__container button__container--two-button"
        >
          <div class="button__text">Добавить нового ученика</div>

          <div class="button__row">
            <img src="image/beegining of work/bow__row-icon.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="list">
        <div class="main__subtitle">
          <p class="main__text-subtitle main__text-subtitle--left">
            По вашему запросу найдено:
          </p>
        </div>

        <div class="list__container" id="ul-st2">
          <ul id="ul-st">
            <li id="ul-st3">
              <a href="student_page.html">Валерий Жмышенко</a>
            </li>
            <!-- добавить after -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  <FooterStandart />
</template>
