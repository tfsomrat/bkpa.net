const emergencyContacts = {
  format: "md",
  label: "Emergency Contacts",
  name: "emergency_contacts",
  path: "content/emergency-contacts",
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
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ],
}
export default emergencyContacts
