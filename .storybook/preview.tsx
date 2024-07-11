import type { Preview } from "@storybook/react";
import React from "react";

import { HttpResponse, http } from "msw";
import { initialize } from "msw-storybook-addon";
import Layout from "../app/layout.tsx";
import { getItem, postIds } from "../lib/data.mock.ts";

initialize({ onUnhandledRequest: "warn" });

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://hacker-news.firebaseio.com/v0/topstories.json", () =>
          HttpResponse.json(postIds())
        ),
        http.get<{ id: string }>(
          "https://hacker-news.firebaseio.com/v0/item/:id.json",
          ({ params }) => HttpResponse.json(getItem(parseInt(params.id, 10)))
        ),
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};

export default preview;
