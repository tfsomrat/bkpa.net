import { defineConfig } from "tinacms";
import about from "./collections/about";
import author from "./collections/author";
import bloodBanks from "./collections/bloodBanks";
import contact from "./collections/contact";
import dialysisCenters from "./collections/dialysisCenters";
import emergencyContacts from "./collections/emergencyContacts";
import faq from "./collections/faq";
import homepage from "./collections/homepage";
import hospitals from "./collections/hospitals";
import nephrologyDoctors from "./collections/nephrologyDoctors";
import post from "./collections/post";
import urologyDoctors from "./collections/urologyDoctors";
import vascularSurgeons from "./collections/vascularSurgeons";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch:
    process.env.TINA_BRANCH || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main", // default branch
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  search: {
    tina: {
      indexerToken: "process.env.TINA_SEARCH_TOKEN",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      homepage,
      author,
      post,
      emergencyContacts,
      about,
      bloodBanks,
      dialysisCenters,
      hospitals,
      nephrologyDoctors,
      urologyDoctors,
      vascularSurgeons,
      faq,
      contact,
    ],
  },
});
