const homepage = {
  format: "md",
  label: "Homepage",
  name: "homepage",
  path: "content",
  frontmatterFormat: "yaml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "_index",
  },
  fields: [
    {
      type: 'object',
      name: 'banner',
      label: 'Banner',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'image',
          label: 'Image'
        },
        {
          type: 'string',
          name: 'color',
          label: 'Color'
        },
        {
          type: 'string',
          name: 'content',
          label: 'Content',
          component: 'textarea'
        },
      ]
    },
    {
      type: 'object',
      name: 'notice',
      label: 'Notice',
      fields: [
        {
          type: 'boolean',
          name: 'enable',
          label: 'Enable'
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'content',
          label: 'Content',
          component: 'textarea'
        },
      ]
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
export default homepage
