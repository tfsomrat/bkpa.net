const button = {
  name: "button",
  label: "button",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "label",
      label: "button label",
      type: "string",
      required: true,
    },
    {
      name: "link",
      label: "button link",
      type: "string",
      required: true,
    },
  ],
};

export default button;
