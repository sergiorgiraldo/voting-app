import styles from "../styles/Home.module.css";

function PollList(props) {
	const polls = props.items;

	return (
		<ul>
			{polls.map((poll) => (
				<li className={styles.list} key={poll.id}>
					<b>{poll.description}</b>
					&nbsp;&nbsp;
					<a href={"/vote/" + poll.id}>
						Vote for it
					</a>
					&nbsp;&nbsp;::&nbsp;&nbsp;
					<a href={"/poll/" + poll.id} id={poll.id}>
						Update
					</a>
					<b>{poll.status == "closed" && " - closed"}</b>
				</li>
			))}
		</ul>
	);
}

export default PollList;
