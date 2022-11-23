function PollList(props){	
    const polls = props.items;
	
    return (
		<ul>
			{polls
                .map((poll) => (
                <li key={poll.id}>
                    <a
                        href={"/poll/" + poll.id}
                        id={poll.id}>
                            {poll.description}
                    </a>
                    <b>{poll.status == "closed" && " - closed"}</b>
                </li>
			))}
		</ul>
	);
}

export default PollList;