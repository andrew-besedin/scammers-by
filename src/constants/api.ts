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
    mapUrl: string;
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
            galleryUrls: [
                "https://kyrtag.kg/upload/iblock/782/782986e4c443e7597b47829f40708c30.jpg",
                "https://www.pravilamag.ru/upload/img_cache/1da/1dabf7ee7f0f3460e40bb1ebc7215937_ce_3192x2124x0x2.jpg",
                "https://s3.open-broker.ru/site/journals/articles/1470/pp3cyovdeKI9yI0tH5gEKTMxP6xKqZQhHhi2gmYh.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/fe6uBNMAKHY?si=NSxNgacxm7FjgN2k&amp;controls=0",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146967.696240981!2d36.884229927524146!3d55.62103035721302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e1!3m2!1sru!2sby!4v1702557678325!5m2!1sru!2sby"
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
            imgUrl: basePath + "/abagnale.jpg",
            galleryUrls: [
                "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000007835619.jpg?quality=75&strip=all",
                "https://avatars.dzeninfra.ru/get-zen_doc/5219035/pub_61309ba23172054c8aa198a7_616a6422ffdef07a4a9df13e/scale_1200",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-63klDUJBKlkVi2La4zO44uQr-C5t1NRD3w&usqp=CAU"
            ],
            videoUrl: "https://www.youtube.com/embed/BmSPu0nqiHU?si=sOsUyvnxCtSOuqvq&amp;controls=0",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350387.7111759675!2d-74.30933341658168!3d40.697539958487226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e1!3m2!1sru!2sby!4v1702560102533!5m2!1sru!2sby"
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
            galleryUrls: [
                "https://upload.wikimedia.org/wikipedia/commons/2/28/Sofia_Blyuvshtein.jpg",
                "https://tudoy-sudoy.od.ua/wp-content/uploads/2017/07/son-ka-zolotaya-ruchka-4.jpg",
                "https://avatars.dzeninfra.ru/get-zen_doc/3940836/pub_634da4463638df6387f07f7e_6356e2fe6f782e03a3d7102a/scale_1200"
            ],
            videoUrl: "https://www.youtube.com/embed/K2MmlQePqFg?si=tWsodQe68WghazNf&amp;controls=0",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618035.2471725922!2d29.98340896341251!3d46.614953433550994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjUwMDA!5e1!3m2!1sru!2sby!4v1702559332721!5m2!1sru!2sby"
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
    },
    {
        common: {
            birthYear: 1875,
            deathYear: 1976,
            imgUrl: basePath + "/weil.png",
            galleryUrls: [
                "https://avatars.dzeninfra.ru/get-zen_doc/1811900/pub_5fc8d643eb95a53734cd5edc_5fc8dc46aa8579379892dd2b/scale_1200",
                "https://ic.pics.livejournal.com/bor_odin/31022566/619370/619370_original.jpg",
                "https://images.1plus1.video/news-1/39807/3a49ebfe3f74434e0fc95957898d1ffa.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/EC61TZUHdc8?si=0zzbZMTFNdIcmNAQ",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634962.9932492208!2d-89.052645514956!3d41.81310075880677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2z0KfQuNC60LDQs9C-LCDQmNC70LvQuNC90L7QudGBLCDQodCo0JA!5e1!3m2!1sru!2sby!4v1702574560228!5m2!1sru!2sby"
        },
        ru: {
            name: "Джозеф Уейл",
            biography: `
                Джозеф Уэйл, по прозвищу Жёлтый парень (Yellow Kid) аферист из США. Родился в 1875 году в Чикаго. Свою карьеру он начал работая подавальщиком в одном из низкопробных салунов, и вскоре перешел к самостоятельному бизнесу - стал коммивояжером, продающим фальшивое средство от глистов, в дальнейшем он значительно усовершенствовал свои аферы и применял настоящий артистический талант во время их реализации. Ничем другим в своей жизни кроме мошенничества Джозеф не занимался. До последнего дня он мечтал о новых авантюрах, и на вопрос: "Хотели бы вы провернуть еще одну аферу?", который ему задали когда его возраст был 100 лет, Джозеф не задумываясь ответил: "Я мечтаю об этом, как голодная собака о мозговой косточке".
            `
        },
        en: {
            name: "Joseph Weil",
            biography: `
                Weil was born in Chicago, the son of Mr. and Mrs. Otto Weil. A popular rumor exists which claims that in 1889 Weil managed to sell a chicken to a wealthy prospector passing through Illinois for the price of a golden nugget. It is from this rumor that the term 'chicken nugget' stems. He quit school and started work as a collector in his home town's bustling loan-sharking industry at age 17. Weil noticed his peers keeping small portions of the boss' proceeds. For a portion, offered Weil, he would not share his knowledge of their perfidy. Plenty complied. His career progressed into protection rackets.

                Under the tutelage of Chicago confidence man Doc Meriwether, Weil started performing brief cons during the 1890s at public sales of Meriwether's Elixir, the chief ingredient of which was rainwater.
            `
        }
    },
    {
        common: {
            birthYear: 1890,
            deathYear: 1947,
            imgUrl: basePath + "/lustig.jpg",
            galleryUrls: [
                "https://vlfin.ru/image/720/0?filename=/uploads/ob1QVUSz3MogzWQSFHpJN2buIqeJ0WwgkZ9U7utT.jpg",
                "https://n1s1.hsmedia.ru/00/b3/94/00b394a5b6603b01016fdff0d0a793b0/1200x926_0xac120003_8567300291615833359.jpg",
                "https://disgustingmen.com/wp-content/uploads/2023/07/eiffel-tower-1909-60931-640x410-1.png"
            ],
            videoUrl: "https://www.youtube.com/embed/AUd51p4ntzM?si=MjVx5QW6-ulu5H_T",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796684.2250767492!2d2.0192053060024513!3d48.83186831896032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e1!3m2!1sru!2sby!4v1702575671243!5m2!1sru!2sby" 
        },
        ru: {
            name: "Виктор Люстиг",
            biography: `
                Ви́ктор Лю́стиг (нем. Victor Lustig; 4 января 1890, Гостинне, Богемия, ныне Краловеградецкий край — 11 марта 1947, Спрингфилд, Миссури) — мошенник и аферист. Мировую известность приобрёл как «человек, продавший Эйфелеву башню. Дважды». Виктор Люстиг происходил из высших слоёв буржуазии, получил хорошее образование и бегло говорил как минимум на пяти языках. После драки в 19-летнем возрасте, причиной которой стала девушка, у Виктора осталась особая примета — характерный шрам от левого глаза к левому уху. Окончив школу, он отбывал тюремный срок за различные мелкие преступления.

                До Первой мировой войны Люстиг зарабатывал азартными играми на трансатлантических лайнерах, а также продавал некий аппарат для производства долларов, который после продажи сразу переставал функционировать. С началом войны этот источник дохода иссяк. В 1920 году Виктор Люстиг отправился в США, где представился графом Виктором Люстигом. На протяжении жизни он сменил десятки псевдонимов. Только лишь на территории США его арестовывали 50 раз и после каждого ареста отпускали из-за недостатка улик.
            `
        },
        en: {
            name: "Victor Lustig",
            biography: `
                Victor Lustig (January 4, 1890 – March 11, 1947) was a highly skilled con artist from Austria-Hungary, who undertook a criminal career that involved conducting scams across Europe and the United States during the early 20th century. Lustig is widely regarded as one of the most notorious con artists of his time, and is infamous for being "the man who sold the Eiffel Tower twice" and for conducting the "Rumanian Box" scam. Lustig was born in Hostinné, Bohemia, Austria-Hungary. He learned easily throughout his youth, becoming a quick-study, which also proved to be a source of trouble. At the age of 19, while taking a break from his studies in Paris, Lustig took to gambling. During this time he also sustained a defining scar on the left side of his face from the jealous boyfriend of a woman he consorted with. Upon leaving school, Lustig applied both his quick wit and sizing up of a situation and his fluency in several languages to embark on a life of crime, eventually focusing on conducting a variety of scams and cons that provided him with property and money, and which transformed him into a professional con man.
            `
        }
    }
];

export default scammers;

export type { Scammer };