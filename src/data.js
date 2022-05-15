const difficultyOpt = [
  { val: "trivial", name: "Trivial" },
  { val: "easy", name: "Fácil" },
  { val: "medium", name: "Mediana" },
  { val: "hard", name: "Difícil" },
  { val: "epic", name: "Épica" },
];

const importanceOpt = [
  { val: "low", name: "Baja" },
  { val: "medium", name: "Media" },
  { val: "high", name: "Alta" },
];

const statusOptions = [
  { val: "backlog", name: "Backlog" },
  { val: "todo", name: "To Do" },
  { val: "doing", name: "Doing" },
  { val: "testing", name: "Testing" },
  { val: "codeReview", name: "Code Review" },
  { val: "done", name: "Done" },
];

const requiredMessage = "*Campo obligatorio";

const username = JSON.parse(localStorage.getItem("user")).userName;

export {
  difficultyOpt,
  importanceOpt,
  statusOptions,
  requiredMessage,
  username,
};
