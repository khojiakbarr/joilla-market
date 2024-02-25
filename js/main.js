//? base url
const BASE_URL = "";
//? btns
const adminbtn = document.querySelector("#adminbtn");
const employeebtn = document.querySelector("#employeebtn");
const employerbtn = document.querySelector("#employerbtn");
const temabtn = document.querySelector("#temabtn");
//? Sections
const admin = document.querySelector(".admin");
const employee = document.querySelector(".employee");
const employer = document.querySelector(".employer");

adminbtn.addEventListener("click", () => {
  admin.classList.remove("hidden");
  employee.classList.add("hidden");
  employee.classList.add("hidden");

  adminbtn.classList.add("bg_white");
  employeebtn.classList.remove("bg_white");
  employerbtn.classList.remove("bg_white");
});

employeebtn.addEventListener("click", () => {
  employee.classList.remove("hidden");
  admin.classList.add("hidden");
  employer.classList.add("hidden");

  employeebtn.classList.add("bg_white");
  adminbtn.classList.remove("bg_white");
  employerbtn.classList.remove("bg_white");
});

employerbtn.addEventListener("click", () => {
  employer.classList.remove("hidden");
  admin.classList.add("hidden");
  employee.classList.add("hidden");

  employerbtn.classList.add("bg_white");
  adminbtn.classList.remove("bg_white");
  employeebtn.classList.remove("bg_white");
});

//? Forms
const adminFormLog = document.querySelector("#adminFormLog");
const adminFormReg = document.querySelector("#adminFormReg");

const employeeFormLog = document.querySelector("#employeeFormLog");
const employeeFormReg = document.querySelector("#employeeFormReg");

const employerFormLog = document.querySelector("#employerFormLog");
const employerFormReg = document.querySelector("#employerFormReg");

//? Login Register toggle Form
const loginToggle = document.querySelector("#loginToggle");
const RegisterToggle = document.querySelector("#RegisterToggle");
//? Admin
loginToggle.addEventListener("click", () => {
  adminFormReg.classList.add("hidden");
  adminFormLog.classList.remove("hidden");

  loginToggle.classList.add("hidden");
  RegisterToggle.classList.remove("hidden");
});
RegisterToggle.addEventListener("click", () => {
  adminFormLog.classList.add("hidden");
  adminFormReg.classList.remove("hidden");

  loginToggle.classList.remove("hidden");
  RegisterToggle.classList.add("hidden");
});

//? employeeFormLog
loginToggle.addEventListener("click", () => {
  employeeFormReg.classList.add("hidden");
  employeeFormLog.classList.remove("hidden");

  loginToggle.classList.add("hidden");
  RegisterToggle.classList.remove("hidden");
});

RegisterToggle.addEventListener("click", () => {
  employeeFormLog.classList.add("hidden");
  employeeFormReg.classList.remove("hidden");

  loginToggle.classList.remove("hidden");
  RegisterToggle.classList.add("hidden");
});

//? employerFormLog
loginToggle.addEventListener("click", () => {
  employerFormReg.classList.add("hidden");
  employerFormLog.classList.remove("hidden");

  loginToggle.classList.add("hidden");
  RegisterToggle.classList.remove("hidden");
});

RegisterToggle.addEventListener("click", () => {
  employerFormLog.classList.add("hidden");
  employerFormReg.classList.remove("hidden");

  loginToggle.classList.remove("hidden");
  RegisterToggle.classList.add("hidden");
});
