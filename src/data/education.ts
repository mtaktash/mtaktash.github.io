export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Simon Fraser University",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Andrea Tagliasacchi",
  },
  {
    year: "2018-2020",
    institution: "Skolkovo Institute of Science and Technology",
    degree: "M.Sc. in Mathematics and Computer Science",
    advisor: "Prof. Alexey Artemov",
    thesis: "Learning to Approximate Directional Fields Defined over 2D Planes",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2014-2018",
    institution: "National Research University Higher School of Economics",
    advisor: "Prof. Alexey Artemov",
    degree: "B.Sc. in Economics (Minor in Data Science)",
    // thesis: "Learnable vector fields",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
