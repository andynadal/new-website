import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import shared from "@/styles/Shared.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDiagram from "@/components/ProjectDiagram";
import Technologies from "@/components/Technologies";
import CallToAction from "@/components/CallToAction";

export default function Home() {
    const technologies = [
        "UIKit",
        "SwiftUI",
        "Android",
        "SaaS",
        "AI language models",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "APIs",
        "Firebase",
        "AWS",
        "Postman",
        "Git",
        "MVVM",
        "Auth0",
        "KYC",
    ];

    const languages = [
        "Swift",
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "Objective-C",
        "Kotlin",
        "R",
    ];

    const router = useRouter();

    const navigateToResume = () => {
        router.push("/resume");
    };

    return (
        <>
            <Head>
                <title>Andy Nadal | Tech</title>
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
                    <div className={styles.neuron_peak}>
                        <h1>World-class Tech Experience</h1>
                    </div>
                    <ProjectDiagram />
                    <CallToAction title="Contact me" />
                    <Technologies
                        headline="Experience with"
                        technologies={technologies}
                    />
                    <Technologies
                        headline="Experience coding with"
                        technologies={languages}
                    />
                    <p onClick={navigateToResume}>resume</p>
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
