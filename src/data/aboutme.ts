export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Maria Taktasheva",
  title: "Ph.D. Student",
  institution: "Simon Fraser University",
  // Note that links work in the description
  description:
    "I'm a first-year <a href='https://theialab.ca'>PhD student</a> working in the intersection of fields of computer vision and graphics. My current research focuses on better geometry in Gaussian Splatting — creating a better 3D representation of the world.",
  email: "maria_taktasheva@sfu.ca",
  imageUrl:
    "/images/profile.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=CcUdBLcAAAAJ&hl=en",
  githubUsername: "mtaktash",
  linkedinUsername: "maria-taktasheva",
  twitterUsername: "ao__mash",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.sfu.ca",
  // altName: "",
  // secretDescription: "I like dogs.",
};
