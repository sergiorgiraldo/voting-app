import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function NewPoll() {
	
	return (
		<div className={styles.container}>
			<Head>
				<title>New Poll</title>
				<meta
					name="description"
					content="Polls"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					New Poll
				</h1>

                <form>
                    <p>
                        <label for="description">Description</label>
                        <br />
                        <input type="text" name="description" id="description"/>
                    </p>
                    <p>
                        <label for="options">Options</label>
                        <br />
                        <textarea name="options" id="options" cols="80" rows="10"></textarea>
                    </p>
                    <p>
                        <button> OK </button>
                    </p>
                </form>

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

