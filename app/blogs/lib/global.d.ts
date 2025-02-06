// global.d.ts
import { MongoClient } from "mongodb";

declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}

// This is necessary to make TypeScript treat this file as a module
export {};