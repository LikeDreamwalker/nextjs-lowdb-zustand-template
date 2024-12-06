import { JSONFilePreset } from "lowdb/node";

const defaultData: { posts: string[] } = { posts: [] };
const db = await JSONFilePreset("./index.json", defaultData);
// Update db.json
await db.update(({ posts }) => posts.push("hello world"));

// Alternatively you can call db.write() explicitely later
// to write to db.json
db.data.posts.push("hello world");
await db.write();
export default db;
