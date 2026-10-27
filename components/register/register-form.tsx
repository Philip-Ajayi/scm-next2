"use client";

import { useState } from "react";
import { RegistrationFormData, RegistrationResponse } from "@/types/register";
import { CheckCircle2, Loader2, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

export function RegisterForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RegistrationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok && !data.alreadyRegistered) {
        throw new Error(data.error || "Failed to process registration.");
      }

      setResult(data);
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(16,16,20,0.06)] sm:p-12">
      {result ? (
        <div className="py-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={36} />
          </div>

          <span className="mt-6 inline-block rounded-full border border-emerald-500/25 bg-emerald-50 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-800">
            {result.alreadyRegistered ? "Already Registered" : "Registration Confirmed"}
          </span>

          <h3 className="mt-4 font-display text-4xl sm:text-5xl">
            {result.alreadyRegistered ? "You're on the list!" : "Welcome to Camp Meeting"}
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
            {result.message}
          </p>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 text-left">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
              Gathering Summary
            </div>
            <div className="mt-2 font-display text-2xl text-black">
              Supernatural Camp Meeting 2026
            </div>
            <div className="mt-1 text-xs text-black/60">
              Rochester Airport Marriott · 1890 W Ridge Rd, Rochester, NY
            </div>
            <div className="mt-1 text-xs text-black/60">
              Thursday, November 19th – Sunday, November 22nd
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setResult(null);
              setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: ""
              });
            }}
            className="mt-8 inline-flex rounded-full bg-[#101014] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-[#29292e]"
          >
            Register Another Attendee
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 pb-6">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
                Official Registration
              </div>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl">
                Attendee Details
              </h2>
            </div>

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-700">
              100% Free
            </span>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name Fields */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
              >
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Iyunade"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
              >
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Adebowale"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
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
                placeholder="iyunademadebowale@gmail.com"
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
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="317-531-6034"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>
          </div>

          {/* Address / Location */}
          <div>
            <label
              htmlFor="address"
              className="block font-mono text-[10px] uppercase tracking-[0.16em] text-black/60"
            >
              Residential or Church Address *
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="SCC NY or 1400 Lehigh Station Road, Rochester"
              value={formData.address}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
            />
          </div>

          {/* Terms Note */}
          <p className="text-xs text-black/50">
            By registering, you confirm attendance for the in-person gathering at
            Rochester Airport Marriott. Confirmation will be sent to your email.
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#101014] px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:bg-[#29292e] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Confirming Registration...</span>
              </>
            ) : (
              <>
                <span>Complete Free Registration</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}