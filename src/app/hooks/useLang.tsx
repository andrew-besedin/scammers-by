import { useEffect, useState } from "react";

function useLang() {
    const [lang, setLang] = useState<"ru" | "en">("ru");

    useEffect(() => {
        setLang(localStorage.getItem("lang") === "ru" ? "ru" : "en");
    }, []);

    return lang;
}

export default useLang;