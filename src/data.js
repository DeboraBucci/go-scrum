const user1 = {
  name: "Pedro García",
  role: "Team Member",
  email: "pedrogarcia@gmail.com",
  pw: "pedro123",
};

const user2 = {
  name: "Sarah Perez",
  role: "Team Member",
  email: "sarahperez@gmail.com",
  pw: "sarah123",
};

const user3 = {
  name: "José Andrés Montereal",
  role: "Tech Leader",
  email: "josemontereal@gmail.com",
  pw: "jose123",
};

const user4 = {
  name: "Rodrigo Gastón Diaz",
  role: "Team Member",
  email: "rodrigodiaz@gmail.com",
  pw: "rodrigo123",
};

const users = [user1, user2, user3, user4];

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

export { users, difficultyOptions, statusOptions };
