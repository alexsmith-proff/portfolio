// !!! ВНИМАНИЕ !!! id и serialNumber в проекте должны совпадать. id и serialNumber в массиве должны идти по порядку

import { IProject, IProjectCard } from "../interfaces/projects.interface";

export const projects: IProject[] = [
    {
        id: 1,
        serialNumber: 1,
        title: 'Конструктор куни',
        description: 'Конструктор куни. В данном проекте реализован движок конструктора, личный кабинет клиента. Конструктор кухни легко интегрируется на сайт.',
        stackExpand: 'Nest.js, TypeScript, PostgreSQL, telegramBotApi, Next.js, Zustandr',
        media: 
        {
            main: [
                {
                    fileName: '../img/gigaroom/gigaroom1.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom2.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom3.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom4.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom5.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom6.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom7.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom8.png',
                    type: "image"
                }, 
                {
                    fileName: '../img/gigaroom/presentation_gigaroom-it.webm',
                    type: "video"
                },   
                // {
                //     fileName: '../img/gigaroom/1.webm',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/2.webm',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/3.webm',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/4.webm',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/5.webm',
                //     type: "video"
                // },
            ],
            previews: [
                {
                    fileName: '../img/gigaroom/gigaroom1.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom2.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom3.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom4.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom5.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom6.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom7.png',
                    type: "image"
                },
                {
                    fileName: '../img/gigaroom/gigaroom8.png',
                    type: "image"
                },    
                {
                    fileName: '../img/gigaroom/1.png',
                    type: "video"
                },
                // {
                //     fileName: '../img/gigaroom/2.png',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/3.png',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/4.png',
                //     type: "video"
                // },
                // {
                //     fileName: '../img/gigaroom/5.png',
                //     type: "video"
                // },
            ]
        }
    },
    {
        id: 2,
        serialNumber: 2,
        title: 'Интернет магазин продажи цветов',
        description: 'Интернет магазин продажи цветов. В данном проекте реализована регистрация, авторизация пользователей, просмотр товаров, фильтрация товаров, корзина. Имеется админ панель, которая позволяет создавать контент: разделы меню, посты для CEO, товары с описанием и медиа информацией. Моя работа - BACKEND/FRONTEND',
        stackExpand: 'Nest.js, TypeScript, PostgreSQL, GraphQL, Apollo, Next.js, Redux Toolkit, Formik, Axios, Jest, React Testing Library, Docker',
        gitUrl: 'https://github.com/alexsmith-proff/marketplace_of_flowers',
        media: 
        {
            main: [
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers1.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers2.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers3.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers4.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers5.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers6.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers7.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers8.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers9.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video1.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video2.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video3.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video4.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video5.mp4',
                    type: "video"
                },
            ],
            previews: [
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers1.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers2.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers3.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers4.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers5.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers6.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers7.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers8.png',
                    type: "image"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers9.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video1.gif',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video2.gif',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video3.gif',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video4.gif',
                    type: "video"
                },
                {
                    fileName: '../img/marketplace_of_flowers/marketplace_of_flowers-video5.gif',
                    type: "video"
                },
            ]
            
        }

    },
    {
        id: 3,
        serialNumber: 3,
        title: 'Коммутатор IP телефонии',
        description: 'Данное приложение обеспечивает функционал телефонистки работающей на коммутаторе для ведомственных сетей. В данном проекте реализована регистрация/авторизация, основной механиз работы соединения абонентов, справочник отображающий более 50000 абонентов, история заказов, тарифы, прослушивание записанных разговоров, журнал событий и т.д. Моя работа - FRONTEND ',
        stackExpand: 'Python React.js WebSocket MobX ReactIcons StoryBook',
        media: {
            main: [
                {
                    fileName: '../img/commutators_frontend/commutators_frontend1.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend2.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend3.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend4.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend5.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend6.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend7.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend8.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video1.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video2.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video3.mp4',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video4.mp4',
                    type: "video"
                },
            ],
            previews: [
                {
                    fileName: '../img/commutators_frontend/commutators_frontend1.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend2.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend3.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend4.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend5.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend6.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend7.png',
                    type: "image"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend8.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video1.gif',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video2.gif',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video3.gif',
                    type: "video"
                },
                {
                    fileName: '../img/commutators_frontend/commutators_frontend-video4.gif',
                    type: "video"
                },
            ]
        }
    },
    {
        id: 4,
        serialNumber: 4,
        title: 'Внутренний проект - Тестирование знаний по охране труда',
        description: 'Внутренний проект ПУЛЬСАР-ТЕЛЕКОМ. Проект позволяет проверить знания сотрудников по охране труда и провести другие тесты. В данном проекте реализована регистрация, авторизация пользователей, Имеется админ панель, которая позволяет создавать тесты, просматривать результаты тестирования сутрудников. Моя работа - BACKEND/FRONTEND',
        stackExpand: 'Express.js Next.js Redux MongoDB',
        gitUrl: 'https://github.com/alexsmith-proff/safety_and_health',
        media: {
            main: [
                {
                    fileName: '../img/safety_and_health/safety_and_health1.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health2.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health3.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health4.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health5.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/safety_and_health/safety_and_health-video.mp4',
                    type: "video"
                },
            ],
            previews: [
                {
                    fileName: '../img/safety_and_health/safety_and_health1.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health2.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health3.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health4.png',
                    type: "image"
                },
                {
                    fileName: '../img/safety_and_health/safety_and_health5.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/safety_and_health/safety_and_health-video.gif',
                    type: "video"
                },
            ]
        }
    },
    // {
    //     id: 4,
    //     serialNumber: 4,
    //     title: 'КИПР - Комплекс Измерения Параметров Радиостанций',
    //     description: 'Просто описание про КИПР - Комплекс Измерения Параметров Радиостанций',
    //     stackExpand: 'React MobX MUI GraphQL',
    //     media: {
    //         main: [
    //             {
    //                 fileName: '/img/kipr/kipr1.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr2.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr3.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr4.png',
    //                 type: "image"
    //             },
                
    //             {
    //                 fileName: '/img/kipr/kipr-video.mp4',
    //                 type: "video"
    //             },
    //         ],
    //         previews: [
    //             {
    //                 fileName: '/img/kipr/kipr1.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr2.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr3.png',
    //                 type: "image"
    //             },
    //             {
    //                 fileName: '/img/kipr/kipr4.png',
    //                 type: "image"
    //             },
                
    //             {
    //                 fileName: '/img/kipr/kipr-video.gif',
    //                 type: "video"
    //             },
    //         ]
    //     }
    // },
    {
        id: 5,
        serialNumber: 5,
        title: 'Сайт агентства недвижимости',
        description: 'Сайт агентства "ДИВА-недвижимость". Проект демонстрирует оъекты недвижимости. Имеются две секции - ареда, продажа. Так же проект позволяет оставлять заявки, которые приходят на email. Моя работа - BACKEND/FRONTEND',
        stackExpand: 'Express.js Next.js',
        gitUrl: 'https://github.com/alexsmith-proff/DIVA',
        media: {
            main: [
                {
                    fileName: '../img/diva/diva1.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva2.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva3.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva4.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva5.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva6.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/diva/diva-video.mp4',
                    type: "video"
                },
            ],
            previews: [
                {
                    fileName: '../img/diva/diva1.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva2.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva3.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva4.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva5.png',
                    type: "image"
                },
                {
                    fileName: '../img/diva/diva6.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/diva/diva-video.gif',
                    type: "video"
                },
            ]
        }
    },
    {
        id: 6,
        serialNumber: 6,
        title: 'Интернет магазин продажи строительных материалов',
        description: 'Интернет магазин продажи строительных материалов. В данном проекте реализована регистрация, авторизация пользователей, просмотр товаров, корзина. Моя работа - BACKEND/FRONTEND',
        stackExpand: 'Express.js MongoDB React.js Redux Axios',
        gitUrl: 'https://github.com/alexsmith-proff/magazin-stroy',
        media: {
            main: [
                {
                    fileName: '../img/magazin-stroy-master/magazin-stroy-master1.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/magazin-stroy-master/magazin-stroy-master-video.mp4',
                    type: "video"
                },
            ],
            previews: [
                {
                    fileName: '../img/magazin-stroy-master/magazin-stroy-master1.png',
                    type: "image"
                },
    
                {
                    fileName: '../img/magazin-stroy-master/magazin-stroy-master-video.jpeg',
                    type: "video"
                },
            ]
        }
    }
]

export const projectCards: IProjectCard[] = [
    {
        id: 1,
        serialNumber: 1,
        title: 'Конструктор кухни',
        stackShort: `THREE.js Next.js Nest.js`,
        bgFileName: '../img/gigaroom/gigaroom_bg.png'
    },
    {
        id: 2,
        serialNumber: 2,
        title: 'Интернет магазин цветов',
        stackShort: `Nest.js Next.js PostgreSQL`,
        bgFileName: '../img/marketplace_of_flowers/marketplace_of_flowers-bg.png'
    },
    {
        id: 3,
        serialNumber: 3,
        title: 'Коммутатор IP телефонии',
        stackShort: `React.js WebSocket MobX`,
        bgFileName: '../img/commutators_frontend/commutators_frontend-bg.png'
    },
    {
        id: 4,
        serialNumber: 4,
        title: 'Тестирование по охране труда',
        stackShort: `Express.js Next.js MongoDB`,
        bgFileName: '../img/safety_and_health/safety_and_health-bg.png'
    },
    // {
    //     id: 4,
    //     serialNumber: 4,
    //     title: 'КИПР - Комплекс Измерения Параметров Радиостанций',
    //     stackShort: `React MobX MUI GraphQL`,
    //     bgFileName: '../img/kipr/kipr-bg.png'
    // },
    {
        id: 5,
        serialNumber: 5,
        title: 'Сайт агентства недвижимости',
        stackShort: `Express.js Next.js`,
        bgFileName: '../img/diva/diva-bg.png'
    },
    {
        id: 6,
        serialNumber: 6,
        title: 'Интернет магазин строительных материалов',
        stackShort: `Express.js React.js`,
        bgFileName: '../img/magazin-stroy-master/magazin-stroy-master-bg.png'
    },
]