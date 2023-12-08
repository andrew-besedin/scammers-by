"use client"
import Header from "@/components/default/Header/Header";
import { Button, Card, Input } from "@mui/material";
import styles from "@/styles/Scammers.module.scss";
import scammers, { Scammer } from "@/constants/api";
import Image from "next/image";
import content from "@/constants/content";
import useLang from "../hooks/useLang";
import Link from "next/link";
import { useState } from "react";

function Scammers() {

    const lang = useLang();

    const [filter, setFilter] = useState("");

    function ScammerCard(props: { index: number; scammer: Scammer }) {
        const { index, scammer } = props;

        return (
            <Card 
                variant="outlined"
                className={styles.scammers__card}
            >
                <Image 
                    width={1000}
                    height={1000}
                    src={scammer.common.imgUrl}
                    alt="scammer_photo"
                />
                <div className={styles["scammers__card-content"]}>
                    <h5>{scammer[lang].name}</h5>
                    <p>{scammer[lang].biography}</p>
                    <Link href={`/scammer/${index}`}>
                        <Button variant="outlined">{content[lang].common.goToPage}</Button>
                    </Link>
                </div>
            </Card>
        )
    }

    const filteredScammers = scammers.filter(e => e[lang].name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.scammers__search}>
                    <h2>{content[lang].scammers.scammersTitle}</h2>
                    <Input 
                        placeholder="Фильтр" 
                        value={filter}
                        onChange={e => setFilter(e.currentTarget.value)}
                    />
                </div>
                {!!filteredScammers.length ? 
                    <div className={styles.scammers__list}>
                        {filteredScammers.map((e, i) => <ScammerCard key={i} index={i} scammer={e} />)}
                    </div> : 
                    <div className={styles.scammers__empty}>
                        <h3>{content[lang].common.noResults}</h3>
                    </div>
                }
            </main>
        </>
    )
}

export default Scammers;