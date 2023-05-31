import styles from "@/styles/Contact.module.css";
import shared from "@/styles/Shared.module.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Andy Nadal</title>
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
                <div className={styles.contact}>Contact Page</div>
                <Footer />
            </main>
        </>
    );
}
