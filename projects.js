// Projects dataset for Devarapalli Vamsi Krishna
// Featuring verified projects from resume and advanced concepts

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "aiml", label: "AI & Machine Learning" }
];

export const projectsData = [
  {
    id: "food-oil-delivery",
    title: "Online Food Oil Home Delivery",
    category: "web",
    categoryLabel: "Web Development",
    status: "Featured Project",
    statusType: "completed",
    image: "assets/images/project_oil_delivery.jpg",
    shortDescription: "A web-based e-commerce application developed for browsing and purchasing edible and cooking oils with seamless customer ordering.",
    fullDescription: "Developed as a practical web application to streamline the ordering of edible cooking oils. Designed an intuitive user interface using HTML and CSS, with robust backend PHP logic handling product catalog rendering, cart actions, and order submissions linked with MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "DBMS"],
    features: [
      "Developed a web-based application for browsing and purchasing food oils",
      "Used HTML and CSS for the user interface and PHP for application functionality",
      "Dynamic shopping cart with real-time total computation",
      "Relational MySQL database schema for inventory and order tracking"
    ],
    disclaimer: "Verified project featured in official resume.",
    githubUrl: "https://github.com/vamsikrishna-dev/food-oil-home-delivery",
    demoUrl: null,
    hasDemoModal: true
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "web",
    categoryLabel: "Front-End & UI/UX",
    status: "Featured Project",
    statusType: "completed",
    image: "assets/images/location_andhra.jpg",
    shortDescription: "Designed a professional, responsive portfolio to showcase technical skills, academic journey, projects, and contact information.",
    fullDescription: "A modern developer portfolio website built from scratch with custom vanilla CSS and JavaScript. Focused on responsive front-end design, interactive presentation, dynamic skill filtering, scroll progress tracking, and accessible layouts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    features: [
      "Designed a professional portfolio concept to showcase skills, projects, and contact information",
      "Focused on responsive front-end design and interactive presentation",
      "Custom glassmorphism floating navigation with scrollspy active highlighting",
      "Clean modular ES JavaScript data architecture for easy maintenance"
    ],
    disclaimer: "Verified project featured in official resume.",
    githubUrl: "https://github.com/vamsikrishna-dev/personal-portfolio",
    demoUrl: "http://localhost:3000",
    hasDemoModal: true
  },
  {
    id: "smart-city-solution",
    title: "Smart City Solution",
    category: "web",
    categoryLabel: "Web & Smart Tech",
    status: "Concept Solution",
    statusType: "concept",
    image: "assets/images/project_smart_city.jpg",
    shortDescription: "Explored a technology-driven solution concept aimed at improving urban services and resident user experience.",
    fullDescription: "A smart civic technology platform concept connecting citizens with urban utility status, municipal services, and public infrastructure updates. Explored digital workflows for issue reporting and city service visibility.",
    technologies: ["HTML", "CSS", "JavaScript", "DBMS", "REST APIs"],
    features: [
      "Explored a technology-driven solution concept aimed at improving urban services and user experience",
      "Centralized civic interface for municipal utility monitoring",
      "Interactive status indicators for public utilities and civic services",
      "Accessible user experience tailored for urban community engagement"
    ],
    disclaimer: "Verified project concept featured in official resume.",
    githubUrl: "https://github.com/vamsikrishna-dev/smart-city-solution",
    demoUrl: null,
    hasDemoModal: true
  },
  {
    id: "brain-tumor-mri",
    title: "Brain Tumor Analysis Using MRI Images",
    category: "aiml",
    categoryLabel: "AI / Machine Learning",
    status: "Research Prototype",
    statusType: "prototype",
    image: "assets/images/project_brain_mri.jpg",
    shortDescription: "A machine learning and deep learning project designed to analyze brain MRI scans and investigate tumor classification.",
    fullDescription: "An academic machine learning project utilizing deep convolutional networks to examine MRI image slices. Features image preprocessing, model training with Python, NumPy, Pandas, and Matplotlib, and Grad-CAM visualization.",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Flask"],
    features: [
      "MRI scan slice preprocessing and contrast normalization",
      "Convolutional Neural Network (CNN) multi-class classification",
      "Heatmap segmentation overlay for tumor region investigation",
      "Educational Flask interface for scan evaluation"
    ],
    disclaimer: "⚠️ Academic Prototype Disclaimer: Developed strictly for academic and experimental research; not a clinical diagnostic system.",
    githubUrl: "https://github.com/vamsikrishna-dev/brain-tumor-mri-analysis",
    demoUrl: null,
    hasDemoModal: true
  },
  {
    id: "payment-fraud-detection",
    title: "Online Payment Fraud Detection",
    category: "aiml",
    categoryLabel: "AI & Machine Learning",
    status: "ML Pipeline Concept",
    statusType: "prototype",
    image: "assets/images/project_fraud_detection.svg",
    shortDescription: "A machine learning pipeline evaluating financial transactions to identify fraudulent patterns and mitigate risks.",
    fullDescription: "An advanced machine learning pipeline tackling financial transaction anomalies and extreme dataset class imbalance using Python, Scikit-learn, and XGBoost.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
    features: [
      "Data preprocessing handling severe imbalanced financial distributions",
      "Feature engineering for transaction velocity and geographic variance",
      "Real-time risk scoring simulation with latency < 15ms"
    ],
    disclaimer: "Educational machine learning prototype exploring fraud detection algorithms on benchmark transaction datasets.",
    githubUrl: "https://github.com/vamsikrishna-dev/payment-fraud-detection",
    demoUrl: null,
    hasDemoModal: true
  }
];
