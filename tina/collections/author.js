const author = {
  format: "md",
  label: "Author",
  name: "author",
  path: "content/author",
  frontmatterFormat: "yaml",
  match: {
    include: "*",
    exclude: "_index",
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
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "bio",
      label: "bio",
    },
    {
      type: "string",
      name: "phone",
      label: "phone",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "string",
      name: "address",
      label: "address",
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
export default author
