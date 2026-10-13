import { useState } from "react";

import {
  FaArrowRight,
  FaCheck,
  FaClipboardCheck,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
  FaRegCopy,
  FaShieldAlt,
} from "react-icons/fa";

import Container from "../../components/layout/Container";
import { CONTACT_DATA } from "./ContactData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    contactPreference: "Email",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.contactInfo[0].value);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary-container/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-secondary/10
            blur-[130px]
          "
        />
      </div>

      <Container>
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mb-16">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/30
              bg-primary/10
              px-4
              py-2
              text-sm
              font-medium
              text-primary
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-primary
                shadow-[0_0_10px_rgba(242,202,80,0.8)]
                animate-pulse
              "
            />

            {CONTACT_DATA.badge}
          </div>

          <h2
            className="
              mt-6
              font-serif
              text-4xl
              font-bold
              leading-tight
              text-on-surface
              sm:text-5xl
              lg:text-6xl
            "
          >
            {CONTACT_DATA.title}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-on-surface-variant
              md:text-lg
            "
          >
            {CONTACT_DATA.description}
          </p>
        </div>

        {/* =================================================
            MAIN CONTACT INTERFACE
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-primary/20
            bg-surface-container/70
            shadow-2xl
            backdrop-blur-xl
          "
        >
          <div className="grid lg:grid-cols-[0.8fr_1.5fr]">
            {/* =================================================
                LEFT INFORMATION PANEL
            ================================================== */}

            <aside
              className="
                relative
                overflow-hidden
                border-b
                border-primary/10
                bg-black/10
                p-7
                md:p-10
                lg:border-b-0
                lg:border-r
                lg:p-12
              "
            >
              {/* Decorative circle */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  border
                  border-primary/10
                "
              />

              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-48
                  w-48
                  rounded-full
                  border
                  border-primary/10
                "
              />

              <div className="relative">
                {/* Availability */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    px-4
                    py-3
                  "
                >
                  <span className="relative flex h-3 w-3">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-primary
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        bg-primary
                      "
                    />
                  </span>

                  <span className="text-sm font-medium text-primary">
                    {CONTACT_DATA.availability.status}
                  </span>
                </div>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-relaxed
                    text-on-surface-variant
                  "
                >
                  {CONTACT_DATA.availability.description}
                </p>

                {/* Divider */}

                <div
                  className="
                    my-8
                    h-px
                    bg-gradient-to-r
                    from-primary/30
                    via-outline-variant/20
                    to-transparent
                  "
                />

                {/* Contact information */}

                <div className="space-y-5">
                  {CONTACT_DATA.contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-primary/20
                            bg-primary/10
                            text-primary
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-primary
                            group-hover:text-on-primary
                          "
                        >
                          <Icon />
                        </div>

                        <div className="min-w-0">
                          <p
                            className="
                              text-xs
                              uppercase
                              tracking-widest
                              text-on-surface-variant
                            "
                          >
                            {item.label}
                          </p>

                          {item.id === "email" ? (
                            <div className="mt-1 flex items-center gap-2">
                              <a
                                href={item.href}
                                className="
                                  truncate
                                  text-sm
                                  font-medium
                                  text-on-surface
                                  transition-colors
                                  hover:text-primary
                                "
                              >
                                {item.value}
                              </a>

                              <button
                                type="button"
                                onClick={copyEmail}
                                className="
                                  shrink-0
                                  text-on-surface-variant
                                  transition-colors
                                  hover:text-primary
                                "
                                title="Copy email"
                              >
                                {copied ? <FaCheck /> : <FaRegCopy />}
                              </button>
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className="
                                mt-1
                                block
                                text-sm
                                font-medium
                                text-on-surface
                                transition-colors
                                hover:text-primary
                              "
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social */}

                <div className="mt-10">
                  <p
                    className="
                      mb-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-on-surface-variant
                    "
                  >
                    Find me online
                  </p>

                  <div className="flex gap-3">
                    {CONTACT_DATA.socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-outline-variant/30
                              bg-background/40
                              text-on-surface-variant
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:border-primary/40
                              hover:bg-primary
                              hover:text-on-primary
                              hover:shadow-lg
                              hover:shadow-primary/20
                            "
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Trust */}

                <div
                  className="
                    mt-10
                    rounded-2xl
                    border
                    border-primary/10
                    bg-primary/[0.03]
                    p-5
                  "
                >
                  <div className="flex gap-3">
                    <FaShieldAlt
                      className="
                        mt-0.5
                        shrink-0
                        text-primary
                      "
                    />

                    <div>
                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-on-surface
                        "
                      >
                        Professional Communication
                      </h4>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-relaxed
                          text-on-surface-variant
                        "
                      >
                        Your project information is used only to understand your
                        requirements and discuss the next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* =================================================
                PROJECT INQUIRY FORM
            ================================================== */}

            <div className="p-7 md:p-10 lg:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Form heading */}

                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary
                          text-on-primary
                        "
                      >
                        <FaClipboardCheck />
                      </div>

                      <div>
                        <h3
                          className="
                            font-serif
                            text-2xl
                            font-bold
                            text-on-surface
                          "
                        >
                          Project Inquiry
                        </h3>

                        <p
                          className="
                            text-sm
                            text-on-surface-variant
                          "
                        >
                          Tell me about what you are building.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      BASIC INFORMATION
                  ================================================== */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <FormField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                    <FormField
                      label="Company / Organization"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Optional"
                    />

                    <SelectField
                      label="What do you need?"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      options={CONTACT_DATA.services}
                      placeholder="Select a service"
                      required
                    />
                  </div>

                  {/* =================================================
                      PROJECT DETAILS
                  ================================================== */}

                  <div>
                    <div className="mb-4">
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-primary
                        "
                      >
                        Project Details
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-on-surface-variant
                        "
                      >
                        A few details help me understand the scope before our
                        first conversation.
                      </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                      <SelectField
                        label="Project Type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        options={CONTACT_DATA.projectTypes}
                        placeholder="Choose type"
                      />

                      <SelectField
                        label="Estimated Budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={CONTACT_DATA.budgets}
                        placeholder="Choose range"
                      />

                      <SelectField
                        label="Expected Timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        options={CONTACT_DATA.timelines}
                        placeholder="Choose timeline"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="message"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-on-surface
                      "
                    >
                      Project Brief
                      <span className="ml-1 text-primary">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="
                        Tell me about your idea, current system,
                        main requirements, technical challenges,
                        or the problem you want to solve...
                      "
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-outline-variant/40
                        bg-background/50
                        px-5
                        py-4
                        text-sm
                        text-on-surface
                        outline-none
                        placeholder:text-on-surface-variant/40
                        transition-all
                        duration-300
                        focus:border-primary/60
                        focus:bg-primary/[0.03]
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />
                  </div>

                  {/* =================================================
                      CONTACT PREFERENCE
                  ================================================== */}

                  <div>
                    <p
                      className="
                        mb-3
                        text-sm
                        font-medium
                        text-on-surface
                      "
                    >
                      Preferred contact method
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {["Email", "Phone", "WhatsApp"].map((method) => {
                        const active = formData.contactPreference === method;

                        return (
                          <button
                            key={method}
                            type="button"
                            onClick={() =>
                              setFormData((previous) => ({
                                ...previous,
                                contactPreference: method,
                              }))
                            }
                            className={`
                              rounded-xl
                              border
                              px-4
                              py-2.5
                              text-sm
                              transition-all
                              duration-300

                              ${
                                active
                                  ? `
                                    border-primary
                                    bg-primary/10
                                    text-primary
                                  `
                                  : `
                                    border-outline-variant/30
                                    bg-background/30
                                    text-on-surface-variant
                                    hover:border-primary/30
                                    hover:text-primary
                                  `
                              }
                            `}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================== */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      border-t
                      border-outline-variant/20
                      pt-7
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <p
                      className="
                        max-w-sm
                        text-xs
                        leading-relaxed
                        text-on-surface-variant
                      "
                    >
                      By submitting this inquiry, you are simply starting a
                      project discussion. No commitment is required.
                    </p>

                    <button
                      type="submit"
                      className="
                        group
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-primary
                        px-7
                        py-3.5
                        font-semibold
                        text-on-primary
                        shadow-lg
                        shadow-primary/20
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-xl
                        hover:shadow-primary/30
                      "
                    >
                      Start a Conversation
                      <FaArrowRight
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </form>
              ) : (
                <SuccessState email={formData.email} />
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            border-primary/10
            bg-primary/[0.03]
            p-6
            text-center
            md:flex-row
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-sm
                font-medium
                text-on-surface
              "
            >
              Prefer a direct conversation?
            </p>

            <p
              className="
                mt-1
                text-xs
                text-on-surface-variant
              "
            >
              You can reach me directly through email or connect with me on
              LinkedIn.
            </p>
          </div>

          <a
            href="mailto:your-email@gmail.com"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/30
              px-5
              py-2.5
              text-sm
              font-medium
              text-primary
              transition-all
              duration-300
              hover:bg-primary
              hover:text-on-primary
            "
          >
            <FaEnvelope />
            Email Me
          </a>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-on-surface
        "
      >
        {label}

        {required && <span className="ml-1 text-primary">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-outline-variant/40
          bg-background/50
          px-4
          py-3.5
          text-sm
          text-on-surface
          outline-none
          placeholder:text-on-surface-variant/40
          transition-all
          duration-300
          focus:border-primary/60
          focus:bg-primary/[0.03]
          focus:ring-2
          focus:ring-primary/10
        "
      />
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-on-surface
        "
      >
        {label}

        {required && <span className="ml-1 text-primary">*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          appearance-none
          rounded-xl
          border
          border-outline-variant/40
          bg-background/50
          px-4
          py-3.5
          text-sm
          text-on-surface
          outline-none
          transition-all
          duration-300
          focus:border-primary/60
          focus:bg-primary/[0.03]
          focus:ring-2
          focus:ring-primary/10
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-background text-on-surface"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   SUCCESS STATE
========================================================= */

function SuccessState({ email }) {
  return (
    <div
      className="
        flex
        min-h-[650px]
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-primary/30
          bg-primary/10
          text-primary
          shadow-lg
          shadow-primary/10
        "
      >
        <FaPaperPlane className="text-2xl" />
      </div>

      <h3
        className="
          mt-7
          font-serif
          text-3xl
          font-bold
          text-on-surface
        "
      >
        Inquiry Received
      </h3>

      <p
        className="
          mt-4
          max-w-md
          text-sm
          leading-relaxed
          text-on-surface-variant
        "
      >
        Thank you for sharing your project details. I now have the information
        needed to understand the initial scope of your request.
      </p>

      {email && (
        <div
          className="
            mt-6
            rounded-xl
            border
            border-primary/15
            bg-primary/[0.03]
            px-5
            py-3
            text-sm
            text-primary
          "
        >
          {email}
        </div>
      )}

      <div
        className="
          mt-8
          flex
          items-center
          gap-2
          text-xs
          text-on-surface-variant
        "
      >
        <FaCheck className="text-primary" />
        Thanks for reaching out.
      </div>
    </div>
  );
}
