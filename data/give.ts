import { GivingOption, PresetAmount } from "@/types/give";

export const GIVING_OPTIONS: GivingOption[] = [
  {
    id: "general",
    title: "General Offering",
    subtitle: "Church Giving",
    badge: "Ministry & Operations",
    description:
      "Your generous giving helps advance God's work in our church and community. Thank you for partnering with us to build lives and preach the Word."
  },
  {
    id: "event",
    title: "Support Event",
    subtitle: "Camp Meeting 2026",
    badge: "Camp Meeting Consecration",
    description:
      "Directly support the Supernatural Camp Meeting: hall logistics, ministers, audio/visual production, and ensuring admission remains 100% free for all attendees."
  }
];

export const PRESET_AMOUNTS: PresetAmount[] = [
  { label: "$25", value: 25 },
  { label: "$50", value: 50 },
  { label: "$100", value: 100 },
  { label: "$250", value: 250 },
  { label: "$500", value: 500 },
  { label: "$1,000", value: 1000 }
];

export const MAILING_DETAILS = {
  address: "1400 Lehigh Station Road, Rochester, NY 14467",
  phone: "585 210 5038",
  email: "giving@supernaturalcc.org",
  payableTo: "Supernatural Community Church"
};

export const SCRIPTURES = [
  {
    verse: "2 Corinthians 9:7",
    text: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
  },
  {
    verse: "Luke 6:38",
    text: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom."
  },
  {
    verse: "Philippians 4:19",
    text: "But my God shall supply all your need according to his riches in glory by Christ Jesus."
  }
];