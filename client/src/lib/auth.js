import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins";

const globalForMongo = globalThis;
const mongoUri = process.env.MONGODB_URI;
const authSecret = process.env.BETTER_AUTH_API_KEY;
const baseURL = (
  process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL
)?.replace(/\/$/, "");
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!mongoUri) {
  throw new Error("MONGODB_URI is required for Better Auth.");
}

if (!authSecret) {
  throw new Error("BETTER_AUTH_API_KEY is required for Better Auth.");
}

if (!baseURL) {
  throw new Error("BETTER_AUTH_URL is required for Better Auth.");
}

if (!googleClientId || !googleClientSecret) {
  throw new Error(
    "GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are required for Google sign-in.",
  );
}

const mongoClient =
  globalForMongo.__wanderlastMongoClient || new MongoClient(mongoUri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.__wanderlastMongoClient = mongoClient;
}

const db = mongoClient.db(process.env.MONGODB_DB || "wanderlast");
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
  secret: authSecret,
  baseURL,
  basePath: "/api/auth",
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
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      overrideUserInfoOnSignIn: true,
    },
  },
  plugins: [jwt(), nextCookies()],
});
