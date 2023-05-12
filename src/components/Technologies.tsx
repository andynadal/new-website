import styles from "@/styles/Technologies.module.css";

interface TechnologiesProps {
    technologies: string[];
}

export default function Technologies(props: TechnologiesProps) {
    return (
        <div className={styles.grid}>
            {props.technologies.map((tech, index) => (
                <div key={index} className={styles.card}>
                    {tech}
                </div>
            ))}
        </div>
    );
}
