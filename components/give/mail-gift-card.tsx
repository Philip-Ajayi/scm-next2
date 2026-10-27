import { MAILING_DETAILS } from "@/data/give";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export function MailGiftCard() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f7f7f5] p-8 sm:p-12">
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/40">
        Alternative Option
      </div>

      <h3 className="mt-2 font-display text-3xl sm:text-4xl">
        Prefer to Mail a Gift?
      </h3>

      <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
        You can send checks or physical gifts directly to our ministry address.
        Please make checks payable to{" "}
        <strong className="text-black">{MAILING_DETAILS.payableTo}</strong> and
        indicate the designation on the memo line.
      </p>

      <div className="mt-8 space-y-5 border-t border-black/10 pt-8">
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-violet-600">
            <MapPin size={18} />
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">
              Mailing Address
            </div>
            <div className="mt-1 text-sm font-semibold text-[#101014]">
              {MAILING_DETAILS.address}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-violet-600">
            <Phone size={18} />
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">
              Phone Enquiries
            </div>
            <div className="mt-1 text-sm font-semibold text-[#101014]">
              {MAILING_DETAILS.phone}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-violet-600">
            <Mail size={18} />
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">
              Direct Inquiries
            </div>
            <div className="mt-1 text-sm font-semibold text-[#101014]">
              {MAILING_DETAILS.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}