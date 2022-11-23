import { UpdatePoll } from "../../components/poll";

export default function handler(req, res) {
	if (req.method == "POST") {
		const data = JSON.parse(req.body);

		const pollId = data.pollId;
		const pollOptionId = data.pollOptionId;
		
		UpdatePoll(pollId, pollOptionId);
	}
	res.status(200).json({ name: "Reaching!!!" });
}
