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

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch:
    process.env.TINA_BRANCH || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main", // default branch
  token: process.env.TINA_TOKEN,
  client: { skip: true },
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
      {
        format: "toml",
        label: "Configuration",
        name: "configuration",
        path: "config/_default",
        frontmatterFormat: "toml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "summaryLeangth",
            label: "summaryLeangth",
            type: "string",
          },
          {
            name: "googleAnalytics",
            label: "googleAnalytics",
            type: "string",
          },
        ],
      },
      {
        format: "toml",
        label: "Menu",
        name: "menu",
        path: "config/_default",
        frontmatterFormat: "toml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menus",
        },
        fields: [
          {
            name: "main",
            label: "Main Menu",
            type: "object",
            list: true,
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string",
              },
              {
                name: "url",
                label: "URL",
                type: "string",
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
              },
            ],
          },
        ],
      },
      {
        format: "toml",
        label: "Parameters",
        name: "parameters",
        path: "config/_default",
        frontmatterFormat: "toml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "params",
        },
        fields: [
          {
            name: "logo",
            label: "Logo",
            type: "image",
          },
          {
            name: "logo_white",
            label: "Logo White",
            type: "image",
          },
          {
            name: "logo_width",
            label: "Logo Width",
            type: "string",
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
        ],
      },
    ],
  },
});
