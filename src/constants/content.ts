interface Content {
    common: {
        goToPage: string;
    },
    home: {
        scammerOfDayTitle: string;
        developersTitle: string;
    },
    header: {
        mainPage: string;
        scammersPage: string;
    }
}

const content: { [lang: string]: Content } = {
    en: {
        common: {
            goToPage: "Go to page"
        },
        home: {
            scammerOfDayTitle: "Scammer of the day",
            developersTitle: "Our developers"
        },
        header: {
            mainPage: "Main",
            scammersPage: "Scammers"
        },
    },
    ru: {
        common: {
            goToPage: "Перейти на страницу"
        },
        home: {
            scammerOfDayTitle: "Мошенник дня",
            developersTitle: "Наши разработчики"
        },
        header: {
            mainPage: "Главная",
            scammersPage: "Мошенники"
        }
    }
}

export default content;