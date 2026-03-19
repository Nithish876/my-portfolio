import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";
import { 
  SiUpwork, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiVercel,
  SiPostgresql
} from "react-icons/si";
import { MdOutlineSecurity, MdOutlineAutoAwesome } from "react-icons/md";

export const siteMetadata = {
  name: "Nithish.",
  title: "React Native & Full-Stack Engineer.",
  description: "Specializing in scalable mobile architectures and high-performance cross-platform applications.",
  socials: [
    { name: "Upwork", url: "https://upwork.com/freelancers/~01yourupworkid", icon: SiUpwork },
    { name: "GitHub", url: "https://github.com/nithish", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/nithish", icon: FaLinkedin },
    { name: "Twitter", url: "https://twitter.com/nithish", icon: FaTwitter },
  ],
  whatsappNumber: "+919345423474",
};

export const skills = [
  { name: "React Native", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export const projects = [
  {
    title: "Cloudbrix AI",
    description: "Enterprise video generation SaaS powered by auto-scaling Runpod instances. Handled massive scaling challenges effortlessly.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "AI", icon: MdOutlineAutoAwesome },
      { name: "Infrastructure", icon: SiVercel }
    ],
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  },
  {
    title: "Secure Notes Pro",
    description: "Complex offline-first mobile vault with military-grade encryption, seamless nesting folder UX, and 60FPS fluid animations.",
    tech: [
      { name: "React Native", icon: FaReact },
      { name: "Encryption", icon: MdOutlineSecurity },
      { name: "TypeScript", icon: SiTypescript }
    ],
    link: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop", 
  },
  {
    title: "FOSS Tasking",
    description: "Modern, open-source productivity dashboard focusing on intuitive drag-and-drop mechanics and real-time multiplayer states.",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql }
    ],
    link: "https://github.com/nithish/foss-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    title: "Workflow Engine",
    description: "Stealth productivity engine optimizing repetitive operational workflows for 100+ active freelancers using resilient queueing.",
    tech: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Database", icon: FaDatabase }
    ],
    link: "https://github.com/nithish/upwork-helper",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
  },
];

export const reviews = [
  {
    client: "David M.",
    role: "CEO, Cloudbrix",
    text: "Nithish completely rescued our mobile architecture. He understands React Native at a profound level and communicates flawlessly. A true Upwork star."
  },
  {
    client: "Sarah J.",
    role: "Founder, Secure Notes",
    text: "The smoothest animations and offline sync I've ever seen on a mobile app. Nithish delivered exactly what we visualized, ahead of the deadline."
  },
  {
    client: "Michael K.",
    role: "Product Manager",
    text: "Extremely professional. His structural code quality is out of this world. Highly recommend him for any full-stack Next.js or React Native build."
  }
];
