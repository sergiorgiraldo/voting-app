import fs from "fs"; 
import path from "path";

function GetPolls(){
    const filePath = path.join(process.cwd(), "components/dummy.json"); 
	const jsonData = fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);  
    return data.polls;  
}

export default GetPolls;