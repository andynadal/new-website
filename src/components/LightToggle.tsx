import { useState, useEffect } from "react";
import styles from "@/styles/LightToggle.module.css";

export default function LightToggle() {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const isLightModeEnabled = localStorage.getItem("isLightModeEnabled");
        if (isLightModeEnabled === "true") {
            document.documentElement.removeAttribute("data-theme");
            setIsLightMode(true);
        } else {
            setIsLightMode(false);
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    const handleToggle = () => {
        const updatedIsLightMode = !isLightMode;
        setIsLightMode(updatedIsLightMode);
        localStorage.setItem("isLightModeEnabled", String(updatedIsLightMode));
        if (updatedIsLightMode) {
            const root = document.documentElement;
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            root.classList.toggle("light-mode");
            root.removeAttribute("data-theme");
        } else {
            const root = document.documentElement;
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            root.classList.toggle("light-mode");
            root.setAttribute("data-theme", "dark");
        }
    };

    return (
        <label className={styles.theme_toggle}>
            <span className={styles.toggle_label}>
                {isLightMode ? "Light" : "Dark"} mode
            </span>
            <input
                type="checkbox"
                id="theme-toggle"
                checked={isLightMode}
                onChange={handleToggle}
            />
            <div className={styles.toggle_icon} />
        </label>
    );
}
