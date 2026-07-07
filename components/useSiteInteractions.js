"use client";

import { useEffect } from "react";

export function useSiteInteractions() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const megaItems = Array.from(document.querySelectorAll(".mega-item"));
    let closeTimer;

    const setMegaState = (item, isOpen) => {
      item.classList.toggle("is-active", isOpen);
      item
        .querySelector(".mega-trigger")
        ?.setAttribute("aria-expanded", String(isOpen));
    };

    const closeAllMegas = () => {
      megaItems.forEach((item) => setMegaState(item, false));
    };

    const openMega = (item) => {
      window.clearTimeout(closeTimer);
      megaItems.forEach((entry) => setMegaState(entry, entry === item));
    };

    const scheduleCloseMega = (item) => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => setMegaState(item, false), 180);
    };

    const updateHeader = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const onNavToggleClick = () => {
      const isOpen = nav?.classList.toggle("is-open");
      navToggle?.setAttribute("aria-expanded", String(Boolean(isOpen)));
      if (!isOpen) {
        closeAllMegas();
      }
    };
    navToggle?.addEventListener("click", onNavToggleClick);

    const navLinks = Array.from(nav?.querySelectorAll("a") || []);
    const onNavLinkClick = () => {
      nav?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      closeAllMegas();
    };
    navLinks.forEach((link) => link.addEventListener("click", onNavLinkClick));

    const triggerHandlers = [];
    megaItems.forEach((item) => {
      const trigger = item.querySelector(".mega-trigger");
      const panel = item.querySelector(".mega-panel");
      const onClick = () => {
        const willOpen = !item.classList.contains("is-active");
        closeAllMegas();
        if (willOpen) {
          setMegaState(item, true);
        }
      };
      const onEnter = () => openMega(item);
      const onLeave = () => scheduleCloseMega(item);
      trigger?.addEventListener("click", onClick);
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      panel?.addEventListener("mouseenter", onEnter);
      panel?.addEventListener("mouseleave", onLeave);
      triggerHandlers.push({ item, panel, trigger, onClick, onEnter, onLeave });
    });

    const onDocumentClick = (event) => {
      if (!event.target.closest(".site-header")) {
        closeAllMegas();
      }
    };
    document.addEventListener("click", onDocumentClick);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.clearTimeout(closeTimer);
      window.removeEventListener("scroll", updateHeader);
      navToggle?.removeEventListener("click", onNavToggleClick);
      navLinks.forEach((link) => link.removeEventListener("click", onNavLinkClick));
      triggerHandlers.forEach(({ item, panel, trigger, onClick, onEnter, onLeave }) => {
        trigger?.removeEventListener("click", onClick);
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
        panel?.removeEventListener("mouseenter", onEnter);
        panel?.removeEventListener("mouseleave", onLeave);
      });
      document.removeEventListener("click", onDocumentClick);
      observer.disconnect();
    };
  }, []);
}
