"use client"
import useLang from "@/app/hooks/useLang";
import scammers from "@/constants/api";
import content from "@/constants/content";
import { Card } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/styles/Scammer.module.scss";
import { useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function ScammerPage(props: { params: { id: string } }) {
    const videoRef = useRef<HTMLIFrameElement>(null);
    const mapRef = useRef<HTMLIFrameElement>(null);

    function leave() {
        router.push("/404");
    }

    const lang = useLang();

    const router = useRouter();
    const idStr = props.params.id;
    if (typeof idStr !== "string") leave();

    const id = parseInt(idStr, 10);

    if (isNaN(id)) leave();
    
    const scammer = scammers[id];

    if (!scammer) leave();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = scammer.common.videoUrl;
        }

        if (mapRef.current) {
            mapRef.current.src = scammer.common.mapUrl;
        }
    }, [scammer]);

    return (
        <>
            <main className={styles.main}>
                <Card variant="outlined" className={styles.scammer__card}>
                    <div className={styles["scammer__card-content"]}>
                        <h2>{scammer[lang].name}</h2>
                        <h4>{scammer.common.birthYear} - {scammer.common.deathYear || content[lang].common.present}</h4>
                        <p>{scammer[lang].biography}</p>
                    </div>
                    <Image
                        width={500}
                        height={500}
                        src={scammer.common.imgUrl}
                        alt="photo"
                    />
                </Card>
                <div className={styles["scammer__content-item"]}>
                    <h3>{content[lang].scammer.galleryLabel}</h3>
                    <ImageGallery items={scammer.common.galleryUrls.map(e => ({ original: e }))} />
                </div>
                <div className={styles["scammer__content-item"]}>
                    <h3>{content[lang].scammer.videoLabel}</h3>
                    <iframe ref={videoRef} className={styles.scammer__video} width="560" height="315" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className={styles["scammer__content-item"] + " " + styles.scammer__map}>
                    <h3>{content[lang].scammer.mapLabel}</h3>
                    <iframe ref={mapRef} width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </main>
            
        </>
    )
}

export default ScammerPage;