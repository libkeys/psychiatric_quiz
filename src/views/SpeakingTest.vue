<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Беседа</p>
      </div>

      <div class="list">
        <div class="list__container">
          <div class="list__title">
            <p>Личностные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Осознание себя как ученика, заинтересованного посещением школы,
              обучением, занятиями, как члена семьи, одноклассника, друга
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>

          <ul onclick="msToTest()" class="list__ul" id="ul">
            <li>
              может назвать полностью свое имя, отчество и фамилию, свой возраст
              и дату рождения, половую принадлежность
            </li>
            <li>может обозначить свою социальную роль (школьник, ученик)</li>
            <li>может назвать класс, в котором учится</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Способность к осмыслению социального окружения, своего места в
              нем, принятие соответствующих возрасту социальных ролей
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest2()" class="list__ul" id="ul">
            <li>
              знает Ф.И.О. родителей, учителя, может назвать имена своих
              одноклассников
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text" id="open-ul">
              Положительное отношение к окружающей действительности, готовность
              к организации взаимодействия с ней и эстетическому ее восприятию
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest3()" class="list__ul" id="ul">
            <li>различает красивое и некрасивое</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Целостный, социально ориентированный взгляд на мир в единстве его
              природной и социальной частей
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest4()" class="list__ul" id="ul">
            <li>осознает свои предпочтения (люблю - не люблю)</li>
            <li>
              знает свой домашний адрес, путь от дома до школы (с названиями
              ориентиров - улиц или номеров общественного транспорта)
            </li>
            <li>
              знает занятия родителей, функции социально значимых учреждений
              (почта, вокзал, музей и пр.), сезонные изменения в природе и жизни
              человека
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Понимание личной ответственности за свои поступки на основе
              представлений об этических нормах и правилах поведения в
              современном обществе
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest5()" class="list__ul" id="ul">
            <li>знает этические нормы и правила поведения в обществе</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Готовность к безопасному и бережному поведению в природе и
              обществе
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest6()" class="list__ul" id="ul">
            <li>
              знает правила безопасного поведения (во время прогулки, на
              городской улице, в городском транспорте, при действиях с бытовыми
              электроприборами, инструментами и острыми предметами, огнем,
              водой, бытовой химией, лекарствами и др.)
            </li>
            <li>
              знает правила дорожного движения, безопасного поведения на
              транспорте
            </li>
            <li>знает правила безопасного пользования компьютера</li>
          </ul>

          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Использование принятых ритуалов социального взаимодействия с
              одноклассниками и учителем
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest7()" class="list__ul" id="ul">
            <li>
              знает принятые правила и ритуалы социального взаимодействия с
              одноклассниками и учителем
            </li>
          </ul>

          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Наблюдение под руководством взрослого за предметами и явлениями
              окружающей действительности
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="msToTest8()" class="list__ul" id="ul">
            <li>
              выделяет признаки предметов и явлении окружающей действительности
            </li>
          </ul>
        </div>

        <div class="main__two-button button">
          <div
            onclick="bowToaddstudent()"
            class="button__container button__container--two-button button__container--blue"
          >
            <div class="button__text--white">Начать мониторинг</div>

            <div class="button__row">
              <img src="image/beegining of work/bow__row-icon.svg" alt="" />
            </div>
          </div>

          <div onclick="msToCh()" class="button__container">
            <div class="button__text button__text--blue">Назад</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FoouterStandar />
</template>
