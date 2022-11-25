import fs from "fs";
import path from "path";
import _ from "lodash";

export function GetPolls() {
	const filePath = path.join(process.cwd(), "components/dummy.json");
	const jsonData = fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);
	return data.polls;
}

export function VoteForPoll(pollId, pollOptionId) {
	const data = GetPolls();
	let item = data
	.filter((p) => p.id == pollId)[0]
	.options.filter((o) => o.id == pollOptionId)[0];
	item.count += 1;
	
	let newData = `{"polls":${JSON.stringify(data)}}`;
	
	const filePath = path.join(process.cwd(), "components/dummy.json");
	fs.writeFileSync(filePath, newData);
}

export function InsertPoll(description, options) {
	const options_ = options.split("\n");
	
	const data = GetPolls();
	const nextId = parseInt(_.maxBy(data, 'id').id, 10) + 1;
	
	let arrOptions = [];
	for (let index = 0; index < options_.length; index++) {
		const element = {
			"id": index + 1,
			"option": options_[index],
			"count": 0
		};
		arrOptions.push(element);
	}
	
	const newPoll = {
		"id": nextId,
		"description": description,
		"status": "open",
		"options": arrOptions
	};
	data.push(newPoll);
	let newData = `{"polls": ${JSON.stringify(data)}}`;

	const filePath = path.join(process.cwd(), "components/dummy.json");
	fs.writeFileSync(filePath, newData);
}


export function UpdatePoll(id, description, status) {
	const data = GetPolls();
	let item = data.filter((p) => p.id == id)[0];
	item.description = description;
	item.status = status;

	const filePath = path.join(process.cwd(), "components/dummy.json");
	let newData = `{"polls": ${JSON.stringify(data)}}`;
	fs.writeFileSync(filePath, newData);
}
