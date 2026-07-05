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
                    <li><a href="#" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Careers</a></li>
                    <li><a href="demo.html" class="text-[#5B6472] hover:text-[#0199a6] transition-colors duration-200">Schedule Demo</a></li>
                </ul>
            </div>

            <div class="lg:col-span-4">
                <h4 class="font-display text-xs font-bold tracking-[0.15em] uppercase text-[#02306c] mb-5">Stay Updated</h4>
                <p class="text-sm text-[#5B6472] mb-4">Get the latest compliance insights and Auditra updates.</p>
                <form class="flex flex-col sm:flex-row gap-2 mb-6">
                    <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 rounded-full bg-[#F7F9FB] border border-[#E3E8EF] text-sm text-[#1A2233] placeholder-[#5B6472]/60 focus:outline-none focus:ring-2 focus:ring-[#0199a6]/30 focus:border-[#0199a6] transition-all" />
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
            <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <a href="privacy-policy.html" class="text-xs text-[#5B6472] hover:text-[#02306c] transition-colors">Privacy Policy</a>
                <a href="terms-of-service.html" class="text-xs text-[#5B6472] hover:text-[#02306c] transition-colors">Terms of Service</a>
                <a href="cookie-policy.html" class="text-xs text-[#5B6472] hover:text-[#02306c] transition-colors">Cookie Policy</a>
                <a href="accessibility-statement.html" class="text-xs text-[#5B6472] hover:text-[#02306c] transition-colors">Accessibility Statement</a>
            </div>
        </div>
    </div>
</footer>
`;


