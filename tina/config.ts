import { defineConfig } from "tinacms";

import { blog_postFields } from "./templates";
import { clientsFields } from "./templates";
import { portfolioFields } from "./templates";
import { teamFields } from "./templates";
import { testimonialFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "yml",
        label: "Counter",
        name: "counter",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "counter",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Team",
        name: "team",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "team",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Clients",
        name: "clients",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "clients",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Testimonials",
        name: "testimonials",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonial",
        },
        fields: [
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
        ],
      },
      {
        format: "toml",
        label: "Configuration",
        name: "configuration",
        path: "/",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Enseignement",
        name: "enseignement",
        path: "content/enseignement",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
              type: "string", // Field type for text input
              name: "title", // Name of the frontmatter field (must match your frontmatter)
              label: "Title", // Label for the field in the CMS
              isTitle: true,  // Mark this as the title field
              required: true, // Make it a required field
          },
          {
              type: "datetime", // Field type for date and time
              name: "date",   // Name of the frontmatter field (must match)
              label: "Date",  // Label in the CMS
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Biographie",
        name: "biographie",
        path: "content/about",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "heading",
            label: "Heading",
          },
          {
            type: "rich-text",
            name: "body", //  This is now for the *main body* content
            label: "Main Content Body",
            description: "This is the main markdown body content that goes *below* the frontmatter",
            isBody: true, // isBody: true is correctly set on the main body field
          },
          {
            type: "string",
            name: "expertise_title",
            label: "Expertise Title",
          },
          {
            type: "string", // Use string type for items in expertise_sectors list
            name: "expertise_sectors",
            label: "Expertise Sectors",
            list: true, // This field is a list
          },
        ],
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "content/portfolio",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...portfolioFields(),
        ],
      },
    ],
  },
});
