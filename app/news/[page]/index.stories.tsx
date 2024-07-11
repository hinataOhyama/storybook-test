import type { Meta, StoryObj } from '@storybook/react';
import News from './page';
import { http, HttpResponse } from 'msw'

const meta = {
  title: 'app/News',
  component: News,
} satisfies Meta<typeof News>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: { params: { page: 1 } },
}

export const Mocked = {
  ...Home,
  parameters: {
    msw: {
      handlers: [
        http.get('https://hacker-news.firebaseio.com/v0/topstories.json', () => {
          return HttpResponse.json([1]);
        }),
        http.get('https://hacker-news.firebaseio.com/v0/item/1.json', () => {
          return HttpResponse.json({
            id: 1,
            time: Date.now(),
            user: 'shilman',
            url: 'http://storybook.js.org',
            title: 'Storybook + Next.js = ❤️',
            score: 999,
          });
        }),
      ],
    },
  },
};