import {
  Bike,
  CalendarCheck,
  CircleDot,
  CreditCard,
  Dumbbell,
  Goal,
  Headset,
  ShieldCheck,
  Volleyball,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type Sport = {
  name: string;
  players: string;
  icon: LucideIcon;
};

export type Facility = {
  id: number;
  name: string;
  location: string;
  sport: string;
  pricePerHour: number;
  rating: number;
  image: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

const unsplash = (id: string, width = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

export const popularSports: Sport[] = [
  { name: "Football", players: "12 venues", icon: Goal },
  { name: "Cricket", players: "8 venues", icon: CircleDot },
  { name: "Badminton", players: "15 venues", icon: Volleyball },
  { name: "Swimming", players: "6 venues", icon: Waves },
  { name: "Cycling", players: "4 venues", icon: Bike },
  { name: "Fitness", players: "20 venues", icon: Dumbbell },
];

export const featuredFacilities: Facility[] = [
  {
    id: 1,
    name: "Greenfield Football Arena",
    location: "Dhanmondi, Dhaka",
    sport: "Football",
    pricePerHour: 1200,
    rating: 4.8,
    image: unsplash("1489944440615-453fc2b6a9a9"),
  },
  {
    id: 2,
    name: "National Cricket Academy",
    location: "Mirpur, Dhaka",
    sport: "Cricket",
    pricePerHour: 1500,
    rating: 4.9,
    image: unsplash("1531415074968-036ba1b575da"),
  },
  {
    id: 3,
    name: "Prime Basketball Court",
    location: "Banani, Dhaka",
    sport: "Basketball",
    pricePerHour: 800,
    rating: 4.6,
    image: unsplash("1546519638-68e109498ffc"),
  },
  {
    id: 4,
    name: "Aqua Olympic Pool",
    location: "Gulshan, Dhaka",
    sport: "Swimming",
    pricePerHour: 1000,
    rating: 4.7,
    image: unsplash("1519315901367-f34ff9154487"),
  },
  {
    id: 5,
    name: "Ace Tennis Club",
    location: "Uttara, Dhaka",
    sport: "Tennis",
    pricePerHour: 900,
    rating: 4.5,
    image: unsplash("1622279457486-62dcc4a431d6"),
  },
  {
    id: 6,
    name: "IronWorks Fitness Center",
    location: "Chattogram",
    sport: "Fitness",
    pricePerHour: 700,
    rating: 4.6,
    image: unsplash("1534438327276-14e5300c3a48"),
  },
];

export const whyChooseUs: Feature[] = [
  {
    title: "Easy Online Booking",
    description:
      "Reserve your slot in seconds with real-time availability and instant confirmation.",
    icon: CalendarCheck,
  },
  {
    title: "Verified Facilities",
    description:
      "Every venue is personally inspected so you always get quality grounds and equipment.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payment",
    description:
      "Pay safely with bKash, cards, or cash on arrival — your money is always protected.",
    icon: CreditCard,
  },
  {
    title: "24/7 Support",
    description:
      "Our team is ready around the clock to help you reschedule or find the perfect venue.",
    icon: Headset,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "SportNest saved me hours of phone calls. I booked a futsal slot for our weekly match in under a minute, and the ground was exactly as pictured.",
    name: "Tanvir Ahmed",
    role: "Amateur Footballer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote:
      "The ratings and photos are honest, so we always know what to expect. Our badminton club books all three of our weekly courts through SportNest now.",
    name: "Nusrat Jahan",
    role: "Club Captain, Smashers BD",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote:
      "As a coach I book different venues every week. Having prices, locations, and availability in one place has made my job so much easier.",
    name: "Arif Mahmud",
    role: "Swimming Coach",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
  },
];

export const heroImage = unsplash("1461896836934-ffe607ba8211", 1600);
