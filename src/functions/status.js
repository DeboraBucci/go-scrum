export const statusIcon = (status) => {
  switch (status) {
    case "backlog":
      return "comments";

    case "todo":
      return "thumbtack";

    case "doing":
      return "list-check";

    case "testing":
      return "flask-vial";

    case "codeReview":
      return "magnifying-glass";

    case "done":
      return "check";

    default:
      return "";
  }
};
