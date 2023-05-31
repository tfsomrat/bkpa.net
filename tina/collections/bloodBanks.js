import commonFields from "../fields/common"

const bloodBanks = {
  format: "md",
  label: "Blood Banks",
  name: "bloodBanks",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "blood-banks",
  },
  fields: [
    ...commonFields,
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ],
}
export default bloodBanks
