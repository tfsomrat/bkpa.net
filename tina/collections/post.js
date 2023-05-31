const post = {
  format: "md",
  label: "Posts",
  name: "posts",
  path: "content/posts",
  frontmatterFormat: "yaml",
  match: {
    include: "**/*",
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
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "image",
      label: "image",
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
export default post
