// tina/config.js
import { defineConfig } from "tinacms";

// tina/shortcodes/members.js
var members = {
  name: "members",
  label: "members",
  match: {
    start: "{{<",
    end: ">}}"
  },
  fields: []
};
var members_default = members;

// tina/collections/about.js
var about = {
  format: "md",
  label: "About",
  name: "about",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "about"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "image",
      name: "image",
      label: "Image"
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
      templates: [members_default]
    }
  ]
};
var about_default = about;

// tina/collections/author.js
var author = {
  format: "md",
  label: "Author",
  name: "author",
  path: "content/author",
  frontmatterFormat: "yaml",
  match: {
    include: "*",
    exclude: "_index"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "bio",
      label: "bio"
    },
    {
      type: "string",
      name: "phone",
      label: "phone"
    },
    {
      type: "string",
      name: "email",
      label: "email"
    },
    {
      type: "string",
      name: "address",
      label: "address"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var author_default = author;

// tina/fields/common.js
var commonFields = [
  {
    type: "boolean",
    name: "draft",
    label: "Draft"
  },
  {
    type: "string",
    name: "title",
    label: "Title"
  },
  {
    type: "string",
    name: "description",
    label: "Description"
  },
  {
    type: "string",
    name: "layout",
    label: "Layout"
  },
  {
    type: "object",
    name: "contact_list",
    label: "List",
    list: true,
    fields: [
      {
        type: "string",
        name: "name",
        label: "Name"
      },
      {
        type: "string",
        name: "specialist",
        label: "Specialist"
      },
      {
        type: "string",
        name: "location",
        label: "Location"
      },
      {
        type: "string",
        name: "contact_details",
        label: "Contact Details",
        component: "textarea"
      }
    ]
  }
];
var common_default = commonFields;

// tina/collections/bloodBanks.js
var bloodBanks = {
  format: "md",
  label: "Blood Banks",
  name: "bloodBanks",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "blood-banks"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var bloodBanks_default = bloodBanks;

// tina/collections/contact.js
var contact = {
  format: "md",
  label: "Contact",
  name: "contact",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "contact"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "string",
      name: "layout",
      label: "Layout"
    },
    {
      type: "object",
      name: "contact_items",
      label: "Contact Items",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name"
        },
        {
          type: "string",
          name: "icon",
          label: "Icon"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          component: "textarea"
        }
      ]
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var contact_default = contact;

// tina/collections/dialysisCenters.js
var dialysisCenters = {
  format: "md",
  label: "Dialysis Centers",
  name: "dialysisCenters",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "dialysis-centers"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var dialysisCenters_default = dialysisCenters;

// tina/collections/emergencyContacts.js
var emergencyContacts = {
  format: "md",
  label: "Emergency Contacts",
  name: "emergency_contacts",
  path: "content/emergency-contacts",
  frontmatterFormat: "yaml",
  match: {
    include: "*",
    exclude: "_index"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var emergencyContacts_default = emergencyContacts;

// tina/collections/faq.js
var faq = {
  format: "md",
  label: "FAQ",
  name: "faq",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "faq"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "layout",
      label: "Layout"
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var faq_default = faq;

// tina/collections/homepage.js
var homepage = {
  format: "md",
  label: "Homepage",
  name: "homepage",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "_index"
  },
  fields: [
    {
      type: "object",
      name: "banner",
      label: "Banner",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "string",
          name: "image",
          label: "Image"
        },
        {
          type: "string",
          name: "color",
          label: "Color"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          component: "textarea"
        }
      ]
    },
    {
      type: "object",
      name: "notice",
      label: "Notice",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable"
        },
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          component: "textarea"
        }
      ]
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var homepage_default = homepage;

// tina/collections/hospitals.js
var hospitals = {
  format: "md",
  label: "Hospitals",
  name: "hospitals",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "hospitals"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var hospitals_default = hospitals;

// tina/collections/nephrologyDoctors.js
var nephrologyDoctors = {
  format: "md",
  label: "Nephrology Doctors",
  name: "nephrologyDoctors",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "nephrology-doctors"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var nephrologyDoctors_default = nephrologyDoctors;

// tina/collections/post.js
var post = {
  format: "md",
  label: "Posts",
  name: "posts",
  path: "content/posts",
  frontmatterFormat: "yaml",
  match: {
    include: "**/*",
    exclude: "_index"
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "string",
      name: "description",
      label: "description"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var post_default = post;

// tina/collections/urologyDoctors.js
var urologyDoctors = {
  format: "md",
  label: "Urology Doctors",
  name: "urologyDoctors",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "urology-doctors"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var urologyDoctors_default = urologyDoctors;

// tina/collections/vascularSurgeons.js
var vascularSurgeons = {
  format: "md",
  label: "Vascular Surgeons",
  name: "vascularSurgeons",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "vascular-surgeons"
  },
  fields: [
    ...common_default,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true
    }
  ]
};
var vascularSurgeons_default = vascularSurgeons;

// tina/config.js
var config_default = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      homepage_default,
      author_default,
      post_default,
      emergencyContacts_default,
      about_default,
      bloodBanks_default,
      dialysisCenters_default,
      hospitals_default,
      nephrologyDoctors_default,
      urologyDoctors_default,
      vascularSurgeons_default,
      faq_default,
      contact_default
    ]
  }
});
export {
  config_default as default
};
