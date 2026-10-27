import { ContactReasonOption, ContactChannel } from "@/types/contact";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Direct Phone",
    value: "585-210-5038",
    href: "tel:5852105038",
    icon: "phone",
    note: "Lines open Monday – Friday, 9:00 AM – 5:00 PM EST"
  },
  {
    label: "Email Inquiries",
    value: "info@supernaturalcc.org",
    href: "mailto:info@supernaturalcc.org",
    icon: "mail",
    note: "Expect a response within 24 hours"
  },
  {
    label: "Physical Address",
    value: "1400 Lehigh Station Road, Rochester, NY 14467",
    href: "https://maps.google.com/?q=1400+Lehigh+Station+Road+Rochester+NY+14467",
    icon: "map",
    note: "Main Church Campus"
  }
];

export const CONTACT_REASONS: ContactReasonOption[] = [
  { value: "general", label: "General Inquiry" },
  { value: "camp_meeting_2026", label: "Supernatural Camp Meeting 2026" },
  { value: "prayer_request", label: "Prayer Request" },
  { value: "testimony", label: "Share a Testimony" },
  { value: "giving_partnership", label: "Giving & Partnership" },
  { value: "volunteering", label: "Volunteering & Serving" }
];