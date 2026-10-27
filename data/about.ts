import { SessionPillar, Distinctive, MissionPillar } from "@/types/about";

export const CAMP_MEETING_HISTORY = {
  subtitle: "02 · Heritage & Origin",
  title: "What is a Camp Meeting?",
  description:
    "It's an old term for the historic 'Tent Meetings' held in the 19th and 20th centuries. The sacred practice was for believers to consecrate their time, gather under a tent or 'camp', and hold all-day meetings.",
  body: "Mornings and afternoons were reserved for deep, rigorous teaching sessions in the scriptures. In the evenings, the atmosphere shifted into Holy Ghost believer meetings characterized by demonstrations of power and worship.",
  highlight:
    "Supernatural Camp Meeting is patterned in this authentic heritage—reviving pure spiritual hunger without distraction."
};

export const PATTERN_AND_PURPOSE: {
  subtitle: string;
  title: string;
  inspiration: string;
  sessions: SessionPillar[];
} = {
  subtitle: "03 · Blueprint",
  title: "Pattern & Purpose",
  inspiration:
    "Patterned after Charis Campmeeting (Pastor Chris Segun Onayinka meetings), our gathering follows a deliberate apostolic cadence designed for complete spiritual equipping.",
  sessions: [
    {
      period: "Day Sessions",
      badge: "Morning & Afternoon",
      title: "The Word & Finished Work",
      focus: "Deep grounding in redemption truth",
      details: [
        "Teaching meetings with strong emphasis on who we are in Christ.",
        "Detailed exposition of the finished work of redemption.",
        "Unveiling our attendant realities, rights, and kingdom privileges.",
        "Establishing believers firmly so they can teach others also."
      ]
    },
    {
      period: "Evening Sessions",
      badge: "Nights of Power",
      title: "Demonstrations of the Spirit",
      focus: "Tangible manifestation of spiritual gifts",
      details: [
        "Active demonstrations of the Holy Spirit in utterance, revelation, and power.",
        "Diverse needs met supernaturally as in the Book of Acts.",
        "Believers equipped, exercised, and enhanced in the work of ministry.",
        "Atmospheres saturated with Holy Ghost joy and rejoicing."
      ]
    }
  ]
};

export const DISTINCTIVES: Distinctive[] = [
  {
    icon: "✨",
    title: "The Word & Spirit",
    tagline: "Pure doctrine. Pure power.",
    description:
      "A sacred convergence where the Word is taught in revelation and the Spirit demonstrates in power and might."
  },
  {
    icon: "🚫",
    title: "No Entertainment",
    tagline: "Zero side attractions permitted.",
    description:
      "We do not dilute the presence of God with carnal spectacle. The entire atmosphere is consecrated solely to the Word and the Spirit."
  },
  {
    icon: "⚡",
    title: "Acts-Style Miracles",
    tagline: "Heaven in earthly places.",
    description:
      "Glorious testimonies of souls receiving the new birth, filled with the Spirit, and experiencing special miracles."
  },
  {
    icon: "🕊️",
    title: "Ministry Equipping",
    tagline: "Not just spectators—laborers.",
    description:
      "Believers are activated and enhanced to carry this fire into their daily spheres, churches, and world."
  }
];

export const MISSION_STATEMENT = {
  subtitle: "05 · Mandate",
  title: "Our Mission",
  statement:
    "Our mission is to preach and teach the never-changing message of redemption in Christ to a never-ending world.",
  explanation:
    "We are committed to equipping believers as we fellowship together with the Word. We place strong emphasis on the reality of the new creation in redemption to the intent that men are grounded and able to teach others the same. We are set out to light up every dark place in the Earth as we preach and teach the gospel with the consciousness of definite signs and wonders."
};

export const MISSION_PILLARS: MissionPillar[] = [
  {
    number: "01",
    title: "The Never-Changing Message",
    description:
      "Uncompromising presentation of the gospel of Jesus Christ and redemption."
  },
  {
    number: "02",
    title: "Grounded Discipleship",
    description:
      "Equipping men and women who know who they are in Christ and can instruct others."
  },
  {
    number: "03",
    title: "Definite Signs & Wonders",
    description:
      "Shining light into every dark corner with the evidence and power of the Holy Ghost."
  }
];