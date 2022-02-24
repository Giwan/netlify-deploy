import Head from "next/head";
import styles, { customerValue } from "../styles/Home.module.css";
import ActionComponent from "../components/ActionComponent/ActionComponent";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Explanation/HowItWorks";
import SiteTitle from "../components/SiteTitle/SiteTitle";
import QuickStart from "../components/QuickStart/QuickStart";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>
                    Allows iframe - API to check if a given site can be opened
                    in an iFrame
                </title>
                <meta
                    name="description"
                    content="Allows iframe - API to check if a given site can be opened in an iFrame"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SiteTitle />
                <h1 className={styles.title}>Will it open in an <strong>iFrame</strong>?</h1>
                <article className={styles.article}>
                    <p>
                        <strong>Not every site will load in an iFrame!</strong>
                        The site owner can restrict it from being loaded in an iFrame. 
                        Most browsers will comply. Some might show a helpful error message. 
                    </p>
                    <p className={customerValue}>
                        Use this API to <strong>pre-check</strong> if a
                        given <strong>URL</strong> will open in an <strong>iFrame</strong>.
                    </p>
                </article>
            </main>
            <QuickStart />
            <ActionComponent />
            <HowItWorks />
            <Footer />
        </div>
    );
}
