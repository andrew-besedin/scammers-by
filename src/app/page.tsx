"use client"
import Header from '@/components/default/Header/Header';
import styles from './page.module.scss';
import { Button, Card } from '@mui/material';
import content from '@/constants/content';
import useLang from './hooks/useLang';
import scammers from '@/constants/api';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import firstDevImg from "@/assets/UI/andrewprog.jpg";
import secondDevImg from "@/assets/UI/antonprog.jpg";
import thirdDevImg from "@/assets/UI/sidorovich.jpg";
import Link from 'next/link';

function Home() {
    const lang = useLang();

    const [dayScammerId, setDayScammerId] = useState<number>(0);

    function DevCard(props: { img: StaticImageData; name: string; githubTag: string; githubLink: string }) {
        const {
            img,
            name,
            githubLink, 
            githubTag
        } = props;

        return (
            <Card
                variant="outlined"
                className={styles["home__developers-card"]}
            >
                <Image 
                    src={img}
                    alt='developer'
                />
                <div>
                    <h4>{name}</h4>
                    <Link 
                        href={githubLink}
                        target='_blank'
                    >
                        @{githubTag}
                    </Link>
                </div>
            </Card>
        )
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles["home__scammer"]}>
                    <h2>{content[lang].home.scammerOfDayTitle}</h2>
                    <Card 
                        variant="outlined" 
                        className={styles["home__scammer-card"]}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={scammers[0].common.imgUrl}
                            alt="photo"
                        />
                        <div>
                            <div>
                                <h3>{scammers[dayScammerId][lang].name}</h3>
                                <p>{scammers[dayScammerId].common.birthYear} - {scammers[dayScammerId].common.deathYear}</p>
                                <p>{scammers[dayScammerId][lang].biography}</p>
                            </div>
                            <Button variant="outlined" >{content[lang].common.goToPage}</Button>
                        </div>
                    </Card>
                </div>
                <div className={styles["home__developers"]}>
                    <h2>{content[lang].home.developersTitle}</h2>
                    <div className={styles["home__developers_cards"]}>
                        <DevCard 
                            img={firstDevImg}
                            name='Andrei Besedin'
                            githubTag='andrew-besedin'
                            githubLink='https://github.com/andrew-besedin'
                        />
                        
                        <DevCard 
                            img={secondDevImg}
                            name='Anton Besedin'
                            githubTag='antonprog97'
                            githubLink='https://github.com/antonprog97'
                        />
                        <DevCard 
                            img={thirdDevImg}
                            name='Roman Sidor Ovich'
                            githubTag='RomanSidorovich'
                            githubLink='https://github.com/RomanSidorovich'
                        />
                    </div>
                </div>
            </main>
        </> 
    )
}

export default Home;