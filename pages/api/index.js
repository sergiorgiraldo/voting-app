import { InsertPoll, UpdatePoll } from "../../components/poll";

export default function handler(req, res) {
	if (req.method == "POST") {
		const data = JSON.parse(req.body);

		const pollId = data.pollId;
		const pollOptionId = data.pollOptionId;

		UpdatePoll(pollId, pollOptionId);

		res.status(200).json({ name: "Voted" });
	} else if (req.method == "PUT") {
		const data = JSON.parse(req.body);

		const description = data.description;
		const options = data.options;

		InsertPoll(description, options);

		res.status(200).json({ name: "Inserted" });
	} else {
		res.status(200).json({ name: "Reaching!!!" });
	}
}
