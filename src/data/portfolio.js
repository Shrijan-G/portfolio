export const portfolio = {
  person: {
    name: 'Shrijan Giri', initials: 'SG', location: 'Kathmandu, Nepal', availability: 'Open to opportunities',
    eyebrow: "Hello, I'm", roles: ['Cybersecurity Student', 'Ethical Hacking Enthusiast', 'Developer'],
    tagline: 'Exploring systems, finding weaknesses, and building safer digital experiences.',
    bio: [
      "I'm a cybersecurity student from Nepal with a hands-on interest in ethical hacking, networking, and secure software development.",
      'I enjoy turning complex security ideas into practical labs, reliable tools, and thoughtful digital experiences.',
    ],
  },
  navigation: ['Home', 'About', 'Projects', 'Experience', 'Contact'],
  stats: [
    { value: '3+', label: 'Projects' },
    { value: 'Cybersecurity', label: 'Student' },
    { value: '10+', label: 'Labs completed' },
  ],
  skills: ['Python', 'Linux', 'Kali Linux', 'Networking', 'Ethical Hacking', 'Cybersecurity', 'Nmap', 'Wireshark', 'Burp Suite', 'React.js', 'Node.js', 'MySQL', 'Git & GitHub', 'Docker'],
  projects: [
    { title: 'Network Recon Dashboard', category: 'Cybersecurity', short: 'Recon', description: 'A focused dashboard that turns network scan results into clear, actionable findings.', tags: ['Python', 'Nmap', 'Flask'], github: '#', demo: '#' },
    { title: 'Secure Notes Vault', category: 'Web Development', short: 'Vault', description: 'An encrypted notes experience with strong validation and session-first security decisions.', tags: ['React', 'Node.js', 'Crypto'], github: '#', demo: '#' },
    { title: 'Packet Analysis Lab', category: 'Networking', short: 'Packets', description: 'A repeatable lab for capturing traffic, identifying protocols, and documenting anomalies.', tags: ['Wireshark', 'TCP/IP', 'Linux'], github: '#', demo: '#' },
    { title: 'Web Security Toolkit', category: 'Cybersecurity', short: 'Toolkit', description: 'A collection of small utilities for inspecting headers, input handling, and common web risks.', tags: ['Python', 'OWASP', 'Burp Suite'], github: '#', demo: '#' },
    { title: 'Portfolio System', category: 'Web Development', short: 'Portfolio', description: 'A responsive, accessible portfolio system with animated filtering and reusable content data.', tags: ['React', 'Tailwind', 'Motion'], github: '#', demo: '#' },
    { title: 'Home Lab Topology', category: 'Networking', short: 'Topology', description: 'A documented virtual network for practicing segmentation, monitoring, and incident response.', tags: ['Docker', 'Linux', 'Networking'], github: '#', demo: '#' },
  ],
  experience: [
    { type: 'study', title: 'Cybersecurity Student', organization: 'Independent Learning & Labs', date: '2025 — Present', description: 'Building a practical foundation across network security, Linux administration, threat discovery, and responsible vulnerability testing.', tags: ['Linux', 'Networking', 'Nmap', 'Wireshark'] },
    { type: 'code', title: 'Developer', organization: 'Personal Projects', date: '2024 — Present', description: 'Designing and building web tools with careful attention to usability, maintainability, and secure development principles.', tags: ['React', 'Node.js', 'MySQL', 'Git'] },
    { type: 'lab', title: 'Security Lab Practice', organization: 'Hands-on Training', date: 'Ongoing', description: 'Completing guided labs in enumeration, web testing, packet analysis, and defensive documentation within legal environments.', tags: ['Kali Linux', 'Burp Suite', 'OWASP', 'Reporting'] },
  ],
  contact: { email: 'hello@example.com', location: 'Kathmandu, Nepal', availability: 'Available for internships & collaboration' },
  socials: { github: 'https://github.com/', linkedin: 'https://www.linkedin.com/', email: 'mailto:hello@example.com' },
}
