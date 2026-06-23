import  { useState } from "react";
import { motion } from "framer-motion";

const CONTACTS = [
    {
        name: "Email",
        handle: "kashifmehmoodtech17@gmail.com",
        href: "mailto:kashifmehmoodtech17@gmail.com",
        color: "#22d3ee",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                    d="M3 6.5L11.45 12.6c.33.24.77.24 1.1 0L21 6.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        handle: "+923443248489",
        href: "https://wa.me/923443248489",
        color: "#34d399",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.53 5.3L2 22l4.93-1.6a9.86 9.86 0 0 0 5.11 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.78 14.07c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.36.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.14.46.12.63-.05.17-.17.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.69-.17 1.37Z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        handle: "https://github.com/codewithkashif17",
        href: "https://github.com/codewithkashif17",
        color: "#e5e7eb",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.06-.01-1.92-2.78.51-3.5-.69-3.72-1.32-.13-.33-.68-1.35-1.16-1.62-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.76 2.68 1.26 3.33.96.1-.76.4-1.27.73-1.56-2.55-.29-5.21-1.31-5.21-5.81 0-1.28.45-2.34 1.18-3.16-.12-.3-.52-1.51.11-3.14 0 0 .96-.31 3.15 1.2a10.7 10.7 0 0 1 5.74 0c2.19-1.51 3.15-1.2 3.15-1.2.63 1.63.23 2.84.11 3.14.74.82 1.18 1.86 1.18 3.16 0 4.51-2.67 5.52-5.22 5.81.42.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.27 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        handle: "linkedin.com/in/kashif-mehmood-a47594397",
        href: "https://linkedin.com/in/kashif-mehmood-a47594397",
        color: "#38bdf8",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.75H5.67V18h2.67Zm-1.33-9.4a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08ZM18.33 18v-4.5c0-2.41-1.29-3.53-3.01-3.53-1.39 0-2.01.76-2.36 1.3v-1.12h-2.67c.04.78 0 8.35 0 8.35h2.67v-4.66c0-.25.02-.5.1-.68.21-.5.68-1.03 1.48-1.03 1.04 0 1.46.79 1.46 1.95V18h2.67Z" />
            </svg>
        ),
    },
    {
        name: "Twitter / X",
        handle: "@kamalikashi613",
        href: "https://twitter.com/kamalikashi613",
        color: "#f1f5f9",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M18.9 2H22l-7.2 8.2L23 22h-6.8l-5.3-6.9L4.9 22H2l7.7-8.8L1.5 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L8.6 4H6.6l9.9 16Z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        handle: "@codewithkashi",
        href: "https://instagram.com/codewithkashi",
        color: "#f472b6",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
            </svg>
        ),
    },
];

function ContactCard({ contact, i }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
            style={{
                boxShadow: hovered
                    ? `0 20px 40px -15px ${contact.color}33`
                    : "0 8px 24px -12px rgba(0,0,0,0.4)",
            }}
        >
            {/* Hover glow wash */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(160px circle at 20% 50%, ${contact.color}1a, transparent 70%)`,
                }}
            />

            <div
                className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-110"
                style={{ color: contact.color }}
            >
                {contact.icon}
            </div>

            <div className="relative z-10 flex flex-col overflow-hidden">
                <span className="text-sm font-semibold text-white">
                    {contact.name}
                </span>
                <span className="truncate text-xs text-white/45">
                    {contact.handle}
                </span>
            </div>

            <span
                aria-hidden
                className="relative z-10 ml-auto text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/70"
            >
                →
            </span>
        </motion.a>
    );
}

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative w-full bg-[#05050a] px-6 py-24 text-white md:py-32"
        >
            {/* Ambient backdrop glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 bottom-0 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-4xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center"
                >
                    
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Get In {" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
                        Open to freelance work, collaborations, and full-time
                        opportunities. Reach out on whichever platform works best for
                        you.
                    </p>
                </motion.div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {CONTACTS.map((contact, i) => (
                        <ContactCard key={contact.name} contact={contact} i={i} />
                    ))}
                </div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center text-xs text-white/30"
                >
                    Usually replies within 24 hours · Based in Kohat, Pakistan
                </motion.p>
            </div>
        </section>
    );
}