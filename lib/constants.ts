export type EventItem = {
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    image: string;
};

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'Nairobi Tech Innovators Meetup',
    slug: 'nairobi-tech-innovators-meetup',
    location: 'iHub, Nairobi',
    date: 'March 12, 2026',
    time: '10:00 AM - 4:00 PM',
  },
  {
    image: '/images/event2.png',
    title: 'AI & Data Science Conference',
    slug: 'ai-data-science-conference',
    location: 'KICC, Nairobi',
    date: 'April 5, 2026',
    time: '9:00 AM - 6:00 PM',
  },
  {
    image: '/images/event3.png',
    title: 'Women in Tech Summit',
    slug: 'women-in-tech-summit',
    location: 'Strathmore University, Nairobi',
    date: 'May 20, 2026',
    time: '8:30 AM - 5:00 PM',
  },
  {
    image: '/images/event4.png',
    title: 'Blockchain & Fintech Expo',
    slug: 'blockchain-fintech-expo',
    location: 'Radisson Blu Hotel, Nairobi',
    date: 'June 15, 2026',
    time: '9:00 AM - 5:30 PM',
  },
  {
    image: '/images/event5.png',
    title: 'Nairobi DevFest',
    slug: 'nairobi-devfest',
    location: 'Safari Park Hotel, Nairobi',
    date: 'July 10, 2026',
    time: '10:00 AM - 6:00 PM',
  },
];