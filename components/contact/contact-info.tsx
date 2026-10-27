import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT_CHANNELS } from "@/data/contact";

export function ContactInfo() {
  const getIcon = (icon: "phone" | "mail" | "map") => {
    switch (icon) {
      case "phone":
        return <Phone size={18} />;
      case "mail":
        return <Mail size={18} />;
      case "map":
        return <MapPin size={18} />;
    }
  };

  return (
    <aside className="space-y-6">
      <div className="rounded-[2.5rem] border border-black/10 bg-[#f7f7f5] p-8 sm:p-11">
        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
          Direct Channels
        </div>

        <h3 className="mt-2 font-display text-3xl sm:text-4xl">
          Church Office
        </h3>

        <div className="mt-8 space-y-6">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.label}
              className="group flex items-start gap-4 border-b border-black/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-violet-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {getIcon(channel.icon)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">
                  {channel.label}
                </div>

                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.icon === "map" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-base font-semibold text-[#101014] transition-colors hover:text-violet-600"
                  >
                    <span>{channel.value}</span>
                    <ArrowUpRight size={13} className="shrink-0 opacity-40 group-hover:opacity-100" />
                  </a>
                ) : (
                  <div className="mt-1 text-base font-semibold text-[#101014]">
                    {channel.value}
                  </div>
                )}

                {channel.note && (
                  <p className="mt-1 text-xs text-black/50">{channel.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camp Meeting Venue Card */}
      <div className="rounded-[2.5rem] border border-violet-500/20 bg-gradient-to-br from-violet-500/5 via-white to-white p-8">
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-violet-700">
          Camp Meeting 2026 Venue
        </span>

        <h4 className="mt-4 font-display text-2xl">Rochester Airport Marriott</h4>

        <p className="mt-2 text-xs leading-6 text-black/60">
          1890 W Ridge Rd, Rochester, NY 14615.
          <br />
          Gathering from Thursday, Nov 19th – Sunday, Nov 22nd.
        </p>
      </div>
    </aside>
  );
}