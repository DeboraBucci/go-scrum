const difficultyOptions = [
  { val: "", name: "Seleccione una dificultad" },
  { val: "trivial", name: "Trivial" },
  { val: "easy", name: "Fácil" },
  { val: "medium", name: "Mediana" },
  { val: "hard", name: "Difícil" },
  { val: "epic", name: "Épica" },
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

export { difficultyOptions, statusOptions, requiredMessage };
