require('dotenv').config()
const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    text VARCHAR ( 255 ),
    added VARCHAR ( 255 )
);

INSERT INTO messages (username, text, added) VALUES
    ('Tywin', 'The Lion doesn''t concern himself with the opinion of the sheep.', '2026-02-21T03:28:56.131Z'),
    ('Eddard', 'Winter is coming.', '2026-02-21T05:24:54.297Z'),
    ('Tony', 'I, am, Ironman.', '2026-02-23T20:39:30.099Z'),
    ('Steve', 'I can do this all day.', '2026-02-25T22:09:11.911Z');
`

async function main() {
    console.log('seeding...')
    const client = new Client({
        connectionString: process.env.DB_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Finished seeding db')
}

main()