interface ScammerLangData {
    name: string;
    biography: string;
}

interface ScammerCommonData {
    birthYear: number;
    deathYear?: number;
    imgUrl: string;
    galleryUrls: string[];
    videoUrl: string;
}

interface Scammer {
    common: ScammerCommonData;
    en: ScammerLangData;
    ru: ScammerLangData;
}

const basePath = "/scammers-by";

const scammers: Scammer[] = [
    {
        common: {
            birthYear: 1955,
            deathYear: 2018,
            imgUrl: basePath + "/mavrodi.jpg",
            galleryUrls: ["", ""],
            videoUrl: ""
        },
        ru: {
            name: "Сергей Мавроди",
            biography: `
                Серге́й Пантеле́евич Мавро́ди (11 августа 1955, Москва, СССР — 26 марта 2018, Москва, Россия) — российский основатель нескольких финансовых пирамид, политический деятель и писатель. Известен как создатель АО «МММ», которая считается классической и крупнейшей финансовой пирамидой России по количеству пострадавших (10—15 миллионов человек) и ущербу (по некоторым оценкам, 3 миллиарда рублей)

                В 2003 году был осуждён за мошенничество в крупных размерах. В суде потерпевшими было признано 10 454 человека.
                
                В 1994—1995 годах был депутатом Государственной думы, создал «Партию народного капитала» и партию «МММ» (укр. Ми Маємо Мету) на Украине. В 1996 году выдвигал свою кандидатуру в президенты России.
            `
        },
        en: {
            name: "Sergey Mavrodi",
            biography: `
                Sergei Panteleevich Mavrodi (Russian: Серге́й Пантеле́евич Мавро́ди; 11 August 1955 – 26 March 2018) was a Russian financial fraudster, financial criminal and previously a deputy of the State Duma. He was the founder of the МММ, a scheme that defrauded millions of people around the globe.

                In 2007 Sergei Mavrodi was convicted in a Russian court of defrauding 10,000 investors out of 110 million rubles ($4.3 million). Mavrodi claimed he was not the beneficiary of the donations and that he was not used to a flamboyant lifestyle. The charge of which he was later convicted was tax fraud though he claimed that the MMM scheme was not a business, but instead a mutual donation program against which there is no law. There were interviews after his release where he claimed MMM Global was behind the bitcoin price rally.
            `
        }
    },
    {
        common: {
            birthYear: 1948,
            deathYear: undefined,
            imgUrl: basePath + "/abagnale.png",
            galleryUrls: ["", ""],
            videoUrl: ""
        },
        ru: {
            name: "Фрэнк Абигнейл",
            biography: `
                Фрэнк Уи́льям Абигнейл-младший (англ. Frank William Abagnale, Jr.; род. 27 апреля 1948, Бронксвилл, Нью-Йорк, США) — американский писатель и осуждённый преступник. Абигнейл нацеливался на отдельных лиц и малый бизнес, но в конце 1970-х годов приобрёл известность, заявив о разнообразных мошенничествах на рабочем месте без жертв, многие из которых сейчас вызывают сомнения. В 1980 году Абигнейл стал соавтором автобиографии «Поймай меня, если сможешь», которая построила повествование вокруг заявленных им мошенничеств. Книга позже вдохновила Стивена Спилберга на создание одноимённого фильма 2002 года, в котором Абигнейла сыграл актёр Леонардо Ди Каприо. Он также написал ещё четыре книги. Абигнейл управляет консалтинговой фирмой Abagnale & Associates.
            `
        },
        en: {
            name: "Frank Abagnale",
            biography: `
                Frank William Abagnale Jr. (born April 27, 1948) is an American security consultant, author, and convicted felon who committed frauds that mainly targeted individuals and small businesses. He later gained notoriety in the late 1970s by claiming a diverse range of workplace frauds, many of which have since been placed in doubt. In 1980, Abagnale co-wrote his autobiography, Catch Me If You Can, which built a narrative around these claimed frauds. The book inspired the film of the same name directed by Steven Spielberg in 2002, in which Abagnale was portrayed by actor Leonardo DiCaprio. He has also written four other books. Abagnale runs "Abagnale and Associates", a consulting firm.
            `
        }
    },
    {
        common: {
            birthYear: 1846,
            deathYear: 1902,
            imgUrl: basePath + "/sofia_golden_hand.jpg",
            galleryUrls: ["", ""],
            videoUrl: ""
        },
        ru: {
            name: "Сонька-Золотая Ручка",
            biography: `
                Со́фья Ива́новна (Шейндля-Сура Лейбовна) Блювштейн (в девичестве Соломониак; 1846, Повонзки, Варшавская губерния — 1902, пост Александровский, о. Сахалин) — российская преступница-авантюристка еврейского происхождения, известная под кличкой «Сонька-Золотая Ручка». Точных сведений о жизни Софьи (Сони) Соломониак-Блювштейн-Штендель нет, так как своё собственное жизнеописание она в значительной мере фальсифицировала. По официальным судебным документам, знаменитая авантюристка родилась в местечке Повонзки Варшавской губернии в 1846 году. Однако при крещении по православному обряду в 1899 году она указала местом и датой рождения город Варшаву, 1851 год. Получила образование, знала несколько иностранных языков. Обладала даром артистизма и театрального перевоплощения.
            `
        },
        en: {
            name: "Sonya Golden Hand",
            biography: `
                Sofia Ivanovna Blyuvshtein (also spelled as Bluvstein, Bluvsztejn; better known as Sonia (Son'ka) the Golden Hand; 1846–1902), was a female con artist who lived in the Russian Empire and was eventually convicted of theft. She committed several carefully planned robberies, and was eventually captured and exiled to the Sakhalin penal colony. She became the basis of several books and films, in which she is romanticized as a Robin Hood figure, who never killed, and who stole only from the rich.

                In 1890, she met Anton Chekhov, who was visiting Sakhalin during his investigations into prison reform; he subsequently described the incident in his book Sakhalin Island.
                
                A headless statue by an unmarked grave in Moscow's Vagankovo Cemetery is used as a shrine to Sonia; worshippers, who believe Sonya to be buried there, ask for her spiritual assistance in their own crimes.
            `
        }
    }
];

export default scammers;

export type { Scammer };