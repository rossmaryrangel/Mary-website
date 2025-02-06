import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
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
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "feature_image",
      label: "feature_image",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
  ] as TinaField[];
}
export function clientsFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "client_logos",
      label: "client_logos",
      list: true,
    },
  ] as TinaField[];
}
export function portfolioFields() {
  return [
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
      name: "type",
      label: "type",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "category",
      label: "category",
      list: true,
    },
    {
      type: "image",
      name: "project_images",
      label: "project_images",
      list: true,
    },
  ] as TinaField[];
}
export function teamFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "members",
      label: "members",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "designation",
          label: "designation",
        },
        {
          type: "string",
          name: "medium",
          label: "medium",
        },
        {
          type: "string",
          name: "linkedIn",
          label: "linkedIn",
        },
        {
          type: "string",
          name: "instagram",
          label: "instagram",
        },
      ],
    },
  ] as TinaField[];
}
export function testimonialFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "object",
      name: "testimonial_item",
      label: "testimonial_item",
      list: true,
      fields: [
        {
          type: "image",
          name: "thumb",
          label: "thumb",
        },
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "company_position",
          label: "company_position",
        },
        {
          type: "string",
          name: "quote",
          label: "quote",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
