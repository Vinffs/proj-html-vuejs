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
      price: "$19.99 monthly",
      features: ["5 Projects", "5 GB Storage", "Unlimited Users"],
      active: false,
    },
    {
      title: "Premium",
      price: "$29.99 monthly",
      features: ["10 Projects", "15 GB Storage", "Unlimited Users"],
      active: false,
    },
    {
      title: "Professional",
      price: "$39.99 monthly",
      features: ["15 Projects", "30 GB Storage", "Unlimited Users"],
      active: true,
    },
    {
      title: "Extreme",
      price: "$59.99 monthly",
      features: ["Unlimited Projects", "Unlimited Storage", "Unlimited Users"],
      active: false,
    },
  ],
});
