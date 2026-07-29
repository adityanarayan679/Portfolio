import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiLoader } from "react-icons/fi"
import { personalInfo } from "../data"

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)
    const res = await fetch("https://formspree.io/f/xpqvbgjg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    setSending(false)
    if (res.ok) {
      setToast("success")
      form.reset()
      setTimeout(() => setToast(null), 4000)
    } else {
      setToast("error")
      setTimeout(() => setToast(null), 4000)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto bg-white dark:bg-[#0a0505]">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          Get In <span className="text-crimson">Touch</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-gold rounded-full mb-10 origin-left"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Have a project in mind or want to work together? Send me a message and I'll get back to you.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-4"
            >
              <motion.a
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                href={"mailto:" + personalInfo.email}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gold transition-colors">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                href={"tel:" + personalInfo.phone}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gold transition-colors">{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.div
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{personalInfo.location}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base relative">
            <AnimatePresence>
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className={"absolute top-4 left-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium z-10 " + (toast === "success" ? "bgcrimson text-white" : "bg-gold text-white")}
                >
                  {toast === "success" ? <FiCheck className="w-4 h-4" /> : null}
                  {toast === "success" ? "Message sent! I'll get back to you soon." : "Something went wrong. Please try again."}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0505] text-gray-900 dark:text-white text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0505] text-gray-900 dark:text-white text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0505] text-gray-900 dark:text-white text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/30 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-3 rounded-md bggold text-white font-semibold text-sm tracking-wide hover:scale-[1.02] hover:glow-gold-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiSend className="w-4 h-4" />}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}