import connectToDatabase from '../../util/mongodb';

export default async function todos(req, res) {
    const { db } = await connectToDatabase();
    if (req.method === 'POST') {
      console.log(req)
        db.collection('to-dos').insertOne(req.body);
        client.close();
    } else {
        const todo = await db
            .collection('to-dos')
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();
        res.json(todo);
    }
}
