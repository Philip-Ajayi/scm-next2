"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { GIVING_OPTIONS, PRESET_AMOUNTS } from "@/data/give";
import { GivingCategory } from "@/types/give";
import { CheckCircle2, Lock, Loader2, Sparkles, AlertCircle } from "lucide-react";

export function GiveForm() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const [category, setCategory] = useState<GivingCategory>("general");
  const [amount, setAmount] = useState<string>("100");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const activeOption =
    GIVING_OPTIONS.find((opt) => opt.id === category) || GIVING_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 1) {
      setError("Please specify an amount of at least $1.00 USD.");
      return;
    }

    if (!fullName.trim() || !email.trim()) {
      setError("Please provide both your full name and email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          fullName,
          email,
          amount: numAmount
        })
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not generate payment session.");
      }

      // Redirect donor directly to Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Success Notification Banner */}
      {status === "success" && (
        <div className="mb-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-950 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-emerald-600" />
            <div>
              <h3 className="font-display text-2xl font-bold">
                Thank You for Your Generous Gift!
              </h3>
              <p className="mt-1 text-sm text-emerald-800">
                Your payment was processed successfully. A confirmation receipt
                has been sent to your email. May the Lord enrich you in every way!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cancelled Banner */}
      {status === "cancelled" && (
        <div className="mb-10 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 text-amber-950 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="mt-0.5 shrink-0 text-amber-600" />
            <div>
              <h3 className="font-display text-2xl font-bold">
                Giving Session Cancelled
              </h3>
              <p className="mt-1 text-sm text-amber-800">
                No charges were made. You can adjust your donation or try again below whenever you are ready.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(16,16,20,0.06)] sm:p-12">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Step 1: Select Giving Option */}
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
              Step 01
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl">
              Select Your Giving Option
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {GIVING_OPTIONS.map((opt) => {
                const isSelected = category === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCategory(opt.id)}
                    className={`relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-[#101014] bg-[#101014] text-white shadow-lg"
                        : "border-black/10 bg-[#f7f7f5] text-black/70 hover:border-black/30"
                    }`}
                  >
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] ${
                        isSelected
                          ? "bg-white/15 text-white"
                          : "border border-black/10 bg-white text-black/60"
                      }`}
                    >
                      {opt.badge}
                    </span>

                    <div className="mt-4 font-display text-2xl font-normal leading-none sm:text-3xl">
                      {opt.title}
                    </div>

                    <div
                      className={`mt-2 text-xs leading-relaxed ${
                        isSelected ? "text-white/60" : "text-black/50"
                      }`}
                    >
                      {opt.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* About Offering Notice */}
            <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 text-sm leading-6 text-violet-950">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700">
                About Offering:
              </span>{" "}
              {activeOption.description}
            </div>
          </div>

          {/* Step 2: Amount (USD) */}
          <div className="border-t border-black/10 pt-8">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
              Step 02
            </div>
            <label
              htmlFor="amount-input"
              className="mt-1 block font-display text-3xl sm:text-4xl"
            >
              Amount (USD)
            </label>

            {/* Preset Buttons */}
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
              {PRESET_AMOUNTS.map((preset) => {
                const isSelected = amount === String(preset.value);
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setAmount(String(preset.value))}
                    className={`rounded-xl border py-3 font-mono text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? "border-[#101014] bg-[#101014] text-white"
                        : "border-black/10 bg-white text-black/70 hover:border-black/30"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            <div className="relative mt-4">
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 font-mono text-xl text-black/40">
                $
              </span>
              <input
                id="amount-input"
                type="number"
                min="1"
                step="any"
                placeholder="Enter custom amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full rounded-2xl border border-black/15 bg-white py-4 pl-11 pr-5 font-mono text-xl text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
              />
            </div>
          </div>

          {/* Step 3: Donor Details */}
          <div className="border-t border-black/10 pt-8">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
              Step 03
            </div>
            <h3 className="mt-1 font-display text-3xl sm:text-4xl">
              Donor Details
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#101014] placeholder:text-black/30 focus:border-[#101014] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit Action */}
          <div className="border-t border-black/10 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#101014] px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:bg-[#29292e] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Connecting to Stripe...</span>
                </>
              ) : (
                <>
                  <Lock size={14} className="text-white/60" />
                  <span>
                    Donate Now · ${parseFloat(amount || "0").toFixed(2)} USD
                  </span>
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
              <Lock size={11} />
              <span>Redirects securely to official Stripe Payment Portal</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}