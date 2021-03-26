import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input!' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;
        const uri =
            'mongodb+srv://hoapha1009:bb8WsPeh4AMCiH3o@cluster0.lgqzx.mongodb.net/my-site?retryWrites=true&w=majority';

        try {
            client = await MongoClient.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db();

        try {
            const rs = await db.collection('messages').insertOne(newMessage);
            newMessage.id = rs.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });
            return;
        }

        client.close();

        res.status(201).json({
            message: 'Successfully stored message',
            message: newMessage,
        });
    }
}
export default handler;
