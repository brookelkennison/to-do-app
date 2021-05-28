import connectToDatabase from '../../util/mongodb';

export default async function todos(req, res) {
    const { db } = await connectToDatabase();

    if (req.method === 'POST') {
        db.collection('to-dos').insertOne(req.body);
        client.close();

    } else if (req.method === 'DELETE') {
      console.log(req.body)
      console.log(res)
      db.collection('to-dos').findOneAndDelete(req.body);

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
