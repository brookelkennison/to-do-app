import connectToDatabase from '../../util/mongodb';

export default async function (req, res) {
    const { db } = await connectToDatabase();
    await db.collection('to-dos').insertOne(req.body);
}
