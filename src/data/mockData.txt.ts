export interface User {
  id: string;
  name: string;
  age: number;
  profession: string;
  bio: string;
  photos: string[];
  interests: string[];
  distance: number; // in km
  isOnline: boolean;
  isVerified: boolean;
  lastActive: string;
  status?: "active" | "offline";
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export const USERS: User[] = [
  {
    id: "1",
    name: "Mari",
    age: 26,
    profession: "Art Director",
    bio: "Looking for someone to share creative ideas with. Love galleries, wine, and late night walks.",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
    ],
    interests: ["Art", "Design", "Wine", "Travel"],
    distance: 24,
    isOnline: true,
    isVerified: true,
    lastActive: "Now",
    status: "active"
  },
  {
    id: "2",
    name: "Nika",
    age: 24,
    profession: "UX Designer",
    bio: "Digital nomad currently exploring the city. Let's grab coffee.",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80"
    ],
    interests: ["UI/UX", "Coffee", "Yoga"],
    distance: 2,
    isOnline: true,
    isVerified: true,
    lastActive: "5 min ago",
    status: "active"
  },
  {
    id: "3",
    name: "Alex",
    age: 29,
    profession: "Software Engineer",
    bio: "Tech enthusiast, coffee lover, and weekend hiker.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    ],
    interests: ["Coding", "Hiking", "Sci-Fi"],
    distance: 12,
    isOnline: false,
    isVerified: true,
    lastActive: "2 hours ago",
    status: "offline"
  },
  {
    id: "4",
    name: "Sophia",
    age: 22,
    profession: "Student",
    bio: "Psychology major. Love reading and cats.",
    photos: [
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=400&q=80"
    ],
    interests: ["Psychology", "Books", "Cats"],
    distance: 5,
    isOnline: true,
    isVerified: false,
    lastActive: "Now",
    status: "active"
  },
  {
    id: "5",
    name: "James",
    age: 31,
    profession: "Architect",
    bio: "Building dreams. Looking for my foundation.",
    photos: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"],
    interests: ["Architecture", "Travel", "Photography"],
    distance: 8,
    isOnline: true,
    isVerified: true,
    lastActive: "Now",
    status: "active"
  },
  {
    id: "6",
    name: "Elena",
    age: 27,
    profession: "Marketing",
    bio: "Always on the go. Catch me if you can.",
    photos: ["https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80"],
    interests: ["Marketing", "Running", "Food"],
    distance: 15,
    isOnline: false,
    isVerified: true,
    lastActive: "1 day ago",
    status: "offline"
  },
  {
    id: "7",
    name: "Daniel",
    age: 25,
    profession: "Photographer",
    bio: "Capturing moments. Let's verify our chemistry.",
    photos: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"],
    interests: ["Photography", "Music", "Cinema"],
    distance: 3,
    isOnline: true,
    isVerified: true,
    lastActive: "Now",
    status: "active"
  },
   {
    id: "8",
    name: "Olivia",
    age: 23,
    profession: "Dancer",
    bio: "Expressing myself through movement.",
    photos: ["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80"],
    interests: ["Dance", "Music", "Art"],
    distance: 6,
    isOnline: true,
    isVerified: true,
    lastActive: "Now",
    status: "active"
  }
];

export const MESSAGES: Message[] = [
  {
    id: "m1",
    senderId: "2",
    receiverId: "me",
    content: "Hi! I loved your photo at the gallery.",
    timestamp: "10:05 AM",
    isRead: true
  },
  {
    id: "m2",
    senderId: "me",
    receiverId: "2",
    content: "Thanks Nika! Which one was your favorite?",
    timestamp: "10:07 AM",
    isRead: true
  },
  {
    id: "m3",
    senderId: "2",
    receiverId: "me",
    content: "Definitely the abstract one.",
    timestamp: "10:10 AM",
    isRead: false
  },
  {
    id: "m4",
    senderId: "3",
    receiverId: "me",
    content: "Hey, are you into hiking?",
    timestamp: "Yesterday",
    isRead: true
  }
];

export const CHATS = [
    {
        user: USERS[1],
        lastMessage: "Definitely the abstract one.",
        timestamp: "10:10 AM",
        unread: 1
    },
    {
        user: USERS[2],
        lastMessage: "Hey, are you into hiking?",
        timestamp: "Yesterday",
        unread: 0
    },
     {
        user: USERS[4],
        lastMessage: "Nice to meet you!",
        timestamp: "Mon",
        unread: 0
    }
]

export const CURRENT_USER = {
  id: "me",
  name: "Captain",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
}
