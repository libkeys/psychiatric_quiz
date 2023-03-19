<template>
<HeaderStandart/>    
        <div class="main">

            <div class="container">
            
                <div class="title">
    
                    <p class="title__text-title">   
                        Страница ученика
                    </p> 
                        
                </div>
            
                <div class="form">

                    <form action="#" class="form__addstudent">

                        <div class="form__element">
                            <label class="form__label">Имя ученика</label>
                            <input type="text" class="form__input" placeholder="Иван">
                        </div>

                        <div class="form__element">
                            <label class="form__label">Фамилия</label>
                            <input type="text" class="form__input" placeholder="Иванов">
                        </div>

                        <div class="form__element">
                            <label class="form__label">Отчество</label>
                            <input type="text" class="form__input" placeholder="Иванович">
                        </div>

                        <div class="form__element">
                            <label class="form__label">Дата рождения</label>
                            <input type="date" class="form__input form__date" placeholder="11.11.2011">
                        </div>

                        <div class="form__element">
                            <label class="form__label">Класс</label>
                            <select class="form__input form__select" placeholder="Класс">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <!-- <div class="main__two-button button"> -->

                            
                    </form>
                    
                </div>

                <div class="main__two-button button">

                    <div class="button__container button__container--two-button">

                        <div onclick="abbsToDate()" class="button__text">

                            Перейти к мониторингу

                        </div>

                        <div class="button__row">

                            <img src="image/beegining of work/bow__row-icon.svg" alt="">

                        </div>

                    </div>
                    
                </div>

                <div class="title">
    
                    <p class="title__text-title">   
                        Результаты мониторинга
                        
                    </p> 
                        
                </div>
                <div class="dateinner">

                </div>
                <!-- <div class="list">
                        <div class="list__container">
                            <div class="list__title">
                                <p>Личностные базовые учебные действия</p>
                            </div>
                            <div class="list__elem-block">
                                <input type="checkbox" name="" id="">
                                <p class="list__elem-text">
                                    Осознание себя как ученика, заинтересованного посещением школы, обучением, занятиями, как члена семьи, одноклассника, друга 
                                </p>
                                <img src="image/row_down.svg" class="list__elem-row" alt="">
                                <div class="list__ellips">
                                    1b
                                </div>
                            </div>
                        </div>
                </div> -->

            </div>

        </div>
        <FooterStandart/>
</template>
