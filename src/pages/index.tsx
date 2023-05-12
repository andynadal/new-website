import Head from "next/head";
import styles from "@/styles/Home.module.css";
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
                <div className={styles.neuron_peak}>
                    <h1>Hey, I&apos;m Andy</h1>
                    <p>
                        I make apps that help people achieve their highest
                        potential
                    </p>
                </div>
                <ProjectDiagram />
                <CallToAction title="Contact me" />
                <h2>Experience with</h2>
                <Technologies technologies={technologies} />
                <h2>Experience coding in</h2>
                <Technologies technologies={languages} />
                <div className={styles.contact}>
                    <p>Get in touch at:</p>
                    <a
                        href="mailto:andy@andynadal.com"
                        className={styles.email}
                    >
                        andy@andynadal.com
                    </a>
                </div>
                <Footer />
            </main>
        </>
    );
}
