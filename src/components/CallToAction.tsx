import styles from "@/styles/CallToAction.module.css";
import shared from "@/styles/Shared.module.css";

interface CallToActionProps {
    title: string;
}

export default function CallToAction(props: CallToActionProps) {
    return (
        <a
            href="mailto:andy@andynadal.com"
            className={`${styles.call_to_action} ${shared.hoverable}`}
        >
            {props.title}
        </a>
    );
}
