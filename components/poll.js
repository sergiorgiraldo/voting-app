import fs from "fs"; 
import path from "path";

export function GetPolls(){
    const filePath = path.join(process.cwd(), "components/dummy.json"); 
	const jsonData = fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);  
    return data.polls;  
}

export function UpdatePoll(pollId, pollOptionId){
    console.log("pollId->" + pollId);
    console.log("pollOptionId->" + pollOptionId);
} 
