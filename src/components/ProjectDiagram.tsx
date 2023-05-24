import style from "@/styles/ProjectDiagram.module.css";
import shared from "@/styles/Shared.module.css";

export default function LightToggle() {
    return (
        <>
            <div className={style.container}>
                <div className={`${style.box} ${shared.hoverable}`}>
                    <h2>Exploration</h2>
                    <span className={style.divider} />
                    <p>I&apos;ve help projects get new ideas</p>
                </div>
                <span className="material-symbols-outlined">chevron_right</span>
                <div className={`${style.box} ${shared.hoverable}`}>
                    <h2>Design</h2>
                    <span className={style.divider} />
                    <p>UI &amp; UX are one of the most important</p>
                </div>
                <span className="material-symbols-outlined">chevron_right</span>
                <div className={`${style.box} ${shared.hoverable}`}>
                    <h2>Development</h2>
                    <span className={style.divider} />
                    <p>Good tech is well planned-out tech</p>
                </div>
            </div>
        </>
    );
}
