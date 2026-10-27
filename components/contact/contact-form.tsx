"use client";

import { useState } from "react";
import { CONTACT_REASONS } from "@/data/contact";
import { ContactFormData } from "@/types/contact";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.reason) {
      setError("Please select a reason for contact.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        reason: "",
        message: ""
      });
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-[2.5rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(16,16,20,0.06)] sm:p-12">
      {success ? (
        <div className="py-12 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={36} />
          </div>

          <h3 className="mt-6 font-display text-4xl">Message Delivered</h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
            Thank you for reaching out. Your message has been received by our
            administration team and we will respond to you shortly.
          </p>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-8 inline-flex rounded-full bg-[#101014] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white transition-all hover:bg-[#29292e]"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
              Inquiry Form
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl">
              Send us a message
            </h2>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
            />
          </div>

          {/* Email & Phone Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="585-210-5038"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>
          </div>

          {/* Reason for Contact */}
          <div>
            <label
              htmlFor="reason"
              className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
            >
              Reason for Contact *
            </label>
            <div className="relative mt-2">
              <select
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full appearance-none rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] focus:border-[#101014] focus:outline-none"
              >
                <option value="" disabled>
                  Select a reason...
                </option>
                {CONTACT_REASONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-mono text-xs text-black/40">
                ▼
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Write your message or prayer request here..."
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full resize-y rounded-2xl border border-black/15 bg-white p-5 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#101014] px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:bg-[#29292e] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}