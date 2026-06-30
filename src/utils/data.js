export const NAV_LINKS = ['home','about','skills','experience','projects','certifications','contact'];

export const SKILLS = {
  
  Frontend: [
    { name: 'HTML', level: 90, icon: 'SiHtml5' },
    { name: 'CSS', level: 85, icon: 'SiCss' },
    { name: 'JavaScript', level: 50, icon: 'SiJavascript' },
    { name: 'React', level: 45, icon: 'SiReact' },
    { name: 'Tailwind CSS', level: 35, icon: 'SiTailwindcss' },
  ],
  Backend: [
    { name: 'Spring Boot', level: 25, icon: 'SiSpring' },
    { name: 'Node.js', level: 50, icon: 'SiNodedotjs' },
    { name: 'Express.js', level: 45, icon: 'SiExpress' },
  ],
  Database: [
    { name: 'MongoDB', level: 50, icon: 'SiMongodb' },
    { name: 'MySQL', level: 70, icon: 'SiMysql' },
  ],
  'AI / ML': [
    { name: 'Scikit-learn', level: 45, icon: 'SiScikitlearn' },
    { name: 'Pandas', level: 40, icon: 'SiPandas' },
    { name: 'NumPy', level: 40, icon: 'SiNumpy' },
    { name: 'Matplotlib', level: 65, icon: 'SiPlotly' },
  ],
  Tools: [
    { name: 'Git', level: 85, icon: 'SiGit' },
    { name: 'GitHub', level: 87, icon: 'SiGithub' },
    { name: 'VS Code', level: 90, icon: 'FaCode' },
    { name: 'Postman', level: 48, icon: 'SiPostman' },
  ],
};

export const PROJECTS = [
    {
    title: 'Hospital Appointment Booking',
    description: 'A responsive web application that enables users to book doctor appointments using a clean and intuitive interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Music Streaming Application',
    description: 'A collaborative music streaming platform featuring playlists, authentication, music browsing, and a responsive UI.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    color: 'from-blue-500/20 to-pink-500/20',
  },
  {

    title: 'AI Resume Builder',
    description: 'An AI-powered resume builder that enables users to create, edit, save, and manage professional resumes with an intuitive and modern interface.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    color: 'from-blue-500/20 to-violet-500/20',
  },
  {
    title: 'Task Collaboration Platform',
    description: 'A collaborative task management platform where teams can create, assign, update, and manage project tasks efficiently.',
    tech: ['React', 'Spring Boot'],
    color: 'from-violet-500/20 to-cyan-500/20',
  },
 
  
 
];

export const CERTIFICATIONS = [
  { title: 'Business Fundamentals for Entrepreneurship', issuer: 'NPTEL', icon: '' },
  { title: 'Artificial Intelligence Foundations', issuer: 'LinkedIn Learning', icon: '' },
  { title: 'Prompt Engineering and AI Agents with ChatGPT', issuer: 'LinkedIn Learning', icon: '' },
  { title: 'Introduction to Web Design and Development', issuer: 'LinkedIn Learning', icon: '' },
];

export const ACHIEVEMENTS = [
  'Machine Learning Enthusiast',
  'Frontend Developer',
  'Exploring Backend Development',
  'Passionate Problem Solver',
  'Team Collaborator',
];

export const TIMELINE = [
  { year: '2024', event: 'Started Programming', desc: 'Began with C fundamentals and algorithmic thinking' },
  { year: '2024', event: 'Started Programming', desc: 'Began with Python fundamentals and algorithmic thinking' },
  { year: '2025', event: 'Learned Web Development', desc: 'Mastered HTML, CSS & JavaScript for responsive websites' },
  { year: '2025', event: 'Built Full Stack Projects', desc: 'Developed real-world applications with databases' },
  { year: '2026', event: 'Learning MERN Stack', desc: 'React, Node.js, Express.js, MongoDB proficiency' },
  { year: '2026', event: 'Exploring AI Engineering', desc: 'ML models, Scikit-learn, Pandas, NumPy & beyond' },
];

export const STATS = [
  { label: 'Projects', value: 4, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'CGPA', value: 7.5, suffix: '', decimals: 1 },
];
