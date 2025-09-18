export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS",
    title: "3D Gaussian Flats: Hybrid 2D/3D Photometric Scene Reconstruction",
    authors: "Maria Taktasheva, Lily Goli, Alessandro Fiorini, Zhen (Colin) Li, Daniel Rebain, Andrea Tagliasacchi",
    // paperUrl: "https://arxiv.org/abs/2003.05471",
    // codeUrl: "https://github.com/Vahe1994/Deep-Vectorization-of-Technical-Drawings",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "3D Gaussian Splatting with planar constraints for improved scene reconstruction. Enables high-quality rendering and meshing of 3D scenes.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2020",
    conference: "ECCV",
    title: "Deep Vectorization of Technical Drawings",
    authors: "Vage Egiazarian, Oleg Voynov, Alexey Artemov, Denis Volkhonskiy, Aleksandr Safin, Maria Taktasheva, Denis Zorin, Evgeny Burnaev",
    paperUrl: "https://arxiv.org/abs/2003.05471",
    codeUrl: "https://github.com/Vahe1994/Deep-Vectorization-of-Technical-Drawings",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Using deep learning to vectorize technical line drawings, such as floor plans, architectural drawings, and 2D CAD images.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2019",
    conference: "AIST",
    title: "Learning to Approximate Directional Fields Defined over 2D Planes",
    authors: "Maria Taktasheva, Albert Matveev, Alexey Artemov, Evgeny Burnaev",
    paperUrl: "https://arxiv.org/abs/1907.00559",
    codeUrl: "https://github.com/artonson/field_learn",
  },
];
