import { defineConfig } from "tinacms";

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

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    // Configure TinaCMS to store media in static/images
    tina: {
      mediaRoot: "images", // Root directory for media within publicFolder
      publicFolder: "static", // Hugo's static assets folder
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "agenda",
        label: "Agenda",
        path: "content/agenda",
        match: {
          exclude: "**/_index", // Exclude _index files
        },
        format: "md", // Specify format
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
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Time",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight (for ordering)",
            description: "Lower numbers appear first",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "projets",
        label: "Projets",
        path: "content/projets",
        match: {
          exclude: "**/_index", // Exclude _index files
        },
        format: "md", // Specify format
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
            name: "type",
            label: "Type",
            options: ["projets"],
          },
          {
            type: "number",
            name: "weight",
            label: "Weight (for ordering)",
            description: "Lower numbers appear first",
          },
          {
            type: "image",
            name: "image",
            label: "Main Image",
          },
          {
            type: "string",
            name: "category",
            label: "Categories",
            list: true,
          },
          {
            type: "image",
            name: "project_images",
            label: "Project Images",
            list: true,
          },
          {
            type: "string",
            name: "project_videos",
            label: "Project Videos",
            description: "YouTube/Vimeo embed URLs",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "enseignement",
        label: "Enseignement",
        path: "content/enseignement",
        match: {
          exclude: "**/_index", // Exclude _index files
        },
        format: "md", // Specify format
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
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "image",
            name: "project_images",
            label: "Project Images",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "biographie", // Unique name for the collection
        label: "Biographie", // Label shown in the TinaCMS UI
        path: "content/about", // Path to the directory
        format: "md", // File format
        match: {
          // Only include the _index file in this collection
          include: "_index",
        },
        ui: {
          // Prevent users from creating or deleting this page
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title", // Usually used for SEO/metadata
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heading",
            label: "Heading", // The main heading displayed on the page
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content", // The main content of the page
            isBody: true,
          },
          // Add other fields from your content/about/_index.md if needed
        ],
      },
    ],
  },
});
