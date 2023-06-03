import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../styles/Socials.module.css";

export default function Socials() {
    return (
        <div className={styles.links}>
            <a
                href="https://twitter.com/andynadal_"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter className={styles.icon} />
            </a>
            <a
                href="https://github.com/andynadal"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className={styles.icon} />
            </a>
            <a
                href="https://www.linkedin.com/in/andresnadalsosa/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className={styles.icon} />
            </a>
            <a
                href="mailto:andy@andynadal.com"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaEnvelope className={styles.icon} />
            </a>
        </div>
    );
}
