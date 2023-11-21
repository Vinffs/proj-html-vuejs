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
});
