const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="bg-white border-t border-[#E3E8EF] pt-20 pb-10 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#0199a6]/30 to-transparent"></div>
    
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#02306c]/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0199a6]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            <div class="lg:col-span-4">
                <a href="index.html" class="inline-flex items-center mb-6">
                    <img src="./docs/assets/logo.png" alt="Auditra Compliance" class="h-16 w-auto">
                </a>
                <p class="text-sm text-[#5B6472] leading-relaxed max-w-sm mb-6">
                    Standardized dietary compliance for multi-facility long-term care organizations. Identify risks earlier and strengthen survey readiness across every building.
                </p>
                <div class="flex items-center gap-3">
                    <a href="#" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-[#F7F9FB] border border-[#E3E8EF] flex items-center justify-center text-[#02306c] hover:bg-[#02306c] hover:text-white hover:border-[#02306c] transition-all duration-300">
                        <i class="fa-brands fa-linkedin-in text-sm"></i>
                    </a>
                    <a href="#" aria-label="Twitter" class="w-10 h-10 rounded-full bg-[#F7F9FB] border border-[#E3E8EF] flex items-center justify-center text-[#02306c] hover:bg-[#02306c] hover:text-white hover:border-[#02306c] transition-all duration-300">
                        <i class="fa-brands fa-x-twitter text-sm"></i>
                    </a>
                    <a href="#" aria-label="YouTube" class="w-10 h-10 rounded-full bg-[#F7F9FB] border border-[#E3E8EF] flex items-center justify-center text-[#02306c] hover:bg-[#02306c] hover:text-white hover:border-[#02306c] transition-all duration-300">
                        <i class="fa-brands fa-youtube text-sm"></i>
                    </a>
                </div>
            </div>

            <div class="lg:col-span-2">
                <h4 class="font-display text-xs font-bold tracking-[0.15em] uppercase text-[#02306c] mb-5">Product</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="features.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Features</a></li>
                    <li><a href="pricing.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Pricing</a></li>
                    <li><a href="demo.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Demo</a></li>
                    <li><a href="resources.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Resources</a></li>
                </ul>
            </div>

            <div class="lg:col-span-2">
                <h4 class="font-display text-xs font-bold tracking-[0.15em] uppercase text-[#02306c] mb-5">Company</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="about.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">About Us</a></li>
                    <li><a href="contact.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Contact</a></li>
                    <li><a href="demo.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Schedule Demo</a></li>
                </ul>
            </div>

            <div class="lg:col-span-4">
                <h4 class="font-display text-xs font-bold tracking-[0.15em] uppercase text-[#02306c] mb-5">Stay Updated</h4>
                <p class="text-sm text-[#5B6472] mb-4">Get the latest compliance insights and Auditra updates.</p>
                <form id="newsletterForm" class="flex flex-col sm:flex-row gap-2 mb-6">
                    <input type="email" name="email" required placeholder="Enter your email" class="w-full px-4 py-3 rounded-full bg-[#F7F9FB] border border-[#E3E8EF] text-sm text-[#1A2233] placeholder-[#5B6472]/60 focus:outline-none focus:ring-2 focus:ring-[#0199a6]/30 focus:border-[#0199a6] transition-all" />
                    <button type="submit" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#02306c] text-white text-sm font-semibold whitespace-nowrap hover:bg-[#01224f] transition-colors duration-300 shadow-sm">
                        Subscribe
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </form>
                
                <div class="space-y-2 text-sm text-[#5B6472]">
                    <a href="mailto:info@auditra.com" class="flex items-center gap-3 hover:text-[#02306c] transition-colors">
                        <i class="fa-solid fa-envelope text-[#0199a6] w-4"></i>
                        info@auditra.com
                    </a>
                    <a href="tel:+11234567890" class="flex items-center gap-3 hover:text-[#02306c] transition-colors">
                        <i class="fa-solid fa-phone text-[#0199a6] w-4"></i>
                        +1 (123) 456-7890
                    </a>
                </div>
            </div>
        </div>

        <div class="pt-8 border-t border-[#E3E8EF] flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-xs text-[#5B6472]">© 2024 Auditra Compliance. All rights reserved.</p>
            <span class="text-xs text-[#5B6472]">Trusted compliance support for multi facility care teams.</span>
        </div>
    </div>
</footer>
`;

const newsletterToast = document.createElement("div");
newsletterToast.id = "newsletterToast";
newsletterToast.className = "fixed bottom-5 right-5 z-[95] hidden w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-[#E3E8EF] bg-white px-4 py-3 shadow-2xl shadow-black/10";
newsletterToast.innerHTML = `
    <div class="flex items-start gap-3">
        <div id="newsletterToastIcon" class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0199a6]/10 text-[#0199a6]">
            <i class="fa-solid fa-circle-check text-sm"></i>
        </div>
        <div class="min-w-0 flex-1">
            <p id="newsletterToastTitle" class="text-sm font-semibold text-[#02306c]">Subscribed</p>
            <p id="newsletterToastMessage" class="text-sm text-[#5B6472]">We’ve sent your email to our team.</p>
        </div>
        <button id="newsletterToastClose" type="button" class="text-[#5B6472] hover:text-[#02306c]">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
`;
document.body.appendChild(newsletterToast);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletterForm");
    const toast = document.getElementById("newsletterToast");
    const toastIcon = document.getElementById("newsletterToastIcon");
    const toastTitle = document.getElementById("newsletterToastTitle");
    const toastMessage = document.getElementById("newsletterToastMessage");
    const toastClose = document.getElementById("newsletterToastClose");
    const submitBtn = form?.querySelector('button[type="submit"]');

    let toastTimer;

    const showToast = ({ success, title, message }) => {
        if (!toast || !toastIcon || !toastTitle || !toastMessage) return;
        clearTimeout(toastTimer);
        toastIcon.className = success
            ? "mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0199a6]/10 text-[#0199a6]"
            : "mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#C6423C]/10 text-[#C6423C]";
        toastIcon.innerHTML = success
            ? '<i class="fa-solid fa-circle-check text-sm"></i>'
            : '<i class="fa-solid fa-triangle-exclamation text-sm"></i>';
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toast.classList.remove("hidden");
        toast.classList.add("block");
        toastTimer = setTimeout(() => {
            toast.classList.add("hidden");
            toast.classList.remove("block");
        }, 4000);
    };

    const hideToast = () => {
        if (!toast) return;
        clearTimeout(toastTimer);
        toast.classList.add("hidden");
        toast.classList.remove("block");
    };

    toastClose?.addEventListener("click", hideToast);

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput?.value.trim() || "";

        if (!email) {
            showToast({
                success: false,
                title: "Email required",
                message: "Please enter your email address first.",
            });
            emailInput?.focus();
            return;
        }

        const originalText = submitBtn?.textContent || "Subscribe";
        if (submitBtn) {
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
        }

        try {
            const formData = new FormData(form);
            formData.append("access_key", "dbe1bb90-8c61-41bb-a6c9-bc9402f89506");
            formData.append("subject", "Newsletter signup from Auditra footer");
            formData.append("from_name", "Auditra Website");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                form.reset();
                showToast({
                    success: true,
                    title: "Subscribed",
                    message: "Thanks. Your email has been shared with our team.",
                });
            } else {
                showToast({
                    success: false,
                    title: "Could not subscribe",
                    message: data?.message || "Please try again in a moment.",
                });
            }
        } catch (error) {
            showToast({
                success: false,
                title: "Something went wrong",
                message: "Please try again in a moment.",
            });
        } finally {
            if (submitBtn) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    });
});


