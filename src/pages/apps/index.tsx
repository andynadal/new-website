import styles from "@/styles/Apps.module.css";
import shared from "@/styles/Shared.module.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import App from "@/components/App";

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
                <div className={styles.apps}>
                    <App
                        name="RUUT"
                        company="Sherpa Brokers Inc."
                        role="Senior iOS Developer"
                        duration="March 2021 - Present"
                        description="Investing in the stock market is now easier than ever. RUUT is a platform that allows you to invest in the stock market with ease. Build with UIKit, MVVM, Cloud Fare Workers, SaSS, Firebase, Auth0 and more."
                        link="https://apps.apple.com/app/ruut/id1636922548"
                        image_url="/assets/app-logo-ruut.png"
                    />
                    <App
                        name="Journal Habit"
                        company="Andy Nadal"
                        role="Indie iOS Developer"
                        duration="December 2020 - August 2021"
                        description="Mindfulness is a personal journey, and Journal Habit helps you in that journey, a go to app to write your thoughts, feelings and emotions. Build with SwiftUI, UIKit, CoreData and CloudKit"
                        link="https://apps.apple.com/app/journal-habit/id1560898610"
                        image_url="/assets/app-logo-journal-habit.png"
                    />
                    <App
                        name="Pro Ledger"
                        company="Andy Nadal"
                        role="Indie iOS Developer"
                        duration="March 2020 - December 2020"
                        description="Pro Ledger is a personal finance app that helps you keep track of your expenses and income, so you have tools to make the best financial decisions. Build with SwiftUI, UIKit and CoreData"
                        link="https://apps.apple.com/app/pro-ledger/id1524370871"
                        image_url="/assets/app-logo-pro-ledger.png"
                    />
                </div>
                <Footer />
            </main>
        </>
    );
}
