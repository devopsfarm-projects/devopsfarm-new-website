import { MongoClient, type Collection } from "mongodb";

export type Enrollment = {
  course: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  createdAt: Date;
};

// Lazy connection: nothing connects (or throws) until a request actually needs the DB.
const globalForMongo = globalThis as unknown as { _enrollMongo?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not set");
  if (!globalForMongo._enrollMongo) {
    globalForMongo._enrollMongo = new MongoClient(uri).connect();
  }
  return globalForMongo._enrollMongo;
}

export async function getEnrollments(): Promise<Collection<Enrollment>> {
  const client = await getClient();
  return client.db(process.env.MONGO_DB || "devopsfarm").collection<Enrollment>("enrollments");
}
