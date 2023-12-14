interface Content {
    common: {
        goToPage: string;
        present: string;
        noResults: string;
    },
    home: {
        scammerOfDayTitle: string;
        developersTitle: string;
    },
    scammers: {
        scammersTitle: string;
        searchPlaceholder: string;
    },
    header: {
        mainPage: string;
        scammersPage: string;
    },
    scammer: {
        galleryLabel: string;
        videoLabel: string;
        mapLabel: string;
    }
}

const content: { [lang: string]: Content } = {
    en: {
        common: {
            goToPage: "Go to page",
            present: "present",
            noResults: "No results"
        },
        home: {
            scammerOfDayTitle: "Scammer of the day",
            developersTitle: "Our developers"
        },
        scammers: {
            scammersTitle: "Scammers",
            searchPlaceholder: "Filter"
        },
        header: {
            mainPage: "Main",
            scammersPage: "Scammers"
        },
        scammer: {
            galleryLabel: "Gallery",
            videoLabel: "Video",
            mapLabel: "Place of actions"
        }
    },
    ru: {
        common: {
            goToPage: "Перейти на страницу",
            present: "н. в.",
            noResults: "Нет результатов"
        },
        home: {
            scammerOfDayTitle: "Мошенник дня",
            developersTitle: "Наши разработчики"
        },
        scammers: {
            scammersTitle: "Мошенники",
            searchPlaceholder: "Фильтр"
        },
        header: {
            mainPage: "Главная",
            scammersPage: "Мошенники"
        },
        scammer: {
            galleryLabel: "Галерея",
            videoLabel: "Видеофрагмент",
            mapLabel: "Место деятельности на карте"
        }
    }
}

export default content;