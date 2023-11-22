import { reactive } from "vue";

export const store = reactive({
  navbar: [
    {
      title: "Home",
      ref: "#",
      active: true,
      button: false,
    },
    {
      title: "Who We Are",
      ref: "#",
      active: false,
      button: false,
    },
    {
      title: "What We Do",
      ref: "#",
      active: false,
      button: false,
    },
    {
      title: "Where We Work",
      ref: "#",
      active: false,
      button: false,
    },
    {
      title: "Carrers",
      ref: "#",
      active: false,
      button: true,
    },
    {
      title: "News",
      ref: "#",
      active: false,
      button: false,
    },
  ],
  introduction: [
    {
      icon: "fa-road",
      title: "Establish Goals",
      text: "Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligua euismod odio, vel dictum mi risus a mi.",
    },
    {
      icon: "fa-video",
      title: "Work With a Team",
      text: "Cras semper auctor aliquam. Sed porta sed lacus sit amet consectetur. Lorem ipsum dolor sit amet, consectetur adipiscin.",
    },
    {
      icon: "fa-droplet",
      title: "Get Results",
      text: "Vestibulum scelerisque egestas lectus sit amet molestie. Donec consectetur cursus est sed blandit. Nunc sed risus lacus.",
    },
  ],
  services: [
    {
      icon: "fa-brands fa-google",
      title: "Google SEO",
      text: "Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.",
      ref: "#",
    },
    {
      icon: "fa-solid fa-gear",
      title: "Brand Strategy",
      text: "Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.",
      ref: "#",
    },
    {
      icon: "fa-regular fa-building",
      title: "Local SEO",
      text: "Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.",
      ref: "#",
    },
    {
      icon: "fa-solid fa-chart-column",
      title: "SEO Analysis",
      text: "Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.",
      ref: "#",
    },
  ],
  ourWork: [
    {
      path: "-3-1-",
      ref: "#",
      name: "computer-desk",
    },
    {
      path: "-2-",
      ref: "#",
      name: "smartphone",
    },
    {
      path: "-1-1-",
      ref: "#",
      name: "computer",
    },
    {
      path: "-4-1-",
      ref: "#",
      name: "graph",
    },
    {
      path: "-5-1-",
      ref: "#",
      name: "monitor-graph",
    },
    {
      path: "-6-1-",
      ref: "#",
      name: "dashboard",
    },
  ],
  ourPlans: [
    {
      title: "Standard",
      currency: "$",
      price: "19",
      decimals: "99",
      subscription: "monthly",
      features: ["5 Projects", "5 GB Storage", "Unlimited Users"],
      active: false,
    },
    {
      title: "Premium",
      currency: "$",
      price: "29",
      decimals: "99",
      subscription: "monthly",
      features: ["10 Projects", "15 GB Storage", "Unlimited Users"],
      active: false,
    },
    {
      title: "Professional",
      currency: "$",
      price: "39",
      decimals: "99",
      subscription: "monthly",
      features: ["15 Projects", "30 GB Storage", "Unlimited Users"],
      active: true,
    },
    {
      title: "Extreme",
      currency: "$",
      price: "59",
      decimals: "99",
      subscription: "monthly",
      features: ["Unlimited Projects", "Unlimited Storage", "Unlimited Users"],
      active: false,
    },
  ],
  ourNews: [
    {
      path: "/images/related-service-2-320x202.jpg",
      title: "Why You Need A SEO Agency Now",
      date: "November 1st, 2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit.",
    },
    {
      path: "/images/related-service-4-320x202.jpg",
      title: "SEO Tips For Your Startup",
      date: "November 1st, 2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit.",
    },
    {
      path: "/images/blog-post-6-320x202.jpg",
      title: "Image Optimization For Your Site",
      date: "November 1st, 2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit.",
    },
  ],
  reviews: [
    {
      image: "/images/testimonials-2.jpg",
      text: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
      name: "Luis Desalvo",
      company: "CREO TECH",
    },
    {
      image: "/images/testimonials-1.jpg",
      text: "Beauty is when you can appreciate yourself. When you love yourself, that's when you're most beautiful.",
      name: "Shelia McCourtney",
      company: "ARCHITECT",
    },
  ],
  clients: [
    {
      name: "avada-agency",
      path: "/images/clients_partner_1-200x202.png",
      ref: "#",
    },
    {
      name: "avada-law",
      path: "/images/clients_partner_2-200x202.png",
      ref: "#",
    },
    {
      name: "avada-vet",
      path: "/images/clients_partner_3-200x202.png",
      ref: "#",
    },
    {
      name: "avada-health",
      path: "/images/clients_partner_4-200x202.png",
      ref: "#",
    },
    {
      name: "avada",
      path: "/images/clients_partner_5-200x202.png",
      ref: "#",
    },
    {
      name: "avada-university",
      path: "/images/clients_partner_6-200x202.png",
      ref: "#",
    },
  ],
  info: [
    {
      symbol: true,
      name: "Copyright 2012-2020",
      company: "",
    },
    {
      symbol: false,
      name: "Avada Theme by",
      company: "ThemeFusion",
    },
    {
      symbol: false,
      name: "All Rights Reserved",
      company: "",
    },
    {
      symbol: false,
      name: "Powered by",
      company: "WordPress",
    },
  ],
  socials: [
    {
      icon: "fa-facebook-f",
      ref: "#",
    },
    {
      icon: "fa-instagram",
      ref: "#",
    },
    {
      icon: "fa-twitter",
      ref: "#",
    },
    {
      icon: "fa-youtube",
      ref: "#",
    },
  ],
});
