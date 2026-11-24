import {
  AppWindow,
  BarChart3,
  CalendarCheck,
  Headset,
  Megaphone,
  MonitorSmartphone,
  PhoneCall,
  Settings,
  Smartphone,
  Trophy,
  Users,
  FileCheck2,
  type LucideIcon,
  Server,
  Cloud,
  Share2,
} from "lucide-react";

export const SITE = {
  name: "Vantriqsolutions",
  domain: "Vantriqsolutions.com",
  email: "hello@vantriqsolutions.com",
  phone: "+92 310 8322013",
  address: "Lahore, Pakistan",
};

export type Tint = "blue" | "orange" | "teal" | "pink" | "violet" | "amber";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tint: Tint;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Modern, fast and scalable websites tailored to your business needs.",
    icon: MonitorSmartphone,
    tint: "blue",
    points: ["Custom business websites", "E-commerce stores", "Landing pages that convert"],
  },
  {
    title: "Appointment Booking",
    description: "We help you book more appointments and keep your calendar full.",
    icon: CalendarCheck,
    tint: "orange",
    points: ["Dedicated booking agents", "Calendar management", "Follow-up & reminders"],
  },
  {
    title: "Cold Calling",
    description: "Professional cold calling services to connect you with potential clients.",
    icon: PhoneCall,
    tint: "teal",
    points: ["Trained native-level callers", "Custom call scripts", "Daily call reports"],
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on Google, get more traffic and grow organically.",
    icon: BarChart3,
    tint: "pink",
    points: ["Technical & on-page SEO", "Local SEO", "Content & link building"],
  },
  {
    title: "Lead Generation",
    description: "Targeted lead generation strategies to bring you quality leads.",
    icon: Users,
    tint: "violet",
    points: ["B2B & B2C prospect lists", "Email outreach", "Qualified lead handoff"],
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that deliver real results.",
    icon: Megaphone,
    tint: "teal",
    points: ["Social media management", "Paid campaigns", "Performance reporting"],
  },
  {
    title: "App Development",
    description: "Custom mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    tint: "amber",
    points: ["iOS & Android apps", "Cross-platform builds", "App store launch"],
  },
  {
    title: "IT Support",
    description: "Reliable IT support to keep your business running smoothly.",
    icon: Settings,
    tint: "blue",
    points: ["24/7 helpdesk", "Hosting & maintenance", "Security monitoring"],
  },
  {
    title: "Back end developer",
    description:
      "Build powerful, scalable, and secure server-side applications to power your business.",
    icon: Server,
    tint: "pink",
    points: [
      "API development & integration",
      "Database management",
      "Server-side logic & security",
    ],
  },
  {
    title: "Mobile apps",
    description:
      "Create seamless mobile experiences with feature-rich applications for Android and iOS.",
    icon: Smartphone,
    tint: "teal",
    points: [
      "Android & iOS development",
      "Cross-platform applications",
      "App maintenance & optimization",
    ],
  },
  {
    title: "Cloud infrastructure",
    description:
      "Deploy and manage reliable cloud environments that keep your applications scalable and accessible.",
    icon: Cloud,
    tint: "blue",
    points: [
      "Cloud deployment & management",
      "Server configuration & scaling",
      "Monitoring, backup & security",
    ],
  },
  {
    title: "Social media marketing",
    description:
      "Grow your online presence and connect with your audience through strategic social media campaigns.",
    icon: Share2,
    tint: "orange",
    points: [
      "Social media strategy",
      "Content creation & scheduling",
      "Audience engagement & analytics",
    ],
  },
];

export const TINT_CLASSES: Record<Tint, string> = {
  blue: "bg-tint-blue-soft text-tint-blue",
  orange: "bg-tint-orange-soft text-tint-orange",
  teal: "bg-tint-teal-soft text-tint-teal",
  pink: "bg-tint-pink-soft text-tint-pink",
  violet: "bg-tint-violet-soft text-tint-violet",
  amber: "bg-tint-amber-soft text-tint-amber",
};

export const HERO_STATS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "1200+", label: "Projects Done", icon: FileCheck2 },
  { value: "8+", label: "Years Experience", icon: Trophy },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Goal Mapping",
    text: "We understand your goals and business needs.",
  },
  {
    step: "02",
    title: "Building Your Foundation",
    text: "We create a tailored strategy and roadmap.",
  },
  {
    step: "03",
    title: "Reaching the Right People",
    text: "We connect you with your ideal audience.",
  },
  {
    step: "04",
    title: "Booking Qualified Meetings",
    text: "We fill your calendar with real opportunities.",
  },
  {
    step: "05",
    title: "Dedicated Customer Care",
    text: "We support you and your clients every step of the way.",
  },
  {
    step: "06",
    title: "Refining & Scaling Results",
    text: "We optimize and grow your results long-term.",
  },
];

export const WHY_POINTS = [
  "Hands-Off Lead Generation",
  "Tailored Web & SEO Solutions",
  "Consistent Calendar Bookings",
  "Responsive Client Care",
];

export const TESTIMONIALS = [
  {
    quote:
      "Vantriqsolutions built our website and helped us generate quality leads. Excellent service and support throughout!",
    name: "Ali Khan",
    role: "CEO, TechTrade",
    avatar: "ali" as const,
  },
  {
    quote:
      "The team is professional, responsive and truly cares about our success. Our appointments have increased significantly.",
    name: "Sarah Ahmed",
    role: "Marketing Manager, GlowEsthetics",
    avatar: "sarah" as const,
  },
  {
    quote:
      "Great experience! They handle our SEO and cold calling, and we've seen real growth in just a few months.",
    name: "Usman Raza",
    role: "Founder, BuildPro",
    avatar: "usman" as const,
  },
];

export const CASE_STUDIES = [
  {
    client: "TechTrade",
    industry: "B2B Distribution",
    service: "Lead Generation",
    title: "Building a predictable B2B sales pipeline",
    result: "3.4x",
    resultLabel: "more qualified leads",
    icon: Users,
  },
  {
    client: "GlowEsthetics",
    industry: "Beauty Clinic",
    service: "Appointment Booking",
    title: "Filling a clinic calendar every single week",
    result: "+180%",
    resultLabel: "monthly appointments",
    icon: CalendarCheck,
  },
  {
    client: "BuildPro",
    industry: "Construction",
    service: "SEO Optimization",
    title: "From page 5 to the top of local search",
    result: "+320%",
    resultLabel: "organic traffic",
    icon: BarChart3,
  },
  {
    client: "FreshCart",
    industry: "E-commerce",
    service: "Web Development",
    title: "A faster store that sells more",
    result: "2.1x",
    resultLabel: "online sales",
    icon: AppWindow,
  },
  {
    client: "SolarNest",
    industry: "Renewable Energy",
    service: "Cold Calling",
    title: "Opening doors with outbound calling",
    result: "640",
    resultLabel: "booked site surveys",
    icon: Headset,
  },
  {
    client: "MediPlus",
    industry: "Healthcare",
    service: "App Development",
    title: "A patient app with 4.8★ ratings",
    result: "25k+",
    resultLabel: "app downloads",
    icon: Smartphone,
  },
];

export const PLANS = [
  {
    name: "Starter",
    price: "$499",
    period: "one-time",
    description: "For small businesses getting online.",
    features: [
      "5-page business website",
      "Mobile-friendly design",
      "Basic on-page SEO",
      "1 month support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$999",
    period: "per month",
    description: "For businesses ready to scale their sales.",
    features: [
      "SEO optimization",
      "Lead generation campaigns",
      "Appointment booking agent",
      "Monthly performance report",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored plan",
    description: "Full IT and sales team for larger companies.",
    features: [
      "Dedicated cold calling team",
      "Custom web & app development",
      "Full digital marketing",
      "24/7 IT support",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;
