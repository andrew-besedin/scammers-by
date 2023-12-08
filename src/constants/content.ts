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
    },
    header: {
        mainPage: string;
        scammersPage: string;
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
            scammersTitle: "Scammers"
        },
        header: {
            mainPage: "Main",
            scammersPage: "Scammers"
        },
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
            scammersTitle: "Мошенники"
        },
        header: {
            mainPage: "Главная",
            scammersPage: "Мошенники"
        }
    }
}

export default content;