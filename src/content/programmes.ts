// The 6 programme areas — structured identically so the Programmes page
// can map over this array instead of hardcoding 6 sections.

export type Programme = {
  id: string;
  number: number;
  title: string;
  description: string;
  beneficiaries: string;
  activities: string[];
};

export const programmes: Programme[] = [
  {
    id: "routine-immunization-promotion",
    number: 1,
    title: "Routine Immunization Promotion",
    description:
      "Promotes awareness and uptake of vaccines through education, advocacy, and community engagement.",
    beneficiaries:
      "Children, parents, caregivers, adolescents, adults, and underserved communities.",
    activities: [
      "Community immunization awareness campaigns",
      "Door-to-door vaccine education",
      "Social media vaccine advocacy",
      "Support for national immunization campaigns",
    ],
  },
  {
    id: "vaccine-education-health-literacy",
    number: 2,
    title: "Vaccine Education and Health Literacy",
    description:
      "Provides accurate, evidence-based information about vaccines, vaccine-preventable diseases, and immunization schedules.",
    beneficiaries:
      "Schools, youth groups, healthcare workers, parents, and the general public.",
    activities: [
      "School health talks",
      "Community seminars and webinars",
      "Educational materials",
      "Myth-busting campaigns",
    ],
  },
  {
    id: "outreach-vulnerable-communities",
    number: 3,
    title: "Outreach to Vulnerable and Hard-to-Reach Communities",
    description:
      "Improves vaccine access among underserved populations through partnerships and outreach.",
    beneficiaries:
      "Rural communities, refugees, informal settlements, people living with disabilities, and other vulnerable groups.",
    activities: [
      "Mobile vaccination outreach support",
      "Community mobilization",
      "Collaboration with health facilities and community leaders",
    ],
  },
  {
    id: "research-innovation",
    number: 4,
    title: "Research and Innovation in Immunization",
    description:
      "Supports research, data collection, and innovative approaches to improve immunization coverage.",
    beneficiaries:
      "Researchers, students, policymakers, healthcare professionals, and communities.",
    activities: [
      "Immunization surveys",
      "Operational research",
      "Digital awareness initiatives",
      "Publication of findings",
    ],
  },
  {
    id: "capacity-building-volunteer-development",
    number: 5,
    title: "Capacity Building and Volunteer Development",
    description:
      "Equips volunteers and health advocates with immunization knowledge and skills.",
    beneficiaries:
      "Youth volunteers, students, healthcare workers, community leaders.",
    activities: [
      "Volunteer training",
      "Leadership workshops",
      "Mentorship",
      "Community engagement projects",
    ],
  },
  {
    id: "partnerships-advocacy",
    number: 6,
    title: "Partnerships and Advocacy",
    description: "Builds partnerships to strengthen immunization efforts.",
    beneficiaries:
      "Governments, NGOs, academic institutions, private sector, communities.",
    activities: [
      "Stakeholder meetings",
      "Policy advocacy",
      "Joint campaigns",
      "World Immunization Week activities",
    ],
  },
];
