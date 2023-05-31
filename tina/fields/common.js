const commonFields = [
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
    name: "contact_list",
    label: "List",
    list: true,
    fields: [
      {
        type: "string",
        name: "name",
        label: "Name",
      },
      {
        type: "string",
        name: "specialist",
        label: "Specialist",
      },
      {
        type: "string",
        name: "location",
        label: "Location",
      },
      {
        type: "string",
        name: "contact_details",
        label: "Contact Details",
        component: 'textarea',
      },
    ]
  },
]

export default commonFields