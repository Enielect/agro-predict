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
