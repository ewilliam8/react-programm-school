import React from 'react';
import Banner from '../components/Banner';
import Objection from '../components/Objection';
import BigText from '../components/BigText';
import Stories from '../components/Stories';


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
                <Stories src="/stories/story1.jpg" />
                <Stories src="/stories/story2.jpg" />
                <Stories src="/stories/story3.jpg" />
            </div>
            <BigText text="С чего начать путь программиста?" />
        </div>
    );
}

export default Home;