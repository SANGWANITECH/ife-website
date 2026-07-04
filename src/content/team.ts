// Leadership team — image paths point to /public/images/team/, drop files in locally.

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  background: string;
  image: string; // path relative to /public
};

export const team: TeamMember[] = [
  {
    id: "lupakisho-mwalwanda",
    name: "Lupakisho Mwalwanda",
    position: "Chief Executive Officer",
    background:
      "Lupakisho Mwalwanda is the founder and Executive Director of Immunization for Everyone (IFE). He studies immunology at Malawi University of Science and Technology. He is passionate about advancing equitable access to vaccines through advocacy, research, education, and community engagement. His work focuses on promoting vaccine confidence, strengthening immunization programmes, and improving public health outcomes — particularly among underserved and vulnerable communities.",
    image: "/images/team/lupakisho-mwalwanda.jpg",
  },
  {
    id: "ambere-mwaighogha",
    name: "Ambere Mwaighogha",
    position: "Finance Officer",
    background:
      "Ambere Mwaighogha is an aspiring immunologist with strong leadership and communication skills, and a passion for creativity and innovation. He is committed to contributing to the eradication of infectious and non-infectious diseases affecting communities worldwide, with a vision for a globally health-secure future. Through programmes like Immunization for Everyone, he works to inspire communities, youth, and global stakeholders to participate in vaccination programmes for better public health outcomes.",
    image: "/images/team/ambere-mwaighogha.jpg", // source file is .emf — convert to jpg/png before use
  },
  {
    id: "blessings-kawerama",
    name: "Blessings Kawerama",
    position: "Programme Director",
    background:
      "Blessings Kawerama is an aspiring scientist with a strong passion for health research and disease prevention, aiming to become a researcher, epidemiologist, and pathologist.",
    image: "/images/team/blessings-kawerama.jpg",
  },
  {
    id: "sangwani-phiri",
    name: "Sangwani Phiri",
    position: "Information Technology Manager",
    background:
      "Sangwani Phiri is a final-year Bachelor of Science in Computer Science student at the University of Malawi, and the founder of RamTech Solutions, a tech startup focused on building digital solutions and equipping students with practical tech skills. He works as a freelance web developer and has built and deployed multiple production websites and systems for clients and organizations across Malawi. As IT Manager at IFE, Sangwani leads the design and development of the organization's digital presence, including this website. He is passionate about using technology to solve real problems, with a long-term goal of contributing to financial systems innovation at the Reserve Bank of Malawi.",
    image: "/images/team/sangwani-phiri.jpg",
  },
  {
    id: "crispin-binga",
    name: "Crispin Binga",
    position: "Communication Manager",
    background:
      "Crispin Binga is a fourth-year immunology student at Malawi University of Science and Technology with a deep passion for research and innovation beyond academics. Crispin is a talented Chichewa poet and enjoys using poetry to inspire and connect with others, alongside strong interpersonal and communication skills that let him engage effectively across diverse communities.",
    image: "/images/team/crispin-binga.jpg",
  },
  {
    id: "brenda-jamu",
    name: "Brenda Jamu",
    position: "Research Director",
    background:
      "Brenda Jamu is a final-year Bachelor of Science in Immunology student with a strong passion for immunology, infectious diseases, vaccinology, and public health. She is committed to advancing scientific knowledge through research and innovation, with particular interest in disease surveillance, immune response to infectious diseases, and the science behind vaccines and their application. Through her academic journey, Brenda has developed strong analytical, research, and communication skills, and is enthusiastic about collaborating with fellow scientists and health professionals to address public health challenges through evidence-based solutions.",
    image: "/images/team/brenda-jamu.jpg",
  },
  {
    id: "kelvin-malamula",
    name: "Kelvin Malamula",
    position: "Monitoring and Evaluation Director",
    background:
      "Kelvin Malamula is a fourth-year Bachelor of Science in Immunology student at the Malawi University of Science and Technology (MUST). His academic training has provided a strong foundation in immunology, laboratory diagnostics, and public health research, with practical experience in ELISA, blood grouping, electrophoresis, urinalysis, and statistical data analysis using SPSS. His academic interests include immunology, autoimmune diseases, infectious diseases, and applying research to improve healthcare outcomes. Kelvin is committed to integrity, discipline, teamwork, and lifelong learning — previous service as Prayer Director of MUST Assemblies of God reflects leadership experience and dedication.",
    image: "/images/team/kelvin-malamula.jpg",
  },
  {
    id: "chisomo-chigwede",
    name: "Chisomo Chigwede",
    position: "Partnership Director",
    background:
      "Chisomo Chigwede is a final-year Bachelor of Science in Immunology student at Malawi University of Science and Technology (MUST). She has volunteered as a student laboratory assistant at Kamuzu Central Hospital across the blood bank, hematology, and parasitology laboratories, and at the hematology laboratory of the National Cancer Center. Her lab experience spans blood grouping and cross-matching, full blood count testing, and parasite identification. In 2026, she worked on a bioinformatics project studying structural modeling related to X-SCID mutations. Chisomo has won a third-best poster presentation award at the 2nd AMS Career Day, and has served in leadership roles including Director of Cancer at MUST Leo Club and Interim Secretary at the MUST Society for Immunology (MUSIM).",
    image: "/images/team/chisomo-chigwede.jpg",
  },
  {
    id: "michael-chale",
    name: "Michael Chale",
    position: "Resource Mobilization Director",
    background:
      "Michael Chale is a Bachelor of Science in Immunology student with a strong passion for understanding human biology and immunology, particularly in areas such as vaccinology, autoimmunity, allergies, and infectious diseases. He brings hands-on laboratory, research, and scientific writing experience, alongside creative strengths in graphic design, multimedia production, and event coordination. Michael is a proven leader and international volunteer instructor, seeking to apply his research skills to improve healthcare diagnostics and vaccination programmes in Malawi.",
    image: "/images/team/michael-chale.jpg",
  },
 
];