const fs = require("fs");

const indexHtml = fs.readFileSync("index.html", "utf8");
const adminHtml = fs.readFileSync("admin.html", "utf8");
const indexJs = fs.readFileSync("index.js", "utf8");
const adminJs = fs.readFileSync("admin.js", "utf8");
const css = fs.readFileSync("index.css", "utf8");
const serviceWorker = fs.readFileSync("service-worker.js", "utf8");

const requiredIndexIds = [
  "studentLogin",
  "accountRole",
  "studentEmail",
  "studentPassword",
  "studentPasswordConfirm",
  "studyType",
  "accountCourse",
  "roleGateway",
  "roleDashboard",
  "workspaceShortcuts",
  "nextStepPanel",
  "moduleResearch",
  "courseSelect",
  "unitSelect",
  "moduleActionPanel",
  "starterPrompts",
  "learningPath",
  "results",
  "resultContext",
  "resultSafetyWarning",
  "askFollowUp",
  "sendAnswerWhatsapp",
  "saveAnswerTop",
  "lessonPlanForm",
  "courseOutlineForm",
  "practicalGuideForm",
  "chatForm",
  "quickWhatsappForm",
  "feature-readiness",
  "runQaChecks",
  "runDemoJourney",
  "runRoleJourneys",
  "qaList",
  "qaJourneyLog",
  "roleRegisterHint",
];

const requiredAdminIds = ["adminLoginForm", "adminEmail", "adminPassword", "adminLoginStatus", "adminLogout", "teacher-admin"];
const requiredIndexSnippets = [
  "function runFrontendQaChecks",
  "function renderOnboarding",
  "function renderNextStepPanel",
  "function runNextStepAction",
  "function renderStarterPrompts",
  "function getStarterPrompts",
  "function renderLearningPath",
  "function getLearningPathSteps",
  "const roleRegistrationCopy",
  "async function runDemoJourney",
  "async function runAllRoleJourneys",
  "const demoProfiles",
  "function handleModuleAction",
  "function renderResultContext",
  "function sendCurrentAnswerToWhatsapp",
  "data-module-action",
  "studentResearchProfile",
  "pendingReview",
];
const requiredCssSnippets = [".module-action-panel", ".result-context", ".safety-warning", ".feature-readiness", ".qa-list"];

function getIds(markup) {
  return new Set([...markup.matchAll(/id="([^"]+)"/g)].map((match) => match[1]));
}

function check(name, ok, detail = "") {
  return { name, ok, detail };
}

const indexIds = getIds(indexHtml);
const adminIds = getIds(adminHtml);
const checks = [
  ...requiredIndexIds.map((id) => check(`index id #${id}`, indexIds.has(id))),
  ...requiredAdminIds.map((id) => check(`admin id #${id}`, adminIds.has(id))),
  ...requiredIndexSnippets.map((snippet) => check(`index.js contains ${snippet}`, indexJs.includes(snippet))),
  ...requiredCssSnippets.map((snippet) => check(`index.css contains ${snippet}`, css.includes(snippet))),
  check("service worker cache bumped", /student-research-africa-v\d+/.test(serviceWorker)),
  check("register/login tabs exist", (indexHtml.match(/data-auth-tab=/g) || []).length >= 2),
  check("password visibility controls exist", (indexHtml.match(/data-toggle-password=/g) || []).length >= 2),
  check("role options exist", ["student", "teacher", "lecturer", "worker"].every((role) => indexHtml.includes(`value="${role}"`))),
  check("smart registration labels exist", ["nameLabel", "whatsappLabel", "levelLabel", "studyTypeLabel", "courseLabel", "departmentLabel", "schoolLabel"].every((id) => indexHtml.includes(`id="${id}"`))),
  check("workspace tabs exist", (indexHtml.match(/data-workspace-tab=/g) || []).length >= 6 && indexJs.includes("activateWorkspaceTab")),
  check("demo portal buttons exist", (indexHtml.match(/data-demo-account=/g) || []).length >= 4 && indexJs.includes("useDemoPortalAccount")),
  check("next action panel exists", ["nextStepTitle", "nextStepSummary", "nextStepActions"].every((id) => indexHtml.includes(`id=\"${id}\"`)) && indexJs.includes("data-next-action-primary")),
  check("starter prompts exist", indexHtml.includes("id=\"starterPrompts\"") && indexJs.includes("data-starter-prompt")),
  check("learning path exists", indexHtml.includes("id=\"learningPath\"") && indexJs.includes("data-path-action")),
  check("role registration validation exists", indexJs.includes("Complete ${missing.join")),
  check("onboarding targets exist", (indexHtml.match(/data-onboarding-target=/g) || []).length === 4),
  check("onboarding click event bound", indexJs.includes("[data-onboarding-target]")),
  check("module action event bound", indexJs.includes("[data-module-action]")),
  check("QA click event bound", indexJs.includes("runQaChecks.addEventListener")),
  check("demo journey click event bound", indexJs.includes("runDemoJourney.addEventListener")),
  check("all roles journey click event bound", indexJs.includes("runRoleJourneys.addEventListener")),
  check("all role auto-run hook exists", indexJs.includes("roleJourneys") && indexJs.includes("runAllRoleJourneys")),
];

function missingIds(script, markup, allowedMissing = []) {
  const ids = getIds(markup);
  const refs = [...script.matchAll(/querySelector\("#([^"]+)"\)|\$\("#([^"]+)"\)/g)].map((match) => match[1] || match[2]);
  return [...new Set(refs.filter((id) => !ids.has(id) && !allowedMissing.includes(id)))];
}

const allowedIndexMissing = requiredAdminIds.concat(["teacherUploadForm", "uploadTitle", "uploadType", "resourceFile", "approvalQueue", "collectionMap", "admin-login"]);
const indexMissing = missingIds(indexJs, indexHtml, allowedIndexMissing);
const adminMissing = missingIds(adminJs, adminHtml);
checks.push(check("index.js referenced ids exist or are allowed admin ids", indexMissing.length === 0, indexMissing.join(", ")));
checks.push(check("admin.js referenced ids exist", adminMissing.length === 0, adminMissing.join(", ")));

const failed = checks.filter((item) => !item.ok);
for (const item of checks) {
  console.log(`${item.ok ? "PASS" : "FAIL"} ${item.name}${item.detail ? `: ${item.detail}` : ""}`);
}

if (failed.length) {
  console.error(`\n${failed.length}/${checks.length} checks failed.`);
  process.exit(1);
}

console.log(`\n${checks.length}/${checks.length} checks passed.`);
