import styles from "@/styles/ResumeRow.module.css";
import Link from "next/link";

interface ResumeProps {
    title: string;
    place: string;
    duration: string;
    description: string;
    url: string;
}

export default function Resume(props: ResumeProps) {
    return (
        <>
            <div className={styles.resume_item}>
                <div className={styles.item_header}>
                    <h3>{props.title}</h3>
                    <p>{props.duration}</p>
                </div>
                <Link href={props.url} className={styles.place_row}>
                    <p className={styles.place}>{`${props.place} |`}</p>
                    <p className={styles.url}>Go to website</p>
                </Link>
                <p className={styles.description}>{props.description}</p>
            </div>
        </>
    );
}
