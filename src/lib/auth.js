import { betterAuth } from "better-auth";
import { dash } from "@better-auth/infra";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins";

const globalForMongo = globalThis;
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_DB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI or MONGO_DB_URI is required for Better Auth.");
}

const mongoClient =
  globalForMongo.__wanderlastMongoClient || new MongoClient(mongoUri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.__wanderlastMongoClient = mongoClient;
}

const db = mongoClient.db(process.env.MONGODB_DB || "wanderlast");
const baseURL = (
  process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL
)?.replace(/\/$/, "");

const trustedOrigins = [
  baseURL,
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3000",
  "http://localhost:3001",
].filter(Boolean);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: mongoClient,
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL,
  trustedOrigins,
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  account: {
    updateAccountOnSignIn: true,
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "email-password"],
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      overrideUserInfoOnSignIn: true,
    },
  },
  plugins: [
    dash({
      apiKey: process.env.BETTER_AUTH_API_KEY,
    }),
    jwt(),
    nextCookies(),
  ],
});
