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
                "Lead the iOS team, we built the RUUT app from scratch. We've implemented an MVVM architecture using UIKit; work with an incredible backend architecture, consisting of a GraphQL database, Cloud Fare Workers, Auth0, Firebase, Knock, and other technologies; I've learn about leadership, problem solving, product, scrum, architecture, scalability and cybersecurity.",
            url: "https://ruut.mx",
        },
        {
            title: "Founder",
            place: "Neuron Peak",
            duration: "April 2023 - present",
            description:
                "I founded Neuron Peak, so help people focus more on what they love, and less on managing their time, information and tasks. Neuron Peak will offer a power-user task manager, note-taking, and a time tracking app.",
            url: "https://neuronpeak.com",
        },
        {
            title: "iOS Developer",
            place: "UPAX",
            duration: "August 2021 - March 2022",
            description:
                "Worked on a ERP app, for one of the biggest conglomerates of Mexico; here learned about the importance of architecture, how to build a scalable app, cybersecurity and corporate processes, needed to build a product for a big company.",
            url: "",
        },
        {
            title: "Independent Developer",
            place: "ProLedger & JournalHabit",
            duration: "January 2020 - September 2021",
            description:
                "I developed and launched two apps to the App Store on my own. ProLedger, a personal finance app, and JournalHabit, a habit tracker. I learned about the importance of design, marketing, and how to build a product from scratch.",
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
                    {/* <h2>Download resume as:</h2>
                    <div className={styles.download_options}>
                        <CallToAction title="iOS App" />
                        <CallToAction title="PDF" />
                    </div> */}
                </div>
                <Footer />
            </main>
        </>
    );
}
