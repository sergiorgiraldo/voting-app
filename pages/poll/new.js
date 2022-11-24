import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRef } from "react";

export default function NewPoll() {
	const descriptionInputRef = useRef();
	const optionsInputRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();
		const description_ = descriptionInputRef.current.value;
		const options_ = optionsInputRef.current.value;

		fetch("/api/poll", {
			body: JSON.stringify({
				description: description_,
				options: options_
			}),
			method: "PUT"
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>New Poll</title>
				<meta name="description" content="Polls" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>New Poll</h1>

				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor="description">Description</label>
						<br />
						<input
							type="text"
							name="description"
							id="description"
							ref={descriptionInputRef}></input>
					</p>
					<p>
						<label htmlFor="options">Options</label>
						<br />
						<textarea
							name="options"
							id="options"
							cols="80"
							rows="10"
							ref={optionsInputRef}></textarea>
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
