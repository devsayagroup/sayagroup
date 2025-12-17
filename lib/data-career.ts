// lib/data-career.ts

export type Career = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail: string;
};

export const careers: Career[] = [
  {
    id: "finance-manager",
    title: "Finance Manager",
    location: "Jakarta (PIK 2)",
    type: "Full-time · On-site",
    department: "Finance",
    description:
      "Support the financial strength and strategic direction of Saya Group’s hospitality and lifestyle businesses.",
    responsibilities: [
      "Manage financial reporting, budgeting, and forecasting across the group",
      "Monitor cash flow, cost control, and financial performance",
      "Prepare management reports and financial analysis for leadership",
      "Ensure compliance with accounting standards, taxation, and regulations",
      "Coordinate audits and liaise with external auditors and consultants",
      "Support strategic planning and operational decision-making",
    ],
    requirements: [
      "Proven experience as a Finance Manager, Senior Accountant, or similar role",
      "Strong knowledge of financial management, reporting, and analysis",
      "Experience in hospitality, F&B, or multi-brand businesses is an advantage",
      "High attention to detail with strong analytical skills",
      "Proficiency in accounting systems and financial tools",
      "Bachelor’s degree in Finance, Accounting, or related field",
      "Strong communication skills and ability to work closely with management",
    ],
    applyEmail: "careers@sayagroup.com",
  },

  {
    id: "human-resources-manager",
    title: "Human Resources Manager",
    location: "Jakarta (PIK 2)",
    type: "Full-time · On-site",
    department: "Human Resources",
    description:
      "Shape the people, culture, and HR systems behind Saya Group’s hospitality and lifestyle brands.",
    responsibilities: [
      "Oversee end-to-end HR operations across the group",
      "Lead recruitment, onboarding, and talent development initiatives",
      "Manage performance evaluation and employee relations",
      "Develop HR policies, procedures, and organizational structures",
      "Ensure compliance with labor regulations and internal standards",
      "Support a professional and premium hospitality environment",
    ],
    requirements: [
      "Proven experience as an HR Manager or HR Business Partner",
      "Strong understanding of HR practices and labor regulations in Indonesia",
      "Experience in hospitality, F&B, or lifestyle industries is an advantage",
      "Excellent communication, interpersonal, and leadership skills",
      "Proficiency in HR systems and tools",
      "Bachelor’s degree in HR, Business Administration, or related field",
      "Ability to work closely with leadership and cross-functional teams",
    ],
    applyEmail: "careers@sayagroup.com",
  },
];
