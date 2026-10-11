const databaseCollections = [
  "students",
  "teachers",
  "lecturers",
  "workers",
  "countryProfiles",
  "educationSystems",
  "examBodies",
  "courses",
  "curriculumTopics",
  "units",
  "questions",
  "answers",
  "resources",
  "videoResources",
  "lessonPlans",
  "practicalGuides",
  "pastPapers",
  "uploads",
  "favorites",
  "reports",
  "analytics",
];

const adminElements = {
  form: document.querySelector("#adminLoginForm"),
  email: document.querySelector("#adminEmail"),
  password: document.querySelector("#adminPassword"),
  status: document.querySelector("#adminLoginStatus"),
  registerForm: document.querySelector("#adminRegisterForm"),
  registerName: document.querySelector("#registerName"),
  registerEmail: document.querySelector("#registerEmail"),
  registerRole: document.querySelector("#registerRole"),
  registerPassword: document.querySelector("#registerPassword"),
  registerStatus: document.querySelector("#adminRegisterStatus"),
  dashboard: document.querySelector("#teacher-admin"),
  logout: document.querySelector("#adminLogout"),
  uploadForm: document.querySelector("#teacherUploadForm"),
  uploadTitle: document.querySelector("#uploadTitle"),
  uploadType: document.querySelector("#uploadType"),
  resourceFile: document.querySelector("#resourceFile"),
  approvalQueue: document.querySelector("#approvalQueue"),
  collectionMap: document.querySelector("#collectionMap"),
  curriculumForm: document.querySelector("#curriculumForm"),
  curriculumCountry: document.querySelector("#curriculumCountry"),
  curriculumExamBody: document.querySelector("#curriculumExamBody"),
  curriculumLevel: document.querySelector("#curriculumLevel"),
  curriculumSubject: document.querySelector("#curriculumSubject"),
  curriculumTopic: document.querySelector("#curriculumTopic"),
  curriculumStatus: document.querySelector("#curriculumStatus"),
  curriculumRecords: document.querySelector("#curriculumRecords"),
  videoForm: document.querySelector("#videoForm"),
  videoTitle: document.querySelector("#videoTitle"),
  videoSubject: document.querySelector("#videoSubject"),
  videoTopic: document.querySelector("#videoTopic"),
  videoLanguage: document.querySelector("#videoLanguage"),
  videoLink: document.querySelector("#videoLink"),
  videoStatus: document.querySelector("#videoStatus"),
  videoRecords: document.querySelector("#videoRecords"),
  pastPaperForm: document.querySelector("#pastPaperForm"),
  paperCountry: document.querySelector("#paperCountry"),
  paperExamBody: document.querySelector("#paperExamBody"),
  paperSubject: document.querySelector("#paperSubject"),
  paperYear: document.querySelector("#paperYear"),
  paperType: document.querySelector("#paperType"),
  paperLink: document.querySelector("#paperLink"),
  pastPaperRecords: document.querySelector("#pastPaperRecords"),
  updateBanner: document.querySelector("#updateBanner"),
  updateNow: document.querySelector("#updateNow"),
};

let waitingServiceWorker = null;

function getLocalList(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveLocalList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function getStaffAccounts() {
  return getLocalList("studentResearchStaffAccounts");
}

function saveStaffAccounts(accounts) {
  saveLocalList("studentResearchStaffAccounts", accounts);
}

function renderCollectionMap() {
  adminElements.collectionMap.innerHTML = databaseCollections.map((item) => `<span>${item}</span>`).join("");
}

function renderApprovalQueue() {
  const uploads = getLocalList("studentResearchUploads");
  adminElements.approvalQueue.innerHTML = uploads.length
    ? uploads
        .slice(0, 8)
        .map((item) => `<div class="activity-item"><strong>${item.title}</strong><span>${item.type} - ${item.status}</span></div>`)
        .join("")
    : `<div class="activity-item">Admin uploads and future contributor submissions will wait here for approval.</div>`;
}

function renderProfessionalRecords() {
  const curriculum = getLocalList("studentResearchCurriculumRecords");
  const videos = getLocalList("studentResearchVideoResources");
  const papers = getLocalList("studentResearchPastPapers");

  adminElements.curriculumRecords.innerHTML = curriculum.length
    ? curriculum.map((item) => `<div class="activity-item"><strong>${item.subject}: ${item.topic}</strong><span>${item.country} - ${item.examBody} - ${item.level} - ${item.status}</span></div>`).join("")
    : `<div class="activity-item">No curriculum records yet.</div>`;

  adminElements.videoRecords.innerHTML = videos.length
    ? videos.map((item) => `<div class="activity-item"><strong>${item.title}</strong><span>${item.subject} - ${item.topic} - ${item.language} - ${item.status}</span></div>`).join("")
    : `<div class="activity-item">No video records yet.</div>`;

  adminElements.pastPaperRecords.innerHTML = papers.length
    ? papers.map((item) => `<div class="activity-item"><strong>${item.examBody} ${item.subject} ${item.year}</strong><span>${item.country} - ${item.paperType}</span></div>`).join("")
    : `<div class="activity-item">No past paper records yet.</div>`;
}

function renderAdminAccess() {
  const session = JSON.parse(localStorage.getItem("studentResearchAdminSession") || "null");
  adminElements.dashboard.hidden = !session;
  adminElements.status.textContent = session
    ? `Staff dashboard is unlocked for ${session.name} (${session.role}).`
    : "Only approved staff should use this page.";
}

function registerAdmin(event) {
  event.preventDefault();
  const account = {
    name: adminElements.registerName.value.trim(),
    email: adminElements.registerEmail.value.trim().toLowerCase(),
    role: adminElements.registerRole.value,
    password: adminElements.registerPassword.value,
    createdAt: new Date().toISOString(), // Use ISO string for consistency
  };

  if (!account.name || !account.email || account.password.length < 6) {
    adminElements.registerStatus.textContent = "Enter name, email, and a password with at least 6 characters.";
    return;
  }

  const accounts = getStaffAccounts();
  if (accounts.some((item) => item.email === account.email)) {
    adminElements.registerStatus.textContent = "That staff email is already registered.";
    return;
  }

  accounts.push(account);
  saveStaffAccounts(accounts);
  adminElements.registerForm.reset();
  adminElements.registerStatus.textContent = `${account.role} account registered. The staff member can now login.`;
}

function loginAdmin(event) {
  event.preventDefault();
  const email = adminElements.email.value.trim().toLowerCase();
  const password = adminElements.password.value;
  const accounts = getStaffAccounts();
  const account = accounts.find((item) => item.email === email && item.password === password);
  const demoAccount = email.includes("admin") && password === "admin123"
    ? { name: "Demo Admin", email, role: "admin" }
    : null;
  const staff = account || demoAccount;

  if (!staff) {
    adminElements.status.textContent = "Access denied. Register staff first or use a valid staff account.";
    return;
  }

  localStorage.setItem("studentResearchAdminSession", JSON.stringify({ name: staff.name, email: staff.email, role: staff.role, active: true }));
  adminElements.password.value = "";
  renderAdminAccess();
  renderApprovalQueue();
  adminElements.dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function logoutAdmin() {
  localStorage.removeItem("studentResearchAdminSession");
  renderAdminAccess();
  document.querySelector("#admin-login").scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitTeacherUpload(event) {
  event.preventDefault();
  const title = adminElements.uploadTitle.value.trim() || "Untitled resource";
  const file = adminElements.resourceFile.files[0];
  const uploads = getLocalList("studentResearchUploads");
  uploads.unshift({
    title,
    type: adminElements.uploadType.value,
    fileName: file ? file.name : "No file attached",
    status: "pendingReview",
    createdAt: Date.now(),
  });
  saveLocalList("studentResearchUploads", uploads.slice(0, 40));
  adminElements.uploadForm.reset();
  renderApprovalQueue();
}

function submitCurriculumRecord(event) {
  event.preventDefault();
  const records = getLocalList("studentResearchCurriculumRecords");
  records.unshift({
    country: adminElements.curriculumCountry.value.trim() || "Africa",
    examBody: adminElements.curriculumExamBody.value.trim() || "National exam body",
    level: adminElements.curriculumLevel.value.trim() || "Mixed level",
    subject: adminElements.curriculumSubject.value.trim() || "General subject",
    topic: adminElements.curriculumTopic.value.trim() || "General topic",
    status: adminElements.curriculumStatus.value,
    updatedAt: Date.now(),
  });
  saveLocalList("studentResearchCurriculumRecords", records.slice(0, 100));
  adminElements.curriculumForm.reset();
  renderProfessionalRecords();
}

function submitVideoRecord(event) {
  event.preventDefault();
  const records = getLocalList("studentResearchVideoResources");
  records.unshift({
    title: adminElements.videoTitle.value.trim() || "Untitled video",
    subject: adminElements.videoSubject.value.trim() || "General subject",
    topic: adminElements.videoTopic.value.trim() || "General topic",
    language: adminElements.videoLanguage.value.trim() || "English",
    link: adminElements.videoLink.value.trim(),
    status: adminElements.videoStatus.value,
    updatedAt: Date.now(),
  });
  saveLocalList("studentResearchVideoResources", records.slice(0, 100));
  adminElements.videoForm.reset();
  renderProfessionalRecords();
}

function submitPastPaperRecord(event) {
  event.preventDefault();
  const records = getLocalList("studentResearchPastPapers");
  records.unshift({
    country: adminElements.paperCountry.value.trim() || "Africa",
    examBody: adminElements.paperExamBody.value.trim() || "Exam body",
    subject: adminElements.paperSubject.value.trim() || "Subject",
    year: adminElements.paperYear.value.trim() || new Date().getFullYear(),
    paperType: adminElements.paperType.value.trim() || "Theory",
    link: adminElements.paperLink.value.trim(),
    status: "pendingReview",
    updatedAt: Date.now(),
  });
  saveLocalList("studentResearchPastPapers", records.slice(0, 100));
  adminElements.pastPaperForm.reset();
  renderProfessionalRecords();
}

function showUpdateBanner(registration) {
  if (!registration?.waiting) {
    return;
  }
  waitingServiceWorker = registration.waiting;
  adminElements.updateBanner.hidden = false;
}

function updateAppNow() {
  if (!waitingServiceWorker) {
    window.location.reload();
    return;
  }
  waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
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
  navigator.serviceWorker.register("service-worker.js").then((registration) => {
    // Check for app updates every 30 minutes
    setInterval(() => {
      registration.update();
    }, 30 * 60 * 1000);

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      newWorker?.addEventListener("statechange", () => {
      });
    });
  });
}

function initAdmin() {
  registerServiceWorker();
  adminElements.registerForm.addEventListener("submit", registerAdmin);
  adminElements.form.addEventListener("submit", loginAdmin);
  adminElements.logout.addEventListener("click", logoutAdmin);
  adminElements.uploadForm.addEventListener("submit", submitTeacherUpload);
  adminElements.curriculumForm.addEventListener("submit", submitCurriculumRecord);
  adminElements.videoForm.addEventListener("submit", submitVideoRecord);
  adminElements.pastPaperForm.addEventListener("submit", submitPastPaperRecord);
  adminElements.updateNow.addEventListener("click", updateAppNow);
  renderCollectionMap();
  renderApprovalQueue();
  renderProfessionalRecords();
  renderAdminAccess();
}

initAdmin();
