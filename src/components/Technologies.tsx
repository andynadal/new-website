import styles from "@/styles/Technologies.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

interface TechnologiesProps {
    headline: string;
    technologies: string[];
}

export default function Technologies(props: TechnologiesProps) {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const newRandomNumber = Math.floor(
                Math.random() * props.technologies.length
            );
            setRandomNumber(newRandomNumber);
        }, 4000);

        return () => clearInterval(interval);
    }, [props.technologies.length]);

    return (
        <div className={styles.technologies}>
            <h2 className={styles.headline}>{props.headline}</h2>
            <div className={styles.grid}>
                {props.technologies.map((tech, index) => (
                    <div key={index} className={styles.card}>
                        <Card
                            technology={tech}
                            isHighlighted={index == randomNumber}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
