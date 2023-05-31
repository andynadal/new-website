import styles from "@/styles/Resume.module.css";
import shared from "@/styles/Shared.module.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import ResumeRow from "../../components/Resume.row";
import CallToAction from "@/components/CallToAction";

export default function Resume() {
    const experiences = [
        {
            title: "Senior iOS Developer",
            place: "RUUT",
            duration: "March 2022 - present",
            description:
                "Lead the iOS team, building the RUUT app from scratch, I've learn...",
            url: "https://ruut.mx",
        },
        {
            title: "Founder",
            place: "Neuron Peak",
            duration: "April 2023 - present",
            description: "",
            url: "https://neuronpeak.com",
        },
        {
            title: "iOS Developer",
            place: "UPAX",
            duration: "August 2021 - March 2022",
            description: "",
            url: "",
        },
        {
            title: "Independent Developer",
            place: "ProLedger & JournalHabit",
            duration: "January 2020 - September 2021",
            description: "",
            url: "",
        },
    ];

    return (
        <>
            <Head>
                <title>Andy Nadal | Resume</title>
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
                <div className={styles.resume}>
                    <h1>Resume</h1>
                    {experiences.map((experience, index) => (
                        <ResumeRow key={index} {...experience} />
                    ))}
                    <h2>Download resume as:</h2>
                    <div className={styles.download_options}>
                        <CallToAction title="iOS App" />
                        <CallToAction title="PDF" />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
