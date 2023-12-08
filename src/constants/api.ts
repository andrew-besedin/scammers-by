interface ScammerLangData {
    name: string;
    biography: string;
}

interface ScammerCommonData {
    birthYear: number;
    deathYear: number;
    imgUrl: string;
    galleryUrls: string[];
    videoUrl: string;
}

interface Scammer {
    common: ScammerCommonData;
    en: ScammerLangData;
    ru: ScammerLangData;
}

const scammers: Scammer[] = [
    {
        common: {
            birthYear: 1940,
            deathYear: 2018,
            imgUrl: "/mavrodi.jpg",
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
    }
];

export default scammers;

export type { Scammer };