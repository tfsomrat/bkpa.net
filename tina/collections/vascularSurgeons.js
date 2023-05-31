import commonFields from "../fields/common"

const vascularSurgeons = {
  format: "md",
  label: "Vascular Surgeons",
  name: "vascularSurgeons",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "vascular-surgeons",
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
export default vascularSurgeons
