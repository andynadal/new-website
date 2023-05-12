import styles from "@/styles/CallToAction.module.css";

interface CallToActionProps {
    title: string;
}

export default function CallToAction(props: CallToActionProps) {
    return (
        <a href="https://google.com" className={styles.call_to_action}>
            {props.title}
        </a>
    );
}
