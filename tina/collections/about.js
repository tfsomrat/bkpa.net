const about = {
  format: "md",
  label: "About",
  name: "about",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "about",
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
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
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
export default about
