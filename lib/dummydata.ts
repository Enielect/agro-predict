export interface notificationDataType {
  date: string;
  items: {
      title: string;
      message: string;
      time: string;
      isRead: boolean;
  }[];
}


export const notificationData: notificationDataType[] = [
  {
    date: "Today",
    items: [
      {
        title: "Update Successful",
        message: "You have successfully updated your profile.",
        time: "5 mins",
        isRead: false,
      },
      {
        title: "Upgraded to Basic",
        message: "You have successfully upgraded your profile.",
        time: "10:49am",
        isRead: true,
      },
      {
        title: "Free Plan Expiration",
        message: "Your free plan will expire soon.",
        time: "10:49am",
        isRead: true,
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        title: "Update Successful",
        message: "You have successfully updated your profile.",
        time: "10:49am",
        isRead: true,
      },
      {
        title: "Upgraded to Basic",
        message: "You have successfully upgraded your profile.",
        time: "10:49am",
        isRead: true,
      },
      {
        title: "Free Plan Expiration",
        message: "Your free plan will expire soon.",
        time: "10:49am",
        isRead: true,
      },
      {
        title: "Free Plan Expiration",
        message: "Your free plan will expire soon.",
        time: "10:49am",
        isRead: true,
      },
    ],
  },
];



export const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

