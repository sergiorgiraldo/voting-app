import styles from "../../styles/Home.module.css";
import { GetPolls } from "../../components/poll";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

function PollVotePage(props) {
	const poll = props.poll;

	function handleClick(pollId_, pollOptionId_) {
		fetch("/api/vote", {
			body: JSON.stringify({
				pollId: pollId_,
				pollOptionId: pollOptionId_
			}),
			method: "POST"
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Poll</title>
				<meta name="description" content="Poll" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h3 className={styles.title}>{poll.description}</h3>
				<ul>
					{poll.options.map(({ id, option, count }) => (
						<li className={styles.li} key={id}>
							{poll.status == "open" &&
								<Fragment>
									<button onClick={() => handleClick(poll.id, id)}>
										{option}
									</button>
								</Fragment>
							}
							{poll.status == "closed" &&
								<Fragment>
									{option}
								</Fragment> 
							}
							&nbsp;&nbsp;[{count} vote{(count > 1 || count ==0) && "s"}]
						</li>
					))}
				</ul>
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

export default PollVotePage;
