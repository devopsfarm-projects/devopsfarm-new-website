import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use global variable to prevent multiple connections in dev
  if (!(global)._mongoClientPromise) {
    client = new MongoClient(MONGO_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new connection
  client = new MongoClient(MONGO_URI);
  clientPromise = client.connect();
}

export default clientPromise;



// import { MongoClient } from "mongodb";

// const MONGO_URI = process.env.MONGO_URI as string;

// if (!MONGO_URI) {
//   throw new Error("MONGO_URI is not defined in .env.local");
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   // Use global variable to prevent multiple connections in dev
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(MONGO_URI);
//     (global as any)._mongoClientPromise = client.connect();
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   // In production, create a new connection
//   client = new MongoClient(MONGO_URI);
//   clientPromise = client.connect();
// }

// export default clientPromise;
