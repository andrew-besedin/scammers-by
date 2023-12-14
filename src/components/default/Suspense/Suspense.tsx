"use client"
import styles from "./Suspense.module.scss";
import Preloader from "@/components/UI/Preloader/Preloader";
import { useEffect, useState } from "react";

function Suspense({ children }: { children: JSX.Element }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setLoaded(true), 700);
        return () => clearTimeout(id);
        // setLoaded(true);
    }, []);

    return (
        loaded ? 
        children :
        <div className={styles.suspense}>
            <Preloader />
        </div>
    )
}

export default Suspense;