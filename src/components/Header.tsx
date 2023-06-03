import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <p className={styles.link}>Home</p>
            </Link>
            <span className={styles.divider}>|</span>
            <Link href="/resume">
                <p className={styles.link}>Resume</p>
            </Link>
            <span className={styles.divider}>|</span>
            <Link href="/tech">
                <p className={styles.link}>Technologies</p>
            </Link>
            <span className={styles.divider}>|</span>
            <Link href="/apps">
                <p className={styles.link}>Apps</p>
            </Link>
        </header>
    );
}
