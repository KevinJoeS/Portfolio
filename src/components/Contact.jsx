import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone,
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { MdSend, MdCheckCircle } from 'react-icons/md';
import { fadeIn, staggerContainer } from '../utils/animations';
import emailjs from "@emailjs/browser";

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/KevinJoeS', label: 'GitHub', color: 'hover:text-white' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/kevinjoes', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FaEnvelope, href: 'mailto:kevinjoe@email.com', label: 'kevinjoe@email.com', color: 'hover:text-cyan-400' },
  { icon: FaPhone, href: 'tel:+919894620565', label: '+91 9894620565', color: 'hover:text-emerald-400' },
];

function Field({ id, label, type = "text", rows, value, error, onChange }) {
  const inputClassName = `w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-white/25 focus:outline-none transition-colors ${
    error
      ? "border-red-400/60 focus:border-red-400"
      : "border-white/10 focus:border-blue-400/60 focus:bg-white/8"
  }`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-white/60 mb-2 tracking-wide"
      >
        {label}
      </label>

      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          className={`${inputClassName} resize-none`}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          className={inputClassName}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      )}

      {error && (
        <p className="text-red-400 text-xs mt-1.5">{error}</p>
      )}
    </div>
  );
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const errs = validate();

  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setStatus("sending");

  try {
    await emailjs.send(
      "service_111206",
      "template_qj3grlp",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "rrwSs3OGnPI6NrdmE"
    );

    setStatus("sent");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message.");
    setStatus("idle");
  }
};

  const handleFieldChange = (id, value) => {
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">Get in touch</motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.1)} className="mt-4 text-white/50 max-w-lg mx-auto text-sm">
            I&apos;m currently open to internship opportunities and collaborations. Feel free to reach out — I&apos;ll get back to you promptly.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-display font-semibold text-white mb-6">Find me on</h3>
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-3.5 rounded-xl glass-card smooth-card hover:-translate-y-1 hover:border-white/20 group ${color}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white/10 transition-colors">
                  <Icon size={16} />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-medium">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <AnimatePresence>
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4"
                  >
                    <MdCheckCircle className="text-emerald-400" size={30} />
                  </motion.div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name:'',email:'',subject:'',message:'' }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="name" label="Name" value={form.name} error={errors.name} onChange={handleFieldChange} />
                    <Field id="email" label="Email" type="email" value={form.email} error={errors.email} onChange={handleFieldChange} />
                  </div>
                  <Field id="subject" label="Subject" value={form.subject} error={errors.subject} onChange={handleFieldChange} />
                  <Field id="message" label="Message" rows={5} value={form.message} error={errors.message} onChange={handleFieldChange} />

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm btn-glow disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <MdSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
