// Edit your content here.
export const skills = {
  'Data Analysis': [['Microsoft Excel', 75], ['Power BI', 40], ['SQL', 25], ['Python / Pandas', 25]],
  'Web Development': [['React', 60], ['Node.js', 55], ['MongoDB', 50], ['Tailwind CSS', 55]],
  'Other': [['Git / GitHub', 55], ['Content Writing', 80]],
};

export const experience = [
  {
    role: 'Data Analyst Intern',
    company: 'Skillcraft Technology',
    period: '15 Sep 2026 – 15 Oct 2026',
    type: 'Internship',
    points: [
      'Completed four assigned data tasks on datasets provided by Skillcraft using Excel, Power BI and Python.',
      'Cleaned and validated marketing campaign data in Excel; calculated CTR, conversion rates, ROI and ROAS across platforms.',
      'Built an interactive Power BI dashboard on HR employee attrition with slicers for job role, department, gender and age group.',
      'Cleaned a 9,800-row sales dataset using Python (Pandas) and built a PivotTable dashboard showing sales by category and yearly trend.',
      'Delivered a marketing campaign dashboard and a business insights report with budget findings and recommendations.',
    ],
    tags: ['Microsoft Excel', 'Power BI', 'Python', 'Pandas', 'Data Cleaning', 'KPI Analysis', 'Dashboarding'],
  },
  {
    role: 'Content Writing Intern',
    company: 'Inamigos Foundation',
    period: '29 Mar 2026 – 11 Apr 2026',
    type: 'Internship',
    points: [
      'Wrote LinkedIn articles to raise awareness about the foundation\'s mission and initiatives.',
      'Promoted the foundation\'s work and supported fundraising campaigns on LinkedIn, increasing online visibility and community engagement.',
      'Awarded a Certificate of Achievement for content writing.',
    ],
    tags: ['Content Writing', 'LinkedIn', 'Social Media'],
  },
];

export const projects = [
  {
    title: 'Marketing Campaign Performance Analysis',
    description: 'Analyzed 767 daily campaign records across Facebook, Google Ads, Instagram, LinkedIn and YouTube. Calculated CTR, conversion rates, ROI and ROAS per platform and built a dashboard with charts. Finding: LinkedIn had the highest ROI (2,444%) and actual spend far exceeded planned budget.',
    tags: ['Microsoft Excel', 'PivotTables', 'Data Analysis', 'KPI', 'Dashboard'],
    github: 'https://github.com/ma-ze555/Task_4',
    category: 'data',
  },
  {
    title: 'HR Employee Attrition Dashboard',
    description: 'Built a two-page interactive Power BI dashboard with slicers for job role, department, gender, overtime and age group. Visuals cover attrition by department, job role, overtime, age band, monthly income band and job satisfaction.',
    tags: ['Power BI', 'Data Visualization', 'HR Analytics', 'Dashboard'],
    github: 'https://github.com/ma-ze555/Power_BI',
    category: 'data',
  },
  {
    title: 'Sales Data Cleaning and Dashboard',
    description: 'Cleaned a 9,800-row sales dataset using Python (Pandas): converted date strings, removed 11 rows with missing postal codes, confirmed no duplicates and exported a cleaned CSV. Built a PivotTable dashboard showing sales by category and yearly trend (2015–2018).',
    tags: ['Python', 'Pandas', 'Microsoft Excel', 'PivotTables', 'Data Cleaning'],
    github: 'https://github.com/ma-ze555/Task_1',
    category: 'data',
  },
  {
    title: 'MediaNest',
    description: 'A full-stack media tracker for anime, movies, series, music, and novels, with JWT authentication, real-time search via TMDB, Jikan and Google Books APIs, deployed on Vercel and Render.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/ma-ze555/medianest',
    demo: 'https://medianest-gray.vercel.app',
  },
  {
    title: 'World Explorer Academy',
    description: 'An interactive educational mini-game platform with three games — Math Quest (pop the correct balloon), Science Safari (catch the right animal before it escapes), and History Time Machine (match events to eras).',
    tags: ['React', 'Vite', 'CSS Animations', 'Game Logic'],
    github: 'https://github.com/ma-ze555/world-explorer-academy',
    demo: 'https://world-explorer-academy.vercel.app',
  },
  {
    title: 'Disaster Detection Alarm',
    description: "An earthquake alert system that detects vibrations with an ESP32 seismometer, warns citizens, and sends emergency alerts to rescue teams if they are unsafe or don't respond within 2 minutes.",
    tags: ['Arduino', 'ESP32', 'Seismometer'],
    github: 'https://github.com/ma-ze555/Disaster_Detection_Alarm_System',
  },
];

export const education = [
  ['Atria Institute of Technology', 'B.E. in Information Science and Engineering', '2024 to 2028'],
  ['Heatuda School of Management and Social Science', 'High School', '2022 to 2024'],
  ['Brighter Academy', 'School', 'Up to 2022'],
];
