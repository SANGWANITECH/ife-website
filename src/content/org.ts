// Core organizational identity — sourced from IFE constitution & profile docs.
// Swap this file's export for a CMS fetch later; every component consumes this shape only.

export const org = {
  name: "Immunization for Everyone",
  shortName: "IFE",
  slogan: "Equitable Immunization, Healthier Communities",
  founder: "Lupakisho Mwalwanda",
  founded: "June 7, 2026",
  email: "immunizationforeveryone@gmail.com",
  phones: [
    "+265 983 569 401",
    "+265 996 564 940",
    "+265 880 259 581",
    "+265 884 091 313",
    "+265 998 837 985",
  ],
  whatsapp: "+265983569401", // primary line for WhatsApp CTA — confirm which number Sangwani wants as default
  address: "Lilongwe, Malawi",
  intro:
    "Immunization for Everyone (IFE) is a non-governmental organization dedicated to promoting equitable access to immunization services locally in Malawi and worldwide. Founded as an independent entity, IFE operates without governmental affiliation, relying on donations, grants, and volunteer efforts to advance its mission.",
  vision:
    "A world where every individual, regardless of geographic location, socioeconomic status, or background, has barrier-free access to life-saving immunization services — contributing to the eradication of preventable diseases and the promotion of global well-being.",
  mission:
    "To advocate for and facilitate universal access to immunization programs, empowering communities to achieve better health outcomes through education, resource distribution, and policy influence.",
  values: [
    "Equity",
    "Innovation",
    "Inclusiveness",
    "Collaboration",
    "Integrity",
    "Accountability",
    "Compassion",
  ],
  objectives: [
    "Raise awareness about the importance of immunization in public health.",
    "Collaborate with local communities, international partners, research institutions and stakeholders to develop and implement immunization access programs.",
    "Secure funding and resources for immunization initiatives in low-resource areas.",
    "Monitor and report on global immunization coverage gaps and advocate for policy changes.",
    "Build a network of volunteers and experts committed to immunization equity.",
  ],
  advisoryCouncil: ["Michael Chale", "Kelvin Malamula"],
} as const;
