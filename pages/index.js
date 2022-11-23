import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PollList from "../components/poll-list";
import {GetPolls} from "../components/poll";

export default function Home(props) {
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Polls</title>
				<meta
					name="description"
					content="Polls"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Polls
				</h1>

				<PollList items={props.polls}/>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
				
				&copy; Sergio Rodrigues Giraldo - 2022
			</footer>
		</div>
	);
}

export async function getStaticProps() {
	const data = GetPolls();
	return {
		props: {
			polls: data,
		},
		revalidate: 10,
	};	
}