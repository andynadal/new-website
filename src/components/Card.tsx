import styles from "@/styles/Card.module.css";
import { useState, useEffect, useRef } from "react";

interface TechnologiesProps {
    technology: string;
    isHighlighted: boolean;
}

export default function Card(props: TechnologiesProps) {
    const [isHighlighted, setIsHighlighted] = useState(props.isHighlighted);
    const initialRenderRef = useRef(true);

    useEffect(() => {
        if (initialRenderRef.current) {
            initialRenderRef.current = false;
        }
    }, []);

    useEffect(() => {
        setIsHighlighted(props.isHighlighted);
    }, [props.isHighlighted]);

    return (
        <div className={styles.grid}>
            <div
                className={`${styles.card} ${
                    isHighlighted ? styles.highlighted : styles.not_highlighted
                } ${initialRenderRef.current ? styles.initial_state : ""}`}
            >
                {props.technology}
            </div>
        </div>
    );
}
