const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (data) => data.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (data) => data.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (data) => data.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  const toDisplayableList = (list) => {
    return list
      .map(
        (data) =>
          `${data.completed ? "[x]" : "[ ]"} ${data.title} ${
            data.dueDate === today ? "" : data.dueDate
          }`.trim()
      )
      .join("\n")
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
