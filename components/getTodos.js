export default async function getTodos() {
    const { db } = await connectToDatabase();
    const data = await db
        .collection("to-dos")
        .find()
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    JSON.parse(JSON.stringify(data))
    return data
}

