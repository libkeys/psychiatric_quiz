<template>
  <HeaderStandart />
  <div class="main">
    <div class="container">
      <div class="title">
        <p class="title__text-title">Эксперимент</p>
      </div>

      <div class="list">
        <div class="list__container">
          <div class="list__title">
            <p>Личностные базовые учебные действия</p>
          </div>
          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Целостный, социально ориентированный взгляд на мир в единстве его
              природной и социальной частей
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest()" class="list__ul" id="ul">
            <li>
              осознает свои эмоции (радуюсь, интересно, сержусь, расстроен и
              т.п.) (Белопольская)
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
          <ul onclick="ms3ToTest2()" class="list__ul" id="ul">
            <li>
              способен при помощи взрослого называть причины поступков других
              людей, оценивать их поведения с учетом социальных и моральных норм
            </li>
            <li>
              способен сделать правильный выбор на основе представлений о
              нравственных нормах и справедливости
            </li>
          </ul>

          <div class="list__title">
            <p>Коммуникативные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Доброжелательное отношение к другим людям, способность к
              сопереживанию и конструктивному взаимодействию с людьми
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest3()" class="list__ul" id="ul">
            <li>
              способен дифференцировать эмоциональные состояния других людей
            </li>
          </ul>

          <div class="list__title">
            <p>Регулятивные БУД</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Принятие цели деятельности и произвольное в нее включение,
              следование предложенному плану и работа в общем темпе
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest4()" class="list__ul" id="ul">
            <li>принимает поставленную задачу и включается в деятельность</li>
            <li>следует предложенному плану</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Активное участие в деятельности, контролирование и оценка своих
              действия и действий одноклассников
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest5()" class="list__ul" id="ul">
            <li>
              контролирует и оценивает свои действия в соответствии с заданными
              образцами
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Соотношение своих действий и их результатов с заданными образцами,
              принятие оценки деятельности, оценивание ее с учетом предложенных
              критериев, коррекция своей деятельности с учетом выявленных
              недочетов
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest6()" class="list__ul" id="ul">
            <li>знает и понимает критерии оценки выполняемых действий</li>
            <li>
              оценивает свои действия в соответствии с заданными критериями
            </li>
          </ul>

          <div class="list__title">
            <p>Познавательные базовые учебные действия</p>
          </div>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Выделять некоторые существенные, общие и отличительные свойства
              хорошо знакомых предметов
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest7()" class="list__ul" id="ul">
            <li>
              выделяет отдельные существенные, общие и отличительные свойства
              хорошо знакомых предметов
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Устанавливать видо-родовые отношения предметов
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest8()" class="list__ul" id="ul">
            <li>устанавливает видо-родовые отношения предметов</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Делать простейшие обобщения, сравнивать, классифицировать на
              наглядном материале
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest9()" class="list__ul" id="ul">
            <li>
              делает простейшие обобщения, сравнивает, классифицирует
              изображения предметов, животных и т. д.
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Пользоваться знаками, символами, предметами-заместителями
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest10()" class="list__ul" id="ul">
            <li>пользуется знаками, символами, предметами-заместителями</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">Чтение</p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest11()" class="list__ul" id="ul">
            <li>знает алфавит</li>
            <li>умеет составлять из букв слоги</li>
            <li>умеет составлять из слогов целые слова</li>
            <li>читает (послоговое, целыми словами, синтетическое чтение)</li>
            <li>понимает смысл прочитанного</li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">Письмо</p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest12()" class="list__ul" id="ul">
            <li>без ошибок списывает слова, предложения, тексты</li>
            <li>без ошибок пишет под диктовку слова, предложения, тексты</li>
            <li>
              знает правила грамматики и умений может пользоваться ими при
              письме
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">Выполнение арифметических действий</p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest13()" class="list__ul" id="ul">
            <li>выполняет задания на прямой счёт</li>
            <li>выполняет задания на обратный счёт</li>
            <li>сравнивает числа, множества</li>
            <li>
              может осуществлять счетные операции в пределах десятка, при
              переходе через разряд и т. п. (в соответствии с программой)
            </li>
            <li>
              решает простые составные задачи (в соответствии с программой)
            </li>
            <li>
              совершает действия с числами, полученными при измерении величин
            </li>
          </ul>

          <div class="list__elem-block">
            <input type="checkbox" name="" id="" />
            <p class="list__elem-text">
              Работа с несложной по содержанию и структуре информацией
            </p>
            <img src="image/row_down.svg" class="list__elem-row" alt="" />
          </div>
          <ul onclick="ms3ToTest14()" class="list__ul" id="ul">
            <li>понимает содержание сюжетных картин</li>
            <li>понимает содержание доступных текстов, устных высказываний</li>
            <li>
              понимает содержание элементарных схематических изображений, таблиц
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

  <FooterStandart />
</template>
