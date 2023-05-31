import commonFields from "../fields/common"

const urologyDoctors = {
  format: "md",
  label: "Urology Doctors",
  name: "urologyDoctors",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "urology-doctors",
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
export default urologyDoctors
