import styles from "@/styles/Apps.module.css";
import shared from "@/styles/Shared.module.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";

export default function Apps() {
    return (
        <>
            <Head>
                <title>Andy Nadal | Apps</title>
                <meta
                    name="description"
                    content="Portfolio website of Andy Nadal, Software Developer and consultant"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${shared.page_content}`}>
                <Header />
                <div className={styles.apps}>My Apps</div>
                <Footer />
            </main>
        </>
    );
}
