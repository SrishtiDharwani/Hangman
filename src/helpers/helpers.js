export const showNotification = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};

export const checkWin = (correct, wrong, word) => {
  let status = "win";

  //check win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //check lost
  if (wrong.length === 6) {
    status = "lost";
  }

  return status;
};
