import all_courses_icon from "./assets/all_courses_icon.svg"
import all_courses_icon_white from "./assets/all_courses_icon_white.svg"
import city_icon from "./assets/city_icon.svg"
import city_icon_white from "./assets/city_icon_white.svg";
import arrow_list_icon from "./assets/arrow_list_icon.svg"
import arrow_list_icon_white from "./assets/arrow_list_icon_white.svg";
import login_icon from "./assets/login_icon.svg"
import login_icon_white from "./assets/login_icon_white.svg"

export const headerInfo=[
    {
        href: "/all-courses",
        imgSrc: all_courses_icon,
        imgSrcWhite: all_courses_icon_white,
        imgAlt:"all_courses_icon",
        text:"Все курсы",
        className:"header-info-list-li-flex",
    },
    {
        href: "/all-events",
        text:"Мероприятия",
    },
    {
        href: "/all-news",
        text:"Новости",
    },
    {
        href: "/about-us",
        text:"О нас",
    },
    {
        href: "/",
        imgSrc: city_icon,
        imgSrcWhite: city_icon_white,
        imgAlt:"city_icon",
        text:"Нижний Новогород",
        className:"header-info-list-li-flex",
        arrow: arrow_list_icon,
        arrowWhite: arrow_list_icon_white,
    },
    {
        href: "tel:88009503398",
        text:"8 800 950-33-98",
    },
    {
        href: "/login",
        imgSrc: login_icon,
        imgSrcWhite: login_icon_white,
        imgAlt:"login_icon",
        text:"Войти",
        className:"header-info-list-li-flex",
    },
]

export const cities=[
    "Минск",
    "Гомель",
     "Гродно",
      "Могилев",
       "Витебск",
        "Бобруйск",
         "Жлобин",
]

export const footerInfoChildren=[
    {
        text:"Детям",
        className : "text-16-bold",
        href: "",
    },
    {
        courseID:'course1',
        text:"Робототехника",
        href: "/all-courses/course1",
    },
    {
        courseID:'course2',
        text:"Создание игр",
        href: "/all-courses/course2",
    },
    {
        courseID:'course3',
        text:"Программирование",
        href: "/all-courses/course3",
    },
    {
        courseID:'course4',
        text:"Мультимедиа",
        href: "/all-courses/course4",
    },
    {
        courseID:'course5',
        text:"Soft skills",
        href: "/all-courses/course5",
    },
    {
        courseID:'course6',
        text:"Шахматы",
        href: "/all-courses/course6",
    },
    {
        courseID:'course7',
        text:"Блогинг",
        href: "/all-courses/course7",
    },
]
export const footerInfoTeens=[
    {
        text:"Подросткам",
        className : "text-16-bold",
    },
    {
        courseID:'course8',
        text:"Web-разработка",
        href: "/all-courses/course8",
        
    },
    {
        courseID:'course9',
        text:"Прикладное программирование",
        href: "/all-courses/course9",
    },
    {
        courseID:'course10',
        text:"Графическое моделирование",
        href: "/all-courses/course10",
    },
    {
        courseID:'course11',
        text:"Game Development",
        href: "/all-courses/course11",
    },
    {
        courseID:'course12',
        text:"Soft skills",
        href: "/all-courses/course12",
    },
    {
        courseID:'course13',
        text:"Разработчик мобильных приложений",
        href: "/all-courses/course13",
    },
    {
        courseID:'course14',
        text:"Блогинг",
        href: "/all-courses/course14",
    },
    {
        courseID:'course15',
        text:"Создание игр",
        href: "/all-courses/course15",
    },
    {
        courseID:'course16',
        text:"Программирование",
        href: "/all-courses/course16",
    },
    {
        courseID:'course17',
        text:"Мультимедиа",
        href: "/all-courses/course17",
    },
]
export const footerInfoAdults=[
    {
        text:"Взрослым",
        className : "text-16-bold",

    },
    {
        courseID:'course18',
        text:"Разработчик игр на Unity",
        href: "/all-courses/course18",
    },
    {
        courseID:'course19',
        text:"Разработка ПО",
        href: "/all-courses/course19",
    },
    {
        courseID:'course20',
        text:"Программирование",
        href: "/all-courses/course20",
    },
    {
        courseID:'course21',
        text:"Графический дизайн",
        href: "/all-courses/course21",
    },
    {
        courseID:'course22',
        text:"Тестировщик ПО",
        href: "/all-courses/course22",
    },
    {
        courseID:'course23',
        text:"Интернет Маркетинг",
        href: "/all-courses/course23",
    },
    {
        courseID:'course24',
        text:"Java-разработчик",
        href: "/all-courses/course24",
    },
    {
        courseID:'course25',
        text:"Python-разработчик",
        href: "/all-courses/course25",
    },
    {
        courseID:'course26',
        text:"IOS-разработчик",
        href: "/all-courses/course26",
    },
]
export const footerInfoUs=[
    {
        text:"Информация",
        className : "text-16-bold",
        href: "#",
    },
    {
        text:"Об академии",
        href: "#",
    },
    {
        text:"Мероприятия",
        href: "#",
    },
    {
        text:"Новости",
        href: "#",
    },
    {
        text:"База знаний",
        href: "#",
    },
    {
        text:"Карьера",
        href: "#",
    },
    {
        text:"Контакты",
        href: "#",
    },
]

import inst_logo from "./assets/inst_logo.svg"
import fb_icon from "./assets/fb_icon.svg"
import yt_icon from "./assets/yt_icon.svg"
import tg_icon from "./assets/tg_icon.svg"
export const footerSocial=[
    {
        imgSrc: inst_logo,
        imgAlt : "inst_logo",
    },
    {
        imgSrc: fb_icon,
        imgAlt : "fb_icon",
    },
    {
        imgSrc: yt_icon,
        imgAlt : "yt_icon",
    },
    {
        imgSrc: tg_icon,
        imgAlt : "tg_icon",
    },
]

import vk_color_icon from "./assets/vk_color_icon.png"
import inst_color_icon from "./assets/inst_color_icon.png"
import fb_color_icon from "./assets/fb_color_icon.png"
import yt_color_icon from "./assets/yb_color_icon.png"
import tg_color_icon from "./assets/tg_color_icon.png"
export const loginSocial=[
    {
        imgSrc: inst_color_icon,
        imgAlt : "inst_logo",
    },
    {
        imgSrc: fb_color_icon,
        imgAlt : "fb_icon",
    },
    {
        imgSrc: yt_color_icon,
        imgAlt : "yt_icon",
    },
    {
        imgSrc: tg_color_icon,
        imgAlt : "tg_icon",
    },
    {
        imgSrc: vk_color_icon,
        imgAlt : "vk_icon",
    },
]


import children_icon from "./assets/children_icon.png"
import teens_icon from "./assets/teens_icon.png"
import adults_icon from "./assets/adults_icon.png"
export const ageList=[
    {
        imgSrc: children_icon,
        imgAlt: "children_icon",
        text:"Дети",
        subText:"8 — 14 лет",
    },
    {
        imgSrc: teens_icon,
        imgAlt: "teens_icon",
        text:"Подростки",
        subText:"14 — 18 лет",
    },
    {
        imgSrc: adults_icon,
        imgAlt: "adults_icon",
        text:"Взрослые",
        subText:"18 — ∞",
    },
]

import review_photo from "./assets/review_photo.jpg"
export const reviews=[
    {
        imgSrc: review_photo,
        name: "Иван Иванов",
        courseName: "Студент курса «WEB-разработчик»",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dolore. Iste assumenda ullam laudantium similique alias, nemo in fugit! Maxime minus necessitatibus velit",
        rate:"5",
    },
    {
        imgSrc: review_photo,
        name: "Виктор Викторов",
        courseName: "Студент курса «Программирование»",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dolore. Iste assumenda ullam laudantium similique alias, nemo in fugit! Maxime minus necessitatibus velit",
        rate:"4,87",
    },
    {
        imgSrc: review_photo,
        name: "Анна Соколова",
        courseName: "Студентка курса «Soft Skills»",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, eius?",
        rate:"4,2",
    },
    {
        imgSrc: review_photo,
        name: "Николай Лапочкин",
        courseName: "Студент курса «Тестировщик ПО»",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio unde quas debitis accusamus minus, veniam ut iusto facilis eius.",
        rate:"4,9",
    },
    {
        imgSrc: review_photo,
        name: "Валерия Сипакова",
        courseName: "Студентка курса «Графический дизайн»",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa maiores ut magni libero, quod nihil cupiditate placeat fugit dolor doloremque ducimus quos unde, minus esse? In repudiandae quisquam sed.",
        rate:"4,72",
    },
    {
        imgSrc: review_photo,
        name: "Инна Ласточкина",
        courseName: "Студентка курса «Game Development»",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus maxime placeat repellendus nesciunt facere sint obcaecati consequuntur",
        rate:"5",
    },
    {
        imgSrc: review_photo,
        name: "Артем Воробьев",
        courseName: "Студент курса «Робототехника»",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptate neque quaerat.",
        rate:"4,55",
    },
    {
        imgSrc: review_photo,
        name: "Марина Куст",
        courseName: "Студентка курса «Шахматы»",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dolore. Iste assumenda ullam laudantium similique alias, nemo in fugit! Maxime minus necessitatibus velit, atque at quia quis sit aliquid tenetur! Lorem ipsum dolor sit amet.",
        rate:"4,38",
    },
    {
        imgSrc: review_photo,
        name: "Степан Кулешов",
        courseName: "Студент курса «IOS-разработчик»",
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at sint quae voluptatem ratione animi sapiente nostrum ea, quos eveniet nulla mollitia corrupti culpa totam eum ducimus perspiciatis soluta ipsam, modi nemo blanditiis alias illo illum.",
        rate:"4,77",
    },
    {
        imgSrc: review_photo,
        name: "Максим Николаев",
        courseName: "Студент курса «Интернет Маркетинг»",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dolore. Iste assumenda ullam laudantium similique alias, nemo in fugit!",
        rate:"4,82",
    },
]

import course_program_icon from "./assets/course_program_icon.svg"
import event_main_photo from "./assets/event_main_photo.png"
export const coursesArticles=[
    {
        courseID:'course13',
        bgColor:"bg-course-1",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Разработка мобильных приложений»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course1',
        bgColor:"bg-course-2",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Робототехника»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course5',
        bgColor:"bg-course-3",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Soft Skills»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course4',
        bgColor:"bg-course-4",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Web-разработчик»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course25',
        bgColor:"bg-course-5",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«IOS-разработчик»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course23',
        bgColor:"bg-course-6",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Интернет Маркетинг»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course6',
        bgColor:"bg-course-7",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Шахматы»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course3',
        bgColor:"bg-course-8",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Программирование»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course7',
        bgColor:"bg-course-9",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Блогинг»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
    {
        courseID:'course24',
        bgColor:"bg-course-1",
        courseType:"Программа",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        courseName:"«Java-разработчик»",
        courseDescriprion:"Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        courseTime:"24 месяца",
    },
]
export const eventsArticles=[
    {
        eventID:'event1',
        bgColor:"bg-course-1",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие1",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event2',
        bgColor:"bg-course-2",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие2",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event3',
        bgColor:"bg-course-3",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие3",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event4',
        bgColor:"bg-course-4",
        eventType:"Вебинар",
        bigImgSrc: event_main_photo,
        imgAlt:"event_main_photo",
        eventName:"Мероприятие4",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event5',
        bgColor:"bg-course-5",
        eventType:"",
        bigImgSrc: event_main_photo,
        imgAlt:"event_main_photo",
        eventName:"Мероприятие5",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
    },
    {
        eventID:'event6',
        bgColor:"bg-course-6",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие6",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event7',
        bgColor:"bg-course-7",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие7",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
    {
        eventID:'event8',
        bgColor:"bg-course-8",
        eventType:"Встреча",
        imgSrc: course_program_icon,
        imgAlt:"course_program_icon",
        eventName:"Мероприятие8",
        eventDescriprion:"Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя",
        eventTime:"16 ноября 2021",
    },
]

import news_pic1 from "./assets/news_pic1.png"
import news_pic2 from "./assets/news_pic2.png"
import news_pic3 from "./assets/news_pic3.png"
import news_pic4 from "./assets/news_pic4.png"
import news_pic5 from "./assets/news_pic5.png"
import news_pic6 from "./assets/news_pic6.png"
export const newsArticles=[
    {
        newsID:"news1",
        imgSrc: news_pic1,
        imgAlt:"news_pic1",
        date:"16 ноября 2021",
        header:"Заголовок новости1",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo.\n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
    {
        newsID:"news2",
        imgSrc: news_pic2,
        imgAlt:"news_pic2",
        date:"16 ноября 2021",
        header:"Заголовок новости2",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo.\n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
    {
        newsID:"news3",
        imgSrc: news_pic3,
        imgAlt:"news_pic3",
        date:"16 ноября 2021",
        header:"Заголовок новости3",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo.\n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
    {
        newsID:"news4",
        imgSrc: news_pic4,
        imgAlt:"news_pic4",
        date:"16 ноября 2021",
        header:"Заголовок новости4",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo.\n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
    {
        newsID:"news5",
        imgSrc: news_pic5,
        imgAlt:"news_pic5",
        date:"16 ноября 2021",
        header:"Заголовок новости5",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo.\n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
    {
        newsID:"news6",
        imgSrc: news_pic6,
        imgAlt:"news_pic6",
        date:"16 ноября 2021",
        header:"Заголовок новости6",
        shortText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        longText1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt reprehenderit cumque deleniti, natus, omnis aperiam eveniet quibusdam quas pariatur modi officiis et atque nam itaque ducimus maxime! Aperiam, facilis? Ad nam, possimus assumenda, sed tenetur omnis ipsum ex harum quasi minus qui consequatur ea quisquam tempora at. Distinctio corrupti amet nobis officia nihil mollitia neque sapiente vel error non!",
        longText2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturvoluptates accusamus similique atque dicta tempore laboriosam itaque,facere natus fugiat minima eum quidem unde alias quo odit! Dicta, ipsa accusantium? Harum magnam corrupti sit quas delectus architecto consequatur dolor eius incidunt veritatis recusandae earum odit temporibus unde est nostrum officia, consectetur sint soluta a non atque beatae assumenda! Nihil, mollitia. Nihil quidem quia ut maxime consequatur voluptas sunt! Saepe qui facilis, quasi, soluta, eveniet repellendus dicta corporis veniam nam dignissimos quam nostrum! Veliure perferendis cum dignissimos labore harum. Eveniet! Ratione laboriosam tempore architecto deleniti quo, numquam quam porro cumque debitis pariatur nemo ut veniam corporis ullam ducimus repellendus eaque neque facilis explicabo distinctio deserunt. Minus explicabo voluptatum nulla veniam. Necessitatibus, fuga soluta. Dolorem quia mollitia asperiores voluptatibus laudantium sed qui, laborum eligendi soluta est reiciendis quaerat voluptate aperiam illum. Beatae rerum ut eaque nulla earum adipisci fugiat placeat nemo. \n Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.",
    },
]

import logo_h from "./assets/logo_h.svg"
import logo_o from "./assets/logo_o.svg"
import logo_d from "./assets/logo_d.svg"
import founderPh from "./assets/founder_photo.png"
import partner1 from "./assets/partner1.png"
import partner2 from "./assets/partner2.png"
import partner3 from "./assets/partner3.png"
import partner4 from "./assets/partner4.png"
import aboutU1 from "./assets/aboutU1.png"
import aboutU2 from "./assets/aboutU2.png"
import aboutU3 from "./assets/aboutU3.png"
import aboutU4 from "./assets/aboutU4.png"
export const aboutUsList={
    aboutUsList1:[
        {
            imgSrc: logo_h,
            imgAlt: "logo_h",
            strongText:"Мы создали Академию",
            text:"для детей, чтобы компьютер был не зависимостью и игрушкой, а другом на пути обучения и развития.",
        },
        {
            imgSrc: logo_o,
            imgAlt: "logo_o",
            strongText:"Мы создали Академию",
            text:"для подростков, чтобы «Кем я хочу стать?» больше не был самым сложным вопросом.",
        },
        {
            imgSrc: logo_d,
            imgAlt: "logo_d",
            strongText:"Мы создали Академию",
            text:"для взрослых, чтобы у них была возможность начать с читатого листа и создать лучшую версию себя в любом возрасте.",
        },
    ],
    aboutUsList2:[
        "Предполагают пролонгированное обучение",
        "Составлены с учетом возрастных и индивидуальных особенностей детей",
        "Авторские и не имеют аналогов",
        "Составлены на основе деятельностного и компетентностного подходов",
        "Реализуются с помощью современных педагогических технологий",
        "Актуальны и фундаментальны",
    ],
    founder:{
        imgSrc:founderPh,
        imgAlt:"founder",
        name:"Имя Фамилия",
        text1:"Основатель Академии будущего ХОД",
        text2:` «Все началось с любви к шахматам. Я хотел предвидеть ход противника, хотел просчитать его действия, хотел побеждать. Я не    стал гением шахмат, но стратег и психолог из меня неплохой» -       смеется Иван Иванович. Идея открыть Академию шахмат пришла к нему в 2020 году, когда в период полного локдауна он вдруг вспомнил про хобби - игру в шахматы. Оказалось, что для игры в шахматы сейчас и доска-то не обязательна, все есть в телефоне. Племянник (сын?) Ивана Ивановича большую часть дня проводил в стрелялках на планшете.
        «Я показал ему шахматы. К июню он уже был неплохим соперником» - Вскоре идея небольшой академии шахмат превратилась в план создания Академии Будущего, где дети смогут учиться тому, что им нравится, а взрослые попытаются изменить жизнь. Уж очень это сейчас актуально.`,
        text3:"Из интервью с основателем Академии Будущего Ивановым И.И.",
    },
    advantageListLong:[
            {
                imgSrc: adv_icon1,
                imgAlt: "adv_icon1",
                text:"Содержание обучения должно быть актуальным, а методика проверенная годами.",
            },
            {
                imgSrc: adv_icon4,
                imgAlt: "adv_icon4",
                text:"Педагог - прежде всего личность компетентная и харизматичная.",
            },
           
            {
                imgSrc:  children_icon,
                imgAlt: " children_icon",
                text:"Точка развития образования - ребенок, его интересы и потребности",
            },
            {
                imgSrc: adv_icon2,
                imgAlt: "adv_icon2",
                text:"Прогрессом правит любовь к знаниям",
            },
            {
                imgSrc: adv_icon3,
                imgAlt: "adv_icon3",
                text:"Технологии правят миром, а человек эти технологии создает",
            },
    ],
    partners:[
        partner1,
        partner2,
        partner3,
        partner4,
        partner1,
        partner2,
        partner3,
        partner4,
        partner1,
        partner2,
    ],
    aboutU:[
        {
            imgSrc:aboutU1,
            imgAlt:"aboutU1",
            text:"Я хочу, чтобы мой ребенок был успешным",
        },
        {
            imgSrc:aboutU2,
            imgAlt:"aboutU2",
            text:"Я хочу больше зарабатывать",
        },
        {
            imgSrc:aboutU3,
            imgAlt:"aboutU3",
            text:"Мой ребенок не выпускает гаджет из рук",
        },
        {
            imgSrc:aboutU4,
            imgAlt:"aboutU4",
            text:"Я хочу стать айтишником",
        },
    ]
}

import adv_icon1 from "./assets/adv_icon1.svg"
import adv_icon2 from "./assets/adv_icon2.svg"
import adv_icon3 from "./assets/adv_icon3.svg"
import adv_icon4 from "./assets/adv_icon4.svg"
export const advantageList=[
    {
        imgSrc: adv_icon1,
        imgAlt: "adv_icon1",
        text:"Передовой подход к образовательному процессу",
    },
    {
        imgSrc: adv_icon2,
        imgAlt: "adv_icon2",
        text:"Непрерывное усовершенствование и пополнение базы курсов",
    },
    {
        imgSrc: adv_icon3,
        imgAlt: "adv_icon3",
        text:"Только практикующие преподаватели",
    },
    {
        imgSrc: adv_icon4,
        imgAlt: "adv_icon4",
        text:"Сопровождение на всех этапах. От начала обучения до трудоустройства",
    },
]

import course_main_photo from "./assets/course_main_photo.png"
import course_photo1 from "./assets/course_photo1.png"
import course_photo2 from "./assets/course_photo2.png"
import course_photo3 from "./assets/course_photo3.png"
import course_photo4 from "./assets/course_photo4.png"
import course_photo5 from "./assets/course_photo5.png"
import course_photo6 from "./assets/course_photo6.png"
import course_goal1 from "./assets/course_goal1.svg"
import course_goal2 from "./assets/course_goal2.svg"
import course_goal3 from "./assets/course_goal3.svg"
import course_goal4 from "./assets/course_goal4.svg"
import course_adv1 from "./assets/course_adv1.svg"
import course_adv2 from "./assets/course_adv2.svg"
import course_adv3 from "./assets/course_adv3.svg"
import course_adv4 from "./assets/course_adv4.svg"
import course_adv5 from "./assets/course_adv5.svg"
import course_adv6 from "./assets/course_adv6.svg"
export const courseInfo={//текст-заглушка на примере курса Шахматы
    courseID:'course6',
    headerInfo:{
        imgSrc: course_main_photo,
        imgAlt:"course_main_photo",
        h1:'Шахматная школа',
        h2:'Развитие мышления и логики',
        time1:'5 лет',
        time2:'2 раза в неделю по 2 академических часа',
        price:"от  4 350 ₽ в месяц",

    },
    goals:[
        {
        imgSrc:course_goal1,
        imgAlt:"course_goal1",
        strongText:'Цель 1',
        text:'Привить любовь и интерес к шахматам',
        },
        {
        imgSrc:course_goal2,
        imgAlt:"course_goal2",
        strongText:'Цель 2',
        text:'Получить удовольствие от процесса игры, от факта победы в партии, от спасения',
        },
        {
        imgSrc:course_goal3,
        imgAlt:"course_goal3",
        strongText:'Цель 3',
        text:'Научить анализировать свои и чужие ошибки, учиться на них с помощью GM мирового уровня',
        },
        {
        imgSrc:course_goal4,
        imgAlt:"course_goal4",
        strongText:'Цель 4',
        text:'Получить удовольствие от процесса игры, от факта победы в партии, от спасения',
        },
    ],
    intermidText1:{
        h1:"Школа шахмат",
        text:"Шахматы - это отличная идея для времяпрепровождения с родителями, детьми и друзьями. Игра дает полезные в жизни навыки: учит побеждать и проигрывать, развивает творческие способности, вырабатывает стрессоустойчивость, терпение, помогает сосредоточиться, а так же помогает осознать последствия своих действий.",
    },
    adv:[
        {
        imgSrc:course_adv1,
        imgAlt:"course_adv1",
        text:'Интересные уроки по шахматам',
        },
        {
        imgSrc:course_adv2,
        imgAlt:"course_adv2",
        text:'Шахматы для взрослых и детей',
        },
        {
        imgSrc:course_adv3,
        imgAlt:"course_adv3",
        text:'Обучение шахмат онлайн',
        },
        {
        imgSrc:course_adv4,
        imgAlt:"course_adv4",
        text:'Профессиональное обучение шахматам',
        },
        {
        imgSrc:course_adv5,
        imgAlt:"course_adv5",
        text:'Шахматный турниры',
        },
        {
        imgSrc:course_adv6,
        imgAlt:"course_adv6",
        text:'Сеанс одновременной игры с GM',
        },
    ],
    intermidText2:{
        text1:"Шахматы могут помочь вам планировать наперед, не торопиться с решениями и взвешивать их плюсы и минусы.",
        text2:"Шахматами можно наслаждаться в любом возрасте — в результате, тренировка мозга может укреплять ваше здоровье.",
    },
    intermidText3:{
        h1:"Chess academy для школьников",
        text:"Обеспечиваем индивидуальный подход к учащимся. В основе процесса обучения — тесное и открытое взаимодействие педагода и ученика. Обучение проходит по программе, созданной GM.",
    },
    intermidText4:{
        h1:"Содержание курса",
        text:"Программа включает в себя изучение истории возникновения игры в шахматы, современные тенденции игры в онлайн-шахматы, знакомство со знаменитыми шахматистами прошлого и настоящего. Дети знакомятся с фигурами и правилами игры, узнают основные понятия, отрабатывая все в игровой практике. Дебют, мителльшпиль, эндшпиль, стратегия и тактика игры, особенности позиции – все это включено в первый год обучения, а пятилетний курс предполагает обучение ребенка до уровня КМС.",
    },
    answers:[
        {
        question:"Кому подойдёт это курс?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
        {
            question:"Что нужно ребенку для занятий?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
        {
            question:"Где можно узнать расписание занятий?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
        {
        question:"Что делать, если ребенок пропустит занятие?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
    ],
    photoSlides:[
        course_photo1,
        course_photo2,
        course_photo3,
        course_photo4,
        course_photo5,
        course_photo6,
        course_photo1,
        course_photo2,
        course_photo3,
    ]
}


import event_photo1 from "./assets/event_photo1.png"
import event_photo2 from "./assets/event_photo2.png"
import event_photo3 from "./assets/event_photo3.png"
import event_photo4 from "./assets/event_photo4.png"
import event_photo5 from "./assets/event_photo5.png"
import event_photo6 from "./assets/event_photo6.png"
export const eventInfo={//текст-заглушка на примере курса Шахматы
    eventID:'event6',
    headerInfo:{
        imgSrc: event_main_photo,
        imgAlt:"event_main_photo",
        h1:'Название мероприятия',
        h2:'Подпись к названию',
        text1:'Узнайте самые востребованные профессии, на которые более 113 тысяч вакансий',
        text2:'Выберите подходящую именно для вас',
        text3:'Сделайте первые шаги к возможности выйти на доход более 100 тысяч рублей',
    },
    goals:[
        {
        imgSrc:logo_h,
        imgAlt:"logo_h",
        strongText:'Заголовок',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
        },
        {
        imgSrc:logo_o,
        imgAlt:"logo_o",
        strongText:'Заголовок',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
        },
        {
        imgSrc:logo_d,
        imgAlt:"logo_d",
        strongText:'Заголовок',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
        },
    ],
    intermidText1:{
        h1:"Программа мероприятия",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. ",
    },
    program:[
        {
        header:"День первый",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
        {
            header:"День второй",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
            },
        {
            header:"День третий",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
        },
    ],
    intermidText2:{
        h1:"Фотографии с прошлых мероприятий",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo.",
    },    
    photoSlides:[
        event_photo1,
        event_photo2,
        event_photo3,
        event_photo4,
        event_photo5,
        event_photo6,
        event_photo1,
    ]
}

import teacher_photo1 from "./assets/teacher_photo1.png"
import teacher_photo2 from "./assets/teacher_photo2.png"
import teacher_photo3 from "./assets/teacher_photo3.png"
import teacher_photo4 from "./assets/teacher_photo4.png"
export const teachers=[
    {
        imgSrc: teacher_photo1,
        name:"Анна Ходько",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl.",
        
    },
    {
        imgSrc: teacher_photo2,
        name:"Анатолий Шаповалов",
        about:"Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. ",
    },
    {
        imgSrc: teacher_photo3,
        name:"Наталья Герасименко",
        about:" Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.",
    },
    {
        imgSrc: teacher_photo4,
        name:"Александр Кравцов",
        about:"Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    },
]
