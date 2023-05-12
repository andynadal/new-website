import styles from "@/styles/Footer.module.css";
import LightToggle from "./LightToggle";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.left_container}>
                        <p className={styles.copyright}>
                            © 2023 Andres Nadal, all rights reserved
                        </p>

                        <div className={styles.address}>
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                            <Link href="https://goo.gl/maps/K7qjEcwiBf95QSxN6">
                                Park Plaza WeWork | Av. Javier Barros Sierra
                                495, Mexico City
                            </Link>
                        </div>
                    </div>
                    <LightToggle />
                </div>
            </div>
        </>
    );
}
