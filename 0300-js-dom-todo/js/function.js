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

function renderTasks(container) {
  container.innerHTML = "";
  state.tasks.forEach((task) => {
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

    //各要素を生成
    //チェックボックス
    const checkboxWrapper = div("list__item-col list__item-col--checkbox");
    checkboxWrapper.appendChild(
      checkbox(false, () => {
        //チェックボックスがチェックされた時の処理
        console.log("チェックされました");
        // .list__item--completed-dismissingクラスを付与する
        checkbox.classList.add("list__item--completed-dismissing");
      }),
    );

    // tasks.name
    const taskName = div("list__item-col list__item-col--name");
    taskName.innerText = task.name;

    // tasks.deadline
    const taskDead = div("list__item-col list__item-col--deadline");
    taskDead.innerText = task.deadline;

    // ゴミ箱アイコン
    const actions = div("list__item-col list__item-col--actions");
    const i = icon("icon icon--trash fa-solid fa-trash", () => {
      // ゴミ箱がクリックされた時の処理
      console.log("ゴミ箱がクリックされました");
    });
    actions.appendChild(i);

    // liに要素を追加
    const li = document.createElement("li");
    li.classList.add("list__item");
    li.appendChild(checkboxWrapper);
    li.appendChild(taskName);
    li.appendChild(taskDead);
    li.appendChild(actions);

    container.appendChild(li);
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

  //state.tasksにオブジェクトを追加
  state.tasks.push({
    name,
    deadline,
  });

  state.tasks.forEach((element) => {
    console.log(element);
  });

  // リストの見た目を更新
  renderTasks(container);

  //フォームを初期状態に戻す
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
