const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000 * 2
);

import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
export const profileUser = {
  id: 11,
  avatar: "/images/avatar/avatar-2.jpg",
  fullName: "Mr. Bean",
  bio: "UX/UI Designer",
  role: "admin",
  about:
    "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  status: "online",
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false,
  },
  date: "10 am",
};

export const contacts = [
  {
    id: 1,
    fullName: "p24 administrator",
    role: "Frontend Developer",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "online",
    unreadmessage: 0,
    date: "10:37 am",
  },
  {
    id: 2,
    fullName: "Zinhle",
    role: "UI/UX Designer",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "online",
    unreadmessage: 1,
    date: "27 Aug",
  },
  {
    id: 3,
    fullName: "Siphiwe",
    role: "Town planner",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "busy",
    unreadmessage: 1,
    date: "26 Aug",
  },
  {
    id: 4,
    fullName: "Kyle",
    role: "Data scientist",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "online",
    unreadmessage: 2,
    date: "24 Aug",
  },
  {
    id: 5,
    fullName: "Peter Finch",
    role: "Dietitian",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "busy",
    unreadmessage: 0,
    date: "23 Aug",
  },
  {
    id: 6,
    fullName: "James Manenzhe",
    role: "Marketing executive",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "online",
    unreadmessage: 2,
    date: "20 Aug",
  },
  {
    id: 7,
    fullName: "Khezo Mukwevho",
    role: "Special educational needs teacher",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "online",
    unreadmessage: 0,
    date: "16 Aug",
  },
  {
    id: 8,
    fullName: "Themba Zulu",
    role: "Advertising copywriter",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "away",
    unreadmessage: 0,
    date: "15 Aug",
  },
  {
    id: 9,
    fullName: "Mayenziwe",
    role: "Designer, television/film set",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "offline",
    unreadmessage: 0,
    date: "13 Aug",
  },
  {
    id: 10,
    fullName: "Zenia Jacobs",
    role: "Building surveyor",
    about:
      "New lead has been generated for the following ...",
    avatar: "/images/avatar/user1.png",
    status: "away",
    unreadmessage: 1,
    date: "10 Aug",
  },
];

export const chats = [
  {
    id: 1,
    userId: 1,
    unseenMsgs: 0,
    chat: [
      {
        message: "Hi",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Hello. How can I help You?",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "Can I get details of my last transaction I made last month?",
        time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "We need to check if we can provide you such information.",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "I will inform you as I get update on this.",
        time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "If it takes long you can mail me at my mail address.",
        time: dayBeforePreviousDay,
        senderId: 11,
        replayMetadata: false,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    unseenMsgs: 1,
    chat: [
      {
        message: "How can we help? We're here for you!",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message:
          "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
        time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It should be Bootstrap 5 compatible.",
        time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Absolutely!",
        time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Modern admin is the responsive bootstrap 5 admin template.!",
        time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Looks clean and fresh UI.",
        time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It's perfect for my next project.",
        time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "How can I purchase it?",
        time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Thanks, from ThemeForest.",
        time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "I will purchase it for sure. 👍",
        time: previousDay,
        senderId: 1,
        replayMetadata: false,
      },
    ],
  },
];
