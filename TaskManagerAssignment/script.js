
  const themeToggle =
    document.getElementById("themeToggle");

  document.body.setAttribute(
    "data-theme",
    "light"
  );

  document.body.classList.add(
    "light-theme"
  );

  function themetoggle() {

    if (themeToggle.checked) {

      document.body.setAttribute(
        "data-theme",
        "dark"
      );

      document.body.classList.remove(
        "light-theme"
      );

      document.body.classList.add(
        "dark-theme"
      );

    } else {

      document.body.setAttribute(
        "data-theme",
        "light"
      );

      document.body.classList.remove(
        "dark-theme"
      );

      document.body.classList.add(
        "light-theme"
      );
    }

    console.log(
      document.body.dataset.theme
    );
  }

  themeToggle.addEventListener(
    "change",
    themetoggle
  );

  const taskInput =
    document.querySelector(
      ".task-creation input"
    );

  const categorySelect =
    document.getElementById(
      "category"
    );

  const addTaskBtn =
    document.querySelector(
      ".task-creation button"
    );

  const tasksContainer =
    document.querySelector(
      ".tasks"
    );


  const heading =
    document.createElement("h2");

  heading.textContent =
    "Your Tasks";

  heading.style.textAlign =
    "center";

  heading.style.opacity =
    "0.7";

  tasksContainer.prepend(
    heading
  );


  console.log(
    "PROPERTY:",
    taskInput.value
  );

  console.log(
    "ATTRIBUTE:",
    taskInput.getAttribute(
      "value"
    )
  );


  let taskId = 1;


  function markTaskCompleted(card) {

    card.setAttribute(
      "data-status",
      "completed"
    );

    card.dataset.status =
      "completed";

    card.classList.add(
      "completed-task"
    );

    const statusDropdown =
      card.querySelector(
        ".task-status"
      );

    statusDropdown.value =
      "completed";

    statusDropdown.disabled =
      true;

    const editButton =
      card.querySelector(
        ".edit-btn"
      );

    editButton.disabled =
      true;

    const completeButton =
      card.querySelector(
        ".complete-btn"
      );

    completeButton.disabled =
      true;

    console.log(
      "Task Completed:",
      card.dataset.status
    );
  }


  function createTask() {

    const taskText =
      taskInput.value.trim();

    if (!taskText) {

      alert(
        "Please enter a task"
      );

      return;
    }

    const category =
      categorySelect.value;


    const taskCard =
      document.createElement("div");

    taskCard.classList.add(
      "task-card"
    );

    taskCard.setAttribute(
      "data-id",
      taskId
    );

    taskCard.setAttribute(
      "data-status",
      "pending"
    );

    taskCard.setAttribute(
      "data-category",
      category
    );

    const taskInfo =
      document.createElement("div");

    taskInfo.classList.add(
      "task-info"
    );

    const taskTitle =
      document.createElement("h4");

    taskTitle.classList.add(
      "task-title"
    );

    taskTitle.appendChild(
      document.createTextNode(
        taskText
      )
    );

    const taskIdText =
      document.createElement("p");

    taskIdText.classList.add(
      "task-id"
    );

    taskIdText.appendChild(
      document.createTextNode(
        `ID: ${taskId}`
      )
    );

    taskInfo.append(
      taskTitle,
      taskIdText
    );


    const taskMeta =
      document.createElement("div");

    taskMeta.classList.add(
      "task-meta"
    );

    const statusSelect =
      document.createElement("select");

    statusSelect.classList.add(
      "task-status"
    );

    statusSelect.innerHTML = `
      <option value="pending">
        Pending
      </option>

      <option value="in-progress">
        In Progress
      </option>

      <option value="completed">
        Completed
      </option>
    `;

    const categoryBadge =
      document.createElement("span");

    categoryBadge.classList.add(
      "task-category"
    );

    categoryBadge.textContent =
      category.charAt(0)
        .toUpperCase() +
      category.slice(1);

    taskMeta.append(
      statusSelect,
      categoryBadge
    );


    const actions =
      document.createElement("div");

    actions.classList.add(
      "task-actions"
    );

    const editBtn =
      document.createElement("button");

    editBtn.classList.add(
      "edit-btn"
    );

    editBtn.textContent =
      "Edit";

    const completeBtn =
      document.createElement("button");

    completeBtn.classList.add(
      "complete-btn"
    );

    completeBtn.textContent =
      "Complete";

    const deleteBtn =
      document.createElement("button");

    deleteBtn.classList.add(
      "delete-btn"
    );

    deleteBtn.textContent =
      "Delete";

    actions.append(
      editBtn,
      completeBtn,
      deleteBtn
    );


    taskCard.append(
      taskInfo,
      taskMeta,
      actions
    );


    tasksContainer.appendChild(
      taskCard
    );

    taskInput.value = "";

    taskId++;
  }

  addTaskBtn.addEventListener(
    "click",
    createTask
  );


  tasksContainer.addEventListener(
    "click",
    function (event) {

      const clickedElement =
        event.target;

      const card =
        clickedElement.closest(
          ".task-card"
        );

      if (!card) return;


      if (
        clickedElement.classList.contains(
          "delete-btn"
        )
      ) {

        console.log(
          card.getAttribute(
            "data-id"
          )
        );

        if (
          card.hasAttribute(
            "data-category"
          )
        ) {

          card.removeAttribute(
            "data-category"
          );
        }

        card.remove();
      }


      if (
        clickedElement.classList.contains(
          "complete-btn"
        )
      ) {

        markTaskCompleted(
          card
        );
      }


      if (
        clickedElement.classList.contains(
          "edit-btn"
        )
      ) {

        const titleElement =
          card.querySelector(
            ".task-title"
          );

        const newTitle =
          prompt(
            "Edit Task",
            titleElement.textContent
          );

        if (
          newTitle &&
          newTitle.trim()
        ) {

          const replacement =
            document.createElement(
              "h4"
            );

          replacement.classList.add(
            "task-title"
          );

          replacement.textContent =
            newTitle;

          titleElement.replaceWith(
            replacement
          );
        }
      }

    }
  );


  tasksContainer.addEventListener(
    "change",
    function (event) {

      if (
        event.target.classList.contains(
          "task-status"
        )
      ) {

        const card =
          event.target.closest(
            ".task-card"
          );

        if (
          event.target.value ===
          "completed"
        ) {

          markTaskCompleted(
            card
          );

          return;
        }

        card.dataset.status =
          event.target.value;

        card.setAttribute(
          "data-status",
          event.target.value
        );

        console.log(
          card.getAttribute(
            "data-status"
          )
        );
      }
    }
  );


  // =========================
  // EVENT CAPTURING DEMO
  // Top → Down
  // Document
  // ↓
  // Task Manager
  // ↓
  // Edit Button
  // =========================

  document.addEventListener(
    "click",
    function (event) {

      if (
        !event.target.classList.contains(
          "edit-btn"
        )
      ) {
        return;
      }

      console.log(
        "CAPTURING: Grandparent (Document)"
      );

    },
    true
  );

  document.querySelector(
    ".task-manager"
  ).addEventListener(
    "click",
    function (event) {

      if (
        !event.target.classList.contains(
          "edit-btn"
        )
      ) {
        return;
      }

      console.log(
        "CAPTURING: Parent (Task Manager)"
      );

    },
    true
  );


  // =========================
  // EVENT BUBBLING DEMO
  // Bottom → Up
  // Edit Button
  // ↑
  // Task Manager
  // ↑
  // Document
  // =========================

  document.querySelector(
    ".task-manager"
  ).addEventListener(
    "click",
    function (event) {

      if (
        !event.target.classList.contains(
          "edit-btn"
        )
      ) {
        return;
      }

      console.log(
        "BUBBLING: Parent (Task Manager)"
      );

    }
  );

  document.addEventListener(
    "click",
    function (event) {

      if (
        !event.target.classList.contains(
          "edit-btn"
        )
      ) {
        return;
      }

      console.log(
        "BUBBLING: Grandparent (Document)"
      );

    }
  );

const pipelineBtn =
  document.getElementById(
    "pipelineBtn"
  );

const pipelineModal =
  document.getElementById(
    "pipelineModal"
  );

const closeModal =
  document.getElementById(
    "closeModal"
  );


  pipelineBtn.addEventListener(
  "click",
  function () {

    pipelineModal.classList.add(
      "show"
    );

  }
);


closeModal.addEventListener(
  "click",
  function () {

    pipelineModal.classList.remove(
      "show"
    );

  }
);


pipelineModal.addEventListener(
  "click",
  function (event) {

    if (
      event.target === pipelineModal
    ) {

      pipelineModal.classList.remove(
        "show"
      );

    }
  }
);



