export const pickBackgroundImage = () => {
  const curUser = JSON.parse(
    localStorage.getItem("user")
  ).userName.toLowerCase()[0];

  const regexAF = /^[a-e]+$/;
  const regexFJ = /^[f-j]+$/;
  const regexKÑ = /^[k-ñ]+$/;
  const regexOR = /^[o-r]+$/;
  const regexSV = /^[s-v]+$/;

  if (regexAF.test(curUser)) return "background-1";
  if (regexFJ.test(curUser)) return "background-2";
  if (regexKÑ.test(curUser)) return "background-3";
  if (regexOR.test(curUser)) return "background-4";
  if (regexSV.test(curUser)) return "background-5";
  else return "background";
};
