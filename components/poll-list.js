function PollList(){
    const POLLS=[
        {
            id: "1",
            description:"Who will win FIFA cup 2022",
            status: "open"
        },
        {
            id: "2",
            description:"Which country has the best pizza",
            status: "open"
        },
        {
            id: "3",
            description:"Which superhero is the strongest",
            status: "closed"
        }
    ];
	
    return (
		<ul>
			{POLLS
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