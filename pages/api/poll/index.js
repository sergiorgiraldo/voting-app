import { InsertPoll, UpdatePoll } from "../../../components/poll";
import { connectDatabase, insertDocument } from "../../../lib/db-utils";

export default async function handler(req, res) {
	if (req.method == "POST") {
		const data = JSON.parse(req.body);
		const id = data.id;
		const description = data.description;
		const status = data.status;
		
		UpdatePoll(id, description, status);

		res.status(200).json({ name: "Updated" });
	} else if (req.method == "PUT") {
		const data = JSON.parse(req.body);

		const description = data.description;
		const options = data.options;

		InsertPoll(description, options);

		//database
		let client;

		const newPoll = {
			"description": description,
			"status": "open",
			"options": options
		};

		try {
			client = await connectDatabase();
			await insertDocument(client, "voting", newPoll);
		}
		catch (error) {
			console.log(error);
			return;
		}
		finally{
			client.close();
		}		

		res.status(200).json({ name: "Inserted" });
	} else {
		res.status(200).json({ name: "Reaching!!!" });
	}
}
