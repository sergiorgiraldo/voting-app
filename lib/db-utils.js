import { MongoClient } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://sa:sa@cluster0.v5uzasr.mongodb.net/?retryWrites=true&w=majority"
	);
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db("voting");

	await db.collection(collection).remove({});
	await db.collection(collection).insertOne(document);
}
	