const contact = {
  format: "md",
  label: "Contact",
  name: "contact",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "contact",
  },
  fields: [
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
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
          label: "Name",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          component: 'textarea',
        },
      ]
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ],
}
export default contact
