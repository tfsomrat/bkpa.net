import commonFields from "../fields/common"

const nephrologyDoctors = {
  format: "md",
  label: "Nephrology Doctors",
  name: "nephrologyDoctors",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "nephrology-doctors",
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
export default nephrologyDoctors
