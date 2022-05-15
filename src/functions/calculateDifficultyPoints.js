export const calculateDifficultyPoints = (a, b) => {
  let numA, numB;

  const difficultyPointsArr = [
    { level: "epic", points: 10 },
    { level: "hard", points: 8 },
    { level: "medium", points: 6 },
    { level: "easy", points: 4 },
    { level: "trivial", points: 2 },
    { level: "", points: 0 },
  ];

  difficultyPointsArr.forEach((el) => {
    if (a.difficulty === el.level) numA = el.points;
    if (b.difficulty === el.level) numB = el.points;
  });

  return { numA, numB };
};
