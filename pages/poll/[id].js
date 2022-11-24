import styles from "../../styles/Home.module.css";
import { GetPolls } from "../../components/poll";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

function PollUpdatePage(props) {
	const poll = props.poll;
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
			method: "POST"
		});
	}
	const optionsFlattened = poll.options.map((o)=>o.option).join("\n");
	return (
		<div className={styles.container}>
			<Head>
				<title>Poll</title>
				<meta name="description" content="Poll" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h3 className={styles.title}>Update</h3>
				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor="description">Description</label>
						<br />
						<input
							type="text"
							name="description"
							id="description"
							ref={descriptionInputRef}
							value={poll.description}
							>
						</input>
					</p>
					<p>
						<label htmlFor="options">Options</label>
						<br />
						<textarea
							name="options"
							id="options"
							cols="80"
							rows="10"
							ref={optionsInputRef}
							value={optionsFlattened}
							>
						</textarea>
					</p>
					<p>
						<button> OK </button>
					</p>
				</form>
				<p>
					<a href="/">Home</a>
				</p>
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

export async function getStaticProps(context) {
	const data = GetPolls();
	console.log(JSON.stringify(data));
	const pollId = context.params.id;
	const poll = data.filter((p) => p.id == pollId)[0];

	return {
		props: {
			poll: poll
		},
		revalidate: 10
	};
}

export async function getStaticPaths() {
	const data = GetPolls();
	const paths = data.map((p) => ({ params: { id: "" + p.id } }));

	return {
		paths: paths,
		fallback: true,
	};

}

export default PollUpdatePage;
