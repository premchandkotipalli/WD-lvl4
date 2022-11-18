const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    const today = new Date();
    [
      {
        title: "first todo",
        completed: false,
        dueDate: new Date(today.getTime() - 86400000).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "second todo",
        completed: false,
        dueDate: new Date(today).toLocaleDateString("en-CA"),
      },
      {
        title: "third todo",
        completed: false,
        dueDate: new Date(today.getTime() + 86400000).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("Should add new todo", () => {
    expect(all.length).toEqual(3);
    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("should mark todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("For overdue", () => {
    expect(overdue().length).toEqual(1);
  });
  test("For due today", () => {
    expect(dueToday().length).toBe(2);
  });
  test("For due later", () => {
    expect(dueLater().length).toBe(1);
  });
});
