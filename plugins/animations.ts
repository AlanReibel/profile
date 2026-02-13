import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate-on-scroll", {
    mounted(el) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("is-visible");
              observer.unobserve(el); // Only animate once
            }
          });
        },
        { threshold: 0.1 },
      );
      observer.observe(el);
    },
  });
});
