import { VoteForPoll } from "../../../components/poll";

export default function handler(req, res) {
	if (req.method == "POST") {
		const data = JSON.parse(req.body);

		const pollId = data.pollId;
		const pollOptionId = data.pollOptionId;

		VoteForPoll(pollId, pollOptionId);

		res.status(200).json({ name: "Voted" });
	}
	else {
		res.status(200).json({ name: "Reaching!!!" });
	}
}
