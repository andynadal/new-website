import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import shared from "@/styles/Shared.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Andy Nadal | Developer</title>
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
            <main className={styles.main}>
                <div className={shared.page_content}>
                    <Header />
                    <div className={styles.profile}>
                        <Image
                            src="/assets/profile.jpg"
                            alt="A picture of Andy Nadal"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={styles.neuron_peak}>
                        <h1>Hey, I&apos;m Andy</h1>
                    </div>
                    <div className={styles.hero}>
                        <p>I create experiences through Apps and Websites</p>
                        <p>
                            We need to tools to help us focus on the projects
                            that really matter, creativity is a unique and
                            fragile abstract, that if not cared for, it breaks,
                            our current tools are not optimized for this task,
                            let &apos;s fix that.
                        </p>
                    </div>
                    <CallToAction title="Contact me" />
                    <div className={styles.contact}>
                        <p>Get in touch at:</p>
                        <a
                            href="mailto:andy@andynadal.com"
                            className={styles.email}
                        >
                            andy@andynadal.com
                        </a>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
