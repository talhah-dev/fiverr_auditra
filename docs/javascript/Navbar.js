const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id = "siteHeader" class="fixed inset-x-0 top-0 z-50" >
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-3 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center shrink-0">
          <img src="./docs/assets/logo.png" alt="Auditra" class="h-9 md:h-12 w-auto transition-all duration-300">
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center gap-6 lg:gap-8 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="features.html">Features</a></li>
            <li><a class="navLink transition" href="pricing.html">Pricing</a></li>
            <li><a class="navLink transition" href="demo.html">Demo</a></li>
            <li><a class="navLink transition" href="resources.html">Resources</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>
            <li><a class="navLink transition" href="contact.html">Contact</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-3 shrink-0">
          <a href="contact.html" id="ctaBtn" class="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0">
            Schedule Demo
          </a>
        </div>

        <button id="menuBtnMobile" type="button" aria-label="Open menu" aria-expanded="false" class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition active:scale-[0.98] md:hidden">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header >

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside id="menuPanel" class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto" aria-hidden="true">
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center">
        <img src="./docs/assets/logo.png" alt="Auditra" class="h-9 w-auto">
      </a>
      <button id="closeBtn" type="button" aria-label="Close menu" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#02306c]/5 text-[#02306c] transition hover:bg-[#02306c]/15 active:scale-[0.98]">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5">
      <nav class="mt-5">
        <ul class="space-y-2">
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="index.html">Home</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="features.html">Features</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="pricing.html">Pricing</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="demo.html">Demo</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="resources.html">Resources</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="about.html">About</a></li>
          <li><a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A2233] ring-1 ring-[#02306c]/15 hover:bg-[#02306c]/5 transition" href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="rounded-2xl border border-[#02306c]/15 bg-[#02306c]/5 p-4 mt-5">
        <p class="text-sm font-extrabold text-[#02306c]">Ready to get started?</p>
        <p class="mt-1 text-sm text-[#02306c]/70">Schedule a demo to see Auditra in action.</p>
        <a href="contact.html" class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0199a6] p-3 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#0199a6]/30">Schedule Demo</a>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
  `;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const ctaBtn = document.getElementById("ctaBtn");
const menuBtn = document.getElementById("menuBtnMobile");

const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-3 transition-all duration-300 bg-transparent border border-transparent shadow-none";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#02306c]/80 hover:text-[#02306c] transition"));
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-[#0199a6] shadow-lg shadow-[#0199a6]/20 transition hover:-translate-y-0.5 active:translate-y-0";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#02306c] transition hover:bg-[#02306c]/5 active:scale-[0.98] md:hidden";
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-300 bg-white/90 ring-1 ring-[#E3E8EF] shadow-lg shadow-[#02306c]/5 backdrop-blur";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#5B6472] hover:text-[#02306c] transition"));
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-[#0199a6] shadow-md shadow-[#0199a6]/30 transition hover:-translate-y-0.5 active:translate-y-0";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#02306c] ring-1 ring-[#02306c]/15 bg-[#02306c]/5 transition hover:bg-[#02306c]/15 active:scale-[0.98] md:hidden";
};

const applyNavState = () => {
  const atTop = window.scrollY <= 8;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
applyNavState();

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

setMenuClosed(true);