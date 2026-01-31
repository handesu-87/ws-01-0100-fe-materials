//dummyデータ
const state = {
  showCompleted: false,
  tasks: [
    {
      name: "Task 1",
      deadline: new AppDate().getDateInXMonth(1),
    },
    {
      name: "Task 2",
      deadline: new AppDate().getDateInXMonth(2),
    },
    {
      name: "Task 3",
      deadline: new AppDate().getDateInXMonth(3),
    },
  ],
};

// ↓↓↓ ここを実装

function renderTasks(arr) {
  /*
    - li
      - div.checkbox
        - label.checkbox
          - input
          - i
      - div.list__item-col--name
      - div.list__item-col--deadline
      - div.list__item-col--actions
        - i
    */
  arr.forEach((task) => {
    const checkbox = checkbox(false, (checked) => {
      console.log("今の状態:", checked);
      //タスクが完了したときの処理
    });
    const li = document.createElement("li");
    li.classList.add("list__item");
  });
}

function onSubmitTask(container) {
  const form = document.querySelector(".js-form");
  const data = new FormData(form);
  const name = data.get("name");
  if (!name) {
    window.alert("タスク名を入力してください。");
    return;
  }
  // deadlineをDateオブジェクトに変換
  const deadline = AppDate.parse(data.get("deadline"));
  if (!deadline) {
    window.alert("期限日を入力してください。");
    return;
  }

  //stateのtasksにオブジェクトを追加する
  state.tasks.push({
    name,
    deadline,
  });

  state.tasks.forEach((element) => {
    console.log(element);
  });

  // state.tasksを描画する
  renderTasks(state.tasks);

  form.reset();
}

// ↑↑↑

function main() {
  const todoContainer = document.querySelector(".js-list-container");

  document.querySelector(".js-form").addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmitTask(todoContainer);
  });

  document
    .querySelector(".js-show-completed")
    .addEventListener("change", (e) => {
      state.showCompleted = e.target.checked;
      renderTasks(todoContainer);
    });
  renderTasks(todoContainer);
}

main();
