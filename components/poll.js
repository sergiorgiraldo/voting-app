import fs from "fs"; 
import path from "path";

export function GetPolls(){
    const filePath = path.join(process.cwd(), "components/dummy.json"); 
	const jsonData = fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);  
    return data.polls;  
}

export function UpdatePoll(pollId, pollOptionId){
	const data = GetPolls();  
    let item = data
        .filter((p) => p.id == pollId)[0]
        .options.filter((o) => o.id == pollOptionId)[0];
    item.count += 1

    let newData = `{"polls":${JSON.stringify(data)}}`;

    const filePath = path.join(process.cwd(), "components/dummy.json"); 
    fs.writeFileSync(filePath, newData);
} 
