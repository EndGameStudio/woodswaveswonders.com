import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f8a5a8f3-ab0b-425d-a9d5-2f73ee77177d", // Get this from tina.io
  token: "735dbe749940c41c1ebcde8eac0c81e2ecc33aef", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "dist",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "src",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "object",
            name: "colors",
            label: "colors",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "primary",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_shade",
                label: "primary-shade",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_glare",
                label: "primary-glare",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "highlight",
                label: "highlight",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "light",
                label: "light",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "mid",
                label: "mid",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "dark",
                label: "dark",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "slate",
                label: "slate",
                ui: {
                  component: "color",
                },
              },
            ],
          },
          {
            type: "object",
            name: "fonts",
            label: "fonts",
            fields: [
              {
                type: "string",
                name: "base",
                label: "base",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "serif",
                label: "serif",
              },
            ],
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "src/posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
        ],
      },
    ],
  },
});
