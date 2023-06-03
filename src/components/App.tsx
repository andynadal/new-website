import styles from "@/styles/App.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string;
    company: string;
    duration: string;
    role: string;
    description: string;
    link: string;
    image_url: string;
}

export default function App(props: Props) {
    return (
        <Link href={props.link}>
            <div className={styles.app}>
                <div className={styles.app_icon}>
                    <Image
                        src={props.image_url}
                        alt={`Logo of App ${props.name}`}
                        width={130}
                        height={130}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h2>{props.name}</h2>
                        <h3>{props.company}</h3>
                    </div>
                    <div className={styles.mid}>
                        <h4>{props.role}</h4>
                        <h5>{props.duration}</h5>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    );
}
