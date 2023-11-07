window.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const resetButton = document.getElementById("resetButton");

  saveButton.onclick = setSaveButton;
  resetButton.onclick = remResetButton;
});

const loadData = () => {
  const dataInStorage = localStorage.getItem("save");
  const html = document.documentElement;

  if (dataInStorage) {
    html.classList.add("data");
  } else {
    html.classList.remove("data");
  }
};

const setSaveButton = () => {
  localStorage.setItem("save", "data");

  loadData();
};

const remResetButton = () => {
  localStorage.removeItem("save");

  loadData();
};
