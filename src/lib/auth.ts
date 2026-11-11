import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins"


const client = new MongoClient(process.env.BETTER_AUTH_CONNECTION_URI as string);
const db = client.db('sport-nest');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
   plugins: [
        jwt(), 
        
    ],
    session : {
      cookieCache : {
        enabled : true,
        strategy : "jwt",
        maxAge : 7 * 24 * 60 * 60
      }
          
        }
});