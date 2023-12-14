"use client"
import Link from "next/link";
import styles from "./Header.module.scss";
import useLang from "@/app/hooks/useLang";
import content from "@/constants/content";

function Header() {
    const lang = useLang();

    function changeLang(lang: "en" | "ru") {
        localStorage.setItem("lang", lang);
        window.location.reload();
    }


    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <Link href="/">
                    <h2>Scammers.by</h2>
                </Link>
                <div className={styles.header__top__langs}>
                    <button onClick={() => changeLang("en")} className={lang === "en" ? styles.selected : undefined}>
                        En
                    </button>
                    <button onClick={() => changeLang("ru")} className={lang === "ru" ? styles.selected : undefined}>
                        Ru
                    </button>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <nav>
                    <Link href="/">{content[lang].header.mainPage}</Link>
                    <Link href="/scammers">{content[lang].header.scammersPage}</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;