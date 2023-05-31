import commonFields from "../fields/common"

const dialysisCenters = {
  format: "md",
  label: "Dialysis Centers",
  name: "dialysisCenters",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "dialysis-centers",
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
export default dialysisCenters
