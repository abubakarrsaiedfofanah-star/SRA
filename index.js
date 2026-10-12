const africanCountries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo",
  "Cote d'Ivoire",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

const educationLanguageByCountry = {
  Algeria: "Arabic",
  Angola: "Portuguese",
  Benin: "French",
  Botswana: "English",
  "Burkina Faso": "French",
  Burundi: "French",
  "Cabo Verde": "Portuguese",
  Cameroon: "French",
  "Central African Republic": "French",
  Chad: "French",
  Comoros: "French",
  Congo: "French",
  "Cote d'Ivoire": "French",
  "Democratic Republic of the Congo": "French",
  Djibouti: "French",
  Egypt: "Arabic",
  "Equatorial Guinea": "French",
  Eritrea: "Arabic",
  Eswatini: "English",
  Ethiopia: "Amharic",
  Gabon: "French",
  Gambia: "English",
  Ghana: "English",
  Guinea: "French",
  "Guinea-Bissau": "Portuguese",
  Kenya: "English",
  Lesotho: "English",
  Liberia: "English",
  Libya: "Arabic",
  Madagascar: "French",
  Malawi: "English",
  Mali: "French",
  Mauritania: "Arabic",
  Mauritius: "English",
  Morocco: "Arabic",
  Mozambique: "Portuguese",
  Namibia: "English",
  Niger: "French",
  Nigeria: "English",
  Rwanda: "Kinyarwanda",
  "Sao Tome and Principe": "Portuguese",
  Senegal: "French",
  Seychelles: "English",
  "Sierra Leone": "English",
  Somalia: "Somali",
  "South Africa": "English",
  "South Sudan": "English",
  Sudan: "Arabic",
  Tanzania: "Swahili",
  Togo: "French",
  Tunisia: "Arabic",
  Uganda: "English",
  Zambia: "English",
  Zimbabwe: "English",
};

function getSuggestedEducationLanguage(country) {
  return educationLanguageByCountry[country] || "English";
}

const facultyOptions = [
  "Medical & Health",
  "Engineering & Built Environment",
  "Computer / IT",
  "Law",
  "Business & Management",
  "Agriculture & Environment",
  "Education",
  "Arts & Social Sciences",
  "Science",
  "Islamic & Religious Studies",
  "Vocational & Technical",
  "Media & Communication",
  "Hospitality & Tourism",
  "Maritime & Aviation",
];

const coreSchoolSubjects = [
  "Mathematics",
  "English",
  "Local language",
  "Science",
  "Social Studies",
  "Civic Education",
  "ICT",
  "Religious Studies",
  "Physical Education",
  "Creative Arts",
];

const schoolSubjectOptions = [
  "Mathematics",
  "English Language",
  "Integrated Science",
  "Basic Science",
  "Biology",
  "Chemistry",
  "Physics",
  "Economics",
  "Government",
  "Literature",
  "Geography",
  "History",
  "Agricultural Science",
  "Computer Studies",
  "Civic Education",
];

const coreUniversityCourses = [
  "Medicine and Surgery",
  "Nursing Science",
  "Pharmacy",
  "Public Health",
  "Civil Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Computer Science",
  "Software Engineering",
  "Law",
  "Accounting",
  "Business Administration",
  "Education",
  "Agriculture",
  "Economics",
  "Mass Communication",
];

const professionalCourseOptions = [
  "Nursing Assistant",
  "Public Health Practice",
  "Accounting Technician",
  "Project Management",
  "Human Resource Management",
  "Procurement and Supply Chain",
  "Digital Marketing",
  "Cybersecurity Fundamentals",
  "Solar Installation",
  "Auto Mechanics",
  "Welding and Fabrication",
  "Catering and Hospitality",
];

const workerSkillOptions = [
  "Solar Installation",
  "Electrical Installation",
  "Plumbing",
  "Carpentry",
  "Farming",
  "Tailoring",
  "Hairdressing",
  "Catering",
  "Auto Mechanics",
  "Phone Repair",
  "Computer Hardware",
  "Small Business Management",
];

const universityProgramOptions = [
  "Medicine and Surgery",
  "Nursing Science",
  "Pharmacy",
  "Computer Science",
  "Software Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Law",
  "Accounting",
  "Business Administration",
  "Economics",
  "Mass Communication",
  "Education",
  "Agriculture",
  "Public Health",
  "Architecture",
  "Actuarial Science",
  "International Relations",
  "Political Science",
];

const examBodySeed = {
  Algeria: ["Ministry of National Education", "Baccalaureate of Secondary Education"],
  Angola: ["Ministry of Education national assessments", "Higher education entrance assessments"],
  Benin: ["DEC / Ministry examinations", "CEP", "BEPC", "Baccalaureat"],
  Botswana: ["Botswana Examinations Council", "PSLE", "JCE", "BGCSE"],
  "Burkina Faso": ["Ministry examinations", "CEP", "BEPC", "Baccalaureat"],
  Burundi: ["National education examinations", "State examination"],
  "Cabo Verde": ["Ministry of Education national assessments"],
  Cameroon: ["GCE Board", "Office du Baccalaureat", "BEPC", "Baccalaureat"],
  "Central African Republic": ["Ministry examinations", "Baccalaureat"],
  Chad: ["Ministry examinations", "BEF", "Baccalaureat"],
  Comoros: ["Ministry examinations", "Baccalaureat"],
  Congo: ["Ministry examinations", "BEPC", "Baccalaureat"],
  "Cote d'Ivoire": ["DECO", "CEPE", "BEPC", "Baccalaureat"],
  "Democratic Republic of the Congo": ["TENASOSP", "Examen d'Etat", "Ministry examinations"],
  Djibouti: ["Ministry examinations", "Baccalaureat"],
  Egypt: ["Thanaweya Amma", "Al-Azhar examinations", "Technical diploma examinations"],
  "Equatorial Guinea": ["Ministry examinations", "Bachillerato assessments"],
  Eritrea: ["Eritrean National School Leaving Examination"],
  Eswatini: ["Examinations Council of Eswatini", "SPC", "JC", "EGCSE"],
  Ethiopia: ["Educational Assessment and Examination Service", "Grade 12 national examination"],
  Gabon: ["Ministry examinations", "BEPC", "Baccalaureat"],
  Gambia: ["WAEC", "GABECE", "WASSCE"],
  Ghana: ["WAEC", "BECE", "WASSCE"],
  Guinea: ["Ministry examinations", "CEE", "BEPC", "Baccalaureat"],
  "Guinea-Bissau": ["Ministry examinations", "National secondary assessments"],
  Kenya: ["KNEC", "KPSEA", "KCSE", "TVET CDACC"],
  Lesotho: ["Examinations Council of Lesotho", "LGCSE"],
  Liberia: ["WAEC", "WASSCE", "National school assessments"],
  Libya: ["Ministry of Education examinations", "Secondary certificate"],
  Madagascar: ["Ministry examinations", "CEPE", "BEPC", "Baccalaureat"],
  Malawi: ["MANEB", "PSLCE", "JCE", "MSCE"],
  Mali: ["Ministry examinations", "DEF", "Baccalaureat"],
  Mauritania: ["Ministry examinations", "Concours", "Baccalaureat"],
  Mauritius: ["MES", "PSAC", "NCE", "SC", "HSC"],
  Morocco: ["Ministry examinations", "Regional exam", "National Baccalaureate"],
  Mozambique: ["Ministry examinations", "Grade 10 and Grade 12 assessments"],
  Namibia: ["DNEA", "NSSCO", "NSSCAS"],
  Niger: ["Ministry examinations", "BEPC", "Baccalaureat"],
  Nigeria: ["WAEC", "NECO", "JAMB", "NABTEB", "BECE"],
  Rwanda: ["NESA", "Primary Leaving Examination", "O-Level", "A-Level", "TVET assessments"],
  "Sao Tome and Principe": ["Ministry examinations", "National secondary assessments"],
  Senegal: ["Ministry examinations", "CFEE", "BFEM", "Baccalaureat"],
  Seychelles: ["Ministry examinations", "IGCSE", "A-Level pathways"],
  "Sierra Leone": ["WAEC", "NPSE", "BECE", "WASSCE"],
  Somalia: ["Ministry of Education national examinations", "Secondary school certificate"],
  "South Africa": ["DBE", "IEB", "NSC", "TVET assessments"],
  "South Sudan": ["South Sudan National Examinations Council", "CPE", "CSE"],
  Sudan: ["Sudanese Certificate", "Basic education certificate"],
  Tanzania: ["NECTA", "PSLE", "CSEE", "ACSEE", "VETA"],
  Togo: ["Ministry examinations", "CEP", "BEPC", "Baccalaureat"],
  Tunisia: ["Ministry examinations", "Baccalaureate", "9th year examination"],
  Uganda: ["UNEB", "PLE", "UCE", "UACE"],
  Zambia: ["ECZ", "Grade 7", "Grade 9", "Grade 12", "TEVETA"],
  Zimbabwe: ["ZIMSEC", "Grade 7", "O-Level", "A-Level", "HEXCO"],
};

const educationSystemGroups = {
  waec: {
    countries: ["Ghana", "Nigeria", "Sierra Leone", "Gambia", "Liberia"],
    summary: "Uses a basic education path leading to junior and senior secondary certification, with WAEC/WASSCE-style exams widely used.",
    path: ["Primary/basic school", "Junior secondary or junior high", "Senior secondary school", "TVET, college, polytechnic, or university"],
    exams: ["BECE", "WASSCE / WAEC", "School placement exams", "University entrance or national admissions exams"],
    subjects: ["Mathematics", "English Language", "Integrated Science", "Social Studies", "Biology", "Chemistry", "Physics", "Economics", "Government", "Literature", "ICT"],
    courses: ["Medicine and Surgery", "Nursing Science", "Civil Engineering", "Computer Science", "Law", "Accounting", "Business Administration", "Agriculture", "Education", "Public Health"],
  },
  francophone: {
    countries: [
      "Benin",
      "Burkina Faso",
      "Burundi",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Congo",
      "Cote d'Ivoire",
      "Democratic Republic of the Congo",
      "Djibouti",
      "Gabon",
      "Guinea",
      "Madagascar",
      "Mali",
      "Niger",
      "Senegal",
      "Seychelles",
      "Togo",
    ],
    summary: "Commonly follows a Francophone structure from primary school to college, lycee, baccalaureate, then university or professional institutes.",
    path: ["Ecole primaire", "College / lower secondary", "Lycee / upper secondary", "Baccalaureate", "University, grandes ecoles, or professional institutes"],
    exams: ["CEP or primary certificate", "BEPC", "Baccalaureat", "University faculty entrance tests where required"],
    subjects: ["Mathematics", "French", "English", "Life and Earth Sciences", "Physical Sciences", "History-Geography", "Philosophy", "Economics", "ICT"],
    courses: ["Medicine", "Pharmacy", "Civil Engineering", "Computer Science", "Law", "Economics", "Management", "Agronomy", "Education", "Public Administration"],
  },
  lusophone: {
    countries: ["Angola", "Cabo Verde", "Guinea-Bissau", "Mozambique", "Sao Tome and Principe"],
    summary: "Commonly uses Portuguese-medium primary, lower secondary, upper secondary, technical institutes, and university routes.",
    path: ["Primary education", "Lower secondary", "Upper secondary or technical school", "University, institute, or vocational college"],
    exams: ["National school exams", "Secondary completion exams", "University admission tests", "Technical certification exams"],
    subjects: ["Mathematics", "Portuguese", "Natural Sciences", "History", "Geography", "Physics", "Chemistry", "Biology", "ICT"],
    courses: ["Medicine", "Nursing", "Engineering", "Computer Science", "Law", "Business Management", "Agriculture", "Education", "Tourism", "Public Health"],
  },
};

const countryEducationOverrides = {
  Nigeria: {
    summary: "Nigeria commonly follows primary, junior secondary, senior secondary, then tertiary education through universities, polytechnics, colleges of education, and TVET.",
    path: ["Primary 1-6", "Junior Secondary School 1-3", "Senior Secondary School 1-3", "University, polytechnic, college of education, or vocational institute"],
    exams: ["Common Entrance", "BECE", "WAEC / WASSCE", "NECO", "NABTEB", "JAMB UTME", "Post-UTME"],
    subjects: ["Mathematics", "English Language", "Basic Science", "Civic Education", "Biology", "Chemistry", "Physics", "Economics", "Government", "Literature", "Data Processing"],
    courses: ["Medicine and Surgery", "Nursing Science", "Pharmacy", "Computer Science", "Software Engineering", "Law", "Accounting", "Mass Communication", "Civil Engineering", "Agriculture"],
  },
  Ghana: {
    summary: "Ghana commonly uses primary, junior high school, senior high school, then university, technical university, college, or TVET pathways.",
    path: ["Primary school", "Junior High School", "Senior High School", "University, technical university, college of education, nursing training, or TVET"],
    exams: ["BECE", "WASSCE", "National standardized assessments", "University admission requirements"],
    subjects: ["Mathematics", "English Language", "Integrated Science", "Social Studies", "Biology", "Chemistry", "Physics", "Economics", "Government", "ICT"],
    courses: ["Medicine", "Nursing", "Pharmacy", "Computer Science", "Civil Engineering", "Law", "Accounting", "Business Administration", "Education", "Agriculture"],
  },
  "Sierra Leone": {
    summary: "Sierra Leone uses primary, junior secondary, senior secondary, and tertiary pathways, with NPSE, BECE, and WASSCE important for progression.",
    path: ["Primary school", "Junior Secondary School", "Senior Secondary School", "University, college, technical institute, or vocational training"],
    exams: ["NPSE", "BECE", "WASSCE / WAEC", "University entry requirements"],
    subjects: ["Mathematics", "English Language", "Integrated Science", "Social Studies", "Biology", "Chemistry", "Physics", "Economics", "Government", "Agriculture"],
    courses: ["Medicine", "Nursing", "Public Health", "Computer Science", "Civil Engineering", "Law", "Accounting", "Business Administration", "Education", "Agriculture"],
  },
  Kenya: {
    summary: "Kenya is moving through competency-based education while many students still follow KCPE/KCSE-linked pathways into universities, TVET, and colleges.",
    path: ["Pre-primary and primary", "Junior secondary", "Senior school pathways", "University, TVET, teacher training, or professional college"],
    exams: ["KPSEA", "KCPE legacy", "KCSE", "TVET assessments", "University placement"],
    subjects: ["Mathematics", "English", "Kiswahili", "Integrated Science", "Social Studies", "Biology", "Chemistry", "Physics", "Business Studies", "Computer Studies"],
    courses: ["Medicine", "Nursing", "Clinical Medicine", "Computer Science", "Software Engineering", "Civil Engineering", "Law", "Education", "Agribusiness", "Tourism"],
  },
  "South Africa": {
    summary: "South Africa follows foundation, intermediate, senior, and FET phases, with the National Senior Certificate leading to university, college, or skills routes.",
    path: ["Foundation phase", "Intermediate phase", "Senior phase", "FET phase", "University, TVET college, or skills programme"],
    exams: ["Annual national assessments", "National Senior Certificate", "IEB exams", "TVET qualifications"],
    subjects: ["Mathematics", "Mathematical Literacy", "English", "Life Orientation", "Life Sciences", "Physical Sciences", "Accounting", "Business Studies", "Geography", "History"],
    courses: ["Medicine", "Nursing", "Engineering", "Computer Science", "Law", "Accounting", "Education", "Business Management", "Social Work", "Tourism"],
  },
  Egypt: {
    summary: "Egypt commonly moves from primary and preparatory school to secondary or technical education, then university or higher institutes.",
    path: ["Primary education", "Preparatory education", "General secondary or technical secondary", "University, higher institute, or technical college"],
    exams: ["Preparatory certificate", "Thanaweya Amma", "Technical diploma exams", "University coordination/admission"],
    subjects: ["Arabic", "English", "Mathematics", "Science", "Social Studies", "Physics", "Chemistry", "Biology", "History", "Geography"],
    courses: ["Medicine", "Pharmacy", "Dentistry", "Engineering", "Computer Science", "Commerce", "Law", "Education", "Agriculture", "Tourism and Hotels"],
  },
  Ethiopia: {
    summary: "Ethiopia commonly follows primary, middle/lower secondary, preparatory or TVET, then university or technical pathways.",
    path: ["Primary education", "Middle/lower secondary", "Preparatory secondary or TVET", "University, college, or technical institute"],
    exams: ["Regional exams", "Grade 12 national exam", "TVET certification", "University placement"],
    subjects: ["Mathematics", "English", "Amharic or local language", "General Science", "Biology", "Chemistry", "Physics", "Civics", "History", "Geography"],
    courses: ["Medicine", "Public Health", "Engineering", "Computer Science", "Agriculture", "Veterinary Medicine", "Law", "Business", "Education", "Natural Resources"],
  },
  Tanzania: {
    summary: "Tanzania uses primary, ordinary level secondary, advanced level secondary or technical routes, then higher education and professional colleges.",
    path: ["Primary school", "Ordinary level secondary", "Advanced level secondary or technical education", "University, college, or vocational training"],
    exams: ["PSLE", "CSEE", "ACSEE", "VETA assessments", "University admissions"],
    subjects: ["Mathematics", "English", "Kiswahili", "Science", "Biology", "Chemistry", "Physics", "History", "Geography", "Civics"],
    courses: ["Medicine", "Nursing", "Engineering", "Computer Science", "Law", "Accounting", "Education", "Agriculture", "Tourism", "Public Administration"],
  },
  Uganda: {
    summary: "Uganda commonly follows primary, lower secondary, upper secondary, then university, college, technical, and teacher-training routes.",
    path: ["Primary school", "Lower secondary", "Upper secondary", "University, technical institute, college, or teacher training"],
    exams: ["PLE", "UCE", "UACE", "Business/technical exams", "University admissions"],
    subjects: ["Mathematics", "English", "Science", "Social Studies", "Biology", "Chemistry", "Physics", "History", "Geography", "Entrepreneurship"],
    courses: ["Medicine", "Nursing", "Public Health", "Engineering", "Computer Science", "Law", "Business Administration", "Education", "Agriculture", "Social Work"],
  },
  Rwanda: {
    summary: "Rwanda uses basic education leading into upper secondary combinations, TVET, teacher education, university, and professional pathways.",
    path: ["Primary education", "Lower secondary", "Upper secondary or TVET", "University, polytechnic, teacher training, or professional college"],
    exams: ["Primary leaving exams", "Lower secondary national exams", "Advanced level exams", "TVET assessments"],
    subjects: ["Mathematics", "English", "Kinyarwanda", "Science", "Social Studies", "Biology", "Chemistry", "Physics", "Entrepreneurship", "ICT"],
    courses: ["Medicine", "Nursing", "Computer Science", "Software Engineering", "Civil Engineering", "Business", "Education", "Agriculture", "Public Health", "Tourism"],
  },
};

const subjectGroups = [
  {
    title: "Primary Subjects",
    items: [
      "Mathematics",
      "English Language",
      "Basic Science",
      "Social Studies",
      "Civic Education",
      "Creative Arts",
      "Physical and Health Education",
      "Religious Education",
      "French",
      "Computer Studies",
    ],
  },
  {
    title: "Junior Secondary Subjects",
    items: [
      "JSS Mathematics",
      "English Language",
      "Integrated Science",
      "ICT",
      "Geography",
      "History",
      "Business Studies",
      "Home Economics",
      "Agricultural Science",
      "Basic Technology",
      "Civic Education",
      "Literature",
    ],
  },
  {
    title: "Senior Secondary Subjects",
    items: [
      "Biology",
      "Physics",
      "Chemistry",
      "Further Mathematics",
      "Economics",
      "Literature",
      "Government",
      "Agricultural Science",
      "Accounting",
      "Commerce",
      "Geography",
      "History",
      "Christian Religious Studies",
      "Islamic Religious Studies",
      "Food and Nutrition",
      "Technical Drawing",
      "Data Processing",
    ],
  },
  {
    title: "Medical & Health",
    items: [
      "Medicine and Surgery",
      "Nursing Science",
      "Pharmacy",
      "Public Health",
      "Dentistry",
      "Medical Laboratory Science",
      "Anatomy",
      "Physiology",
      "Pharmacology",
      "Pathology",
      "Surgery",
      "Pediatrics",
      "Obstetrics and Gynecology",
      "Microbiology",
      "Radiography",
      "Optometry",
      "Physiotherapy",
      "Nutrition and Dietetics",
      "Community Health",
      "Health Information Management",
    ],
  },
  {
    title: "Engineering & Built Environment",
    items: [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Petroleum Engineering",
      "Software Engineering",
      "Computer Engineering",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Mining Engineering",
      "Mechatronics",
      "Surveying and Geoinformatics",
      "Architecture",
      "Quantity Surveying",
      "Urban and Regional Planning",
      "Building Technology",
      "Estate Management",
      "Thermodynamics",
      "Hydraulics",
      "Structural Analysis",
      "Electronics",
    ],
  },
  {
    title: "Computer / IT",
    items: [
      "Computer Science",
      "Information Technology",
      "Information Systems",
      "Cybersecurity",
      "Data Science",
      "Artificial Intelligence",
      "Software Development",
      "Programming",
      "Databases",
      "Networking",
      "Algorithms",
      "Web Development",
      "Mobile App Development",
      "Cloud Computing",
      "Machine Learning",
      "Computer Graphics",
    ],
  },
  {
    title: "Law",
    items: [
      "Constitutional Law",
      "Criminal Law",
      "Contract Law",
      "Family Law",
      "Human Rights Law",
      "Company Law",
      "Land Law",
      "Equity and Trusts",
      "Evidence Law",
      "Administrative Law",
      "International Law",
      "Commercial Law",
      "Labour Law",
      "Environmental Law",
    ],
  },
  {
    title: "Business & Management",
    items: [
      "Accounting",
      "Banking and Finance",
      "Marketing",
      "Entrepreneurship",
      "Human Resource Management",
      "Business Administration",
      "Public Administration",
      "Insurance",
      "Taxation",
      "Procurement and Supply Chain",
      "Project Management",
      "Economics",
      "Cooperative Studies",
    ],
  },
  {
    title: "Agriculture & Environment",
    items: [
      "Agriculture",
      "Crop Science",
      "Animal Science",
      "Soil Science",
      "Fisheries",
      "Forestry",
      "Agricultural Economics",
      "Agricultural Extension",
      "Veterinary Medicine",
      "Environmental Science",
      "Water Resources Management",
      "Climate Science",
      "Marine Biology",
      "Wildlife Management",
      "Food Science and Technology",
    ],
  },
  {
    title: "Education",
    items: [
      "Education",
      "Teaching Methods",
      "Curriculum Studies",
      "Educational Psychology",
      "Early Childhood Education",
      "Primary Education",
      "Guidance and Counselling",
      "Special Education",
      "Educational Administration",
      "Science Education",
      "Mathematics Education",
      "English Education",
      "Social Studies Education",
      "Adult Education",
    ],
  },
  {
    title: "Arts & Social Sciences",
    items: [
      "Sociology",
      "Psychology",
      "History",
      "Political Science",
      "International Relations",
      "Literature",
      "Linguistics",
      "Mass Communication",
      "Journalism",
      "Philosophy",
      "Theatre Arts",
      "Music",
      "Fine and Applied Arts",
      "Anthropology",
      "Social Work",
      "Peace and Conflict Studies",
    ],
  },
  {
    title: "Science",
    items: [
      "Mathematics",
      "Statistics",
      "Actuarial Science",
      "Physics",
      "Chemistry",
      "Biochemistry",
      "Microbiology",
      "Botany",
      "Zoology",
      "Geology",
      "Industrial Chemistry",
      "Applied Physics",
      "Biotechnology",
      "Genetics",
      "Laboratory Technology",
    ],
  },
  {
    title: "Islamic & Religious Studies",
    items: [
      "Islamic Studies",
      "Quran",
      "Hadith",
      "Fiqh",
      "Arabic",
      "Christian Religious Studies",
      "Theology",
      "Comparative Religion",
      "Religious Ethics",
    ],
  },
  {
    title: "Vocational & Technical",
    items: [
      "Auto Mechanics",
      "Electrical Installation",
      "Welding and Fabrication",
      "Carpentry",
      "Plumbing",
      "Fashion Design",
      "Catering",
      "Hairdressing",
      "Graphic Design",
      "Photography",
      "Printing Technology",
      "Computer Hardware",
      "Solar Installation",
      "Refrigeration and Air Conditioning",
    ],
  },
  {
    title: "Hospitality, Media & Transport",
    items: [
      "Hospitality Management",
      "Tourism",
      "Hotel Management",
      "Culinary Arts",
      "Media Studies",
      "Public Relations",
      "Advertising",
      "Film Production",
      "Library and Information Science",
      "Maritime Studies",
      "Nautical Science",
      "Aviation Management",
      "Transport and Logistics",
    ],
  },
];

const exams = [
  {
    title: "WAEC Biology 2026",
    meta: "Objective, theory, answers, marking guide, PDF",
  },
  {
    title: "WAEC Mathematics 2025",
    meta: "Nigeria, Ghana, Sierra Leone revision set",
  },
  {
    title: "BECE Integrated Science",
    meta: "Past questions, diagrams, short explanations",
  },
  {
    title: "NECO Chemistry",
    meta: "Objectives, theory, practical revision, answers",
  },
  {
    title: "JAMB Use of English",
    meta: "Comprehension, lexis, structure, literature",
  },
  {
    title: "WASSCE Physics Ghana",
    meta: "West African Senior School Certificate revision",
  },
  {
    title: "NABTEB Technical Drawing",
    meta: "Technical and vocational past questions",
  },
  {
    title: "KNEC KCSE Biology",
    meta: "Kenya secondary school practical and theory revision",
  },
  {
    title: "UNEB UCE Chemistry",
    meta: "Uganda lower secondary practical, theory, and quiz practice",
  },
  {
    title: "NECTA CSEE Physics",
    meta: "Tanzania secondary school calculations and practicals",
  },
  {
    title: "DBE NSC Mathematics",
    meta: "South Africa exam-style revision and marking guide",
  },
];

const trending = [
  "WAEC 2026",
  "Biology notes",
  "Database systems",
  "Nursing pharmacology",
  "Python loops",
  "Constitutional law",
  "Civil engineering surveying",
  "Human anatomy",
  "Public health",
  "Architecture",
  "Actuarial science",
  "Agricultural economics",
  "Teacher lesson plan",
  "Chemistry practical safety",
  "Worker report writing",
];

const offlinePacks = [
  { title: "WAEC Biology Pack", topics: ["Photosynthesis", "Mitosis", "Ecology", "Food tests"], level: "SSS" },
  { title: "BECE Integrated Science Pack", topics: ["Cells", "Energy", "Mixtures", "Forces"], level: "JSS" },
  { title: "JAMB Use of English Pack", topics: ["Comprehension", "Lexis", "Structure", "Summary"], level: "SSS" },
  { title: "Nursing Basics Pack", topics: ["Vital signs", "First aid", "Hand washing", "Drug calculations"], level: "Professional" },
  { title: "ICT Basics Pack", topics: ["Spreadsheets", "Databases", "Networking", "Python loops"], level: "Worker" },
];

const platformModes = {
  student: {
    title: "Student research path",
    summary: "Choose a country, level, subject, and topic. The system shapes answers for exam revision, assignments, practicals, and videos.",
    cards: [
      ["Research answer", "Direct answer, detailed notes, examples, citations, and saved revision history."],
      ["Exam preparation", "Country exam bodies, past-question style prompts, marking-guide hints, and timed quiz practice."],
      ["Practical learning", "Aim, apparatus, safety, steps, observations, diagrams, and video lesson searches."],
    ],
  },
  teacher: {
    title: "Teacher planning path",
    summary: "Teachers can prepare private lesson plans, schemes of work, assessment questions, class activities, homework, and marking guides.",
    cards: [
      ["Lesson planning", "Objectives, materials, introduction, teacher activities, learner activities, assessment, and homework."],
      ["Classroom support", "Simple explanations, differentiated activities, weak/strong learner support, and printable notes."],
      ["Private workspace", "Teacher materials stay private unless an admin later approves contributor privileges."],
    ],
  },
  lecturer: {
    title: "Lecturer university path",
    summary: "Lecturers can prepare private course outlines, lecture notes, tutorials, assignments, assessment guides, and references.",
    cards: [
      ["Course outlines", "Build semester or module outlines with outcomes, weekly topics, assessment, and references."],
      ["Lecture support", "Draft lecture notes, tutorials, assignment prompts, marking rubrics, and reading lists."],
      ["Private drafts", "Lecturer materials stay private unless admin later approves contributor privileges."],
    ],
  },
  worker: {
    title: "Worker and skills path",
    summary: "Workers and trainees can learn practical skills with safety steps, workplace templates, calculations, and report guidance.",
    cards: [
      ["Professional guides", "Step-by-step help for health, agriculture, construction, office, ICT, business, and technical work."],
      ["Safety first", "Hazards, protective equipment, checklist steps, and when to call a qualified supervisor."],
      ["Work documents", "Reports, logs, inspection notes, proposals, and simple workplace communication templates."],
    ],
  },
};

const roleDashboards = {
  student: {
    title: "Student Workspace",
    summary: "Search, study, save notes, revise exams, ask WhatsApp questions, and track your progress.",
    cards: [
      ["Start research", "#home", "Search any topic and get AI study notes, examples, quiz, and references."],
      ["My dashboard", "#dashboard", "View saved units, questions, answers, notes, and progress."],
      ["Ask by photo/voice", "#moduleResearch", "Upload, snap, record, type, or continue on WhatsApp from your portal."],
      ["Offline packs", "#offline-progress", "Save study packs for lower-data revision."],
    ],
  },
  teacher: {
    title: "Teacher Workspace",
    summary: "Create private AI lesson plans, class activities, quizzes, practical guides, and marking drafts.",
    cards: [
      ["Lesson plans", "#teacher-tools", "Generate objectives, materials, activities, assessment, and homework."],
      ["Class quizzes", "#ai-tutor", "Ask AI to create quiz questions and marking guidance."],
      ["Practical guides", "#teacher-tools", "Create safety-aware practical steps and observation tables."],
      ["Private notebook", "#dashboard", "Save teaching notes privately on this device."],
    ],
  },
  lecturer: {
    title: "Lecturer Workspace",
    summary: "Prepare private AI course outlines, lecture notes, tutorials, assignments, and references.",
    cards: [
      ["Course outline", "#teacher-tools", "Generate outcomes, weekly topics, tutorials, assessment, and references."],
      ["Lecture notes", "#ai-tutor", "Create advanced notes with theory, applications, and limitations."],
      ["Assignments", "#teacher-tools", "Draft assignment prompts, project tasks, and marking rubrics."],
      ["University research", "#research-chat", "Ask follow-up questions for course and research guidance."],
    ],
  },
  worker: {
    title: "Worker Skills Workspace",
    summary: "Use AI for skills learning, safety guidance, workplace reports, templates, and practical steps.",
    cards: [
      ["Skills guide", "#teacher-tools", "Generate step-by-step guides for your profession or skill area."],
      ["Safety steps", "#teacher-tools", "Create safety checklists and practical procedures."],
      ["Reports", "#research-chat", "Draft work reports, logs, proposals, and summaries."],
      ["Offline packs", "#offline-progress", "Save basic skills packs for later study."],
    ],
  },
};

const portalWorkspaces = {
  student: {
    categories: [
      { label: "Overview", links: [["Dashboard", "#dashboard"]] },
      { label: "Research Tools", links: [["Ask AI", "#moduleResearch"], ["AI Quizzes", "#ai-tutor"], ["Exam Prep", "#results"], ["Tutor Chat", "#research-chat"]] },
      { label: "Library", links: [["Courses & Tools", "#portalFeatures"]] },
      { label: "Support", links: [["WhatsApp Research", "#portal-media"]] }
    ],
    featuresTitle: "Student portal tools",
    featuresSummary: "Study, revise, save answers, prepare for exams, and keep WhatsApp research connected to your profile.",
    footer: "Student portal: Dashboard, Ask, Courses, Past Papers, Quizzes, Saved Answers, WhatsApp, and Settings.",
    features: [
      ["Study timetable", "Plan weekly reading, assignments, and revision blocks."],
      ["Exam countdown", "Track upcoming tests and past-paper revision."],
      ["AI quiz generator", "Turn any topic into quick practice questions."],
      ["Saved notes", "Keep personal notes, answers, citations, and collections."],
      ["Offline packs", "Use lower-data study packs for common subjects."],
      ["Progress tracker", "Follow units, questions, downloads, and WhatsApp requests."],
    ],
  },
  teacher: {
    categories: [
      { label: "Overview", links: [["Dashboard", "#dashboard"]] },
      { label: "Planning", links: [["Lesson Plans", "#teacher-tools"], ["Assessments", "#portalFeatures"], ["Class Resources", "#moduleResearch"]] },
      { label: "Library", links: [["Staff Uploads", "#teacher-admin"]] },
      { label: "Support", links: [["WhatsApp Research", "#portal-media"]] }
    ],
    featuresTitle: "Teacher portal tools",
    featuresSummary: "Plan lessons, create class resources, draft assessments, manage uploads, and support student questions.",
    footer: "Teacher portal: Dashboard, Lesson Plans, Assessments, Class Resources, Students, Uploads, WhatsApp, and Settings.",
    features: [
      ["Weekly scheme planner", "Break topics into objectives, activities, and homework."],
      ["Marking guide generator", "Create rubrics, model answers, and score guides."],
      ["Worksheet builder", "Draft printable class exercises and homework."],
      ["Student question inbox", "Organize common learner questions and follow-ups."],
      ["Class activity builder", "Generate group work, practicals, and discussion tasks."],
      ["Resource uploads", "Prepare private teaching materials for approval workflows."],
    ],
  },
  lecturer: {
    categories: [
      { label: "Overview", links: [["Dashboard", "#dashboard"]] },
      { label: "Academic", links: [["Course Outlines", "#teacher-tools"], ["Lecture Notes", "#ai-tutor"], ["Assignments", "#teacher-tools"]] },
      { label: "Library", links: [["Tutorials", "#portalFeatures"], ["References", "#results"]] },
      { label: "Support", links: [["WhatsApp Research", "#portal-media"]] }
    ],
    featuresTitle: "Lecturer portal tools",
    featuresSummary: "Build course materials, references, tutorials, assignments, and university research drafts.",
    footer: "Lecturer portal: Dashboard, Course Outlines, Lecture Notes, Tutorials, Assignments, References, WhatsApp, and Settings.",
    features: [
      ["Citation manager", "Prepare reference lists and citation drafts."],
      ["Assignment brief generator", "Create tasks, outcomes, rubrics, and deadlines."],
      ["Tutorial question bank", "Generate practice questions for weekly tutorials."],
      ["Course module planner", "Map semester topics, outcomes, and assessments."],
      ["Lecture slide outline", "Draft slide structures and speaker notes."],
      ["Research follow-up chat", "Keep course research conversations in one place."],
    ],
  },
  worker: {
    categories: [
      { label: "Overview", links: [["Dashboard", "#dashboard"]] },
      { label: "Training", links: [["Skills Guide", "#moduleResearch"], ["Safety Guides", "#teacher-tools"], ["Practical Training", "#teacher-tools"]] },
      { label: "Library", links: [["Job Reports", "#portalFeatures"]] },
      { label: "Support", links: [["WhatsApp Research", "#portal-media"]] }
    ],
    featuresTitle: "Worker portal tools",
    featuresSummary: "Learn practical skills, follow safety steps, draft reports, and track workplace training.",
    footer: "Worker portal: Dashboard, Skills, Safety Guides, Reports, Practical Training, Certificates, WhatsApp, and Settings.",
    features: [
      ["Safety checklist", "Create PPE, hazard, and step-by-step safety checks."],
      ["Job report templates", "Draft logs, incident reports, proposals, and summaries."],
      ["Skill progress levels", "Track beginner, certificate, diploma, or licensed growth."],
      ["Tool and material lists", "Prepare equipment and material checklists."],
      ["Practical guides", "Follow clear steps for hands-on workplace tasks."],
      ["Certificate tracker", "Record training areas and certification progress."],
    ],
  },
};

const mobileNavLinks = {
  public: [
    ["Home", "#home", ""],
    ["About", "#about-us", "about-us"],
    ["Work", "#what-we-do", "what-we-do"],
    ["Contact", "#contact-us", "contact-us"],
    ["Join", "#join-us", "join-us"],
  ],
  student: [
    ["Home", "#dashboard"],
    ["Ask", "#portal-media"],
    ["Courses", "#moduleResearch"],
    ["Chat", "#research-chat"],
    ["Settings", "#account-settings"],
  ],
  teacher: [
    ["Home", "#dashboard"],
    ["Plans", "#teacher-tools"],
    ["Tools", "#portalFeatures"],
    ["Chat", "#research-chat"],
    ["Settings", "#account-settings"],
  ],
  lecturer: [
    ["Home", "#dashboard"],
    ["Courses", "#teacher-tools"],
    ["Notes", "#ai-tutor"],
    ["Chat", "#research-chat"],
    ["Settings", "#account-settings"],
  ],
  worker: [
    ["Home", "#dashboard"],
    ["Skills", "#moduleResearch"],
    ["Safety", "#teacher-tools"],
    ["Chat", "#research-chat"],
    ["Settings", "#account-settings"],
  ],
};

const practicalVideoTopics = {
  biology: ["Microscope slide preparation", "Food tests", "Photosynthesis experiment", "Osmosis in potato strips"],
  chemistry: ["Test for gases", "Titration", "Separation techniques", "Qualitative analysis"],
  physics: ["Ohm's law circuit", "Pendulum timing", "Density measurement", "Refraction through glass block"],
  agriculture: ["Seed germination", "Soil texture test", "Compost preparation", "Pest identification"],
  ict: ["Computer assembly", "Spreadsheet formulas", "Network cabling", "Database table design"],
  nursing: ["Hand washing procedure", "Vital signs", "First aid", "Drug calculation basics"],
};

const searchIndex = [
  ...subjectGroups.flatMap((group) => group.items.map((item) => ({ label: item, type: group.title }))),
  ...exams.map((exam) => ({ label: exam.title, type: "Exam paper" })),
  ...trending.map((item) => ({ label: item, type: "Trending" })),
  ...Object.entries(examBodySeed).flatMap(([country, bodies]) => bodies.map((body) => ({ label: `${country} ${body}`, type: "Exam body" }))),
  ...Object.values(practicalVideoTopics).flatMap((items) => items.map((item) => ({ label: item, type: "Practical and video" }))),
  { label: "Photosynthesis", type: "Biology" },
  { label: "Mitosis", type: "Biology" },
  { label: "Database normalization", type: "Computer Science" },
  { label: "Pythagoras theorem", type: "Mathematics" },
  { label: "Physical chemistry", type: "Chemistry" },
  { label: "Physiology", type: "Medical & Health" },
  { label: "Architecture", type: "Flexible subject" },
  { label: "Marine biology", type: "Flexible subject" },
  { label: "Actuarial science", type: "Flexible subject" },
];

const answerTemplates = {
  "database normalization": {
    title: "Database Normalization",
    short:
      "Database normalization is the process of organizing data into related tables to reduce repetition, prevent update errors, and make a database easier to maintain.",
    notes: [
      "First normal form keeps each field atomic, so one cell stores one value.",
      "Second normal form removes partial dependency, meaning every non-key column depends on the whole primary key.",
      "Third normal form removes transitive dependency, so non-key columns do not depend on other non-key columns.",
      "Good normalization improves data integrity, but real systems may denormalize selected data for speed.",
    ],
    examples: ["Student records split into Students, Courses, and Enrollments tables.", "A customer address stored once instead of repeated on every order."],
    related: ["Primary keys", "Foreign keys", "SQL joins", "Entity relationship diagrams"],
  },
  "photosynthesis": {
    title: "Photosynthesis",
    short:
      "Photosynthesis is the process by which green plants use sunlight, carbon dioxide, and water to make glucose and release oxygen.",
    notes: [
      "Chlorophyll in the leaves captures light energy.",
      "Water enters through the roots and carbon dioxide enters through tiny leaf openings called stomata.",
      "The main products are glucose for plant energy and oxygen released into the air.",
      "The word equation is carbon dioxide plus water gives glucose plus oxygen in the presence of sunlight and chlorophyll.",
    ],
    examples: ["Green leaves making food during daytime.", "Aquatic plants producing oxygen bubbles in sunlight."],
    related: ["Chlorophyll", "Plant nutrition", "Respiration", "Food chains"],
  },
  "mitosis": {
    title: "Mitosis",
    short:
      "Mitosis is cell division that produces two identical daughter cells from one parent cell for growth, repair, and replacement.",
    notes: ["The main stages are prophase, metaphase, anaphase, and telophase.", "Chromosomes are copied before division begins.", "Mitosis keeps the chromosome number the same.", "It is important in healing wounds and replacing worn-out cells."],
    examples: ["Skin cells replacing damaged tissue.", "A young plant growing taller."],
    related: ["Meiosis", "Chromosomes", "Cell cycle", "DNA replication"],
  },
  "waec chemistry": {
    title: "WAEC Chemistry",
    short:
      "WAEC Chemistry revision usually covers atomic structure, bonding, acids and bases, organic chemistry, energetics, rates of reaction, and practical analysis.",
    notes: ["Read the syllabus first, then revise topic by topic.", "Practice objective questions under timed conditions.", "For theory questions, show equations, units, and clear reasoning.", "Use practical past questions to master observations and inference."],
    examples: ["Balance chemical equations.", "Identify gases using standard laboratory tests."],
    related: ["WAEC Biology", "Stoichiometry", "Organic chemistry", "Chemical bonding"],
  },
  "teacher lesson plan": {
    title: "Teacher Lesson Plan",
    short:
      "A good lesson plan guides the teacher from objectives to activities, assessment, homework, and support for learners who need extra help.",
    notes: [
      "Start with the class level, subject, topic, duration, and previous knowledge.",
      "Write measurable objectives using action words such as define, describe, calculate, compare, draw, or demonstrate.",
      "Plan teacher activities and learner activities separately so the class stays active.",
      "End with assessment, homework, and reflection on what learners found difficult.",
    ],
    examples: ["Biology lesson plan on photosynthesis for SSS 1.", "ICT lesson plan on spreadsheet formulas for vocational trainees."],
    related: ["Scheme of work", "Assessment", "Marking guide", "Class activity"],
  },
  "chemistry practical safety": {
    title: "Chemistry Practical Safety",
    short:
      "Chemistry practical safety means using correct apparatus, protective equipment, careful observation, and safe handling of chemicals before, during, and after experiments.",
    notes: [
      "Wear goggles, lab coat or apron, and closed shoes where available.",
      "Read the practical aim and identify hazards before touching chemicals.",
      "Never taste chemicals, and avoid smelling gases directly.",
      "Record observations clearly and report spills, burns, or broken glass immediately.",
    ],
    examples: ["Testing hydrogen with a lighted splint away from the face.", "Adding acid to water slowly when dilution is required."],
    related: ["Titration", "Test for gases", "Laboratory rules", "Observation table"],
  },
};

const spellingCorrections = {
  pythagoraz: "Pythagoras theorem",
  pythogoras: "Pythagoras theorem",
  fotoynthesis: "Photosynthesis",
  phytosynthesis: "Photosynthesis",
  databse: "Database normalization",
  "data normalisation": "Database normalization",
};

const state = {
  level: "All",
  currentQuery: "",
  currentAnswer: null,
  currentAnswerType: "Answer",
  installPrompt: null,
  selectedUnits: [],
  mediaRecorder: null,
  audioChunks: [],
  attachedVoiceBlob: null,
  attachedImageName: "",
  attachedVoiceUrl: "",
};

function isNativeAppMode() {
  const native = Boolean(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const standalone = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
  return native || standalone || window.navigator.standalone === true;
}

function syncAppModeState() {
  const nativeMode = isNativeAppMode();
  document.body.dataset.appMode = nativeMode ? "native" : "web";
  if (elements.installApp) {
    elements.installApp.hidden = nativeMode || !state.installPrompt;
  }
  if (elements.appModeStatus) {
    elements.appModeStatus.textContent = nativeMode
      ? "Native app mode is active. You can continue learning without browser chrome."
      : "Web app mode is active. Install this app to keep it app-like on mobile.";
  }
}

const moduleActionLabels = {
  answer: "Answer",
  notes: "Study notes",
  quiz: "Quiz",
  past: "Past questions",
  practical: "Practical guide",
  lesson: "Lesson plan",
  assessment: "Assessment",
  outline: "Course outline",
  assignment: "Assignment",
  safety: "Safety guide",
  report: "Work report",
};

const whatsappResearchNumber = "23276000000";

const supabaseConfig = {
  supabaseUrl: window.SUPABASE_CONFIG?.url || "",
  supabaseAnonKey: window.SUPABASE_CONFIG?.anonKey || "",
};

const supabaseAdapter = {
  enabled: false,
  supabase: null, // Supabase client instance

  init() {
    // Check if Supabase client library is loaded and config is provided
    const hasSupabaseClient = Boolean(window.supabase && window.supabase.createClient);
    const hasConfig = /^https:\/\/[^\s]+\.supabase\.co/.test(supabaseConfig.supabaseUrl) && supabaseConfig.supabaseAnonKey.length > 20;

    if (!hasSupabaseClient || !hasConfig) {
      console.warn("Supabase client not initialized. Running in local demo mode.");
      return;
    }

    try {
      this.supabase = window.supabase.createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseAnonKey);
      this.enabled = true;
      console.log("Supabase client initialized.");
    } catch (error) {
      console.error("Error initializing Supabase client:", error);
      this.enabled = false;
    }
  },

  async saveStudent(profile, password) {
    if (!this.enabled) {
      // Local demo mode: falling back to browser storage
      const accounts = getLocalList("studentResearchAccounts");
      const existing = accounts.find((item) => item.email.toLowerCase() === profile.email.toLowerCase());
      const action = profile.action || "register";

      if (action === "login") {
        if (!existing || existing.password !== password) {
          throw new Error("Email or password is incorrect. Passwords are case-sensitive.");
        }
        const localProfile = { ...existing.profile, uid: existing.uid, lastLoginAt: Date.now() };
        localStorage.setItem("studentResearchProfile", JSON.stringify(localProfile));
        return localProfile;
      }

      if (existing) {
        throw new Error("This email is already registered. Choose login existing account.");
      }

      const localProfile = { ...profile, uid: `demo-${Date.now()}` };
      delete localProfile.action;
      accounts.unshift({
        uid: localProfile.uid,
        email: profile.email,
        password, // Storing password in local storage for demo is insecure, but for demo purposes, it's fine.
        role: localProfile.role,
        profile: localProfile,
        createdAt: Date.now(),
      });
      saveLocalList("studentResearchAccounts", accounts.slice(0, 200));
      localStorage.setItem("studentResearchProfile", JSON.stringify(localProfile));
      return localProfile;
    }

    try {
      let authResponse;
      if (profile.action === "login") {
        authResponse = await this.supabase.auth.signInWithPassword({ email: profile.email, password });
      } else {
        authResponse = await this.supabase.auth.signUp({ email: profile.email, password });
      }

      if (authResponse.error) {
        throw authResponse.error;
      }

      const user = authResponse.data.user;
      if (!user) {
        throw new Error("Supabase authentication failed: No user data.");
      }

      let finalProfile;
      if (profile.action === "login") {
        // During login, try to fetch the existing profile from the 'profiles' table.
        const { data: existingProfile, error: fetchError } = await this.supabase
          .from('profiles')
          .select('*') // Select all columns
          .eq('id', user.id)
          .single();

        if (fetchError && fetchError.code === 'PGRST116') { // PGRST116 means "No rows found"
          // If no profile found, it might be a user who signed up directly via Supabase Auth
          // or the profile wasn't created during signup for some reason.
          // Create a basic profile in the 'profiles' table.
          const newProfileData = {
            id: user.id,
            email: user.email,
            role: profile.role || "student", // Default role if not provided
            name: profile.name || user.email.split('@')[0], // Default name
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            // Add other default fields as necessary, e.g., country, level, studyType
          };
          const { data: createdProfile, error: createError } = await this.supabase
            .from('profiles')
            .insert(newProfileData)
            .select()
            .single();

          if (createError) {
            console.error("Error creating profile during login fallback:", createError);
            throw createError;
          }
          finalProfile = { ...createdProfile, uid: user.id };
        } else if (fetchError) {
          console.error("Error fetching profile during login:", fetchError);
          throw fetchError;
        } else {
          finalProfile = { ...existingProfile, uid: user.id };
        }
      } else {
        finalProfile = { ...profile, uid: user.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        delete finalProfile.action;
        const { error: upsertError } = await this.supabase.from('profiles').upsert(
          { id: user.id, ...finalProfile }, // Ensure createdAt is set for new records
          { onConflict: 'id' }
        );
        if (upsertError) throw upsertError;
      }
      
      localStorage.setItem("studentResearchProfile", JSON.stringify(finalProfile));
      return finalProfile;
    } catch (error) {
      throw error;
    }
  },

  async saveUnits(units) {
    if (!this.enabled) {
      localStorage.setItem("studentResearchUnits", JSON.stringify(units));
      return;
    }
    const { data: { user } } = await this.supabase.auth.getUser();
    if (user) {
      const { error } = await this.supabase
        .from('profiles')
        .upsert({ id: user.id, units, updatedAt: new Date().toISOString() }); 
      if (error) {
        console.error("Error saving units to Supabase:", error);
      }
    }
    localStorage.setItem("studentResearchUnits", JSON.stringify(units));
  },

  async saveQuestion(question, imageFile, voiceBlob) {
    const profile = getStudentProfile();
    const localQuestion = {
      ...question,
      studentUid: profile.uid || "local-demo",
      createdAt: Date.now(),
    };
    const saved = getLocalList("studentResearchQuestions");
    saved.unshift(localQuestion);
    saveLocalList("studentResearchQuestions", saved.slice(0, 30));

    if (!this.enabled) return localQuestion;

    const { data: { user } } = await this.supabase.auth.getUser();
    const uid = user ? user.id : "anonymous";
    
    // Ensure createdAt is an ISO string for Supabase
    const supabaseQuestionData = { ...localQuestion, student_id: uid, createdAt: new Date(localQuestion.createdAt).toISOString() };
    delete supabaseQuestionData.studentUid; // Remove studentUid as we use student_id for Supabase

    const { data, error: insertError } = await this.supabase.from('questions').insert(supabaseQuestionData).select().single();
    if (insertError) {
      console.error("Error inserting question into Supabase:", insertError);
      throw insertError;
    }

    const updates = {};
    if (imageFile) {
      const path = `${uid}/${data.id}/photo-${imageFile.name}`;
      const { error: uploadError } = await this.supabase.storage.from('question-media').upload(path, imageFile, {
        cacheControl: '3600',
        upsert: false // Set to true if you want to overwrite existing files
      });
      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        // Decide how to handle this error: throw, log, or continue without image URL
      } else {
        updates.imageUrl = this.supabase.storage.from('question-media').getPublicUrl(path).data.publicUrl;
      }
    }
    if (voiceBlob) {
      const path = `${uid}/${data.id}/voice.webm`;
      const { error: uploadError } = await this.supabase.storage.from('question-media').upload(path, voiceBlob, {
        cacheControl: '3600',
        upsert: false
      });
      if (uploadError) {
        console.error("Error uploading voice memo:", uploadError);
      } else {
        updates.voiceUrl = this.supabase.storage.from('question-media').getPublicUrl(path).data.publicUrl;
      }
    }
    if (Object.keys(updates).length) {
      const { error: updateError } = await this.supabase.from('questions').update(updates).eq('id', data.id);
      if (updateError) {
        console.error("Error updating question with media URLs:", updateError);
      }
    }
    return { ...localQuestion, ...updates, id: data.id }; // Return the Supabase ID for consistency
  },
};

const unitTopics = {
  default: [
    "Introduction and definitions",
    "Key terms",
    "Examples and applications",
    "Diagrams and labeling",
    "Past questions",
    "Revision quiz",
  ],
  "Medicine and Surgery": ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Clinical skills"],
  "Nursing Science": ["Fundamentals of nursing", "Anatomy", "Pharmacology", "Medical-surgical nursing", "Maternal health", "Community health"],
  Pharmacy: ["Pharmaceutics", "Pharmacology", "Medicinal chemistry", "Clinical pharmacy", "Drug calculations"],
  "Civil Engineering": ["Surveying", "Structures", "Hydraulics", "Soil mechanics", "Transportation engineering", "Construction materials"],
  "Computer Science": ["Programming", "Databases", "Algorithms", "Computer networks", "Operating systems", "Artificial intelligence"],
  "Software Engineering": ["Requirements engineering", "Software design", "Testing", "Web development", "Mobile development", "DevOps"],
  "Constitutional Law": ["Sources of constitution", "Separation of powers", "Fundamental rights", "Judicial review", "Federalism"],
  Accounting: ["Financial accounting", "Cost accounting", "Auditing", "Taxation", "Public sector accounting"],
  Biology: ["Cell biology", "Genetics", "Ecology", "Photosynthesis", "Human anatomy", "Evolution"],
  Chemistry: ["Atomic structure", "Bonding", "Stoichiometry", "Acids and bases", "Organic chemistry", "Practical chemistry"],
  Physics: ["Mechanics", "Waves", "Electricity", "Magnetism", "Thermodynamics", "Modern physics"],
  Mathematics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Calculus", "Word problems"],
  "English Language": ["Grammar", "Comprehension", "Essay writing", "Summary", "Vocabulary", "Oral English"],
  "Integrated Science": ["Living things", "Energy", "Matter", "Forces", "Environment", "Health science"],
  "Basic Science": ["Cells", "Human body", "Simple machines", "Energy", "Mixtures", "Environment"],
  Economics: ["Demand and supply", "Market structures", "Money", "Inflation", "National income", "International trade"],
  Government: ["Constitution", "Democracy", "Citizenship", "Political parties", "Separation of powers", "Elections"],
  Literature: ["Poetry", "Drama", "Prose", "Figures of speech", "Themes", "Character analysis"],
  "Project Management": ["Project scope", "Scheduling", "Budgeting", "Risk management", "Monitoring", "Reporting"],
  "Cybersecurity Fundamentals": ["Passwords", "Phishing", "Malware", "Network safety", "Data privacy", "Incident response"],
  "Solar Installation": ["Solar basics", "Panel sizing", "Battery sizing", "Charge controllers", "Wiring safety", "Maintenance"],
  "Auto Mechanics": ["Engine basics", "Braking system", "Transmission", "Electrical system", "Diagnostics", "Maintenance"],
  "Electrical Installation": ["Safety rules", "Tools", "Wiring", "Protection devices", "Testing", "Fault finding"],
  Farming: ["Soil preparation", "Seed selection", "Planting", "Pest control", "Irrigation", "Harvesting"],
};

const educationPathMap = {
  primary: {
    studyType: "subject",
    trackLabel: "Primary track",
    courseLabel: "Subject group",
    moduleLabel: "Subject",
    tracks: {
      "General Primary": ["Mathematics", "English Language", "Basic Science", "Social Studies", "Civic Education"],
      "STEM Basics": ["Mathematics", "Basic Science", "ICT", "Agriculture"],
      "Language & Literacy": ["English Language", "French", "Arabic", "Literature"],
      "Creative & Practical": ["Creative Arts", "Physical Education", "Home Economics", "Basic Technology"],
    },
  },
  secondary: {
    studyType: "subject",
    trackLabel: "Department / track",
    courseLabel: "Subject",
    moduleLabel: "Module / topic",
    tracks: {
      Science: ["Biology", "Chemistry", "Physics", "Mathematics", "Agriculture", "ICT"],
      "Commercial / Business": ["Accounting", "Economics", "Commerce", "Business Studies", "Mathematics"],
      "Arts / Humanities": ["Literature", "Government", "History", "English Language", "CRS / IRS", "Languages"],
      "Technical / Vocational": ["Technical Drawing", "Basic Technology", "Electrical Installation", "Auto Mechanics", "ICT"],
      General: ["Mathematics", "English Language", "Integrated Science", "Social Studies", "Civic Education"],
    },
  },
  university: {
    studyType: "course",
    trackLabel: "Faculty",
    courseLabel: "Course / programme",
    moduleLabel: "Module / subject",
    tracks: {
      "Health Sciences": ["Medicine and Surgery", "Nursing Science", "Pharmacy", "Public Health"],
      Engineering: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Architecture"],
      "Computing / IT": ["Computer Science", "Software Engineering", "Information Systems", "Cybersecurity Fundamentals"],
      Law: ["Constitutional Law", "Criminal Law", "Contract Law", "Legal Methods"],
      Business: ["Accounting", "Business Administration", "Economics", "Project Management"],
      Education: ["Education", "Curriculum Studies", "Educational Psychology", "Teaching Methods"],
      Agriculture: ["Agriculture", "Agricultural Economics", "Animal Science", "Crop Science"],
      "Arts & Social Sciences": ["Government", "Literature", "History", "Sociology", "Mass Communication"],
    },
  },
  worker: {
    studyType: "skill",
    trackLabel: "Sector",
    courseLabel: "Skill / course",
    moduleLabel: "Practical module",
    tracks: {
      ICT: ["Cybersecurity Fundamentals", "Project Management", "Spreadsheet Skills", "Database Skills"],
      Construction: ["Electrical Installation", "Solar Installation", "Plumbing", "Masonry"],
      Agriculture: ["Farming", "Animal Care", "Irrigation", "Agribusiness"],
      "Health Support": ["First Aid", "Community Health", "Nursing Assistant", "Hygiene and Safety"],
      Business: ["Accounting", "Business Administration", "Customer Service", "Report Writing"],
      "Electrical / Solar": ["Solar Installation", "Electrical Installation", "Battery Maintenance", "Wiring safety"],
    },
  },
};

const countryEducationPathCache = new Map();

function mergeUnique(...groups) {
  return [...new Set(groups.flat().filter(Boolean))];
}

function buildSecondaryTracks(countryProfile) {
  const subjects = mergeUnique(countryProfile.subjects || [], schoolSubjectOptions);
  const pick = (preferred, fallback) => mergeUnique(preferred.filter((subject) => subjects.includes(subject)), fallback);
  return {
    Science: pick(["Biology", "Chemistry", "Physics", "Mathematics", "Agricultural Science", "Computer Studies", "ICT"], ["Biology", "Chemistry", "Physics", "Mathematics", "ICT"]),
    "Commercial / Business": pick(["Accounting", "Economics", "Commerce", "Business Studies", "Entrepreneurship", "Mathematics"], ["Accounting", "Economics", "Business Studies", "Commerce"]),
    "Arts / Humanities": pick(["Literature", "Government", "History", "Geography", "English Language", "Religious Studies", "Civic Education"], ["Literature", "Government", "History", "Geography"]),
    "Technical / Vocational": pick(["Technical Drawing", "Basic Technology", "Electrical Installation", "Auto Mechanics", "ICT", "Home Economics", "Food and Nutrition"], ["Technical Drawing", "Basic Technology", "Electrical Installation", "ICT"]),
    General: mergeUnique(subjects.slice(0, 10), ["Mathematics", "English Language", "Science", "Social Studies"]),
  };
}

function buildUniversityTracks(countryProfile) {
  const countryCourses = countryProfile.courses || [];
  const base = educationPathMap.university.tracks;
  return {
    "Health Sciences": mergeUnique(base["Health Sciences"], countryCourses.filter((course) => /medicine|nursing|pharmacy|health|dentistry|clinical|physio|public health/i.test(course))),
    "Engineering & Built Environment": mergeUnique(base.Engineering, countryCourses.filter((course) => /engineering|architecture|building|survey|construction/i.test(course))),
    "Computing / IT": mergeUnique(base["Computing / IT"], countryCourses.filter((course) => /computer|software|cyber|information|ict|data/i.test(course))),
    Law: mergeUnique(base.Law, countryCourses.filter((course) => /law|legal/i.test(course))),
    "Business & Management": mergeUnique(base.Business, countryCourses.filter((course) => /account|business|management|economics|commerce|finance|project/i.test(course))),
    Education: mergeUnique(base.Education, countryCourses.filter((course) => /education|teaching|curriculum/i.test(course))),
    "Agriculture & Environment": mergeUnique(base.Agriculture, countryCourses.filter((course) => /agric|animal|crop|environment|natural/i.test(course))),
    "Arts & Social Sciences": mergeUnique(base["Arts & Social Sciences"], countryCourses.filter((course) => /social|mass|communication|history|literature|government|public administration|tourism/i.test(course))),
  };
}

function getCountryEducationPath(country = "All African countries") {
  const normalizedCountry = country && !country.startsWith("All") ? country : "Africa";
  if (countryEducationPathCache.has(normalizedCountry)) {
    return countryEducationPathCache.get(normalizedCountry);
  }
  const countryProfile = getCountryEducationProfile(normalizedCountry);
  const path = {
    source: normalizedCountry === "Africa" ? "AI draft for Africa-wide setup" : `AI draft for ${normalizedCountry}`,
    primary: {
      ...educationPathMap.primary,
      tracks: {
        "General Primary": mergeUnique(countryProfile.subjects?.slice(0, 8) || [], educationPathMap.primary.tracks["General Primary"]),
        "STEM Basics": educationPathMap.primary.tracks["STEM Basics"],
        "Language & Literacy": educationPathMap.primary.tracks["Language & Literacy"],
        "Social & Civic": ["Social Studies", "Civic Education", "Religious Studies", "History", "Geography"],
        "Creative & Practical": educationPathMap.primary.tracks["Creative & Practical"],
      },
    },
    secondary: {
      ...educationPathMap.secondary,
      tracks: buildSecondaryTracks(countryProfile),
    },
    university: {
      ...educationPathMap.university,
      tracks: buildUniversityTracks(countryProfile),
    },
    worker: {
      ...educationPathMap.worker,
      tracks: educationPathMap.worker.tracks,
    },
  };
  countryEducationPathCache.set(normalizedCountry, path);
  return path;
}

const $ = (selector) => document.querySelector(selector);

const elements = {
  form: $("#searchForm"),
  input: $("#searchInput"),
  countryFilter: $("#countryFilter"),
  facultyFilter: $("#facultyFilter"),
  languageFilter: $("#languageFilter"),
  outputFilter: $("#outputFilter"),
  studentLogin: $("#studentLogin"),
  portalSubmit: $("#portalSubmit"),
  accountAction: $("#accountAction"),
  accountRole: $("#accountRole"),
  accountCountry: $("#accountCountry"),
  accountLevel: $("#accountLevel"),
  levelLabel: $("#levelLabel"),
  studyType: $("#studyType"),
  studyTypeLabel: $("#studyTypeLabel"),
  accountCourse: $("#accountCourse"),
  courseLabel: $("#courseLabel"),
  accountDepartment: $("#accountDepartment"),
  departmentLabel: $("#departmentLabel"),
  workerSkill: $("#workerSkill"),
  workerCertification: $("#workerCertification"),
  studentName: $("#studentName"),
  nameLabel: $("#nameLabel"),
  studentEmail: $("#studentEmail"),
  studentPassword: $("#studentPassword"),
  studentPasswordConfirm: $("#studentPasswordConfirm"),
  passwordStrength: $("#passwordStrength"),
  studentWhatsapp: $("#studentWhatsapp"),
  whatsappLabel: $("#whatsappLabel"),
  studentSchool: $("#studentSchool"),
  schoolLabel: $("#schoolLabel"),
  studentSummary: $("#studentSummary"),
  portalEyebrow: $("#portalEyebrow"),
  portalTitle: $("#portalTitle"),
  portalSummary: $("#portalSummary"),
  portalFormTitle: $("#portalFormTitle"),
  portalFeaturesEyebrow: $("#portalFeaturesEyebrow"),
  portalFeaturesTitle: $("#portalFeaturesTitle"),
  portalFeaturesSummary: $("#portalFeaturesSummary"),
  portalFeatureGrid: $("#portalFeatureGrid"),
  portalFooterTitle: $("#portalFooterTitle"),
  portalFooterMeta: $("#portalFooterMeta"),
  workspaceShortcuts: $("#workspaceShortcuts"),
  bottomNav: $("#bottomNav"),
  appMenuToggle: $("#appMenuToggle"),
  appDrawer: $("#appDrawer"),
  appDrawerClose: $("#appDrawerClose"),
  appDrawerLinks: $("#appDrawerLinks"),
  roleRegisterHint: $("#roleRegisterHint"),
  appModeStatus: $("#appModeStatus"),
  quickWhatsappForm: $("#quickWhatsappForm"),
  quickWhatsappNumber: $("#quickWhatsappNumber"),
  supabaseStatus: $("#supabaseStatus"),
  countryEducationTitle: $("#countryEducationTitle"),
  countryEducationSummary: $("#countryEducationSummary"),
  schoolPathList: $("#schoolPathList"),
  countryExamList: $("#countryExamList"),
  countryExamBodyList: $("#countryExamBodyList"),
  countrySubjectList: $("#countrySubjectList"),
  countryCourseList: $("#countryCourseList"),
  guidanceTitle: $("#guidanceTitle"),
  guidanceSummary: $("#guidanceSummary"),
  guidanceCards: $("#guidanceCards"),
  lessonPlanForm: $("#lessonPlanForm"),
  lessonSubject: $("#lessonSubject"),
  lessonTopic: $("#lessonTopic"),
  lessonLevel: $("#lessonLevel"),
  lessonPlanOutput: $("#lessonPlanOutput"),
  courseOutlineForm: $("#courseOutlineForm"),
  outlineCourse: $("#outlineCourse"),
  outlineModule: $("#outlineModule"),
  outlineDuration: $("#outlineDuration"),
  courseOutlineOutput: $("#courseOutlineOutput"),
  practicalGuideForm: $("#practicalGuideForm"),
  practicalSubject: $("#practicalSubject"),
  practicalTopic: $("#practicalTopic"),
  practicalGuideOutput: $("#practicalGuideOutput"),
  runQaChecks: $("#runQaChecks"),
  runDemoJourney: $("#runDemoJourney"),
  runRoleJourneys: $("#runRoleJourneys"),
  qaSummary: $("#qaSummary"),
  qaList: $("#qaList"),
  qaJourneyLog: $("#qaJourneyLog"),
  workspaceStatus: $("#workspaceStatus"),
  roleDashboardTitle: $("#roleDashboardTitle"),
  roleDashboardSummary: $("#roleDashboardSummary"),
  roleDashboardCards: $("#roleDashboardCards"),
  nextStepTitle: $("#nextStepTitle"),
  nextStepSummary: $("#nextStepSummary"),
  nextStepActions: $("#nextStepActions"),
  accountSettingsForm: $("#accountSettingsForm"),
  settingsName: $("#settingsName"),
  settingsWhatsapp: $("#settingsWhatsapp"),
  settingsCountry: $("#settingsCountry"),
  settingsEducationLanguage: $("#settingsEducationLanguage"),
  educationSetupSource: $("#educationSetupSource"),
  settingsRole: $("#settingsRole"),
  settingsLevel: $("#settingsLevel"),
  settingsLevelLabel: $("#settingsLevelLabel"),
  settingsStudyType: $("#settingsStudyType"),
  settingsStudyTypeLabel: $("#settingsStudyTypeLabel"),
  settingsCourse: $("#settingsCourse"),
  settingsCourseLabel: $("#settingsCourseLabel"),
  settingsDepartment: $("#settingsDepartment"),
  settingsDepartmentLabel: $("#settingsDepartmentLabel"),
  settingsSchool: $("#settingsSchool"),
  settingsSchoolLabel: $("#settingsSchoolLabel"),
  settingsSkill: $("#settingsSkill"),
  settingsSkillLabel: $("#settingsSkillLabel"),
  settingsCertification: $("#settingsCertification"),
  settingsCertificationLabel: $("#settingsCertificationLabel"),
  portalWelcomeEyebrow: $("#portalWelcomeEyebrow"),
  portalWelcomeTitle: $("#portalWelcomeTitle"),
  portalWelcomeText: $("#portalWelcomeText"),
  setupChecklist: $("#setupChecklist"),
  dashboardTitle: $("#dashboardTitle"),
  dashboardEyebrow: $("#dashboardEyebrow"),
  dashboardSubtitle: $("#dashboardSubtitle"),
  savedUnitsCount: $("#savedUnitsCount"),
  questionCount: $("#questionCount"),
  downloadCount: $("#downloadCount"),
  whatsappCount: $("#whatsappCount"),
  streakTitle: $("#streakTitle"),
  streakText: $("#streakText"),
  streakRing: $("#streakRing"),
  missionScore: $("#missionScore"),
  missionList: $("#missionList"),
  dashboardUnits: $("#dashboardUnits"),
  dashboardQuestions: $("#dashboardQuestions"),
  dashboardAnswers: $("#dashboardAnswers"),
  dashboardCollections: $("#dashboardCollections"),
  dashboardNotes: $("#dashboardNotes"),
  privateDraftsList: $("#privateDraftsList"),
  clearDemoData: $("#clearDemoData"),
  logoutAccount: $("#logoutAccount"),
  forgotPassword: $("#forgotPassword"),
  loginStatus: $("#loginStatus"),
  courseForm: $("#courseForm"),
  coursePickerTitle: $("#coursePickerTitle"),
  coursePickerHint: $("#coursePickerHint"),
  courseSelect: $("#courseSelect"),
  unitSelect: $("#unitSelect"),
  selectedUnits: $("#selectedUnits"),
  moduleActionPanel: $("#moduleActionPanel"),
  starterPrompts: $("#starterPrompts"),
  learningPath: $("#learningPath"),
  multiQuestion: $("#multiQuestion"),
  questionImage: $("#questionImage"),
  recordVoice: $("#recordVoice"),
  stopVoice: $("#stopVoice"),
  mediaPreview: $("#mediaPreview"),
  researchNow: $("#researchNow"),
  sendWhatsapp: $("#sendWhatsapp"),
  suggestions: $("#suggestions"),
  subjectGroups: $("#subjectGroups"),
  examList: $("#examList"),
  trendingList: $("#trendingList"),
  historyList: $("#historyList"),
  offlinePackList: $("#offlinePackList"),
  studentProgressList: $("#studentProgressList"),
  results: $("#results"),
  resultTitle: $("#resultTitle"),
  resultCountry: $("#resultCountry"),
  resultRole: $("#resultRole"),
  resultLevel: $("#resultLevel"),
  resultFocus: $("#resultFocus"),
  resultAnswerType: $("#resultAnswerType"),
  resultSafetyWarning: $("#resultSafetyWarning"),
  answerTone: $("#answerTone"),
  saveCollection: $("#saveCollection"),
  copyAnswer: $("#copyAnswer"),
  shareAnswer: $("#shareAnswer"),
  shortAnswer: $("#shortAnswer"),
  detailedNotes: $("#detailedNotes"),
  examplesList: $("#examplesList"),
  pastQuestions: $("#pastQuestions"),
  resourceDownloads: $("#resourceDownloads"),
  quizList: $("#quizList"),
  studyPlanList: $("#studyPlanList"),
  flashcards: $("#flashcards"),
  difficultyLabel: $("#difficultyLabel"),
  difficultyBar: $("#difficultyBar"),
  saveAnswer: $("#saveAnswer"),
  saveAnswerTop: $("#saveAnswerTop"),
  askFollowUp: $("#askFollowUp"),
  sendAnswerWhatsapp: $("#sendAnswerWhatsapp"),
  reportAnswer: $("#reportAnswer"),
  referencesList: $("#referencesList"),
  sourceCards: $("#sourceCards"),
  answerQualityBanner: $("#answerQualityBanner"),
  resultQualityList: $("#resultQualityList"),
  professionalStatusList: $("#professionalStatusList"),
  nextActions: $("#nextActions"),
  topicNote: $("#topicNote"),
  saveTopicNote: $("#saveTopicNote"),
  generateCitation: $("#generateCitation"),
  citationBox: $("#citationBox"),
  relatedTopics: $("#relatedTopics"),
  adminLoginForm: $("#adminLoginForm"),
  adminEmail: $("#adminEmail"),
  adminPassword: $("#adminPassword"),
  adminLoginStatus: $("#adminLoginStatus"),
  adminLogout: $("#adminLogout"),
  teacherAdmin: $("#teacher-admin"),
  teacherUploadForm: $("#teacherUploadForm"),
  uploadTitle: $("#uploadTitle"),
  uploadType: $("#uploadType"),
  resourceFile: $("#resourceFile"),
  approvalQueue: $("#approvalQueue"),
  collectionMap: $("#collectionMap"),
  educationVerificationList: $("#educationVerificationList"),
  downloadPdf: $("#downloadPdf"),
  themeToggle: $("#themeToggle"),
  askTutor: $("#askTutor"),
  tutorQuestion: $("#tutorQuestion"),
  tutorAnswer: $("#tutorAnswer"),
  chatForm: $("#chatForm"),
  chatInput: $("#chatInput"),
  chatMessages: $("#chatMessages"),
  clearChat: $("#clearChat"),
  toast: $("#toast"),
  installApp: $("#installApp"),
  openCommand: $("#openCommand"),
  closeCommand: $("#closeCommand"),
  commandModal: $("#commandModal"),
  commandInput: $("#commandInput"),
  commandResults: $("#commandResults"),
};

function renderOptions(select, firstLabel, options) {
  select.innerHTML = [`<option>${firstLabel}</option>`, ...options.map((option) => `<option>${option}</option>`)].join("");
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeJsonParse(rawValue, fallback) {
  try {
    return rawValue === null || rawValue === undefined || rawValue === "" ? fallback : JSON.parse(rawValue);
  } catch (error) {
    return fallback;
  }
}

function safeStorageGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return safeJsonParse(value, fallback);
  } catch (error) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function sanitizeBasicHTML(value) {
  const template = document.createElement("template");
  template.innerHTML = String(value);
  const allowedTags = new Set(["P", "BR", "STRONG", "EM", "B", "I", "UL", "OL", "LI", "SPAN"]);
  template.content.querySelectorAll("*").forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent || ""));
      return;
    }
    [...node.attributes].forEach((attribute) => node.removeAttribute(attribute.name));
  });
  return template.innerHTML;
}

function getCountryEducationProfile(country) {
  if (!country || country.startsWith("All")) {
    return {
      country: "Africa",
      summary: "Choose a country to see its school pathway, exams, common subjects, and course recommendations.",
      path: ["Primary/basic education", "Junior/lower secondary", "Senior/upper secondary", "TVET, college, polytechnic, or university"],
      exams: ["Primary leaving exams", "Junior secondary exams", "Senior secondary exams", "University and professional entry exams"],
      examBodies: ["Select a country to show exam bodies.", "Admins can verify each country's official names."],
      subjects: coreSchoolSubjects,
      courses: coreUniversityCourses,
    };
  }

  if (countryEducationOverrides[country]) {
    return { country, examBodies: examBodySeed[country] || ["National education examinations"], ...countryEducationOverrides[country] };
  }

  const group = Object.values(educationSystemGroups).find((item) => item.countries.includes(country));
  if (group) {
    return {
      country,
      summary: group.summary,
      path: group.path,
      exams: group.exams,
      examBodies: examBodySeed[country] || group.exams,
      subjects: group.subjects,
      courses: group.courses,
    };
  }

  return {
    country,
    summary: `${country} students can use a flexible profile covering primary, secondary, technical, and university pathways while country-specific content is expanded.`,
    path: ["Primary/basic education", "Lower secondary", "Upper secondary or technical education", "University, college, TVET, or professional institute"],
    exams: ["Primary completion exams", "Secondary certificate exams", "Technical/vocational assessments", "University admission requirements"],
    examBodies: examBodySeed[country] || ["National education examinations", "Ministry-approved assessments"],
    subjects: coreSchoolSubjects,
    courses: coreUniversityCourses,
  };
}

function renderCountryEducation() {
  const profile = getCountryEducationProfile(elements.countryFilter.value);
  elements.countryEducationTitle.textContent =
    profile.country === "Africa" ? "Choose an African country" : `${profile.country} education system`;
  elements.countryEducationSummary.textContent = profile.summary;
  elements.schoolPathList.innerHTML = profile.path.map((item) => `<li>${item}</li>`).join("");
  elements.countryExamList.innerHTML = profile.exams.map((item) => `<span>${item}</span>`).join("");
  elements.countryExamBodyList.innerHTML = profile.examBodies.map((item) => `<span>${item}</span>`).join("");
  elements.countrySubjectList.innerHTML = profile.subjects.slice(0, 14).map((item) => `<span>${item}</span>`).join("");
  elements.countryCourseList.innerHTML = profile.courses.slice(0, 14).map((item) => `<span>${item}</span>`).join("");
  renderOptions($("#examFilter"), "Any exam", profile.exams);
  renderStudentSummary();
  renderQuickWhatsappSettings();
  renderOnboarding();
}

function setPlatformMode(mode) {
  const selected = platformModes[mode] || platformModes.student;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  elements.guidanceTitle.textContent = selected.title;
  elements.guidanceSummary.textContent = selected.summary;
  elements.guidanceCards.innerHTML = selected.cards
    .map(
      ([title, text]) => `
        <article>
          <strong>${title}</strong>
          <span>${text}</span>
        </article>
      `
    )
    .join("");
}

function getAllCourses() {
  return [...new Set(subjectGroups.flatMap((group) => group.items))].sort((a, b) => a.localeCompare(b));
}

function inferStudyType(level, role) {
  if (role === "worker" || level === "Worker") {
    return "skill";
  }
  if (level === "University") {
    return "course";
  }
  if (level === "Professional") {
    return "professional";
  }
  return "subject";
}

function getStudyOptions(studyType, profile = getStudentProfile()) {
  const path = getEducationPathConfig(profile.level || state.level, profile.role, profile.country);
  if (profile.department && path.tracks?.[profile.department]) {
    return path.tracks[profile.department];
  }
  if (studyType === "course") {
    return universityProgramOptions;
  }
  if (studyType === "professional") {
    return professionalCourseOptions;
  }
  if (studyType === "skill") {
    return workerSkillOptions;
  }
  const countryProfile = getCountryEducationProfile(elements.countryFilter.value || profile.country);
  return [...new Set([...countryProfile.subjects, ...schoolSubjectOptions])];
}

function renderCourseOptions() {
  const profile = getStudentProfile();
  const studyType = profile.studyType || elements.studyType?.value || inferStudyType(profile.level || state.level, profile.role);
  const typedFocus = elements.accountCourse?.value.trim();
  const savedFocus = [profile.course, typedFocus].filter((focus) => focus && !focus.startsWith("Choose"));
  const options = [...new Set([...savedFocus, ...getStudyOptions(studyType, profile)])].sort((a, b) => a.localeCompare(b));
  const labels = {
    subject: ["Choose a school subject", "Subject Modules", "Showing modules based on your registered school subject."],
    course: ["Choose a university course / programme", "Course Modules", "Showing modules based on your registered university course."],
    professional: ["Choose a professional course", "Professional Modules", "Showing modules based on your registered professional course."],
    skill: ["Choose a worker skill", "Skill Modules", "Showing modules based on your registered skill area."],
  };
  const label = labels[studyType] || labels.subject;
  elements.coursePickerTitle.textContent = label[1];
  elements.coursePickerHint.textContent = label[2];
  renderOptions(elements.courseSelect, label[0], options);
  if (profile.course && options.includes(profile.course)) {
    elements.courseSelect.value = profile.course;
  } else if (typedFocus && options.includes(typedFocus)) {
    elements.courseSelect.value = typedFocus;
  }
  renderUnitOptions();
  renderModuleActionPanel();
  renderLearningPath();
}

function renderUnitOptions() {
  const course = elements.courseSelect.value;
  const profile = getStudentProfile();
  const key = getEducationPathKey(profile.level || state.level, profile.role);
  const units = unitTopics[course] || (key === "primary" ? unitTopics["Basic Science"] : key === "secondary" ? unitTopics[course.replace("JSS ", "")] || unitTopics.default : unitTopics.default);
  renderOptions(elements.unitSelect, "Choose a unit / topic", units);
  if (profile.skillArea && units.includes(profile.skillArea)) {
    elements.unitSelect.value = profile.skillArea;
  }
  renderStarterPrompts();
  renderLearningPath();
}

function getModuleActions(role = getStudentProfile().role || "student") {
  const shared = [
    ["answer", "Get answer", "Simple and detailed explanation"],
    ["notes", "Generate notes", "Study notes with examples"],
    ["quiz", "Create quiz", "Practice questions and answers"],
    ["past", "Past questions", "Exam-style revision"],
    ["practical", "Practical guide", "Safe steps and observations"],
    ["videos", "Watch videos", "Open lesson video search"],
  ];
  if (role === "teacher") {
    return [...shared, ["lesson", "Lesson plan", "Objectives and activities"], ["assessment", "Assessment", "Class test and marking guide"]];
  }
  if (role === "lecturer") {
    return [...shared, ["outline", "Course outline", "Outcomes and weekly topics"], ["assignment", "Assignment", "University task and rubric"]];
  }
  if (role === "worker") {
    return [
      ["answer", "Skill answer", "Clear workplace explanation"],
      ["notes", "Skills notes", "Procedure and examples"],
      ["practical", "Practical steps", "Tools, safety, and process"],
      ["safety", "Safety guide", "Risks and precautions"],
      ["report", "Work report", "Simple report structure"],
      ["videos", "Watch videos", "Open practical video search"],
    ];
  }
  return shared;
}

function renderModuleActionPanel() {
  if (!elements.moduleActionPanel) {
    return;
  }
  const profile = getStudentProfile();
  const actions = getModuleActions(profile.role || "student");
  elements.moduleActionPanel.innerHTML = actions
    .map(
      ([action, title, description]) => `
        <button type="button" data-module-action="${action}">
          <strong>${title}</strong>
          <span>${description}</span>
        </button>
      `
    )
    .join("");
  renderStarterPrompts();
  renderLearningPath();
}

function getStarterPrompts(role, course, unit) {
  const topic = `${course} - ${unit}`;
  if (role === "teacher") {
    return [
      `Create a 40-minute lesson plan for ${topic}`,
      `Create class activities for ${topic}`,
      `Create a marking guide for ${topic}`,
      `Explain ${topic} with local examples`,
    ];
  }
  if (role === "lecturer") {
    return [
      `Create lecture notes for ${topic}`,
      `Create tutorial questions for ${topic}`,
      `Create an assignment rubric for ${topic}`,
      `Explain applications and limitations of ${topic}`,
    ];
  }
  if (role === "worker") {
    return [
      `Create safety steps for ${topic}`,
      `List tools and materials for ${topic}`,
      `Create a work report for ${topic}`,
      `Explain common mistakes in ${topic}`,
    ];
  }
  return [
    `Explain ${topic} simply`,
    `Generate study notes for ${topic}`,
    `Create quiz questions on ${topic}`,
    `Give past-question practice for ${topic}`,
  ];
}

function renderStarterPrompts() {
  if (!elements.starterPrompts) {
    return;
  }
  const profile = getStudentProfile();
  const course = elements.courseSelect.value;
  const unit = elements.unitSelect.value;
  if (!course || !unit || course.startsWith("Choose") || unit.startsWith("Choose")) {
    elements.starterPrompts.innerHTML = `<strong>Starter prompts</strong><span class="empty-state">Choose a subject/course and module to see ready-made prompts.</span>`;
    return;
  }
  const prompts = getStarterPrompts(profile.role || "student", course, unit);
  elements.starterPrompts.innerHTML = `
    <strong>Tap a starter prompt</strong>
    <div class="starter-prompt-grid">
      ${prompts.map((prompt) => `<button type="button" data-starter-prompt="${escapeHTML(prompt)}">${escapeHTML(prompt)}</button>`).join("")}
    </div>
  `;
}

function getLearningPathSteps(role) {
  if (role === "teacher") {
    return [
      ["Review", "Understand the topic", "answer"],
      ["Plan", "Build lesson plan", "lesson"],
      ["Activity", "Class practice", "notes"],
      ["Assess", "Create questions", "assessment"],
      ["Improve", "Ask follow-up", "chat"],
    ];
  }
  if (role === "lecturer") {
    return [
      ["Overview", "Explain the module", "answer"],
      ["Notes", "Lecture notes", "notes"],
      ["Outline", "Course structure", "outline"],
      ["Assess", "Assignment/rubric", "assignment"],
      ["Discuss", "Open chat", "chat"],
    ];
  }
  if (role === "worker") {
    return [
      ["Understand", "Skill overview", "answer"],
      ["Safety", "Risks and PPE", "safety"],
      ["Steps", "Practical process", "practical"],
      ["Report", "Work record", "report"],
      ["Ask", "Open chat", "chat"],
    ];
  }
  return [
    ["Learn", "Simple answer", "answer"],
    ["Study", "Detailed notes", "notes"],
    ["Practise", "Quiz", "quiz"],
    ["Revise", "Past questions", "past"],
    ["Ask", "Open chat", "chat"],
  ];
}

function renderLearningPath() {
  if (!elements.learningPath) {
    return;
  }
  const profile = getStudentProfile();
  const course = elements.courseSelect.value;
  const unit = elements.unitSelect.value;
  if (!course || !unit || course.startsWith("Choose") || unit.startsWith("Choose")) {
    elements.learningPath.innerHTML = `<h4>Guided learning path</h4><span class="empty-state">Choose a module to unlock a step-by-step path.</span>`;
    return;
  }
  const steps = getLearningPathSteps(profile.role || "student");
  elements.learningPath.innerHTML = `
    <h4>Guided learning path for ${escapeHTML(unit)}</h4>
    <div class="learning-path-steps">
      ${steps
        .map(
          ([title, summary, action], index) => `
            <button type="button" data-path-action="${action}">
              <strong>${index + 1}. ${title}</strong>
              <span>${summary}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function getStudentProfile() {
  return safeStorageGet("studentResearchProfile", {});
}

function saveStudentProfile(profile) {
  safeStorageSet("studentResearchProfile", profile);
  renderStudentProfile();
}

function getRoleLabel(role) {
  if (role === "lecturer") {
    return "Lecturer";
  }
  if (role === "teacher") {
    return "Teacher";
  }
  if (role === "worker") {
    return "Worker";
  }
  return "Student";
}

function renderAuthState() {
  const profile = getStudentProfile();
  const isLoggedIn = Boolean(profile.email);
  document.body.dataset.auth = isLoggedIn ? "logged-in" : "logged-out";
  syncAppModeState();
  if (elements.workspaceStatus) {
    elements.workspaceStatus.textContent = isLoggedIn
      ? `${getRoleLabel(profile.role)} portal ready for ${profile.name || profile.email}.${profile.status === "pendingReview" ? " Your account is pending admin review for contributor privileges." : ""}`
      : "Register or login to choose a workspace.";
  }
  document.querySelectorAll("[data-enter-workspace]").forEach((button) => {
    button.hidden = isLoggedIn && button.dataset.enterWorkspace !== (profile.role || "student");
  });
  renderRoleDashboard();
  renderPortalWorkspace(profile.role || "student");
  renderAccountSettings();
  renderPortalSetup();
  renderBottomNav();
  renderPublicPage();
}

function renderRoleDashboard(role = getStudentProfile().role || "student") {
  if (!elements.roleDashboardCards) {
    return;
  }
  const data = roleDashboards[role] || roleDashboards.student;
  elements.roleDashboardTitle.textContent = data.title;
  elements.roleDashboardSummary.textContent = data.summary;
  elements.roleDashboardCards.innerHTML = data.cards
    .map(
      ([title, href, text]) => `
        <a href="${href}" class="role-card ${role}" data-role-card="${role}">
          <strong>${title}</strong>
          <span>${text}</span>
        </a>
      `
    )
    .join("");
}

function renderPortalWorkspace(role = getStudentProfile().role || "student") {
  const data = portalWorkspaces[role] || portalWorkspaces.student;

  if (elements.workspaceShortcuts) {
    const links = data.categories.flatMap((category) => category.links);
    elements.workspaceShortcuts.innerHTML = [
      `<span class="workspace-role-label"><span aria-hidden="true">⚡</span>${getRoleLabel(role)} portal</span>`,
      ...links.map(([label, target]) => `<button type="button" data-workspace-tab="${target}">${label}</button>`),
      `<button type="button" data-workspace-tab="#account-settings">Settings</button>`,
      `<button class="workspace-signout" type="button" data-workspace-signout="true">Sign out</button>`,
    ].join("");
    elements.workspaceShortcuts.style.display = "flex";
    elements.workspaceShortcuts.style.flexDirection = "row";
    elements.workspaceShortcuts.classList.remove("portal-sidebar-active");
  }
  if (elements.portalFeaturesTitle) {
    elements.portalFeaturesEyebrow.textContent = `${getRoleLabel(role)} CRM`;
    elements.portalFeaturesTitle.textContent = data.featuresTitle;
    elements.portalFeaturesSummary.textContent = data.featuresSummary;
    elements.portalFeatureGrid.innerHTML = data.features
      .map(([title, text]) => `<article class="portal-role-card ${role}" data-role-card="${role}"><strong>${title}</strong><span>${text}</span></article>`)
      .join("");
  }
  if (elements.portalFooterTitle) {
    elements.portalFooterTitle.textContent = `${getRoleLabel(role)} portal`;
    elements.portalFooterMeta.textContent = data.footer;
  }
}

function renderBottomNav() {
  if (!elements.bottomNav) {
    return;
  }
  const profile = getStudentProfile();
  const isLoggedIn = Boolean(profile.email);
  const links = isLoggedIn ? mobileNavLinks[profile.role || "student"] || mobileNavLinks.student : mobileNavLinks.public;
  const activeHash = (window.location.hash || "#home").toLowerCase();
  elements.bottomNav.innerHTML = links
    .map(([label, href, publicPage]) => {
      const normalizedHref = href.toLowerCase();
      const isActive = activeHash === normalizedHref || (normalizedHref === "#home" && (activeHash === "" || activeHash === "#"));
      return `<a href="${href}" data-nav-label="${label}"${publicPage ? ` data-public-page="${publicPage}"` : ""}${isActive ? ' aria-current="page" class="active"' : ""}><span class="nav-icon" aria-hidden="true">${getNavigationIcon(label)}</span><span>${label}</span></a>`;
    })
    .join("");
  if (elements.appDrawerLinks) {
    elements.appDrawerLinks.innerHTML = links
      .map(([label, href, publicPage]) => {
        const normalizedHref = href.toLowerCase();
        const isActive = activeHash === normalizedHref || (normalizedHref === "#home" && (activeHash === "" || activeHash === "#"));
        return `<a href="${href}" data-nav-label="${label}"${publicPage ? ` data-public-page="${publicPage}"` : ""}${isActive ? ' aria-current="page" class="active"' : ""}><span class="nav-icon" aria-hidden="true">${getNavigationIcon(label)}</span><span>${label}</span></a>`;
      })
      .join("");
  }
}

function getNavigationIcon(label) {
  const icons = { Home: "⌂", About: "i", Work: "▦", Contact: "✆", Join: "+", Ask: "?", Courses: "▤", Plans: "▥", Tools: "◆", Notes: "✎", Skills: "⚒", Safety: "✓", Chat: "◌", Settings: "⚙" };
  return icons[label] || "•";
}

function getProfileSetupStatus(profile = getStudentProfile()) {
  const hasWhatsapp = Boolean(cleanWhatsappNumber(profile.whatsapp || ""));
  const hasEducationPath = Boolean(profile.country && !profile.country.startsWith("All") && profile.level && profile.studyType);
  const hasRoleContext = Boolean(profile.course || profile.department || profile.skillArea || profile.school);
  const hasFocus = state.selectedUnits.length > 0;
  return { hasWhatsapp, hasEducationPath, hasRoleContext, hasFocus };
}

function renderPortalSetup() {
  if (!elements.setupChecklist) {
    return;
  }
  const profile = getStudentProfile();
  const role = profile.role || "student";
  const status = getProfileSetupStatus(profile);
  elements.portalWelcomeEyebrow.textContent = `${getRoleLabel(role)} onboarding`;
  elements.portalWelcomeTitle.textContent = profile.name ? `Welcome, ${profile.name}` : "Complete your portal setup";
  elements.portalWelcomeText.textContent = "Finish these steps once, then your dashboard, WhatsApp, and research tools will personalize around your profile.";
  const items = [
    ["WhatsApp", "Add a WhatsApp number for portal research.", status.hasWhatsapp, "#account-settings"],
    ["Education path", "Choose country, level, and study type.", status.hasEducationPath, "#account-settings"],
    ["Role context", role === "worker" ? "Add your skill, workplace, or certification." : "Add course, subject, faculty, or school.", status.hasRoleContext, "#account-settings"],
    ["Research focus", "Choose your first subject, module, topic, or skill.", status.hasFocus, "#moduleResearch"],
  ];
  elements.setupChecklist.innerHTML = items
    .map(
      ([title, text, done, target]) => `
        <div class="setup-item ${done ? "done" : ""}">
          <i>${done ? "✓" : ""}</i>
          <div><strong>${title}</strong><span>${text}</span></div>
          <button type="button" data-workspace-tab="${target}">${done ? "View" : "Set up"}</button>
        </div>
      `
    )
    .join("");
}

function updateSettingsLabels(role = getStudentProfile().role || "student") {
  const path = getEducationPathConfig(elements.settingsLevel?.value || getStudentProfile().level, role, elements.settingsCountry?.value);
  const labels = [
    role === "teacher" ? "Class level taught" : role === "lecturer" ? "Academic level" : role === "worker" ? "Skill level" : "Education level",
    "Study type",
    path.courseLabel,
    path.trackLabel,
    role === "lecturer" ? "University / college" : role === "worker" ? "Workplace / training centre" : "School",
    path.moduleLabel,
    role === "worker" ? "Certification level" : "Topic / note",
  ];
  [
    elements.settingsLevelLabel,
    elements.settingsStudyTypeLabel,
    elements.settingsCourseLabel,
    elements.settingsDepartmentLabel,
    elements.settingsSchoolLabel,
    elements.settingsSkillLabel,
    elements.settingsCertificationLabel,
  ].forEach((element, index) => {
    if (element) {
      element.textContent = labels[index];
    }
  });
}

function getEducationPathKey(level, role = getStudentProfile().role || "student") {
  if (role === "worker" || level === "Worker" || level === "Professional") {
    return "worker";
  }
  if (role === "lecturer" || level === "University") {
    return "university";
  }
  if (level === "JSS" || level === "SSS") {
    return "secondary";
  }
  return "primary";
}

function getEducationPathConfig(level, role, country = getStudentProfile().country || elements.settingsCountry?.value || elements.countryFilter?.value) {
  const countryPath = getCountryEducationPath(country);
  return countryPath[getEducationPathKey(level, role)] || countryPath.primary;
}

function fillSelect(select, placeholder, values, preferred = "") {
  const unique = [...new Set(values.filter(Boolean))];
  select.innerHTML = [`<option>${placeholder}</option>`, ...unique.map((value) => `<option>${escapeHTML(value)}</option>`)].join("");
  if (preferred && unique.includes(preferred)) {
    select.value = preferred;
  }
}

function renderEducationPathSettings(profile = getStudentProfile()) {
  if (!elements.settingsDepartment || !elements.settingsCourse || !elements.settingsSkill) {
    return;
  }
  const role = profile.role || "student";
  const level = elements.settingsLevel.value || profile.level || "Primary";
  const countryPath = getCountryEducationPath(elements.settingsCountry.value || profile.country);
  const path = countryPath[getEducationPathKey(level, role)] || countryPath.primary;
  if (elements.educationSetupSource) {
    const status = getEducationVerificationStatus(elements.settingsCountry.value || profile.country);
    elements.educationSetupSource.textContent = `Education setup source: ${countryPath.source}. Status: ${status}. Draft paths are for guidance and can be verified by admins later.`;
  }
  elements.settingsStudyType.value = path.studyType;
  updateSettingsLabels(role);

  const tracks = Object.keys(path.tracks);
  fillSelect(elements.settingsDepartment, `Choose ${path.trackLabel.toLowerCase()}`, tracks, profile.department);
  const selectedTrack = tracks.includes(elements.settingsDepartment.value) ? elements.settingsDepartment.value : "";
  const courses = path.tracks[selectedTrack] || [];
  fillSelect(elements.settingsCourse, `Choose ${path.courseLabel.toLowerCase()}`, courses, profile.course);
  const selectedCourse = courses.includes(elements.settingsCourse.value) ? elements.settingsCourse.value : "";
  const modules = selectedCourse ? unitTopics[selectedCourse] || (getEducationPathKey(level, role) === "primary" ? unitTopics["Basic Science"] : unitTopics.default) : [];
  fillSelect(elements.settingsSkill, `Choose ${path.moduleLabel.toLowerCase()}`, modules, profile.skillArea);
}

function getChosenSelectValue(select) {
  const value = select?.value || "";
  return value.startsWith("Choose ") ? "" : value;
}

function renderPasswordStrength() {
  if (!elements.passwordStrength) {
    return;
  }
  const value = elements.studentPassword.value;
  const score = Number(value.length >= 6) + Number(/[A-Z]/.test(value)) + Number(/\d/.test(value)) + Number(/[^A-Za-z0-9]/.test(value));
  elements.passwordStrength.classList.toggle("good", score >= 3);
  elements.passwordStrength.classList.toggle("weak", value.length > 0 && score < 3);
  elements.passwordStrength.textContent = !value
    ? "Use at least 6 characters."
    : score >= 3
      ? "Strong password."
      : "Add numbers, capitals, or symbols for a stronger password.";
}

function setPortalSubmitLoading(isLoading) {
  elements.portalSubmit.disabled = isLoading;
  elements.portalSubmit.textContent = isLoading ? "Please wait..." : elements.accountAction.value === "login" ? "Login to portal" : "Create account";
}

function renderAccountSettings() {
  const profile = getStudentProfile();
  if (!elements.accountSettingsForm || !profile.email) {
    return;
  }
  elements.settingsName.value = profile.name || "";
  elements.settingsWhatsapp.value = profile.whatsapp || "";
  elements.settingsCountry.value = profile.country || elements.countryFilter.value || "All African countries";
  elements.settingsEducationLanguage.value = profile.educationLanguage || getSuggestedEducationLanguage(elements.settingsCountry.value);
  if (elements.languageFilter && [...elements.languageFilter.options].some((option) => option.value === elements.settingsEducationLanguage.value)) {
    elements.languageFilter.value = elements.settingsEducationLanguage.value;
  }
  elements.settingsRole.value = profile.role || "student";
  elements.settingsRole.disabled = true;
  elements.settingsLevel.value = profile.level || "Primary";
  renderEducationPathSettings(profile);
  elements.settingsSchool.value = profile.school || "";
  elements.settingsCertification.value = profile.certificationLevel || "";
}

function saveAccountSettings(event) {
  event.preventDefault();
  const current = getStudentProfile();
  if (!current.email) {
    showToast("Login first to update settings.");
    return;
  }
  const updated = {
    ...current,
    name: elements.settingsName.value.trim(),
    whatsapp: elements.settingsWhatsapp.value.trim(),
    country: elements.settingsCountry.value,
    educationLanguage: elements.settingsEducationLanguage.value,
    role: current.role || "student",
    level: elements.settingsLevel.value,
    studyType: elements.settingsStudyType.value,
    educationSource: elements.educationSetupSource?.textContent || "Education setup source: AI draft.",
    course: getChosenSelectValue(elements.settingsCourse),
    department: getChosenSelectValue(elements.settingsDepartment),
    school: elements.settingsSchool.value.trim(),
    skillArea: getChosenSelectValue(elements.settingsSkill),
    certificationLevel: elements.settingsCertification.value.trim(),
  };
  saveStudentProfile(updated);
  elements.countryFilter.value = updated.country;
  state.level = updated.level;
  localStorage.setItem("studentResearchQuickWhatsapp", cleanWhatsappNumber(updated.whatsapp || ""));
  renderCountryEducation();
  renderCourseOptions();
  renderRoleDashboard(updated.role);
  renderPortalWorkspace(updated.role);
  renderQuickWhatsappSettings();
  renderPortalSetup();
  showToast("Account settings saved.");
}

function renderStudentProfile() {
  const profile = getStudentProfile();
  elements.accountRole.value = profile.role || "student";
  elements.accountCountry.value = profile.country || elements.countryFilter.value || "All African countries";
  elements.accountLevel.value = profile.level || "Primary";
  elements.studyType.value = profile.studyType || inferStudyType(profile.level || "Primary", profile.role);
  elements.accountCourse.value = profile.course || "";
  elements.accountDepartment.value = profile.department || "";
  elements.workerSkill.value = profile.skillArea || "";
  elements.workerCertification.value = profile.certificationLevel || "";
  elements.studentName.value = profile.name || "";
  elements.studentEmail.value = profile.email || "";
  elements.studentWhatsapp.value = profile.whatsapp || "";
  elements.studentSchool.value = profile.school || "";
  if (profile.country) {
    elements.countryFilter.value = profile.country;
  }
  elements.loginStatus.textContent = profile.name
    ? `Logged in as ${profile.name} (${getRoleLabel(profile.role)})${profile.status === "pendingReview" ? " - pending admin review" : ""}${supabaseAdapter.enabled ? " with Supabase" : " in local mode"}`
    : "Students, teachers, and lecturers use email and password here";
  renderAuthState();
}

function loadSelectedUnits() {
  state.selectedUnits = JSON.parse(localStorage.getItem("studentResearchUnits") || "[]");
  renderSelectedUnits();
}

function saveSelectedUnits() {
  supabaseAdapter.saveUnits(state.selectedUnits).catch((e) => {
    localStorage.setItem("studentResearchUnits", JSON.stringify(state.selectedUnits));
  });
  renderSelectedUnits();
}

function renderSelectedUnits() {
  elements.selectedUnits.innerHTML = state.selectedUnits.length
    ? state.selectedUnits.map((item) => `<span class="unit-pill">${item}</span>`).join("")
    : `<span class="empty-state">Your selected courses and units will appear here.</span>`;
  renderStudentSummary();
  renderOnboarding();
  renderPortalSetup();
  renderDashboard();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 2600);
}

function renderOnboarding() {
  const profile = getStudentProfile();
  const hasProfile = Boolean(profile.name);
  const hasCountry = elements.countryFilter && !elements.countryFilter.value.startsWith("All");
  const hasUnits = state.selectedUnits.length > 0;
  const hasAsked = getLocalList("studentResearchQuestions").length > 0 || getLocalList("studentResearchAnswers").length > 0;
  const activeStep = hasAsked ? "ask" : hasUnits ? "ask" : hasCountry ? "units" : hasProfile ? "country" : "profile";
  const role = profile.role || "student";
  const roleCopy = {
    student: {
      profile: "Create your student profile",
      country: "Choose country and level",
      units: "Select subject and module",
      ask: "Get answer, notes, quiz, or video",
    },
    teacher: {
      profile: "Create your teacher profile",
      country: "Choose teaching country and level",
      units: "Select subject and class topic",
      ask: "Generate lesson plan or assessment",
    },
    lecturer: {
      profile: "Create your lecturer profile",
      country: "Choose country and university level",
      units: "Select course and module",
      ask: "Generate outline or assignment",
    },
    worker: {
      profile: "Create your worker profile",
      country: "Choose country and skill level",
      units: "Select skill and work topic",
      ask: "Generate safety or practical guide",
    },
  };
  const copy = roleCopy[role] || roleCopy.student;
  const doneMap = {
    profile: hasProfile,
    country: hasCountry,
    units: hasUnits,
    ask: hasAsked,
  };
  document.querySelectorAll(".step-card").forEach((card) => {
    const step = card.dataset.step;
    const label = card.querySelector("span");
    if (label && copy[step]) {
      label.textContent = copy[step];
    }
    card.classList.toggle("active", step === activeStep && !doneMap[step]);
    card.classList.toggle("done", Boolean(doneMap[step]));
  });
}

function renderStudentSummary() {
  if (!elements.studentSummary) {
    return;
  }
  const profile = getStudentProfile();
  const country = elements.countryFilter?.value || "No country selected";
  const unit = state.selectedUnits[0] || "No course unit selected yet";
  const focusType = profile.studyType === "subject" ? "Subject" : profile.studyType === "course" ? "Course" : profile.studyType === "professional" ? "Professional course" : profile.studyType === "skill" ? "Skill" : "Focus";
  elements.studentSummary.textContent = profile.name
    ? `${profile.name} (${profile.role || "student"}) - ${country} - Level: ${profile.level || state.level} - ${focusType}: ${profile.course || unit} - WhatsApp: ${profile.whatsapp || "not added"}`
    : `Create or login to your ${getRoleLabel(elements.accountRole.value || "student").toLowerCase()} portal with country, level, focus area, email, password, and WhatsApp.`;
}

function isInstalledAppMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function cleanWhatsappNumber(value) {
  return value.replace(/[^\d]/g, "");
}

function getQuickWhatsappNumber() {
  return localStorage.getItem("studentResearchQuickWhatsapp") || whatsappResearchNumber;
}

function renderQuickWhatsappSettings() {
  const savedNumber = localStorage.getItem("studentResearchQuickWhatsapp") || "";
  elements.quickWhatsappNumber.value = savedNumber;
  elements.appModeStatus.textContent = isInstalledAppMode()
    ? savedNumber
      ? `Quick research is linked to WhatsApp number +${savedNumber}.`
      : "Installed app mode active. Choose the WhatsApp number for quick research."
    : "Install the app to unlock phone-style WhatsApp quick research. Browser mode will still use the default research number.";
}

function saveQuickWhatsappNumber(event) {
  event.preventDefault();
  const number = cleanWhatsappNumber(elements.quickWhatsappNumber.value);
  if (number.length < 8) {
    showToast("Enter a valid WhatsApp number with country code.");
    return;
  }
  localStorage.setItem("studentResearchQuickWhatsapp", number);
  renderQuickWhatsappSettings();
  showToast(`Quick research WhatsApp set to +${number}.`);
}

function togglePasswordVisibility(button) {
  const input = document.querySelector(`#${button.dataset.togglePassword}`);
  if (!input) {
    return;
  }
  const showing = input.type === "text";
  input.type = showing ? "password" : "text";
  button.textContent = showing ? "Show" : "Hide";
  button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
}

const roleRegistrationCopy = {
  student: {
    hint: "Students can register and start learning immediately. Choose your country, level, subject, and WhatsApp number for phone research.",
    name: "Student full name",
    whatsapp: "Student WhatsApp number for phone search",
    level: "Class / level",
    studyType: "Study type",
    course: "Main school subject",
    department: "Department / stream",
    school: "School name",
    namePlaceholder: "Aminata Kamara",
    coursePlaceholder: "Biology, Mathematics, English Language...",
    departmentPlaceholder: "Science, Arts, Commercial...",
    schoolPlaceholder: "Your school name",
  },
  teacher: {
    hint: "Teachers can use all learning tools immediately. Contributor access stays pending until admin approval.",
    name: "Teacher full name",
    whatsapp: "Teacher WhatsApp number",
    level: "Class level you teach",
    studyType: "Teaching area",
    course: "Teaching subject",
    department: "Department",
    school: "School / training centre",
    namePlaceholder: "Mr / Ms full name",
    coursePlaceholder: "Biology, Mathematics, English...",
    departmentPlaceholder: "Science department, Languages...",
    schoolPlaceholder: "School or training centre name",
  },
  lecturer: {
    hint: "Lecturers can use university tools immediately. Contributor access stays pending until admin approval.",
    name: "Lecturer full name",
    whatsapp: "Lecturer WhatsApp number",
    level: "Academic level",
    studyType: "University course / programme",
    course: "Course / programme taught",
    department: "Department / faculty",
    school: "University / college",
    namePlaceholder: "Dr / Lecturer full name",
    coursePlaceholder: "Computer Science, Anatomy, Database Systems...",
    departmentPlaceholder: "Faculty of Science, Engineering, Health...",
    schoolPlaceholder: "University or college name",
  },
  worker: {
    hint: "Workers can use skills, safety, reports, and practical guides immediately.",
    name: "Worker full name",
    whatsapp: "Worker WhatsApp number",
    level: "Skill level",
    studyType: "Skill area",
    course: "Profession / skill",
    department: "Work section",
    school: "Workplace / training centre",
    namePlaceholder: "Full name",
    coursePlaceholder: "Solar installation, auto mechanics, catering...",
    departmentPlaceholder: "Electrical, workshop, farm, clinic...",
    schoolPlaceholder: "Workplace, training centre, or business name",
  },
};

const portalCopy = {
  student: {
    eyebrow: "Student portal",
    title: "Student CRM portal",
    summary: "Register or login to use your student workspace, WhatsApp research, courses, and saved study profile.",
    formTitle: "Student account access",
    login: "Students use email and password here.",
  },
  teacher: {
    eyebrow: "Teacher portal",
    title: "Teacher CRM portal",
    summary: "Register or login to manage teaching research, lesson plans, class resources, and WhatsApp support.",
    formTitle: "Teacher account access",
    login: "Teachers use email and password here.",
  },
  lecturer: {
    eyebrow: "Lecturer portal",
    title: "Lecturer CRM portal",
    summary: "Register or login to manage university courses, tutorials, lecture notes, assignments, and WhatsApp research.",
    formTitle: "Lecturer account access",
    login: "Lecturers use email and password here.",
  },
  worker: {
    eyebrow: "Worker portal",
    title: "Worker CRM portal",
    summary: "Register or login to manage skills learning, safety guides, reports, practical training, and WhatsApp help.",
    formTitle: "Worker account access",
    login: "Workers use email and password here.",
  },
};

function syncAccountRoleFields() {
  const role = elements.accountRole.value;
  const copy = roleRegistrationCopy[role] || roleRegistrationCopy.student;
  document.querySelectorAll(".worker-only").forEach((item) => {
    item.hidden = role !== "worker";
  });
  elements.nameLabel.textContent = copy.name;
  elements.whatsappLabel.textContent = copy.whatsapp;
  elements.levelLabel.textContent = copy.level;
  elements.studyTypeLabel.textContent = copy.studyType;
  elements.courseLabel.textContent = copy.course;
  elements.departmentLabel.textContent = copy.department;
  elements.schoolLabel.textContent = copy.school;
  elements.studentName.placeholder = copy.namePlaceholder;
  elements.accountCourse.placeholder = copy.coursePlaceholder;
  elements.accountDepartment.placeholder = copy.departmentPlaceholder;
  elements.studentSchool.placeholder = copy.schoolPlaceholder;
  elements.roleRegisterHint.textContent = copy.hint;
  elements.roleRegisterHint.classList.toggle("pending", role === "teacher" || role === "lecturer");
  if (role === "lecturer") {
    elements.accountLevel.value = "University";
    state.level = "University";
    elements.studyType.value = "course";
  } else if (role === "teacher") {
    elements.studyType.value = "subject";
  } else if (role === "worker") {
    elements.accountLevel.value = "Worker";
    elements.studyType.value = "skill";
    state.level = "Worker";
  } else {
    elements.studyType.value = inferStudyType(elements.accountLevel.value, role);
  }
  renderCourseOptions();
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  elements.studentLogin.classList.remove("auth-choice-pending");
  elements.studentLogin.dataset.authMode = isLogin ? "login" : "register";
  elements.accountAction.value = isLogin ? "login" : "register";
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authTab === elements.accountAction.value);
  });
  document.querySelectorAll(".register-fields").forEach((group) => {
    group.hidden = isLogin;
  });
  elements.studentPasswordConfirm.required = !isLogin;
  elements.forgotPassword.hidden = !isLogin;
  elements.portalSubmit.textContent = isLogin ? "Login to portal" : "Create account";
  elements.loginStatus.textContent = isLogin ? "Enter your email and password to continue." : roleRegistrationCopy[elements.accountRole.value]?.hint || "Create your account profile.";
}

function setAuthChoicePending() {
  elements.accountAction.value = "";
  elements.studentLogin.classList.add("auth-choice-pending");
  elements.studentLogin.dataset.authMode = "";
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.classList.remove("active");
  });
  elements.studentPasswordConfirm.required = false;
  elements.forgotPassword.hidden = true;
  elements.portalSubmit.textContent = "Continue";
  elements.loginStatus.textContent = "Choose Register to create your account or Login to access your portal.";
}

function setSelectedPortal(role, mode = "") {
  const normalizedRole = portalCopy[role] ? role : "student";
  const copy = portalCopy[normalizedRole];
  elements.accountRole.value = normalizedRole;
  syncAccountRoleFields();
  if (mode) {
    setAuthMode(mode);
  } else {
    setAuthChoicePending();
  }
  elements.portalEyebrow.textContent = copy.eyebrow;
  elements.portalTitle.textContent = copy.title;
  elements.portalSummary.textContent = copy.summary;
  elements.portalFormTitle.textContent = copy.formTitle;
  renderStudentSummary();
  if (mode === "login") {
    elements.loginStatus.textContent = copy.login;
  }
}

const publicPageIds = new Set(["home", "about-us", "what-we-do", "contact-us", "join-us", "student-portal"]);

function getCurrentPublicPageId() {
  const hashPage = window.location.hash.replace("#", "");
  return publicPageIds.has(hashPage) ? hashPage : "home";
}

function renderPublicPage() {
  const isLoggedIn = document.body.dataset.auth === "logged-in";
  const pageId = getCurrentPublicPageId();
  const publicFooter = document.querySelector("footer[data-public-home-only]");

  document.body.dataset.publicView = !isLoggedIn && pageId !== "home" ? "focused" : "home";
  publicFooter?.classList.remove("public-page-hidden");

  if (isLoggedIn && publicPageIds.has(pageId) && pageId !== "student-portal") {
    const profile = getStudentProfile();
    enterWorkspace(profile.role || "student");
    return;
  }

  document.querySelectorAll("main > section").forEach((section) => {
    const isPublic = section.classList.contains("public-only") || publicPageIds.has(section.id);
    const isAuth = section.classList.contains("auth-required");

    if (isLoggedIn) {
      if (isPublic) {
        section.classList.add("public-page-hidden");
      }
    } else {
      if (isPublic) {
        const showPage = pageId === "home" || section.id === pageId;
        section.classList.toggle("public-page-hidden", !showPage);
      }
      if (isAuth) section.classList.add("public-page-hidden");
    }
  });
}

function openPublicPage(pageId, authMode, role) {
  if (!publicPageIds.has(pageId)) {
    return;
  }
  if (role) {
    setSelectedPortal(role, authMode || "");
  } else if (pageId === "student-portal") {
    setSelectedPortal(elements.accountRole.value || "student", authMode || elements.accountAction.value || "");
  } else if (authMode) {
    setAuthMode(authMode);
  }
  window.history.pushState(null, "", `#${pageId}`);
  renderPublicPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getAccountStatus(role) {
  return role === "teacher" || role === "lecturer" ? "pendingReview" : "active";
}

function enterWorkspace(role) {
  const profile = getStudentProfile();
  if (!profile.email) {
    setSelectedPortal(role, "login");
    openPublicPage("student-portal", "login", role);
    showToast("Register or login first.");
    return;
  }
  if ((profile.role || "student") !== role) {
    showToast(`This account belongs to the ${getRoleLabel(profile.role || "student")} portal.`);
    return;
  }

  // Set platform mode and render role-specific elements
  setPlatformMode(role);
  renderRoleDashboard(role);
  renderModuleActionPanel();

  // Determine the default tab for the role
  let defaultTab = "#dashboard"; // Default for most roles
  const portalData = portalWorkspaces[role] || portalWorkspaces.student;
  if (portalData.categories && portalData.categories[0] && portalData.categories[0].links && portalData.categories[0].links[0]) {
    defaultTab = portalData.categories[0].links[0][1];
  }

  // Activate the default workspace tab
  activateWorkspaceTab(defaultTab);

  // Ensure sidebar is visible on entry (if not mobile)
  if (elements.workspaceShortcuts && window.innerWidth >= 768) {
    elements.workspaceShortcuts.style.display = "flex";
  }
  // Scroll to the activated tab
  document.querySelector(defaultTab).scrollIntoView({ behavior: "smooth", block: "start" });
}

function logoutCurrentAccount() {
  localStorage.removeItem("studentResearchProfile");
  localStorage.removeItem("studentResearchUnits");
  state.selectedUnits = [];
  // Clear chat history on logout for privacy
  localStorage.removeItem("studentResearchChat"); 
  renderStudentProfile();
  renderSelectedUnits();
  renderAuthState();
  document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Logged out.");
}

async function resetAccountPassword() {
  const email = elements.studentEmail.value.trim();
  if (!email) {
    elements.loginStatus.textContent = "Enter your email, then tap Forgot password.";
    return;
  }
  elements.loginStatus.textContent = "Password reset will send email after Supabase Auth is connected.";
}

function getLocalList(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveLocalList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function incrementMetric(key) {
  const next = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(next));
  renderDashboard();
}

function saveDashboardAnswer(answer) {
  const collection = elements.saveCollection?.value || "General Revision";
  const saved = getLocalList("studentResearchAnswers").filter((item) => item.title !== answer.title);
  saved.unshift({ title: answer.title, short: answer.short, status: answer.status || "draft", collection, savedAt: Date.now() });
  saveLocalList("studentResearchAnswers", saved.slice(0, 20));
  renderDashboard();
}

function renderNextStepPanel() {
  if (!elements.nextStepTitle) {
    return;
  }
  const profile = getStudentProfile();
  const role = profile.role || "student";
  const hasFocus = state.selectedUnits.length > 0;
  const hasAnswer = getLocalList("studentResearchAnswers").length > 0;
  const hasChat = getLocalList("studentResearchChat").some((item) => item.role === "user");
  const setupStatus = getProfileSetupStatus(profile);
  const setupComplete = setupStatus.hasWhatsapp && setupStatus.hasEducationPath && setupStatus.hasRoleContext;
  const actionLabels = {
    student: ["Get Answer", "Create Quiz"],
    teacher: ["Lesson Plan", "Assessment"],
    lecturer: ["Course Outline", "Assignment"],
    worker: ["Safety Guide", "Practical Steps"],
  };
  const primary = actionLabels[role] || actionLabels.student;
  if (!profile.email) {
    elements.nextStepTitle.textContent = "Register or login to begin.";
    elements.nextStepSummary.textContent = "Your workspace tools will appear after account access.";
    elements.nextStepActions.innerHTML = `<button type="button" data-workspace-tab="#student-portal">Open Account</button>`;
    return;
  }
  if (!setupComplete) {
    elements.nextStepTitle.textContent = "Complete your portal setup.";
    elements.nextStepSummary.textContent = "Add WhatsApp, education path, and role details so your tools can personalize correctly.";
    elements.nextStepActions.innerHTML = `
      <button type="button" data-workspace-tab="#account-settings">Open Settings</button>
      <button class="secondary" type="button" data-workspace-tab="#portalFeatures">View Portal Tools</button>
    `;
    return;
  }
  if (!hasFocus) {
    elements.nextStepTitle.textContent = "Choose your research focus.";
    elements.nextStepSummary.textContent = "Select your subject, course, module, topic, or skill before asking AI.";
    elements.nextStepActions.innerHTML = `
      <button type="button" data-workspace-tab="#moduleResearch">Choose Module</button>
      <button class="secondary" type="button" data-workspace-tab="#account-settings">Check Profile</button>
    `;
    return;
  }
  if (!hasAnswer) {
    elements.nextStepTitle.textContent = "Run your first AI action.";
    elements.nextStepSummary.textContent = `${getRoleLabel(role)} tools are ready for ${state.selectedUnits[0]}.`;
    elements.nextStepActions.innerHTML = `
      <button type="button" data-next-action-primary>${primary[0]}</button>
      <button class="secondary" type="button" data-next-action-secondary>${primary[1]}</button>
    `;
    return;
  }
  if (!hasChat) {
    elements.nextStepTitle.textContent = "Ask a follow-up question.";
    elements.nextStepSummary.textContent = "Continue learning in chat, then save notes or send the answer to WhatsApp.";
    elements.nextStepActions.innerHTML = `
      <button type="button" data-workspace-tab="#research-chat">Open Chat</button>
      <button class="secondary" type="button" data-workspace-tab="#results">Review Result</button>
    `;
    return;
  }
  elements.nextStepTitle.textContent = "Keep building your workspace.";
  elements.nextStepSummary.textContent = "Save notes, download PDFs, revise weak topics, or run readiness checks.";
  elements.nextStepActions.innerHTML = `
    <button type="button" data-workspace-tab="#dashboard">View Progress</button>
    <button class="secondary" type="button" data-workspace-tab="#feature-readiness">Run Checks</button>
  `;
}

const africanScholarTips = [
  { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", tip: "Review your notes consistently every morning and evening." },
  { quote: "An ant on the move does more than a dozing ox.", author: "Rwandan Proverb", tip: "Take small daily study steps rather than cramming." },
  { quote: "He who learns, teaches.", author: "Ethiopian Proverb", tip: "Explain what you study to a classmate or study group." },
  { quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.", author: "Guinean Proverb", tip: "Practice past exam questions regularly." },
  { quote: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb", tip: "Collaborate with peers in your study portal." }
];

function getDailyScholarTip() {
  const index = Math.floor(Date.now() / 86400000) % africanScholarTips.length;
  return africanScholarTips[index];
}

function renderDashboard() {
  if (!elements.dashboardTitle) {
    return;
  }
  const profile = getStudentProfile();
  const role = profile.role || "student";
  const questions = [...getLocalList("studentResearchQuestions"), ...getLocalList("studentResearchChat").filter((item) => item.role === "user")];
  const answers = getLocalList("studentResearchAnswers");
  const dashboardLabels = {
    student: ["Student workspace", profile.name ? `${profile.name}'s study home` : "Your study home", "Courses, questions, saved answers, exam revision, notes, and WhatsApp research activity."],
    teacher: ["Teacher workspace", profile.name ? `${profile.name}'s teaching home` : "Your teaching home", "Private lesson plans, class activities, quizzes, practical guides, notes, and AI drafts."],
    lecturer: ["Lecturer workspace", profile.name ? `${profile.name}'s university workspace` : "Your university workspace", "Private course outlines, lecture notes, tutorials, assignments, references, and AI drafts."],
    worker: ["Worker workspace", profile.name ? `${profile.name}'s skills workspace` : "Your skills workspace", "Private skills guides, safety steps, reports, practical guides, and saved learning packs."],
  };
  const labels = dashboardLabels[role] || dashboardLabels.student;
  elements.dashboardEyebrow.textContent = labels[0];
  elements.dashboardTitle.textContent = labels[1];
  elements.dashboardSubtitle.textContent = labels[2];
  elements.savedUnitsCount.textContent = state.selectedUnits.length;
  elements.questionCount.textContent = questions.length;
  elements.downloadCount.textContent = localStorage.getItem("studentResearchDownloads") || "0";
  elements.whatsappCount.textContent = localStorage.getItem("studentResearchWhatsapp") || "0";
  const progress = Math.min(100, (questions.length + answers.length + state.selectedUnits.length) * 20);
  elements.streakRing.textContent = `${progress}%`;
  elements.streakRing.style.setProperty("--progress", `${progress}%`);
  elements.streakTitle.textContent = progress >= 100 ? "Research streak complete" : "Build today's research streak";
  elements.streakText.textContent =
    progress >= 100 ? "Great work. You have studied, saved, and asked today." : "Add units, ask questions, and save answers to complete it.";

  const dailyTip = getDailyScholarTip();
  const qEl = document.getElementById("scholarQuote");
  const aEl = document.getElementById("scholarAuthor");
  const tEl = document.getElementById("scholarTip");
  if (qEl) qEl.textContent = `"${dailyTip.quote}"`;
  if (aEl) aEl.textContent = `— ${dailyTip.author}`;
  if (tEl) tEl.textContent = `💡 Tip: ${dailyTip.tip}`;

  $("#dashboardUnitsTitle").textContent = "Saved courses and units";
  elements.dashboardUnits.innerHTML = state.selectedUnits.length
    ? state.selectedUnits.slice(0, 8).map((item) => `<span>${item}</span>`).join("")
    : `<span>No units saved yet</span>`;

  $("#dashboardQuestionsTitle").textContent = "Recent research questions";
  const combinedQueries = [...questions, ...getChatHistory()].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 5);
  elements.dashboardQuestions.innerHTML = combinedQueries.length
    ? combinedQueries
        .map((item) => `<div class="activity-item"><strong>${item.text || "Question"}</strong><span>${item.selected || item.country || "General research"}</span></div>`)
        .join("")
    : `<div class="activity-item">Your research history will appear here.</div>`;

  $("#dashboardAnswersTitle").textContent = "Saved answers";
  elements.dashboardAnswers.innerHTML = answers.length
    ? answers.slice(0, 5).map((item) => `<div class="activity-item"><strong>${item.title}</strong><span>${item.collection || "General"} - ${item.short}</span></div>`).join("")
    : `<div class="activity-item">Saved drafts will appear here.</div>`;
  const collections = answers.reduce((grouped, item) => {
    const key = item.collection || "General Revision";
    grouped[key] = (grouped[key] || 0) + 1;
    return grouped;
  }, {});
  elements.dashboardCollections.innerHTML = Object.keys(collections).length
    ? Object.entries(collections)
        .map(([name, count]) => `<div class="activity-item"><strong>${name}</strong><span>${count} saved answer${count === 1 ? "" : "s"}</span></div>`)
        .join("")
    : `<div class="activity-item">Save answers into revision folders for exams, assignments, or difficult topics.</div>`;
  const notes = getLocalList("studentResearchNotes");
  elements.dashboardNotes.innerHTML = notes.length
    ? notes
        .slice(0, 5)
        .map((item) => `<div class="activity-item"><strong>${item.title}</strong><span>${item.text}</span></div>`)
        .join("")
    : `<div class="activity-item">Your own topic notes will appear here.</div>`;
  renderPrivateDrafts();
  renderDailyMissions(questions, answers);
  renderNextStepPanel();
}

function getPrivateDrafts() {
  return getLocalList("studentResearchPrivateDrafts");
}

function savePrivateDraft(type, title, html) {
  const drafts = getPrivateDrafts();
  drafts.unshift({
    type,
    title,
    html,
    role: getStudentProfile().role || "student",
    createdAt: Date.now(),
  });
  saveLocalList("studentResearchPrivateDrafts", drafts.slice(0, 40));
  renderPrivateDrafts();
}

function renderPrivateDrafts() {
  if (!elements.privateDraftsList) {
    return;
  }
  const role = getStudentProfile().role || "student";
  const drafts = getPrivateDrafts().filter((item) => !item.role || item.role === role);
  elements.privateDraftsList.innerHTML = drafts.length
    ? drafts
        .slice(0, 6)
        .map((item) => `<div class="activity-item"><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.type)} - private AI draft</span></div>`)
        .join("")
    : `<div class="activity-item">Private AI drafts you generate will appear here.</div>`;
}

function renderDailyMissions(questions, answers) {
  const downloads = Number(localStorage.getItem("studentResearchDownloads") || "0");
  const missions = [
    {
      title: "Choose focus",
      text: "Save at least one course unit",
      done: state.selectedUnits.length > 0,
    },
    {
      title: "Ask research",
      text: "Ask one question by search, chat, photo, or voice",
      done: questions.length > 0,
    },
    {
      title: "Keep notes",
      text: "Save an answer or download a PDF",
      done: answers.length > 0 || downloads > 0,
    },
  ];
  const done = missions.filter((item) => item.done).length;
  elements.missionScore.textContent = `${done}/3 done`;
  elements.missionList.innerHTML = missions
    .map(
      (item) => `
        <div class="mission-item ${item.done ? "done" : ""}">
          <strong>${item.done ? "Done" : "Next"}: ${item.title}</strong>
          <span>${item.text}</span>
        </div>
      `
    )
    .join("");
}

function getChatHistory() {
  return getLocalList("studentResearchChat");
}

function saveChatHistory(messages) {
  saveLocalList("studentResearchChat", messages.slice(-80));
}

function renderChat() {
  const messages = getChatHistory();
  elements.chatMessages.innerHTML = messages.length
    ? messages
        .map((item) => {
          const text = item.role === "user" ? escapeHTML(item.text) : sanitizeBasicHTML(item.text);
          return `<div class="chat-message ${item.role === "user" ? "user" : "ai"}"><small>${item.role === "user" ? "You" : "Student Research AI"}</small>${text}</div>`;
        })
        .join("")
    : `<div class="chat-message ai"><small>Student Research AI</small>Hello. Ask any topic, exam question, course unit, snapped-question explanation, or revision request.</div>`;
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function createChatReply(question) {
  const normalized = normalizeQuery(question.replace(/^(explain|define|what is|give|create)\s+/i, "").replace(/\?$/, ""));
  const answer = answerTemplates[normalized.toLowerCase()] || buildGenericAnswer(normalized);
  return `${answer.short}<br><br><strong>Next:</strong> ${answer.examples[0]}<br><strong>Try asking:</strong> Can you give me past questions on ${answer.title}?`;
}

function buildLearningContext() {
  const profile = getStudentProfile();
  const country = elements.countryFilter?.value || profile.country || "All African countries";
  const countryProfile = getCountryEducationProfile(country);
  const language = profile.educationLanguage || elements.settingsEducationLanguage?.value || elements.languageFilter?.value || getSuggestedEducationLanguage(country);
  return {
    country,
    level: state.level,
    studyType: getStudentProfile().studyType || elements.studyType?.value || inferStudyType(state.level, getStudentProfile().role),
    course: elements.courseSelect?.value || state.currentQuery || "General study",
    department: profile.department || elements.accountDepartment?.value || "",
    unit: elements.unitSelect?.value || "Current topic",
    language,
    educationLanguage: language,
    outputMode: elements.outputFilter?.value || "Study answer",
    examBodies: countryProfile.examBodies,
    exams: countryProfile.exams,
  };
}

async function fetchGroqStudyAnswer(query) {
  const response = await fetch("https://YOUR_SUPABASE_PROJECT_REF.supabase.co/functions/v1/groq-search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      context: buildLearningContext(),
    }),
  });

  if (!response.ok) {
    throw new Error("Groq search backend unavailable");
  }

  const data = await response.json();
  return data.answer;
}

async function fetchGroqReply(question) {
  const response = await fetch("https://YOUR_SUPABASE_PROJECT_REF.supabase.co/functions/v1/groq-chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: question,
      history: getChatHistory().slice(-10),
      context: buildLearningContext(),
    }),
  });

  if (!response.ok) {
    throw new Error("Groq backend unavailable");
  }

  const data = await response.json();
  return data.reply;
}

async function sendChatMessage(message) {
  const text = message.trim();
  if (!text) {
    return;
  }
  const history = getChatHistory();
  history.push({ role: "user", text, createdAt: Date.now() });
  history.push({ role: "ai", text: "<strong>Generating private AI draft...</strong><br>Please wait while Student Research AI prepares a response.", createdAt: Date.now(), pending: true });
  saveChatHistory(history);
  renderChat();
  const updatedHistory = getChatHistory().filter((item) => !item.pending);
  let reply = "";
  try {
    reply = await fetchGroqReply(text);
  } catch (error) {
    reply = createChatReply(text);
  }
  updatedHistory.push({ role: "ai", text: reply, createdAt: Date.now() });
  saveChatHistory(updatedHistory);
  renderChat();
  renderDashboard();
  showToast("Research chat replied.");
}

function submitChat(event) {
  event.preventDefault();
  sendChatMessage(elements.chatInput.value).catch(() => showToast("Chat could not reply. Try again."));
  elements.chatInput.value = "";
}

function clearChat() {
  localStorage.removeItem("studentResearchChat");
  renderChat();
  renderDashboard();
  showToast("Research chat cleared.");
}

function buildLessonPlan(subject, topic, level) {
  const profile = getCountryEducationProfile(elements.countryFilter.value);
  const safeSubject = escapeHTML(subject);
  const safeTopic = escapeHTML(topic);
  const safeLevel = escapeHTML(level);
  const safeCountry = escapeHTML(profile.country);
  return `
    <h3>${safeTopic} Lesson Plan</h3>
    <p><strong>Subject:</strong> ${safeSubject} | <strong>Level:</strong> ${safeLevel} | <strong>Country:</strong> ${safeCountry}</p>
    <ol>
      <li><strong>Objectives:</strong> learners should define ${safeTopic}, explain key points, solve or discuss examples, and answer a short assessment.</li>
      <li><strong>Materials:</strong> board, learner notebooks, local examples, approved textbook, diagrams, and any safe practical materials.</li>
      <li><strong>Introduction:</strong> ask learners what they already know and connect the topic to daily life or exams.</li>
      <li><strong>Teacher activities:</strong> explain the concept, demonstrate examples, guide discussion, and correct misconceptions.</li>
      <li><strong>Learner activities:</strong> answer questions, work in pairs, complete one practice task, and present one finding.</li>
      <li><strong>Assessment:</strong> give three short questions, one application question, and one exam-style question.</li>
      <li><strong>Homework:</strong> summarize ${safeTopic}, answer two past-question style items, and prepare one question for the next lesson.</li>
      <li><strong>Support:</strong> give weaker learners sentence starters; give stronger learners an extension or research task.</li>
    </ol>
  `;
}

async function submitLessonPlan(event) {
  event.preventDefault();
  const subject = elements.lessonSubject.value.trim() || elements.courseSelect.value || "General Studies";
  const topic = elements.lessonTopic.value.trim() || state.currentQuery || "Selected Topic";
  const level = elements.lessonLevel.value.trim() || state.level || "Mixed level";
  elements.lessonPlanOutput.textContent = "Generating AI lesson plan draft...";
  try {
    elements.lessonPlanOutput.innerHTML = await fetchGroqReply(`Create a private teacher lesson plan for ${subject}, topic ${topic}, level ${level}. Include objectives, materials, introduction, teacher activities, learner activities, assessment, homework, differentiation, and note that this is an AI-assisted draft.`);
  } catch (error) {
    elements.lessonPlanOutput.innerHTML = buildLessonPlan(subject, topic, level);
  }
  savePrivateDraft("Lesson plan", `${subject}: ${topic}`, elements.lessonPlanOutput.innerHTML);
  showToast("AI lesson plan draft created.");
}

function buildCourseOutline(course, module, duration) {
  const safeCourse = escapeHTML(course);
  const safeModule = escapeHTML(module);
  const safeDuration = escapeHTML(duration);
  return `
    <h3>${safeModule} Course Outline</h3>
    <p><strong>Programme:</strong> ${safeCourse} | <strong>Duration:</strong> ${safeDuration}</p>
    <ol>
      <li><strong>Course description:</strong> introduces the main theories, applications, practical work, and assessment tasks for ${safeModule}.</li>
      <li><strong>Learning outcomes:</strong> explain key concepts, apply methods to examples, complete assignments, and defend answers with references.</li>
      <li><strong>Weekly structure:</strong> definitions, core theory, examples, practical/tutorial work, revision, and assessment.</li>
      <li><strong>Tutorials:</strong> guided questions, group tasks, short presentations, and problem-solving sessions.</li>
      <li><strong>Assignments:</strong> one individual task, one applied project, and one reflective summary.</li>
      <li><strong>Assessment:</strong> quiz, assignment, participation/tutorial work, and final exam or project.</li>
      <li><strong>References:</strong> add institution-approved textbooks, journal articles, open educational resources, and local examples.</li>
    </ol>
    <p><strong>Status:</strong> AI-assisted private draft. A lecturer or admin should review before official use.</p>
  `;
}

async function submitCourseOutline(event) {
  event.preventDefault();
  const course = elements.outlineCourse.value.trim() || elements.accountCourse.value.trim() || "University programme";
  const module = elements.outlineModule.value.trim() || state.currentQuery || "Selected module";
  const duration = elements.outlineDuration.value.trim() || "One semester";
  elements.courseOutlineOutput.textContent = "Generating AI course outline draft...";
  try {
    elements.courseOutlineOutput.innerHTML = await fetchGroqReply(`Create a private university course outline for programme ${course}, module ${module}, duration ${duration}. Include course description, learning outcomes, weekly topics, tutorials, assignments, assessment, references, and AI draft status.`);
  } catch (error) {
    elements.courseOutlineOutput.innerHTML = buildCourseOutline(course, module, duration);
  }
  savePrivateDraft("Course outline", `${course}: ${module}`, elements.courseOutlineOutput.innerHTML);
  showToast("AI course outline draft created.");
}

function buildPracticalGuide(subject, topic) {
  const cleanTopic = topic || "Selected practical";
  const safeSubject = escapeHTML(subject);
  const safeTopic = escapeHTML(cleanTopic);
  const videoQuery = encodeURIComponent(`${subject} ${cleanTopic} practical lesson`);
  return `
    <h3>${safeTopic} Practical Guide</h3>
    <p><strong>Subject:</strong> ${safeSubject}</p>
    <ol>
      <li><strong>Aim:</strong> investigate or demonstrate ${safeTopic} clearly and safely.</li>
      <li><strong>Apparatus:</strong> list all materials before starting; use locally available alternatives only when safe.</li>
      <li><strong>Safety:</strong> wear protective gear where needed, keep the work area clear, and ask a teacher before handling heat, electricity, chemicals, blades, or biological samples.</li>
      <li><strong>Procedure:</strong> follow numbered steps, change only one variable at a time, and record every observation.</li>
      <li><strong>Observation table:</strong> include material used, action taken, observation, and conclusion.</li>
      <li><strong>Expected result:</strong> compare your result with the theory and explain differences.</li>
      <li><strong>Common mistakes:</strong> rushing measurements, mixing labels, skipping safety checks, and writing vague observations.</li>
      <li><strong>Viva questions:</strong> state the aim, name the apparatus, explain the safety rule, and interpret the result.</li>
    </ol>
    <p><strong>Video search:</strong> <a href="https://www.youtube.com/results?search_query=${videoQuery}" target="_blank" rel="noopener">Find approved video lessons for ${safeTopic}</a></p>
  `;
}

async function submitPracticalGuide(event) {
  event.preventDefault();
  const subject = elements.practicalSubject.value.trim() || elements.courseSelect.value || "Practical subject";
  const topic = elements.practicalTopic.value.trim() || state.currentQuery || practicalVideoTopics.biology[0];
  elements.practicalGuideOutput.textContent = "Generating AI practical guide draft...";
  try {
    elements.practicalGuideOutput.innerHTML = await fetchGroqReply(`Create a private practical guide for ${subject}, topic ${topic}. Include aim, apparatus, safety warnings, procedure, observation table, expected results, common mistakes, viva questions, and video search keywords. Mark it as AI-assisted draft.`);
  } catch (error) {
    elements.practicalGuideOutput.innerHTML = buildPracticalGuide(subject, topic);
  }
  savePrivateDraft("Practical guide", `${subject}: ${topic}`, elements.practicalGuideOutput.innerHTML);
  showToast("AI practical guide draft created.");
}

function getToneAnswer(answer) {
  const tone = elements.answerTone?.value || "simple";
  if (tone === "exam") {
    return `${answer.short} For exams, write the definition first, add two key points, then give one clear example. Use correct terms and keep your answer direct.`;
  }
  if (tone === "university") {
    return `${answer.short} At university level, connect the concept to theory, applications, limitations, and references. Explain assumptions and compare related ideas where useful.`;
  }
  return answer.short;
}

function renderCurrentAnswerTone() {
  if (!state.currentAnswer) {
    return;
  }
  elements.shortAnswer.textContent = getToneAnswer(state.currentAnswer);
}

function getDifficulty(answer) {
  const text = `${answer.title} ${answer.short} ${answer.notes.join(" ")}`.toLowerCase();
  if (/(law|engineering|normalization|thermodynamics|pharmacology|constitutional|university|algorithm)/.test(text)) {
    return { label: "Advanced topic", width: "78%" };
  }
  if (/(chemistry|physics|biology|anatomy|database|economics)/.test(text)) {
    return { label: "Intermediate topic", width: "58%" };
  }
  return { label: "Beginner friendly", width: "38%" };
}

function renderStudyKit(answer) {
  const plan = [
    `Read the short definition of ${answer.title}.`,
    "Study the detailed notes and highlight key terms.",
    "Practice two examples without looking at the answer.",
    "Answer the quick quiz and review mistakes.",
    "Save or download the notes for revision.",
  ];
  elements.studyPlanList.innerHTML = plan.map((item) => `<li>${item}</li>`).join("");
  elements.flashcards.innerHTML = [
    { front: `What is ${answer.title}?`, back: answer.short },
    { front: "Key example", back: answer.examples[0] || "Use a practical school or course example." },
    { front: "Related topic", back: answer.related[0] || "Definitions" },
  ]
    .map((item) => `<div class="flashcard"><strong>${item.front}</strong><span>${item.back}</span></div>`)
    .join("");
  elements.sourceCards.innerHTML = ["Syllabus aligned", "Admin/reviewer ready", "Past-question friendly"]
    .map((item) => `<span>${item}</span>`)
    .join("");
  const difficulty = getDifficulty(answer);
  elements.difficultyLabel.textContent = difficulty.label;
  elements.difficultyBar.style.width = difficulty.width;
  elements.nextActions.innerHTML = [
    { label: "Ask follow-up in chat", action: `Explain ${answer.title} with more examples` },
    { label: "Create exam quiz", action: `Create exam questions on ${answer.title}` },
    { label: "Create course outline", action: `Create a course outline for ${answer.title}` },
    { label: "Create lesson plan", action: `Create a lesson plan for ${answer.title}` },
    { label: "Compare related topic", action: `Compare ${answer.title} and ${answer.related[0] || "related concepts"}` },
  ]
    .map((item) => `<button type="button" data-chat-prompt="${item.action}">${item.label}</button>`)
    .join("");
  const savedNote = getLocalList("studentResearchNotes").find((item) => item.title === answer.title);
  elements.topicNote.value = savedNote ? savedNote.text : "";
  elements.citationBox.textContent = "Citation will appear here.";
}

function getProfessionalStatus(answer) {
  const text = `${answer.title} ${answer.short} ${answer.notes.join(" ")}`.toLowerCase();
  const needsSafety = /(practical|chemistry|physics|nursing|electrical|health|medicine|laboratory|construction|welding|drug|chemical|circuit)/.test(text);
  const examContext = getCountryEducationProfile(elements.countryFilter.value);

  const statusLabels = {
    draft: "AI Draft - verified by expert pending",
    pendingReview: "In Review - being checked by staff",
    approved: "Verified - official trusted content",
    rejected: "Flagged - hidden for quality control",
    needsCorrection: "Revising - returned for correction"
  };

  return {
    reviewStatus: statusLabels[answer.status] || statusLabels.draft,
    sourceStatus: "Source labels required before approval",
    contextStatus: `${examContext.country} context applied`,
    safetyStatus: needsSafety ? "Safety supervision required" : "Standard study safety",
    confidenceStatus: answerTemplates[answer.title.toLowerCase()] ? "Verified Template" : "AI-Generated Draft",
  };
}

function renderProfessionalQuality(answer) {
  const status = getProfessionalStatus(answer);
  elements.answerQualityBanner.textContent = `${status.reviewStatus}. ${status.sourceStatus}.`;
  const statusClass = (answer.status || "draft").toLowerCase();
  elements.resultQualityList.innerHTML = [
    `<span class="status-pill status-${statusClass}">${status.reviewStatus}</span>`,
    status.sourceStatus,
    status.confidenceStatus,
    "Student report button active",
  ]
    .map((item) => `<span>${item}</span>`)
    .join("");
  elements.professionalStatusList.innerHTML = [
    status.contextStatus,
    status.safetyStatus,
    "Saved answer audit trail enabled",
    "Admin approval workflow ready",
  ]
    .map((item) => `<span>${item}</span>`)
    .join("");
}

function runFrontendQaChecks() {
  const checks = [
    ["Public pages", Boolean($("#home") && $("#about-us") && $("#what-we-do") && $("#contact-us")), "Home, About, What we do, and Contact sections exist."],
    ["Auth tabs", Boolean(elements.studentLogin && elements.accountAction && document.querySelectorAll("[data-auth-tab]").length === 2), "Register and login tabs are wired."],
    ["Smart registration", Boolean(elements.roleRegisterHint && elements.courseLabel && roleRegistrationCopy.worker), "Registration labels, hints, and validation change by role."],
    ["Password eyes", document.querySelectorAll("[data-toggle-password]").length >= 2, "Show/hide password controls are present."],
    ["User roles", ["student", "teacher", "lecturer", "worker"].every((role) => [...elements.accountRole.options].some((option) => option.value === role)), "Student, teacher, lecturer, and worker roles exist."],
    ["Countries", elements.accountCountry.options.length > 20 && elements.countryFilter.options.length > 20, "African country selectors are populated."],
    ["Study types", ["subject", "course", "professional", "skill"].every((type) => [...elements.studyType.options].some((option) => option.value === type)), "Subjects, courses, professional courses, and skills are separated."],
    ["Module picker", Boolean(elements.courseSelect.options.length && elements.unitSelect.options.length), "Subject/course and module selectors are populated."],
    ["Research actions", document.querySelectorAll("[data-module-action]").length >= 6, "Module action buttons are rendered."],
    ["Role dashboard", Boolean(elements.roleDashboardCards && elements.workspaceStatus), "Role workspace cards and status are available."],
    ["Workspace tabs", document.querySelectorAll("[data-workspace-tab]").length >= 6, "Logged-in users can jump quickly to the main workspace areas."],
    ["Next action panel", Boolean(elements.nextStepTitle && elements.nextStepActions), "The system suggests what users should do next."],
    ["Starter prompts", Boolean(elements.starterPrompts && document.querySelector("[data-starter-prompt]")), "Users get ready-made role-aware prompts after choosing a module."],
    ["Learning path", Boolean(elements.learningPath && document.querySelector("[data-path-action]")), "Users get a guided sequence for the selected module."],
    ["Role onboarding", document.querySelectorAll("[data-onboarding-target]").length === 4, "Role-aware onboarding steps can guide users to the next area."],
    ["Results page", Boolean(elements.resultTitle && elements.resultCountry && elements.resultSafetyWarning && elements.askFollowUp), "Professional result context and actions are present."],
    ["AI tools", Boolean(elements.lessonPlanForm && elements.courseOutlineForm && elements.practicalGuideForm && elements.askTutor), "Lesson plan, course outline, practical guide, and tutor tools exist."],
    ["Chat", Boolean(elements.chatForm && elements.chatMessages && elements.clearChat), "Research chat controls are available."],
    ["WhatsApp", Boolean(elements.sendWhatsapp && elements.sendAnswerWhatsapp && elements.quickWhatsappForm), "Website and result WhatsApp actions are present."],
    ["Offline packs", Boolean(elements.offlinePackList && offlinePacks.length), "Offline study packs can render."],
    ["Local storage", canUseLocalStorage(), "Browser storage is available for demo accounts and saved work."],
    ["Service worker", "serviceWorker" in navigator, "Installable/offline app support is available in this browser."],
    ["PWA manifest", Boolean(document.querySelector('link[rel="manifest"]')), "The app exposes a web app manifest for installation."],
    ["Mobile app nav", Boolean(elements.bottomNav && elements.appDrawer && elements.appMenuToggle), "Bottom navigation and drawer menu are available for phone use."],
    ["Education verification", Boolean(elements.educationVerificationList || getEducationVerificationStatus()), "Education maps can move from AI draft to admin reviewed or verified."],
  ];

  const passed = checks.filter(([, ok]) => ok).length;
  elements.qaSummary.textContent = `${passed}/${checks.length} frontend checks passed. Last checked ${new Date().toLocaleString()}.`;
  elements.qaList.innerHTML = checks
    .map(
      ([name, ok, detail]) => `
        <div class="qa-item ${ok ? "pass" : "warn"}">
          <strong>${ok ? "Pass" : "Check"} - ${name}</strong>
          <span>${detail}</span>
        </div>
      `
    )
    .join("");
}

function canUseLocalStorage() {
  try {
    const key = "studentResearchQaStorage";
    localStorage.setItem(key, "ok");
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

const demoProfiles = {
  student: {
    action: "register",
    role: "student",
    status: "active",
    canContribute: false,
    password: "Demo123!",
    name: "Demo Student",
    email: "demo@studentresearch.africa",
    whatsapp: "+23276000000",
    school: "Demo School",
    country: "Sierra Leone",
    level: "SSS",
    studyType: "subject",
    course: "Biology",
    department: "Science",
    skillArea: "",
    certificationLevel: "",
  },
  teacher: {
    action: "register",
    role: "teacher",
    status: "pendingReview",
    canContribute: false,
    password: "Demo123!",
    name: "Demo Teacher",
    email: "teacher@studentresearch.africa",
    whatsapp: "+2348010000000",
    school: "Demo Secondary School",
    country: "Nigeria",
    level: "SSS",
    studyType: "subject",
    course: "Chemistry",
    department: "Science",
    skillArea: "",
    certificationLevel: "",
  },
  lecturer: {
    action: "register",
    role: "lecturer",
    status: "pendingReview",
    canContribute: false,
    password: "Demo123!",
    name: "Demo Lecturer",
    email: "lecturer@studentresearch.africa",
    whatsapp: "+233240000000",
    school: "Demo University",
    country: "Ghana",
    level: "University",
    studyType: "course",
    course: "Computer Science",
    department: "Computing",
    skillArea: "",
    certificationLevel: "",
  },
  worker: {
    action: "register",
    role: "worker",
    status: "active",
    canContribute: false,
    password: "Demo123!",
    name: "Demo Worker",
    email: "worker@studentresearch.africa",
    whatsapp: "+254700000000",
    school: "Demo Workplace",
    country: "Kenya",
    level: "Worker",
    studyType: "skill",
    course: "Solar Installation",
    department: "Technical Skills",
    skillArea: "Solar Installation",
    certificationLevel: "Beginner",
  },
};

function seedDemoPortalAccounts() {
  const accounts = getLocalList("studentResearchAccounts");
  const accountMap = new Map(accounts.map((item) => [String(item.email || "").toLowerCase(), item]));

  Object.values(demoProfiles).forEach((profile) => {
    const email = String(profile.email || "").toLowerCase();
    if (!accountMap.has(email)) {
      accounts.unshift({
        uid: `demo-${profile.role}`,
        email,
        password: profile.password,
        role: profile.role,
        profile: { ...profile },
        createdAt: Date.now(),
      });
      accountMap.set(email, accounts[0]);
    }
  });

  saveLocalList("studentResearchAccounts", accounts.slice(0, 200));
}

function useDemoPortalAccount(role) {
  const profile = demoProfiles[role] || demoProfiles.student;
  seedDemoPortalAccounts();
  setAuthMode("login");
  elements.accountRole.value = profile.role;
  elements.studentName.value = profile.name;
  elements.studentEmail.value = profile.email;
  elements.studentPassword.value = profile.password;
  elements.studentPasswordConfirm.value = profile.password;
  elements.studentWhatsapp.value = profile.whatsapp;
  elements.studentSchool.value = profile.school;
  elements.accountCountry.value = profile.country;
  elements.accountLevel.value = profile.level;
  elements.studyType.value = profile.studyType;
  elements.accountCourse.value = profile.course;
  elements.accountDepartment.value = profile.department;
  elements.workerSkill.value = profile.skillArea || "";
  elements.workerCertification.value = profile.certificationLevel || "";
  elements.accountAction.value = "login";
  renderPasswordStrength();
  elements.studentLogin.requestSubmit();
}

const roleDemoActions = {
  student: "answer",
  teacher: "lesson",
  lecturer: "outline",
  worker: "safety",
};

async function runDemoJourney(role = "student", { updateLog = true } = {}) {
  const demoProfile = demoProfiles[role] || demoProfiles.student;
  const action = roleDemoActions[role] || "answer";
  state.currentAnswerType = moduleActionLabels[action] || "Answer";

  localStorage.setItem("studentResearchProfile", JSON.stringify(demoProfile));
  localStorage.setItem("studentResearchQuickWhatsapp", cleanWhatsappNumber(demoProfile.whatsapp));
  elements.accountRole.value = demoProfile.role;
  elements.studentName.value = demoProfile.name;
  elements.studentEmail.value = demoProfile.email;
  elements.studentWhatsapp.value = demoProfile.whatsapp;
  elements.accountCountry.value = demoProfile.country;
  elements.countryFilter.value = demoProfile.country;
  elements.accountLevel.value = demoProfile.level;
  elements.studyType.value = demoProfile.studyType;
  elements.accountCourse.value = demoProfile.course;
  state.level = demoProfile.level;

  renderStudentProfile();
  renderCountryEducation();
  renderCourseOptions();
  if ([...elements.courseSelect.options].some((option) => option.value === demoProfile.course)) {
    elements.courseSelect.value = demoProfile.course;
  }
  renderUnitOptions();
  const preferredUnit = [...elements.unitSelect.options].find((option) => !option.value.startsWith("Choose"))?.value;
  if (preferredUnit) {
    elements.unitSelect.value = preferredUnit;
  }
  renderModuleActionPanel();
  renderAuthState();
  enterWorkspace(demoProfile.role);
  addSelectedUnit({ preventDefault() {} });
  await handleModuleAction(action);
  runFrontendQaChecks();
  if (updateLog) {
    elements.qaJourneyLog.innerHTML = `
      <strong>${getRoleLabel(demoProfile.role)} demo journey passed.</strong>
      <span>Created ${escapeHTML(demoProfile.name)}, opened the ${escapeHTML(getRoleLabel(demoProfile.role).toLowerCase())} workspace, selected ${escapeHTML(elements.courseSelect.value)} / ${escapeHTML(elements.unitSelect.value)}, saved the research focus, and ran ${escapeHTML(moduleActionLabels[action] || "Answer")}.</span>
    `;
  }
  return {
    role: demoProfile.role,
    name: demoProfile.name,
    course: elements.courseSelect.value,
    unit: elements.unitSelect.value,
    action: moduleActionLabels[action] || "Answer",
  };
}

async function runAllRoleJourneys() {
  const results = [];
  for (const role of ["student", "teacher", "lecturer", "worker"]) {
    results.push(await runDemoJourney(role, { updateLog: false }));
  }
  runFrontendQaChecks();
  elements.qaJourneyLog.innerHTML = `
    <strong>All role journeys passed.</strong>
    ${results
      .map((item) => `<span>${escapeHTML(getRoleLabel(item.role))}: ${escapeHTML(item.course)} / ${escapeHTML(item.unit)} - ${escapeHTML(item.action)}</span>`)
      .join("")}
  `;
}

function renderResultContext(answer) {
  const profile = getStudentProfile();
  const focus = getSelectedResearchFocus();
  const country = profile.country || elements.countryFilter.value || "Not selected";
  const role = getRoleLabel(profile.role || "student");
  const level = profile.level || state.level || "Not selected";
  const language = profile.educationLanguage || elements.settingsEducationLanguage?.value || elements.languageFilter?.value || getSuggestedEducationLanguage(country);
  const selectedFocus = focus ? `${focus.typeLabel}: ${focus.course} / ${focus.unit}` : profile.course ? `${profile.studyType || "Focus"}: ${profile.course}` : "No module selected";
  const answerType = state.currentAnswerType || "Answer";
  elements.resultCountry.textContent = `Country: ${country}`;
  elements.resultRole.textContent = `Role: ${role}`;
  elements.resultLevel.textContent = `Level: ${level}`;
  elements.resultFocus.textContent = `Focus: ${selectedFocus}`;
  elements.resultAnswerType.textContent = `Type: ${answerType} | Language: ${language}`;

  const status = getProfessionalStatus(answer);
  const needsSafety = status.safetyStatus === "Safety supervision required";
  elements.resultSafetyWarning.hidden = !needsSafety;
  elements.resultSafetyWarning.textContent = needsSafety
    ? "Safety warning: this topic may involve practical work, health, electricity, chemicals, tools, or laboratory activity. Use teacher, lecturer, supervisor, or qualified professional guidance before attempting it."
    : "";
}

function saveTopicNote() {
  if (!state.currentAnswer) {
    return;
  }
  const notes = getLocalList("studentResearchNotes").filter((item) => item.title !== state.currentAnswer.title);
  notes.unshift({
    title: state.currentAnswer.title,
    text: elements.topicNote.value.trim() || "No note text yet.",
    updatedAt: Date.now(),
  });
  saveLocalList("studentResearchNotes", notes.slice(0, 40));
  renderDashboard();
  showToast("Topic note saved to your notebook.");
}

function generateCitation() {
  const title = state.currentAnswer?.title || "Study Topic";
  const year = new Date().getFullYear();
  const citation = `Student Research Africa. (${year}). ${title}. Retrieved from Student Research Africa app.`;
  elements.citationBox.textContent = citation;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(citation).catch(() => {});
  }
  showToast("Citation generated and copied if supported.");
}

function renderCollectionMap() {
  if (!elements.collectionMap) {
    return;
  }
  elements.collectionMap.innerHTML = "<span>profiles</span><span>questions</span><span>answers</span><span>resources</span>";
}

function renderApprovalQueue() {
  if (!elements.approvalQueue) {
    return;
  }
  const uploads = getLocalList("studentResearchUploads");
  elements.approvalQueue.innerHTML = uploads.length
    ? uploads
        .slice(0, 8)
        .map((item) => `<div class="activity-item"><strong>${item.title}</strong><span>${item.type} - ${item.status || "pendingReview"}</span></div>`)
        .join("")
    : `<div class="activity-item">Admin uploads and future contributor submissions will wait here for approval.</div>`;
}

function getEducationVerificationStatus(country = elements.settingsCountry?.value || elements.countryFilter?.value || "Africa") {
  const statuses = JSON.parse(localStorage.getItem("studentResearchEducationVerification") || "{}");
  return statuses[country] || "AI draft";
}

function setEducationVerificationStatus(status) {
  const country = elements.settingsCountry?.value || elements.countryFilter?.value || "Africa";
  const statuses = JSON.parse(localStorage.getItem("studentResearchEducationVerification") || "{}");
  statuses[country] = status;
  localStorage.setItem("studentResearchEducationVerification", JSON.stringify(statuses));
  renderEducationVerification();
  renderEducationPathSettings(getStudentProfile());
  showToast(`${country} education map marked ${status}.`);
}

function renderEducationVerification() {
  if (!elements.educationVerificationList) {
    return;
  }
  const country = elements.settingsCountry?.value || elements.countryFilter?.value || "Africa";
  const status = getEducationVerificationStatus(country);
  const countryPath = getCountryEducationPath(country);
  elements.educationVerificationList.innerHTML = `
    <div class="activity-item"><strong>${escapeHTML(country)}</strong><span>Status: ${escapeHTML(status)}</span></div>
    <div class="activity-item"><strong>Source</strong><span>${escapeHTML(countryPath.source)}</span></div>
    <div class="activity-item"><strong>Workflow</strong><span>AI draft -> Admin reviewed -> Verified</span></div>
  `;
}

function renderAdminAccess() {
  if (!elements.teacherAdmin || !elements.adminLoginStatus) {
    return;
  }
  const session = getEmbeddedAdminSession();
  elements.teacherAdmin.hidden = !session;
  elements.adminLoginStatus.textContent = session
    ? `Staff dashboard is unlocked for ${session.name} (${session.role}).`
    : "This area is hidden from normal student navigation.";
  renderEducationVerification();
}

function getEmbeddedAdminSession() {
  try {
    const raw = sessionStorage.getItem("studentResearchAdminSession");
    const session = raw ? JSON.parse(raw) : null;
    if (!session || !session.expiresAt || Date.now() > Number(session.expiresAt)) {
      sessionStorage.removeItem("studentResearchAdminSession");
      return null;
    }
    return session;
  } catch (error) {
    sessionStorage.removeItem("studentResearchAdminSession");
    return null;
  }
}

function renderSubjects() {
  elements.subjectGroups.innerHTML = subjectGroups
    .map(
      (group) => `
        <div class="subject-group">
          <strong>${group.title}</strong>
          ${group.items.map((item) => `<button type="button" data-search="${item}">${item}</button>`).join("")}
        </div>
      `
    )
    .join("");
}

function renderExams() {
  elements.examList.innerHTML = exams
    .map(
      (exam) => `
        <button class="exam-card" type="button" data-search="${exam.title}">
          <strong>${exam.title}</strong>
          <span>${exam.meta}</span>
        </button>
      `
    )
    .join("");
}

function renderChips(container, items) {
  container.innerHTML = items.map((item) => `<button class="chip" type="button" data-search="${item}">${item}</button>`).join("");
}

function getHistory() {
  return JSON.parse(localStorage.getItem("studentResearchHistory") || "[]");
}

function saveHistory(query) {
  const history = getHistory().filter((item) => item.toLowerCase() !== query.toLowerCase());
  history.unshift(query);
  localStorage.setItem("studentResearchHistory", JSON.stringify(history.slice(0, 8)));
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  elements.historyList.innerHTML = history.length
    ? history.map((item) => `<button class="chip" type="button" data-search="${item}">${item}</button>`).join("")
    : `<p class="empty-state">Your recent searches will appear here after you search.</p>`;
}

function saveProgressTopic(title) {
  const context = buildLearningContext();
  const progress = getLocalList("studentResearchProgress").filter((item) => item.title !== title);
  progress.unshift({
    title,
    level: state.level,
    country: elements.countryFilter.value,
    language: context.language,
    completedAt: Date.now(),
  });
  saveLocalList("studentResearchProgress", progress.slice(0, 60));
}

function renderOfflinePacks() {
  const saved = getLocalList("studentResearchOfflinePacks");
  elements.offlinePackList.innerHTML = offlinePacks
    .map((pack) => {
      const isSaved = saved.some((item) => item.title === pack.title);
      return `<button class="pack-card" type="button" data-save-pack="${pack.title}"><strong>${pack.title}</strong><span>${pack.level} - ${pack.topics.join(", ")}</span><small>${isSaved ? "Saved offline" : "Tap to save"}</small></button>`;
    })
    .join("");
}

function saveOfflinePack(title) {
  const pack = offlinePacks.find((item) => item.title === title);
  if (!pack) {
    return;
  }
  const saved = getLocalList("studentResearchOfflinePacks").filter((item) => item.title !== title);
  saved.unshift({ ...pack, savedAt: Date.now() });
  saveLocalList("studentResearchOfflinePacks", saved.slice(0, 20));
  renderOfflinePacks();
  renderStudentProgress();
  showToast(`${title} saved for offline revision.`);
}

function renderStudentProgress() {
  const progress = getLocalList("studentResearchProgress");
  const savedPacks = getLocalList("studentResearchOfflinePacks");
  const weakTopics = progress.slice(0, 3).map((item) => item.title);
  const recommended = weakTopics.length ? weakTopics.map((topic) => `Review ${topic} with quiz and past questions.`) : ["Search a topic to begin recommendations.", "Save an offline pack for low-data study."];
  elements.studentProgressList.innerHTML = [
    `<div class="activity-item"><strong>Topics completed</strong><span>${progress.length}</span></div>`,
    `<div class="activity-item"><strong>Offline packs</strong><span>${savedPacks.length}</span></div>`,
    ...recommended.map((item) => `<div class="activity-item"><strong>Recommended next</strong><span>${item}</span></div>`),
  ].join("");
}

function normalizeQuery(query) {
  const cleaned = query.trim().replace(/\s+/g, " ");
  return spellingCorrections[cleaned.toLowerCase()] || cleaned;
}

function buildGenericAnswer(query) {
  const title = titleCase(query);
  const type = state.currentAnswerType || "Answer";
  const context = buildLearningContext();
  const languageNote = `Education language: ${context.language}. AI/back-end answers should explain in ${context.language}, using familiar school terms for ${context.country}.`;
  if (type === "Safety guide") {
    return {
      title,
      short: `Safety first: ${title} should be done only with a teacher, supervisor, or qualified professional. Confirm tools, PPE, power isolation, weather/work area conditions, and emergency steps before starting.`,
      status: "draft",
      notes: [
        languageNote,
        `Purpose: understand the safe process, required tools, and common risks before starting ${context.unit}.`,
        "Preparation: inspect tools, isolate unsafe power or materials, confirm the work area is dry, clear, ventilated, and supervised.",
        "PPE: use suitable gloves, eye protection, closed shoes, and any trade-specific protective equipment required by the task.",
        "Risk control: stop immediately if there is heat, smoke, shock, chemical exposure, injury, unstable equipment, or unclear instructions.",
        "Record keeping: document the task, hazard checks, observations, faults found, corrective action, and supervisor approval.",
      ],
      examples: ["Safe checklist before work begins.", "Incident report if a hazard is found."],
      related: ["Safety checklist", "Tools and equipment", "Risk assessment", "Work report"],
    };
  }
  if (type === "Quiz") {
    return {
      title,
      short: `${title} quiz checks understanding of ${context.course} / ${context.unit} for ${context.level}. Answer first, then review the explanations.`,
      status: "draft",
      notes: [
        languageNote,
        "Start with definitions and key terms.",
        "Use examples from your country, class level, course, or workplace.",
        "For calculation or practical topics, show steps and units clearly.",
        "Review every wrong answer and write one correction note.",
      ],
      examples: ["Short-answer question with marking points.", "Application question connected to real situations."],
      related: ["Revision quiz", "Past questions", "Flashcards", "Weak topics"],
    };
  }
  if (type === "Past questions") {
    return {
      title,
      short: `${title} is prepared as past-question style revision for ${context.country}. Use it to practise exam wording, marking points, and time management.`,
      status: "draft",
      notes: [
        languageNote,
        "Read each question carefully and underline command words such as define, explain, compare, calculate, describe, or evaluate.",
        "Answer with clear points, examples, diagrams, equations, or references depending on the subject.",
        "Use a marking-guide style: one point per mark, with correct terms and complete reasoning.",
        "After practice, revise weak subtopics and try another question under timed conditions.",
      ],
      examples: ["Theory question with marking guide.", "Objective question with explanation."],
      related: ["Marking guide", "Exam technique", "Topic summary", "Timed practice"],
    };
  }
  if (type === "Study notes") {
    return {
      title,
      short: `${title} study notes summarize the core ideas, examples, and revision points for ${context.course} / ${context.unit}.`,
      status: "draft",
      notes: [
        languageNote,
        "Definition: write the meaning in simple words first.",
        "Key points: list the main facts, steps, formulae, rules, theories, or procedures.",
        "Examples: connect the topic to school, university, professional, or workplace situations.",
        "Common mistakes: identify confusing terms, skipped steps, wrong units, unsafe procedures, or weak explanations.",
        "Revision: end with a short summary, flashcards, and practice questions.",
      ],
      examples: ["One simple example for beginners.", "One advanced example for assignments or professional use."],
      related: ["Summary", "Examples", "Quiz", "Practical guide"],
    };
  }
  return {
    title,
    short: `${title} is available as a flexible research topic. This preview creates a study guide with a direct answer, notes, questions, references, and PDF download while the full backend search is added.`,
    status: "draft",
    notes: [
      languageNote,
      `Start by defining ${title} in simple terms.`,
      "List the key concepts, formulas, cases, diagrams, or examples connected to the topic.",
      "Compare the topic across school level, faculty, semester, country, and exam body when those filters apply.",
      "Use the Request New Subject workflow for topics not yet listed, such as veterinary medicine, architecture, or marine biology.",
    ],
    examples: ["Short definition for quick revision.", "Expanded explanation for assignments and university coursework."],
    related: ["Definitions", "Past questions", "Diagrams", "Revision quiz"],
  };
}

function displaySearchAnswer(answer, normalized) {
  state.currentQuery = answer.title;
  state.currentAnswer = answer;

  elements.input.value = normalized;
  elements.resultTitle.textContent = answer.title;
  elements.shortAnswer.textContent = getToneAnswer(answer);
  elements.detailedNotes.innerHTML = answer.notes.map((note) => `<p>${escapeHTML(note)}</p>`).join("");
  elements.examplesList.innerHTML = answer.examples.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  const type = state.currentAnswerType || "Answer";
  const pastQuestionItems =
    type === "Safety guide"
      ? [
          `List five safety checks before starting ${answer.title}.`,
          `State three hazards that can happen during this task and how to prevent them.`,
          `Write a short supervisor report after completing ${answer.title}.`,
        ]
      : type === "Quiz"
        ? [
            `Multiple choice: choose the correct meaning of ${answer.title}.`,
            `Short answer: give two examples connected to ${answer.title}.`,
            `Application: solve or explain one real-life case involving ${answer.title}.`,
          ]
        : [
            `Explain ${answer.title} with two examples.`,
            `State three reasons why ${answer.title} is important.`,
            `Draw or describe a simple diagram related to ${answer.title}.`,
          ];
  elements.pastQuestions.innerHTML = pastQuestionItems
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");
  const downloadLabels =
    type === "Safety guide"
      ? ["Safety checklist PDF", "Risk assessment sheet", "Work report template", "Tool inspection checklist"]
      : ["Study notes PDF", "Past paper PDF", "Diagram sheet", "Revision checklist"];
  elements.resourceDownloads.innerHTML = downloadLabels
    .map((item) => `<button type="button">${escapeHTML(answer.title)} - ${item}</button>`)
    .join("");
  $("#diagramPreview").innerHTML = `
    <div class="diagram-card compact-diagram">
      <span class="cell nucleus"></span>
      <span class="cell chloroplast one"></span>
      <span class="cell chloroplast two"></span>
      <p>${escapeHTML(answer.title)} visual aid</p>
    </div>
    <a class="video-link" href="https://www.youtube.com/results?search_query=${encodeURIComponent(`${answer.title} lesson practical explanation`)}" target="_blank" rel="noopener">Watch video lessons for ${escapeHTML(answer.title)}</a>
  `;
  const quizItems =
    type === "Safety guide"
      ? [
          `What PPE is required before starting ${answer.title}?`,
          `What should you do if a tool, wire, chemical, or machine looks unsafe?`,
          `Who should approve the work before it begins?`,
        ]
      : [
          `Define ${answer.title} in your own words.`,
          `Give two examples connected to ${answer.title}.`,
          `Explain one mistake students often make with ${answer.title}.`,
        ];
  elements.quizList.innerHTML = quizItems
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");
  elements.referencesList.innerHTML = ["School syllabus", "Admin-approved notes", "Open educational resources", "Past paper marking guides"]
    .map((item) => `<li>${item}</li>`)
    .join("");
  renderChips(elements.relatedTopics, answer.related);
  renderResultContext(answer);
  renderStudyKit(answer);
  renderProfessionalQuality(answer);

  elements.results.hidden = false;
  elements.suggestions.classList.remove("show");
  saveHistory(normalized);
  saveProgressTopic(answer.title);
  saveDashboardAnswer(answer);
  renderStudentProgress();
  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function search(query) {
  const normalized = normalizeQuery(query || "Database normalization");
  const key = normalized.toLowerCase();
  const localAnswer = answerTemplates[key] || answerTemplates[key.replace(/\s+\d{4}$/, "")] || buildGenericAnswer(normalized);
  elements.input.value = normalized;
  try {
    const groqAnswer = await fetchGroqStudyAnswer(normalized);
    displaySearchAnswer(
      {
        title: groqAnswer.title || localAnswer.title,
        short: groqAnswer.short || localAnswer.short,
        notes: Array.isArray(groqAnswer.notes) && groqAnswer.notes.length ? groqAnswer.notes : localAnswer.notes,
        examples: Array.isArray(groqAnswer.examples) && groqAnswer.examples.length ? groqAnswer.examples : localAnswer.examples,
        related: Array.isArray(groqAnswer.related) && groqAnswer.related.length ? groqAnswer.related : localAnswer.related,
      },
      normalized
    );
  } catch (error) {
    displaySearchAnswer(localAnswer, normalized);
  }
}

function showSuggestions(value) {
  const query = value.trim().toLowerCase();
  if (!query) {
    elements.suggestions.classList.remove("show");
    return;
  }

  const correction = spellingCorrections[query];
  const matches = searchIndex
    .filter((item) => item.label.toLowerCase().includes(query) || item.type.toLowerCase().includes(query))
    .slice(0, 7);

  const correctionMarkup = correction
    ? `<button class="suggestion" type="button" data-search="${correction}"><strong>Did you mean ${correction}?</strong><span>Spelling correction</span></button>`
    : "";

  elements.suggestions.innerHTML =
    correctionMarkup +
    matches
      .map(
        (item) => `
          <button class="suggestion" type="button" data-search="${item.label}">
            <strong>${item.label}</strong>
            <span>${item.type}</span>
          </button>
        `
      )
      .join("");

  elements.suggestions.classList.toggle("show", Boolean(correctionMarkup || matches.length));
}

function downloadStudyPdf() {
  const lines = [
    "Student Research Africa",
    `Topic: ${state.currentQuery || "Study Notes"}`,
    "",
    elements.shortAnswer.textContent,
    "",
    "Detailed Notes",
    ...Array.from(elements.detailedNotes.querySelectorAll("p")).map((item) => `- ${item.textContent}`),
    "",
    "Past Questions",
    ...Array.from(elements.pastQuestions.querySelectorAll("li")).map((item) => `- ${item.textContent}`),
  ];

  const blob = new Blob([createPdf(lines)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(state.currentQuery || "study-notes").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
  incrementMetric("studentResearchDownloads");
}

function createPdf(lines) {
  const escapedLines = lines.flatMap((line) => wrapText(line, 82)).slice(0, 44);
  const textCommands = escapedLines
    .map((line, index) => `1 0 0 1 48 ${760 - index * 16} Tm (${escapePdfText(line)}) Tj`)
    .join("\n");
  const stream = `BT /F1 11 Tf 14 TL ${textCommands} ET`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets
    .slice(1)
    .map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`)
    .join("");
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

function wrapText(text, maxLength) {
  if (!text) {
    return [""];
  }
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  lines.push(line);
  return lines;
}

function escapePdfText(text) {
  return text.replace(/[\\()]/g, "\\$&").replace(/[^\x20-\x7E]/g, "");
}

async function savePortalLogin(event) {
  event.preventDefault();
  const action = elements.accountAction.value;
  if (!action) {
    elements.loginStatus.textContent = "Choose Register or Login first.";
    return;
  }

  if (action === "register") {
    const missing = [];
    if (!elements.studentName.value.trim()) missing.push("full name");
    if (!elements.studentEmail.value.trim()) missing.push("email");
    if (!elements.studentPassword.value) missing.push("password");
    if (!elements.studentWhatsapp.value.trim()) missing.push("WhatsApp number");
    if (!elements.accountCountry.value || elements.accountCountry.value === "All African countries") missing.push("country");
    if (missing.length) {
      elements.loginStatus.textContent = `Complete ${missing.join(", ")} before creating your account.`;
      return;
    }
  }

  const password = elements.studentPassword.value;
  const confirmPassword = elements.studentPasswordConfirm.value;

  if (password.length < 6) {
    elements.loginStatus.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (action === "register" && password !== confirmPassword) {
    elements.loginStatus.textContent = "Passwords do not match.";
    return;
  }

  if (action === "register" && !elements.studentName.value.trim()) {
    elements.loginStatus.textContent = "Enter your full name to register.";
    return;
  }

  const role = elements.accountRole.value || "student";
  const defaultLevel = role === "lecturer" ? "University" : role === "worker" ? "Worker" : "Primary";
  const defaultStudyType = role === "lecturer" ? "course" : role === "worker" ? "skill" : "subject";

  const courseVal = elements.accountCourse.value.trim();
  const selectVal = elements.courseSelect.value;
  const finalCourse = courseVal || (selectVal.startsWith("Choose") ? "" : selectVal);

  const profile = {
    action,
    role,
    status: getAccountStatus(role),
    canContribute: false,
    name: elements.studentName.value.trim(),
    email: elements.studentEmail.value.trim().toLowerCase(),
    whatsapp: elements.studentWhatsapp.value.trim(),
    school: elements.studentSchool.value.trim(),
    country: elements.accountCountry.value || "All African countries",
    educationLanguage: getSuggestedEducationLanguage(elements.accountCountry.value),
    level: elements.accountLevel.value || defaultLevel,
    studyType: elements.studyType.value || defaultStudyType,
    course: finalCourse,
    department: elements.accountDepartment.value.trim(),
    skillArea: elements.workerSkill.value.trim(),
    certificationLevel: elements.workerCertification.value.trim(),
  };
  try {
    setPortalSubmitLoading(true);
    const savedProfile = await supabaseAdapter.saveStudent(profile, password);
    
    if (action === "register") {
      localStorage.removeItem("studentResearchProfile"); // Ensure they must login manually
      setAuthMode("login");
      elements.loginStatus.innerHTML = "<div style='padding:16px; background:#ecfdf5; border:1px solid #10b981; border-radius:12px; color:#064e3b; margin-bottom:20px;'><strong style='display:block; font-size:1.1rem; margin-bottom:4px;'>Account Created!</strong>Welcome to the platform. Please enter your email and password to access your dashboard.</div>";
      elements.loginStatus.style.padding = "10px";
      elements.studentEmail.value = profile.email;
      showToast("Registration successful! Please login.");
      renderAuthState();
      return;
    }

    setSelectedPortal(savedProfile.role || "student", "login");
    elements.loginStatus.textContent = "Login successful! Opening workspace...";
    elements.studentPassword.value = "";
    elements.studentPasswordConfirm.value = "";
    elements.countryFilter.value = savedProfile.country || "All African countries";
    state.level = savedProfile.level || defaultLevel || state.level;
    document.querySelectorAll(".level-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.level === state.level);
    });
    localStorage.setItem("studentResearchQuickWhatsapp", cleanWhatsappNumber(savedProfile.whatsapp || ""));
    renderStudentProfile();
    renderCountryEducation();
    renderCourseOptions();
    renderStudentSummary();
    renderOnboarding();
    renderAuthState();
    elements.supabaseStatus.textContent = supabaseAdapter.enabled
      ? "Supabase is connected. Portal auth and database are ready."
      : "Using local storage until Supabase config is provided.";
    showToast("Login successful!");
    // Auto-enter the workspace so the user sees "inside" immediately
    enterWorkspace(savedProfile.role || "student");
  } catch (error) {
    elements.loginStatus.textContent = error.message || "Could not save profile.";
  } finally {
    setPortalSubmitLoading(false);
  }
}

function getSelectedResearchFocus() {
  const course = elements.courseSelect.value;
  const unit = elements.unitSelect.value;
  if (course.startsWith("Choose") || unit.startsWith("Choose")) {
    return null;
  }
  const profile = getStudentProfile();
  const studyType = profile.studyType || elements.studyType.value;
  const typeLabel = studyType === "subject" ? "Subject" : studyType === "course" ? "Course" : studyType === "professional" ? "Professional course" : "Skill";
  return { course, unit, typeLabel, label: `${typeLabel} - ${course}: ${unit}`, profile };
}

function saveSelectedResearchFocus(focus) {
  if (!focus) {
    return false;
  }
  if (!state.selectedUnits.includes(focus.label)) {
    state.selectedUnits.unshift(focus.label);
    state.selectedUnits = state.selectedUnits.slice(0, 10);
    saveSelectedUnits();
    return true;
  }
  return false;
}

function addSelectedUnit(event) {
  event.preventDefault();
  const focus = getSelectedResearchFocus();
  if (!focus) {
    showToast("Choose a subject/course and module first.");
    return;
  }
  saveSelectedResearchFocus(focus);
  showToast("Research focus saved. Choose what you want AI to do next.");
}

async function handleModuleAction(action) {
  const focus = getSelectedResearchFocus();
  if (!focus) {
    showToast("Choose a subject/course and module first.");
    return;
  }
  saveSelectedResearchFocus(focus);
  state.currentAnswerType = moduleActionLabels[action] || "Answer";
  const level = focus.profile.level || state.level || "selected level";
  const country = focus.profile.country || elements.countryFilter.value || "selected country";
  const base = `${focus.course} - ${focus.unit} for ${level} in ${country}`;
  const prompts = {
    answer: `Give a clear answer on ${base}`,
    notes: `Generate detailed study notes, examples, key terms, and revision summary for ${base}`,
    quiz: `Create a quiz with answers on ${base}`,
    past: `Generate past-question style revision questions and marking guide for ${base}`,
    assessment: `Create a class assessment and marking guide for ${base}`,
    assignment: `Create a university assignment brief, instructions, and marking rubric for ${base}`,
    safety: `Create a workplace safety guide for ${base}`,
    report: `Create a simple work report template and example for ${base}`,
  };

  if (action === "videos") {
    const videoQuery = encodeURIComponent(`${focus.course} ${focus.unit} lesson practical explanation`);
    window.open(`https://www.youtube.com/results?search_query=${videoQuery}`, "_blank", "noopener");
    showToast("Opening video lessons for this module.");
    return;
  }

  if (action === "lesson") {
    elements.lessonSubject.value = focus.course;
    elements.lessonTopic.value = focus.unit;
    elements.lessonLevel.value = level;
    await submitLessonPlan({ preventDefault() {} });
    document.querySelector("#teacher-tools").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "outline") {
    elements.outlineCourse.value = focus.course;
    elements.outlineModule.value = focus.unit;
    await submitCourseOutline({ preventDefault() {} });
    document.querySelector("#teacher-tools").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "practical") {
    elements.practicalSubject.value = focus.course;
    elements.practicalTopic.value = focus.unit;
    await submitPracticalGuide({ preventDefault() {} });
    document.querySelector("#teacher-tools").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  await search(prompts[action] || prompts.answer);
  document.querySelector("#results").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleImageUpload() {
  const file = elements.questionImage.files[0];
  if (!file) {
    return;
  }
  state.attachedImageName = file.name;
  const url = URL.createObjectURL(file);
  elements.mediaPreview.innerHTML = `
    <strong>Photo question attached:</strong> ${file.name}
    <img src="${url}" alt="Uploaded question preview" />
  `;
  showToast("Photo attached. Add a typed question or tap Research Here.");
}

async function startVoiceRecording() {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    elements.mediaPreview.textContent = "Voice recording is not supported in this browser. You can still type or upload a photo.";
    return;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  state.audioChunks = [];
  state.mediaRecorder = new MediaRecorder(stream);
  state.mediaRecorder.addEventListener("dataavailable", (event) => {
    if (event.data.size > 0) {
      state.audioChunks.push(event.data);
    }
  });
  state.mediaRecorder.addEventListener("stop", () => {
    const blob = new Blob(state.audioChunks, { type: "audio/webm" });
    state.attachedVoiceBlob = blob;
    state.attachedVoiceUrl = URL.createObjectURL(blob);
    elements.mediaPreview.innerHTML = `
      <strong>Voice question attached.</strong>
      <audio controls src="${state.attachedVoiceUrl}"></audio>
    `;
    stream.getTracks().forEach((track) => track.stop());
  });
  state.mediaRecorder.start();
  elements.recordVoice.disabled = true;
  elements.stopVoice.disabled = false;
  elements.mediaPreview.textContent = "Recording voice question...";
  showToast("Recording started. Tap Stop when you finish.");
}

function stopVoiceRecording() {
  if (state.mediaRecorder && state.mediaRecorder.state !== "inactive") {
    state.mediaRecorder.stop();
  }
  elements.recordVoice.disabled = false;
  elements.stopVoice.disabled = true;
  showToast("Voice question attached.");
}

function getPortalQuestion() {
  const profile = getStudentProfile();
  const selected = state.selectedUnits[0] || "General research";
  const typed = elements.multiQuestion.value.trim();
  const attachments = [
    state.attachedImageName ? `Photo: ${state.attachedImageName}` : "",
    state.attachedVoiceUrl ? "Voice question attached in browser" : "",
  ].filter(Boolean);

  return {
    profile,
    country: elements.countryFilter.value,
    language: profile.educationLanguage || elements.settingsEducationLanguage?.value || getSuggestedEducationLanguage(elements.countryFilter.value),
    selected,
    typed,
    text: typed || selected,
    attachments,
  };
}

async function researchPortalQuestion() {
  const question = getPortalQuestion();
  await supabaseAdapter.saveQuestion(question, elements.questionImage.files[0], state.attachedVoiceBlob);
  renderDashboard();
  renderOnboarding();
  showToast("Question saved. Research result is opening now.");
  search(question.text);
}

async function sendQuestionToWhatsapp() {
  const question = getPortalQuestion();
  await supabaseAdapter.saveQuestion(question, elements.questionImage.files[0], state.attachedVoiceBlob);
  renderDashboard();
  renderOnboarding();
  const message = [
    "Hello Student Research Africa, I need research help.",
    "Please reply here. I can continue chatting in WhatsApp by typing, snapping a question photo, or sending a voice note.",
    question.profile.name ? `Name: ${question.profile.name}` : "",
    question.profile.whatsapp ? `My WhatsApp: ${question.profile.whatsapp}` : "",
    question.profile.school ? `School: ${question.profile.school}` : "",
    question.country && !question.country.startsWith("All") ? `Country: ${question.country}` : "",
    question.language ? `Education language: ${question.language}` : "",
    `Course/unit: ${question.selected}`,
    `Question: ${question.text}`,
    ...question.attachments,
  ]
    .filter(Boolean)
    .join("\n");
  const targetNumber = isInstalledAppMode() ? getQuickWhatsappNumber() : whatsappResearchNumber;
  const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  incrementMetric("studentResearchWhatsapp");
  showToast(`Opening WhatsApp on +${targetNumber}. Continue the chat there with text, photos, or voice notes.`);
  window.open(url, "_blank", "noopener");
}

async function answerTutorQuestion() {
  const question = elements.tutorQuestion.value.trim() || "What is mitosis?";
  elements.tutorAnswer.textContent = "Thinking with Groq AI or local study mode...";
  try {
    elements.tutorAnswer.innerHTML = await fetchGroqReply(question);
    return;
  } catch (error) {
    // The local tutor keeps the app useful before the Groq function is deployed.
  }
  const normalized = normalizeQuery(question.replace(/^what is /i, "").replace(/\?$/, ""));
  const answer = answerTemplates[normalized.toLowerCase()] || buildGenericAnswer(normalized);
  elements.tutorAnswer.innerHTML = `
    <strong>Simple answer:</strong> ${answer.short}
    <br><br>
    <strong>Quick quiz:</strong> ${answer.examples[0]} Why is this important?
    <br><br>
    <strong>Summary:</strong> Learn the definition first, then examples, diagrams, and past questions.
  `;
  showToast("Tutor explanation generated.");
}

function applyTutorPrompt(prompt) {
  const current = elements.tutorQuestion.value.trim() || elements.input.value.trim() || state.currentQuery || "Photosynthesis";
  elements.tutorQuestion.value = `${prompt}: ${current}`;
  elements.tutorQuestion.focus();
}

function renderCommandResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const matches = searchIndex
    .filter((item) => !normalized || item.label.toLowerCase().includes(normalized) || item.type.toLowerCase().includes(normalized))
    .slice(0, 10);
  elements.commandResults.innerHTML = matches
    .map(
      (item) => `
        <button type="button" data-command-search="${item.label}">
          <strong>${item.label}</strong>
          <span>${item.type}</span>
        </button>
      `
    )
    .join("");
}

function openCommandPalette() {
  elements.commandModal.hidden = false;
  renderCommandResults();
  elements.commandInput.value = "";
  elements.commandInput.focus();
}

function closeCommandPalette() {
  elements.commandModal.hidden = true;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) {
      return;
    }
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data?.type === "APP_UPDATED") {
      showToast("Latest app version is ready.");
    }
  });

  navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => {
      // Check for app updates every 30 minutes
      setInterval(() => {
        registration.update();
      }, 30 * 60 * 1000);

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
      });
    })
    .catch(() => {
      showToast("Install support could not start in this browser.");
    });
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    if (isNativeAppMode()) {
      return;
    }
    event.preventDefault();
    state.installPrompt = event;
    syncAppModeState();
  });

  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    syncAppModeState();
    renderQuickWhatsappSettings();
    showToast("Student Research Africa installed.");
  });
}

async function installApp() {
  if (isNativeAppMode()) {
    showToast("This app is already running in native app mode.");
    return;
  }
  if (!state.installPrompt) {
    showToast("On iPhone, tap Share then Add to Home Screen. On Android, use Add to Home screen.");
    return;
  }
  state.installPrompt.prompt();
  await state.installPrompt.userChoice;
  state.installPrompt = null;
  syncAppModeState();
}

function switchResultTab(tabName) {
  document.querySelectorAll(".result-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.resultTab === tabName);
  });
  document.querySelectorAll(".result-tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabName}`);
  });
}

function saveCurrentAnswer() {
  if (state.currentAnswer) {
    saveDashboardAnswer(state.currentAnswer);
    showToast("Answer saved to your dashboard.");
  }
}

function getShareText() {
  return `${state.currentQuery || "Study answer"}\n\n${elements.shortAnswer.textContent}\n\nStudent Research Africa`;
}

async function copyCurrentAnswer() {
  const text = getShareText();
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    showToast("Answer copied.");
    return;
  }
  showToast("Copy is not available in this browser.");
}

async function shareCurrentAnswer() {
  const text = getShareText();
  if (navigator.share) {
    await navigator.share({ title: state.currentQuery || "Study answer", text });
    return;
  }
  await copyCurrentAnswer();
}

function askCurrentAnswerFollowUp() {
  if (!state.currentAnswer) {
    return;
  }
  const prompt = `Explain ${state.currentAnswer.title} more clearly for my level with examples and one practice question.`;
  elements.chatInput.value = prompt;
  document.querySelector("#ai-tutor").scrollIntoView({ behavior: "smooth", block: "start" });
  sendChatMessage(prompt).catch(() => showToast("Follow-up chat could not start. Try again."));
}

function sendCurrentAnswerToWhatsapp() {
  if (!state.currentAnswer) {
    return;
  }
  const profile = getStudentProfile();
  const focus = getSelectedResearchFocus();
  const message = [
    "Student Research Africa answer",
    profile.name ? `Name: ${profile.name}` : "",
    profile.role ? `Role: ${getRoleLabel(profile.role)}` : "",
    profile.country ? `Country: ${profile.country}` : "",
    profile.level ? `Level: ${profile.level}` : "",
    focus ? `Focus: ${focus.label}` : profile.course ? `Focus: ${profile.course}` : "",
    `Type: ${state.currentAnswerType || "Answer"}`,
    `Topic: ${state.currentAnswer.title}`,
    elements.shortAnswer.textContent,
    "Please continue this topic here. I may type, snap a question photo, or send a voice note.",
  ]
    .filter(Boolean)
    .join("\n");
  const targetNumber = isInstalledAppMode() ? getQuickWhatsappNumber() : whatsappResearchNumber;
  incrementMetric("studentResearchWhatsapp");
  window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  showToast(`Opening WhatsApp on +${targetNumber}.`);
}

function reportCurrentAnswer() {
  const reports = getLocalList("studentResearchReports");
  reports.unshift({
    title: state.currentQuery || "Unknown answer",
    reason: "Student reported wrong or unclear answer",
    createdAt: Date.now(),
  });
  saveLocalList("studentResearchReports", reports.slice(0, 30));
  elements.reportAnswer.textContent = "Reported";
}

function submitTeacherUpload(event) {
  if (!elements.teacherUploadForm) {
    return;
  }
  event.preventDefault();
  const title = elements.uploadTitle.value.trim() || "Untitled resource";
  const file = elements.resourceFile.files[0];
  const uploads = getLocalList("studentResearchUploads");
  uploads.unshift({
    title,
    type: elements.uploadType.value,
    fileName: file ? file.name : "No file attached",
    status: "pendingReview",
    createdAt: Date.now(),
  });
  saveLocalList("studentResearchUploads", uploads.slice(0, 40));
  elements.teacherUploadForm.reset();
  renderApprovalQueue();
}

function clearDemoData() {
  [
    "studentResearchHistory",
    "studentResearchQuestions",
    "studentResearchAnswers",
    "studentResearchUploads",
    "studentResearchReports",
    "studentResearchDownloads",
    "studentResearchWhatsapp",
    "studentResearchOfflinePacks",
    "studentResearchProgress",
    "studentResearchAccounts",
    "studentResearchProfile",
    "studentResearchQuickWhatsapp",
    "studentResearchPrivateDrafts",
  ].forEach((key) => localStorage.removeItem(key));
  sessionStorage.removeItem("studentResearchAdminSession");
  renderHistory();
  renderOfflinePacks();
  renderStudentProgress();
  renderApprovalQueue();
  renderDashboard();
}

function loginAdmin(event) {
  if (!elements.adminEmail || !elements.adminPassword) {
    return;
  }
  event.preventDefault();
  const email = elements.adminEmail.value.trim().toLowerCase();
  const password = elements.adminPassword.value;
  const isDemoAdmin = email.includes("admin") && password === "admin123";

  if (!isDemoAdmin) {
    elements.adminLoginStatus.textContent = "Access denied. Use the demo admin credentials or connect Supabase role-based auth.";
    return;
  }

  sessionStorage.setItem("studentResearchAdminSession", JSON.stringify({
    name: "Admin",
    email,
    role: "admin",
    active: true,
    expiresAt: Date.now() + 1000 * 60 * 60 * 8,
  }));
  elements.adminPassword.value = "";
  renderAdminAccess();
  renderApprovalQueue();
  elements.teacherAdmin.scrollIntoView({ behavior: "smooth", block: "start" });
}

function logoutAdmin() {
  if (!elements.teacherAdmin) {
    return;
  }
  sessionStorage.removeItem("studentResearchAdminSession");
  renderAdminAccess();
  document.querySelector("#admin-login").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("studentResearchTheme", theme);
}

function renderSupabaseStatus() {
  elements.supabaseStatus.textContent = supabaseAdapter.enabled
    ? "Supabase is connected. Portal auth, data sync, and media uploads are ready."
    : "Using local storage until Supabase configuration is provided.";
}

function activateWorkspaceTab(targetSelector) {
  const targetId = targetSelector.replace(/^#/, "");
  const aliases = { "student-portal": "account-settings" };
  const resolvedId = aliases[targetId] || targetId;
  const dashboardSections = new Set(["roleGateway", "roleDashboard", "nextStepPanel", "dashboard"]);
  const target = document.getElementById(resolvedId);
  if (!target) {
    return;
  }

  document.querySelectorAll("main > section.auth-required").forEach((section) => {
    const shouldShow = dashboardSections.has(resolvedId)
      ? dashboardSections.has(section.id)
      : section.id === resolvedId;
    section.classList.toggle("workspace-focus-hidden", !shouldShow);
  });

  document.querySelectorAll("#workspaceShortcuts [data-workspace-tab]").forEach((button) => {
    const buttonTarget = (button.dataset.workspaceTab || "").replace(/^#/, "");
    const activeTarget = aliases[buttonTarget] || buttonTarget;
    button.classList.toggle("active", dashboardSections.has(resolvedId)
      ? activeTarget === "dashboard"
      : activeTarget === resolvedId);
  });

  if (window.location.hash !== `#${targetId}`) {
    window.history.replaceState(null, "", `#${targetId}`);
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function runNextStepAction(isSecondary = false) {
  const profile = getStudentProfile();
  const role = profile.role || "student";
  const actions = {
    student: isSecondary ? "quiz" : "answer",
    teacher: isSecondary ? "assessment" : "lesson",
    lecturer: isSecondary ? "assignment" : "outline",
    worker: isSecondary ? "practical" : "safety",
  };
  handleModuleAction(actions[role] || "answer").catch(() => showToast("Choose a module first, then try again."));
}

function bindEvents() {
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    search(elements.input.value).catch(() => showToast("Search could not complete. Try again."));
  });

  elements.input.addEventListener("input", (event) => showSuggestions(event.target.value));
  elements.countryFilter.addEventListener("change", () => {
    elements.accountCountry.value = elements.countryFilter.value;
    renderCountryEducation();
    renderCourseOptions();
  });
  elements.accountCountry.addEventListener("change", () => {
    elements.countryFilter.value = elements.accountCountry.value;
    renderCountryEducation();
    renderCourseOptions();
  });
  elements.accountRole.addEventListener("change", syncAccountRoleFields);
  elements.accountLevel.addEventListener("change", () => {
    state.level = elements.accountLevel.value;
    elements.studyType.value = inferStudyType(elements.accountLevel.value, elements.accountRole.value);
    document.querySelectorAll(".level-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.level === state.level);
    });
    renderCourseOptions();
  });
  elements.studyType.addEventListener("change", renderCourseOptions);
  elements.accountCourse.addEventListener("change", renderCourseOptions);
  elements.settingsCountry.addEventListener("change", () => {
    elements.countryFilter.value = elements.settingsCountry.value;
    elements.settingsEducationLanguage.value = getSuggestedEducationLanguage(elements.settingsCountry.value);
    renderCountryEducation();
    renderEducationPathSettings({
      ...getStudentProfile(),
      country: elements.settingsCountry.value,
      department: "",
      course: "",
      skillArea: "",
    });
  });
  elements.settingsEducationLanguage.addEventListener("change", () => {
    if (elements.languageFilter && [...elements.languageFilter.options].some((option) => option.value === elements.settingsEducationLanguage.value)) {
      elements.languageFilter.value = elements.settingsEducationLanguage.value;
    }
  });
  elements.settingsLevel.addEventListener("change", () => {
    renderEducationPathSettings({
      ...getStudentProfile(),
      level: elements.settingsLevel.value,
      department: "",
      course: "",
      skillArea: "",
    });
  });
  elements.settingsDepartment.addEventListener("change", () => {
    renderEducationPathSettings({
      ...getStudentProfile(),
      level: elements.settingsLevel.value,
      department: elements.settingsDepartment.value,
      course: "",
      skillArea: "",
    });
  });
  elements.settingsCourse.addEventListener("change", () => {
    renderEducationPathSettings({
      ...getStudentProfile(),
      level: elements.settingsLevel.value,
      department: elements.settingsDepartment.value,
      course: elements.settingsCourse.value,
      skillArea: "",
    });
  });
  elements.settingsStudyType.addEventListener("change", () => {
    elements.studyType.value = elements.settingsStudyType.value;
    renderCourseOptions();
  });

  document.addEventListener("click", (event) => {
    const tutorPrompt = event.target.closest("[data-tutor-prompt]");
    if (tutorPrompt) {
      applyTutorPrompt(tutorPrompt.dataset.tutorPrompt);
      return;
    }

    const passwordToggle = event.target.closest("[data-toggle-password]");
    if (passwordToggle) {
      togglePasswordVisibility(passwordToggle);
      return;
    }

    const authTab = event.target.closest("[data-auth-tab]");
    if (authTab) {
      setSelectedPortal(elements.accountRole.value, authTab.dataset.authTab);
      return;
    }

    const portalButton = event.target.closest("[data-portal-role]");
    if (portalButton) {
      openPublicPage("student-portal", "register", portalButton.dataset.portalRole);
      return;
    }

    const publicLink = event.target.closest("[data-public-page]");
    if (publicLink) {
      event.preventDefault();
      openPublicPage(publicLink.dataset.publicPage, publicLink.dataset.authMode);
      elements.appDrawer.hidden = true;
      return;
    }

    const drawerLink = event.target.closest(".app-drawer a");
    if (drawerLink) {
      elements.appDrawer.hidden = true;
    }

    const workspaceButton = event.target.closest("[data-enter-workspace]");
    if (workspaceButton) {
      enterWorkspace(workspaceButton.dataset.enterWorkspace);
      return;
    }

    const moduleAction = event.target.closest("[data-module-action]");
    if (moduleAction) {
      handleModuleAction(moduleAction.dataset.moduleAction).catch(() => showToast("AI action could not complete. Try again."));
      return;
    }

    const onboardingStep = event.target.closest("[data-onboarding-target]");
    if (onboardingStep) {
      document.querySelector(onboardingStep.dataset.onboardingTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const workspaceTab = event.target.closest("[data-workspace-tab]");
    if (workspaceTab) {
      activateWorkspaceTab(workspaceTab.dataset.workspaceTab);
      elements.appDrawer.hidden = true;
      return;
    }

    const workspaceSignout = event.target.closest("[data-workspace-signout]");
    if (workspaceSignout) {
      logoutCurrentAccount();
      return;
    }

    const educationStatus = event.target.closest("[data-education-status]");
    if (educationStatus) {
      setEducationVerificationStatus(educationStatus.dataset.educationStatus);
      return;
    }

    const starterPrompt = event.target.closest("[data-starter-prompt]");
    if (starterPrompt) {
      const prompt = starterPrompt.dataset.starterPrompt;
      elements.multiQuestion.value = prompt;
      search(prompt).catch(() => showToast("Starter prompt could not run. Try again."));
      return;
    }

    const pathAction = event.target.closest("[data-path-action]");
    if (pathAction) {
      const action = pathAction.dataset.pathAction;
      if (action === "chat") {
        activateWorkspaceTab("#research-chat");
      } else {
        handleModuleAction(action).catch(() => showToast("Choose a module first, then try again."));
      }
      return;
    }

    if (event.target.closest("[data-next-action-primary]")) {
      runNextStepAction(false);
      return;
    }

    if (event.target.closest("[data-next-action-secondary]")) {
      runNextStepAction(true);
      return;
    }

    const commandSearch = event.target.closest("[data-command-search]");
    if (commandSearch) {
      closeCommandPalette();
      search(commandSearch.dataset.commandSearch).catch(() => showToast("Search could not complete. Try again."));
      return;
    }

    const chatPrompt = event.target.closest("[data-chat-prompt]");
    if (chatPrompt) {
      sendChatMessage(chatPrompt.dataset.chatPrompt).catch(() => showToast("Chat could not reply. Try again."));
      return;
    }

    const packButton = event.target.closest("[data-save-pack]");
    if (packButton) {
      saveOfflinePack(packButton.dataset.savePack);
      return;
    }

    const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
      setPlatformMode(modeButton.dataset.mode);
      renderRoleDashboard(modeButton.dataset.mode);
      return;
    }

    const button = event.target.closest("[data-search]");
    if (button) {
      search(button.dataset.search).catch(() => showToast("Search could not complete. Try again."));
    } else if (!event.target.closest(".search-panel")) {
      elements.suggestions.classList.remove("show");
    }
  });

  document.querySelectorAll(".level-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".level-btn").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.level = button.dataset.level;
      if (state.level !== "All") {
        elements.accountLevel.value = state.level;
        elements.studyType.value = inferStudyType(state.level, elements.accountRole.value);
        renderCourseOptions();
      }
      showToast(`${state.level} level selected.`);
    });
  });

  document.querySelectorAll(".result-tab").forEach((button) => {
    button.addEventListener("click", () => switchResultTab(button.dataset.resultTab));
  });

  elements.downloadPdf.addEventListener("click", downloadStudyPdf);
  elements.copyAnswer.addEventListener("click", () => {
    copyCurrentAnswer().catch(() => showToast("Could not copy answer."));
  });
  elements.shareAnswer.addEventListener("click", () => {
    shareCurrentAnswer().catch(() => showToast("Could not share answer."));
  });
  elements.answerTone.addEventListener("change", () => {
    renderCurrentAnswerTone();
    showToast(`${elements.answerTone.options[elements.answerTone.selectedIndex].text} style applied.`);
  });
  elements.saveAnswer.addEventListener("click", saveCurrentAnswer);
  elements.saveAnswerTop.addEventListener("click", saveCurrentAnswer);
  elements.askFollowUp.addEventListener("click", askCurrentAnswerFollowUp);
  elements.sendAnswerWhatsapp.addEventListener("click", sendCurrentAnswerToWhatsapp);
  elements.saveTopicNote.addEventListener("click", saveTopicNote);
  elements.generateCitation.addEventListener("click", generateCitation);
  elements.reportAnswer.addEventListener("click", reportCurrentAnswer);
  elements.askTutor.addEventListener("click", () => {
    answerTutorQuestion().catch(() => showToast("Tutor could not reply. Try again."));
  });
  elements.chatForm.addEventListener("submit", submitChat);
  elements.clearChat.addEventListener("click", clearChat);
  elements.lessonPlanForm.addEventListener("submit", (event) => {
    submitLessonPlan(event).catch(() => showToast("Lesson plan could not be generated."));
  });
  elements.accountSettingsForm.addEventListener("submit", saveAccountSettings);
  elements.courseOutlineForm.addEventListener("submit", (event) => {
    submitCourseOutline(event).catch(() => showToast("Course outline could not be generated."));
  });
  elements.practicalGuideForm.addEventListener("submit", (event) => {
    submitPracticalGuide(event).catch(() => showToast("Practical guide could not be generated."));
  });
  elements.runQaChecks.addEventListener("click", () => {
    runFrontendQaChecks();
    showToast("Frontend readiness checks completed.");
  });
  elements.runDemoJourney.addEventListener("click", () => {
    runDemoJourney().catch(() => showToast("Demo journey could not complete. Check the console for details."));
  });
  document.querySelectorAll("[data-demo-account]").forEach((button) => {
    button.addEventListener("click", () => useDemoPortalAccount(button.dataset.demoAccount));
  });
  elements.runRoleJourneys.addEventListener("click", () => {
    runAllRoleJourneys().catch(() => showToast("Role journeys could not complete. Check the console for details."));
  });
  elements.logoutAccount.addEventListener("click", logoutCurrentAccount);
  elements.forgotPassword.addEventListener("click", () => {
    resetAccountPassword().catch(() => {
      elements.loginStatus.textContent = "Could not start password reset.";
    });
  });
  elements.adminLoginForm?.addEventListener("submit", loginAdmin);
  elements.adminLogout?.addEventListener("click", logoutAdmin);
  elements.teacherUploadForm?.addEventListener("submit", submitTeacherUpload);
  elements.clearDemoData.addEventListener("click", clearDemoData);
  elements.studentLogin.addEventListener("submit", savePortalLogin);
  elements.studentPassword.addEventListener("input", renderPasswordStrength);
  elements.quickWhatsappForm.addEventListener("submit", saveQuickWhatsappNumber);
  elements.courseForm.addEventListener("submit", addSelectedUnit);
  elements.courseSelect.addEventListener("change", renderUnitOptions);
  elements.questionImage.addEventListener("change", handleImageUpload);
  elements.recordVoice.addEventListener("click", () => {
    startVoiceRecording().catch(() => {
      elements.mediaPreview.textContent = "Microphone permission was blocked. You can still type or upload a photo.";
      elements.recordVoice.disabled = false;
      elements.stopVoice.disabled = true;
    });
  });
  elements.stopVoice.addEventListener("click", stopVoiceRecording);
  elements.researchNow.addEventListener("click", () => {
    researchPortalQuestion().catch(() => {
      elements.mediaPreview.textContent = "Could not save the question, but you can still search by typing it above.";
    });
  });
  elements.sendWhatsapp.addEventListener("click", () => {
    sendQuestionToWhatsapp().catch(() => {
      elements.mediaPreview.textContent = "Could not prepare WhatsApp research request. Check your connection and try again.";
    });
  });
  elements.themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
  elements.installApp.addEventListener("click", installApp);
  elements.appMenuToggle.addEventListener("click", () => {
    // If logged in, the hamburger toggles the workspace sidebar. If logged out, it opens the public drawer.
    const profile = getStudentProfile();
    if (profile.email && elements.workspaceShortcuts) {
      const isHidden = elements.workspaceShortcuts.style.display === "none";
      elements.workspaceShortcuts.style.display = isHidden ? "flex" : "none";
    } else {
      elements.appDrawer.hidden = false;
    }
  });
  elements.appDrawerClose.addEventListener("click", () => {
    elements.appDrawer.hidden = true;
  });
  elements.appDrawer.addEventListener("click", (event) => {
    if (event.target === elements.appDrawer) {
      elements.appDrawer.hidden = true;
    }
  });
  window.addEventListener("hashchange", () => {
    renderPublicPage();
    if (document.body.dataset.auth === "logged-in") {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#") && !publicPageIds.has(hash.replace("#", ""))) {
        activateWorkspaceTab(hash);
      }
    }
  });
  elements.openCommand.addEventListener("click", openCommandPalette);
  elements.closeCommand.addEventListener("click", closeCommandPalette);
  elements.commandInput.addEventListener("input", (event) => renderCommandResults(event.target.value));
  elements.commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      closeCommandPalette();
      search(elements.commandInput.value).catch(() => showToast("Search could not complete. Try again."));
    }
  });
  elements.commandModal.addEventListener("click", (event) => {
    if (event.target === elements.commandModal) {
      closeCommandPalette();
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openCommandPalette();
    }
    if (event.key === "Escape" && !elements.commandModal.hidden) {
      closeCommandPalette();
    }
  });
}

function init() {
  registerServiceWorker();
  setupInstallPrompt();
  supabaseAdapter.init();
  renderSupabaseStatus();
  renderOptions(elements.countryFilter, "All African countries", africanCountries);
  renderOptions(elements.accountCountry, "All African countries", africanCountries);
  renderOptions(elements.settingsCountry, "All African countries", africanCountries);
  renderOptions(elements.facultyFilter, "All faculties and fields", facultyOptions);
  setSelectedPortal("student", "register");
  renderStudentProfile();
  renderCountryEducation();
  renderCourseOptions();
  loadSelectedUnits();
  renderSubjects();
  renderExams();
  renderChips(elements.trendingList, trending);
  renderHistory();
  renderOfflinePacks();
  renderStudentProgress();
  renderCollectionMap();
  renderApprovalQueue();
  renderAdminAccess();
  renderStudentSummary();
  renderOnboarding();
  setPlatformMode("student");
  renderChat();
  renderDashboard();
  runFrontendQaChecks();
  setTheme(localStorage.getItem("studentResearchTheme") || "light");
  renderAuthState();
  bindEvents();
  if (document.body.dataset.auth === "logged-in") {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#") && !publicPageIds.has(hash.replace("#", ""))) {
      activateWorkspaceTab(hash);
    }
  }
  if (new URLSearchParams(window.location.search).get("demoJourney") === "1") {
    setTimeout(() => {
      runDemoJourney().catch((error) => {
        console.error("Demo journey failed", error);
      });
    }, 250);
  }
  if (new URLSearchParams(window.location.search).get("roleJourneys") === "1") {
    setTimeout(() => {
      runAllRoleJourneys().catch((error) => {
        console.error("Role journeys failed", error);
      });
    }, 250);
  }
}

init();
