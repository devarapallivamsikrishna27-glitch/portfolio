// Skills dataset for Devarapalli Vamsi Krishna
// Accurate skills, categorized with SVG icons and proficiency status.

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "programming", label: "Programming" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "aiml", label: "AI & Machine Learning" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" }
];

export const skillsData = [
  // Programming
  {
    name: "C",
    category: "programming",
    iconColor: "#00599C",
    type: "Core Language",
    svg: `<svg viewBox="0 0 128 128"><path fill="#00599C" d="M116.5 76.7c-.5 0-.9-.3-1.2-.6L99.7 60.5c-.3-.3-.5-.7-.5-1.1s.2-.8.5-1.1l15.6-15.6c.3-.3.7-.5 1.1-.5.9 0 1.6.7 1.6 1.6v31.2c0 .9-.6 1.7-1.5 1.7zm-27.8 7.3c-.6 0-1.1-.3-1.5-.7L69 65c-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5l18.2-18.3c.4-.4.9-.7 1.5-.7 1.2 0 2.2 1 2.2 2.2v36.6c0 1.2-1 2.2-2.2 2.2zM64 128C28.7 128 0 99.3 0 64S28.7 0 64 0c26.9 0 50.1 16.7 59.6 40.5-1.5-.4-3.1-.7-4.7-.7-7.9 0-14.7 4.9-17.5 12-8.3-17.8-26.4-30.2-47.4-30.2-28.7 0-52 23.3-52 52s23.3 52 52 52c21 0 39.1-12.4 47.4-30.2 2.8 7.1 9.6 12 17.5 12 1.6 0 3.2-.3 4.7-.7C114.1 111.3 90.9 128 64 128z"/></svg>`
  },
  {
    name: "C++",
    category: "programming",
    iconColor: "#004482",
    type: "OOP & Systems",
    svg: `<svg viewBox="0 0 128 128"><path fill="#00599C" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 106.7C40.5 106.7 21.3 87.5 21.3 64S40.5 21.3 64 21.3c15.8 0 29.6 8.6 37 21.4H83.8C78.9 36 71.9 32 64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32c7.9 0 14.9-4 19.8-10.7h17.2c-7.4 12.8-21.2 21.4-37 21.4z"/><path fill="#004482" d="M89 54h6v7h7v6h-7v7h-6v-7h-7v-6h7v-7zm22 0h6v7h7v6h-7v7h-6v-7h-7v-6h7v-7z"/></svg>`
  },
  {
    name: "Java",
    category: "programming",
    iconColor: "#EA2D2E",
    type: "OOP & Full Stack",
    svg: `<svg viewBox="0 0 128 128"><path fill="#EA2D2E" d="M46.7 91.5c-9.8-3.3-17.4-12.5-17.4-23.7 0-14.8 13.2-26.8 29.5-26.8 9.3 0 17.6 3.9 23.2 10.2l-5.6 5.8c-4.1-4.7-10.4-7.6-17.6-7.6-11.8 0-21.3 8.7-21.3 19.4 0 8.3 5.7 15.3 13.7 17.8l-4.5 4.9zm41.2-21.3c0 7.7-4.3 14.3-10.6 17.7l4.3 5.3c8.5-4.6 14.5-13.6 14.5-24 0-15.3-13.6-27.7-30.5-27.7-7.4 0-14.2 2.4-19.8 6.5l4.8 5.7c4.3-3.1 9.4-4.8 15-4.8 12.4 0 22.3 9.5 22.3 21.3zM64 4c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm0 110C38.6 114 18 93.4 18 68S38.6 22 64 22s46 20.6 46 46-20.6 46-46 46z"/></svg>`
  },
  {
    name: "Python",
    category: "programming",
    iconColor: "#3776AB",
    type: "Scripting & AI",
    svg: `<svg viewBox="0 0 128 128"><path fill="#3776AB" d="M63.5 0c-16.7 0-30.2 2.6-30.2 15.7v11.8h30.2v3.9H23.3C10.4 31.4 0 41.7 0 60.1c0 18.6 9.4 28.5 22.3 28.5h8.9v-13c0-14.9 12.7-28 28-28h27.1V31.4c0-12.7-12-21.3-27.1-21.3h4.3zm-11.4 8.7c2.9 0 5.2 2.3 5.2 5.2s-2.3 5.2-5.2 5.2-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2z"/><path fill="#FFD43B" d="M64.5 128c16.7 0 30.2-2.6 30.2-15.7v-11.8H64.5v-3.9h40.2c12.9 0 23.3-10.3 23.3-28.7 0-18.6-9.4-28.5-22.3-28.5h-8.9v13c0 14.9-12.7 28-28 28H41.7v16.2c0 12.7 12 21.3 27.1 21.3h-4.3zm11.4-8.7c-2.9 0-5.2-2.3-5.2-5.2s2.3-5.2 5.2-5.2 5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2z"/></svg>`
  },

  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    iconColor: "#E34F26",
    type: "Markup",
    svg: `<svg viewBox="0 0 128 128"><path fill="#E34F26" d="M19.1 113.8L8.1 0h111.8l-11 113.7L64 128l-44.9-14.2z"/><path fill="#EF652A" d="M64 117.8l36.5-11.6 9.2-95.2H64v106.8z"/><path fill="#EBEBEB" d="M64 51.5H46.1l-1.2-13.8H64V24.5H30.4l3.6 40.2H64V51.5zm0 37.1l-.1.1-15.5-4.2-1-11.1H33.8l1.9 22.3L64 105.2V88.6z"/><path fill="#FFF" d="M64 51.5h17.9l-1.7 18.9-16.2 4.4v13.8l28.3-7.8 3.5-39.3H64v10zm0-27v13.2h33.6l1.2-13.2H64z"/></svg>`
  },
  {
    name: "CSS3",
    category: "frontend",
    iconColor: "#1572B6",
    type: "Styling",
    svg: `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M19.1 113.8L8.1 0h111.8l-11 113.7L64 128l-44.9-14.2z"/><path fill="#33A9DC" d="M64 117.8l36.5-11.6 9.2-95.2H64v106.8z"/><path fill="#EBEBEB" d="M64 51.5H46.1l-1.2-13.8H64V24.5H30.4l3.6 40.2H64V51.5zm0 37.1l-.1.1-15.5-4.2-1-11.1H33.8l1.9 22.3L64 105.2V88.6z"/><path fill="#FFF" d="M64 51.5h17.9l-1.7 18.9-16.2 4.4v13.8l28.3-7.8 3.5-39.3H64v10zm0-27v13.2h33.6l1.2-13.2H64z"/></svg>`
  },
  {
    name: "JavaScript",
    category: "frontend",
    iconColor: "#F7DF1E",
    type: "Core Web Logic",
    svg: `<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M0 0h128v128H0z"/><path fill="#000" d="M67.3 100.9c2.8 4.7 6.8 8.1 13.9 8.1 5.9 0 9.7-2.9 9.7-7 0-4.9-4-6.8-10.7-9.7l-3.7-1.6c-10.5-4.5-17.5-10.1-17.5-22 0-11 8.6-19.3 22-19.3 9.6 0 16.5 3.3 21.2 11.5l-9.1 5.8c-2.3-4.1-5.1-6.1-11.7-6.1-5.1 0-8.2 3.1-8.2 6.5 0 4.1 3.2 5.9 8.8 8.3l3.7 1.6c12.4 5.3 19.8 10.9 19.8 23.3 0 13.4-10.5 20.7-24.9 20.7-13.8 0-22.7-6.8-26.6-15.2l13.6-4.9zM26.2 101.4c2.2 3.9 5.2 6.8 10.5 6.8 5.4 0 8.8-2.6 8.8-12.8V50h14.8v45.5c0 18.4-10.7 26.5-25.1 26.5-11.3 0-18.4-5.7-22-14.2l13-6.4z"/></svg>`
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    iconColor: "#FFB92E",
    type: "Mobile First UI",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#FFB92E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`
  },

  // Backend
  {
    name: "PHP",
    category: "backend",
    iconColor: "#777BB4",
    type: "Server Scripting",
    svg: `<svg viewBox="0 0 128 128"><path fill="#777BB4" d="M64 12.8C28.7 12.8 0 35.7 0 64s28.7 51.2 64 51.2 64-22.9 64-51.2S99.3 12.8 64 12.8zm-29.2 68H23l9.8-35.3h16.5c8.7 0 13.5 4.3 11.7 12.2-1.7 7.7-8 12.2-16.7 12.2h-7.6l-2.1 10.9zm26.9 0l9.8-35.3h11.8l-9.8 35.3H61.7zm38.1-12.2h-7.6l-2.1 12.2H78.3L88.1 45.5h16.5c8.7 0 13.5 4.3 11.7 12.2-1.7 7.7-8 10.9-16.5 10.9z"/></svg>`
  },
  {
    name: "Flask",
    category: "backend",
    iconColor: "#000000",
    type: "Microframework",
    svg: `<svg viewBox="0 0 128 128"><path fill="#171717" d="M64 4c-3.3 0-6 2.7-6 6v30.8L38.4 69.4c-4.4 6.3-5.2 14.5-2.1 21.6 3.1 7.1 9.8 11.8 17.5 12.5L50 118c-.8 3.3 1.2 6.6 4.5 7.4 3.3.8 6.6-1.2 7.4-4.5l4.8-19.1 4.8 19.1c.7 2.8 3.2 4.7 6 4.7.5 0 .9 0 1.4-.1 3.3-.8 5.3-4.1 4.5-7.4l-3.8-14.5c7.7-.7 14.4-5.4 17.5-12.5 3.1-7.1 2.3-15.3-2.1-21.6L70 40.8V10c0-3.3-2.7-6-6-6zm0 12l.1 27.6 20.9 29.8c3.2 4.6 3.8 10.6 1.5 15.8-2.3 5.2-7.2 8.6-12.8 9.1L67 80.2c-.8-3.3-4.1-5.3-7.4-4.5-3.3.8-5.3 4.1-4.5 7.4l-6.7 18.1c-5.6-.5-10.5-3.9-12.8-9.1-2.3-5.2-1.7-11.2 1.5-15.8L58 43.6V16h6z"/></svg>`
  },
  {
    name: "Node.js",
    category: "backend",
    iconColor: "#339933",
    type: "Runtime",
    isLearning: true,
    svg: `<svg viewBox="0 0 128 128"><path fill="#339933" d="M64 0L8.5 32v64L64 128l55.5-32V32L64 0zm0 14.5l42.9 24.8v49.5L64 113.5 21.1 88.8V39.3L64 14.5z"/></svg>`
  },

  // AI & Machine Learning
  {
    name: "NumPy",
    category: "aiml",
    iconColor: "#013243",
    type: "Numerical Computing",
    svg: `<svg viewBox="0 0 128 128"><path fill="#013243" d="M64 0L0 37v54l64 37 64-37V37L64 0zm0 15.6l47.5 27.4v40L64 110.4 16.5 83v-40L64 15.6z"/><path fill="#4DABCF" d="M42 45h14v18.7l16-18.7h14v38H72V64.3L56 83H42V45z"/></svg>`
  },
  {
    name: "Pandas",
    category: "aiml",
    iconColor: "#150458",
    type: "Data Manipulation",
    svg: `<svg viewBox="0 0 128 128"><path fill="#150458" d="M28 20h22v88H28zm48 0h22v88H76zm-24 24h20v20H52zm0 24h20v20H52z"/><path fill="#E70488" d="M52 20h20v20H52z"/><path fill="#FFCA00" d="M52 88h20v20H52z"/></svg>`
  },
  {
    name: "Matplotlib",
    category: "aiml",
    iconColor: "#11557C",
    type: "Data Visualization",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#11557C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`
  },
  {
    name: "Scikit-learn",
    category: "aiml",
    iconColor: "#F7931E",
    type: "Machine Learning",
    svg: `<svg viewBox="0 0 128 128"><circle cx="48" cy="64" r="32" fill="#F7931E"/><circle cx="80" cy="64" r="32" fill="#3499CD" fill-opacity="0.85"/></svg>`
  },
  {
    name: "TensorFlow",
    category: "aiml",
    iconColor: "#FF6F00",
    type: "Deep Learning",
    isLearning: true,
    svg: `<svg viewBox="0 0 128 128"><path fill="#FF6F00" d="M64 0L14.7 28.5v57L64 114l24.7-14.2V71.2L64 85.5 39.3 71.2V42.8L64 57l49.3-28.5L64 0z"/><path fill="#FFA800" d="M64 57v57l49.3-28.5v-57L64 57z"/></svg>`
  },

  // Databases
  {
    name: "MySQL",
    category: "databases",
    iconColor: "#4479A1",
    type: "RDBMS",
    svg: `<svg viewBox="0 0 128 128"><path fill="#4479A1" d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8zm28 80.8c-2.4 1.1-6 2.2-10.7 2.2-11.6 0-18.7-6.2-18.7-17.6 0-11.9 8-18.7 19.8-18.7 3.9 0 7.2.8 9.6 1.8v32.3z"/></svg>`
  },
  {
    name: "SQL",
    category: "databases",
    iconColor: "#CC292B",
    type: "Query Language",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#CC292B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    iconColor: "#F05032",
    type: "Version Control",
    svg: `<svg viewBox="0 0 128 128"><path fill="#F05032" d="M125.7 57.3L70.7 2.3c-3-3-8-3-11 0L48.2 13.8l14 14c3.2-1.1 7-.3 9.5 2.2 2.6 2.6 3.3 6.4 2.2 9.6l13.5 13.5c3.2-1.1 7-.3 9.6 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.6-2.6-3.4-6.5-2.2-9.7L67.1 46.1v34.4c1 .6 2 1.4 2.7 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-3.6-3.6-3.6-9.4 0-13 .8-.8 1.8-1.5 2.8-2.1V45.2c-1-.5-2-1.3-2.8-2.1-2.6-2.6-3.3-6.5-2.1-9.7L41.3 20 2.3 59c-3 3-3 8 0 11l55 55c3 3 8 3 11 0l57.4-57.7c3-3 3-7.9 0-11z"/></svg>`
  },
  {
    name: "GitHub",
    category: "tools",
    iconColor: "#181717",
    type: "Collaboration & CI",
    svg: `<svg viewBox="0 0 128 128"><path fill="#181717" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.8c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4.1-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.1s10.9.7 16 2.1c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.4 5.9 4.4 11.9v17.7c0 1.7 1.2 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/></svg>`
  },
  {
    name: "VS Code",
    category: "tools",
    iconColor: "#007ACC",
    type: "IDE / Editor",
    svg: `<svg viewBox="0 0 128 128"><path fill="#007ACC" d="M96.7 1.7L67.1 29.5 28.6 0 0 13.9v100.2L28.6 128l38.5-29.5 29.6 27.8 31.3-15.1V16.8L96.7 1.7zm15.1 94.6l-34.9-27 34.9-27v54zm-83.2.9V30.8l29.8 24.5-29.8 26.9z"/></svg>`
  }
];
