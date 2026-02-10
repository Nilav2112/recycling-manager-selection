export function fetchCandidates() {
  return Promise.resolve([
    {
      id: 1,
      name: "Alex Morgan",
      experience: 12,
      department: "Operations",
      skills: ["Lean Manufacturing", "Team Leadership", "Cost Reduction"],
      scores: {
        crisis: 8.2,
        sustainability: 8.5,
        motivation: 8.5,
        compliance: 8.0,
      },
    },
    {
      id: 2,
      name: "Taylor Singh",
      experience: 15,
      department: "Sustainability",
      skills: [
        "Sustainability Strategy",
        "Process Optimization",
        "Regulatory Compliance",
      ],
      scores: {
        crisis: 9.0,
        sustainability: 9.2,
        motivation: 8.6,
        compliance: 9.1,
      },
    },
    {
      id: 3,
      name: "Jordan Kim",
      experience: 10,
      department: "Engineering",
      skills: [
        "Plant Automation",
        "Six Sigma",
        "Waste Stream Analysis",
      ],
      scores: {
        crisis: 7.8,
        sustainability: 8.0,
        motivation: 8.2,
        compliance: 8.4,
      },
    },
    {
      id: 4,
      name: "Priya Patel",
      experience: 18,
      department: "Environmental Management",
      skills: [
        "Environmental Policy",
        "Stakeholder Management",
        "Risk Assessment",
      ],
      scores: {
        crisis: 8.9,
        sustainability: 9.4,
        motivation: 8.8,
        compliance: 9.3,
      },
    },
  ]);
}
