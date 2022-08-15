import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Objection from '../components/Objection';
import BigText from '../components/BigText';
import Stories from '../components/Stories';
import Cource from '../components/Cource';
import Teacher from '../components/Teacher';
import CTA from '../components/CTA';


function Home () {
    return (
        <div>
            <BigText text="Онлайн-школа IT для детей от 6 до 16 лет" />
            <Banner src={'/img/Banner.png'}/>
            <div className='d-flex justify-between'>
                <Objection title="Зарплаты в IT" text={[
                    "Junior ", <span>(0 - 1.5 года стажа)</span>, <br />,  "50 000 - 70 000 рублей в месяц", <br />, <br />,
                    "Middle ", <span>(1.5 - 3 года стажа)</span>, <br />, "80 000 - 160 000 рублей в месяц", <br />, <br />,
                    "Senior ", <span>(3 - 6 лет стажа)</span>, <br />, "160 000 - 250 000 рублей в месяц"]}/>
                <Objection title="Для кого" text={["Школа Программ - ", <span>это школа программирования для детей и подростков, которая научит разрабатывать программы, веб-приложения и игры с уровня, когда ребёнок не “дружит” с компьютером, до уровня</span>, " Junior!"]} />
            </div>

            <BigText text="Как проходят занятия?" />
            <div className='d-flex justify-between'>
                <Stories src="/img/stories/story1.jpg" />
                <Stories src="/img/stories/story2.jpg" />
                <Stories src="/img/stories/story3.jpg" />
            </div>

            <BigText text="С чего начать путь программиста?" />
            <Link to="/scratch">
                <Cource className="wow animate__bounceInLeft" left={true} imgSrc="/img/cources/SCRATCH - игры.jpg" title="SCRATCH" titleInfo="Для самых маленьких 6 - 8 лет" text={[<b>SCRATCH</b>, " — это визуальное программирование, в котором создание игр и мультфильмов превращается в несложное соединение блоков."]} />
            </Link>
            <Link to="/python">
                <Cource left={false} imgSrc="/img/cources/Python - курс.jpg" title="PYTHON" titleInfo={["Для начинающих", <br/>,  "8 - 16 лет"]} text={[<b>PYTHON</b>, " — язык программирования общего назначения, позволяющий создавать программы от нулевого уровня, до серьезных коммерческих решений, полноценные игры, чат-боты, веб-сайты и т. д."]} />
            </Link>
            <Link to="/unity">
                <Cource left={true} imgSrc="/img/cources/Unity - курс.jpg" title="Unity" titleInfo={["Для начинающих", <br/>,  "12 - 16 лет"]} text={[<b>UNITY</b>, " предполагает собой изучение программирования в 2D и 3D измерениях. В игровом движке можно увидеть, как работает программный код наглядно. При данном подходе ученику будет гораздо интереснее процесс изучения как самого программирования, так и дополнительных программ."]} />
            </Link>

            <BigText text="Отзывы" />
            <div className='d-flex justify-between'>
                <Stories src="/img/stories/отзыв1.jpg" />
                <Stories src="/img/stories/отзыв2.jpg" />
                <Stories src="/img/stories/отзыв3.jpg" />
            </div>

            <BigText text="Что говорят сами ученики" />
            <div className='d-flex justify-between'>
                <div className='video'>
                    <iframe title="video1" src="https://vk.com/video_ext.php?oid=-210702168&id=456239043&hash=7c967fdc630cbc53&hd=2" width="519" height="519"allow="encrypted-media;" frameBorder="0"></iframe>
                </div>
                <div className='objection519'>
                    <h1>
                        Родители удивлены, ребёнок откровенно ответил на 4 вопроса
                    </h1>
                    <p>
                        <div>1. Твоё время игр в телефоне и в программировании?</div>
                        <div>2. Думаешь строить карьеру в IT?</div>
                        <div>3. Помогают тебе наши уроки в школе?</div>
                        <div>4. Твоё будущее в IT?</div>
                    </p>
                </div>
            </div>

            <BigText text="Учителя" />
            <div className='d-flex justify-between'>
                <Teacher imgSrc="/img/teachers/Яков.png" text={["Фишка Якова - позитивное обучение. Он становится товарищем для каждого ученика, обучает в мягкой и доступной форме.", <br />, <br />,  "Хобби: компьютерные игры, баскетбол, настольный теннис, настольные игры.", <br />, <br />, "К программированию пришел случайно. В школе услышал про курсы программирования, решил попробовать. В итоге эта сфера ему так понравилась, что теперь она становится основным видом деятельности, которым Яков занимается уже более 3-х лет.", <br />, <br />, "🎯 Мечта: стать высококвалифицированным специалистом в области IT-технологий и открыть свой бизнес."]}/>
                <Teacher imgSrc="/img/teachers/Илья.png" text={["Фишка Ильи - наставничество, кураторство, полная ответственность за обучение. Возьмёт за руку и доведёт ученика до реализации IT продукта.", <br />, <br />,  "Хобби: саморазвитие в разных сферах, спорт, активный отдых.", <br />, <br />,  "К программированию пришёл через создание игр. Когда-то в школе захотел делать игры для одноклассников, потом его проект вырос до международной команды. В итоге эта сфера, которой он занимается больше 6 лет, приносит хороший доход.", <br />, <br />,  "🎯 Мечта: стать финансово независимым благодаря сфере IT."]}/>
                <Teacher imgSrc="/img/teachers/Владислав.png" text={["Фишка Владислава - полная концентрация на занятиях, он не позволит отвлечься, не даст потерять интерес к занятиям.", <br />, <br />,  "📚Хобби: классическая литература, психология, стритлифтинг. В 16 лет написал змейку на Python и пошло поехало. На данный момент: программист на java. Пишу серверную часть WEB-приложений на Spring Framework.", <br />, <br />,  "Мне нравится видеть, как ребёнок с каждым новым уроком всё увереннее и увереннее взаимодействует с компьютером.", <br />, <br />,  "🎯 Мечта: Хочу работать в Microsoft."]} />
            </div>

            <div className='d-flex justify-between'>
                <Objection title="Что нужно для обучения?" text={[
                    "1. Стабильное подключение к интернету;", <br />,
                    "2. Наличие браузера;", <br />,
                    "3. Микрофон и наушники;", <br />,
                    "4. ", <span>(Необязательно)</span>, " web-камера."]}/>
                <Objection title="Кто ведёт занятия?" text={[<br />, <br />, "Учителя, которые работают в сфере программирования и знают данную область в совершенстве!"]} />
            </div>

            <BigText text="Цены" />
            <div className='d-flex justify-between'>
                <Stories src="/img/prices/цены8.jpg" />
                <Stories src="/img/prices/цены4.jpg" />
                <Stories src="/img/prices/цены1.jpg" />
            </div>

            <div className='d-flex justify-between'>
                <Objection title="Как формируются цены?" text={[
                    "📌 Занятия проводят топ-специалисты;", <br />,
                    "📌 Форма занятий игровая;", <br />,
                    "📌 Индивидуальный подход к ребенку;", <br />,
                    "📌 Нет проверок знаний и ненужных оценок."]}/>
                <Objection title="Какое расписание?" text={[<br />, <br />, "Расписание для группы подбираем удобное для всех. Индивидуальные занятия - индивидуальный подбор времени."]} />
            </div>

            <CTA />
        </div>
    );
}

export default Home;