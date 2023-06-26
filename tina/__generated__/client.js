import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd2dc861fc4132883be1888059046d6c281dd1284', queries });
export default client;
  