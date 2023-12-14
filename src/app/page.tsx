"use client"

import styles from "@/styles/Home.module.scss";
import { Button, Card } from '@mui/material';
import content from '@/constants/content';
import useLang from './hooks/useLang';
import scammers from '@/constants/api';
import Image, { StaticImageData } from 'next/image';
import firstDevImg from "@/assets/UI/andrewprog.jpg";
import secondDevImg from "@/assets/UI/antonprog.jpg";
import thirdDevImg from "@/assets/UI/sidorovich.jpg";
import Link from 'next/link';

function Home() {
    const lang = useLang();

    const dayScammerId = (new Date()).getDate() % scammers.length;

    const scammerOfDay = scammers[dayScammerId];

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
            <main className={styles.main}>
                <div className={styles["home__scammer"]}>
                    <h2>{content[lang].home.scammerOfDayTitle}</h2>
                    <Card 
                        variant="outlined" 
                        className={styles["home__scammer-card"]}
                    >
                        <Image
                            width={500}
                            height={500}
                            src={scammerOfDay.common.imgUrl}
                            alt="photo"
                        />
                        <div>
                            <div>
                                <h3>{scammerOfDay[lang].name}</h3>
                                <p>{scammerOfDay.common.birthYear} - {scammerOfDay.common.deathYear || content[lang].common.present}</p>
                                <p>{scammerOfDay[lang].biography}</p>
                            </div>
                            <Link href={`/scammer/${dayScammerId}`}>
                                <Button variant="outlined">{content[lang].common.goToPage}</Button>
                            </Link>
                            
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