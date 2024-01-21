const statHelper = (() => {
  const getTasksDoneLength = (tasks) => {
    return tasks.filter((t) => t.is_completed).length;
  };

  const getUnfinishedTasks = (tasks) => {
    return tasks.filter((t) => !t.is_completed);
  };

  const isNotTotallyCompleted = (tasks) => {
    return getUnfinishedTasks(tasks).length > 0;
  };

  const getTasksPercentDone = (tasks) => {
    console.log(getTasksDoneLength(tasks), tasks.length);
    return Math.round((getTasksDoneLength(tasks) / tasks.length) * 100);
  };

  const getRemainingTasksLength = (tasks) => {
    return tasks.length - getTasksDoneLength(tasks);
  };

  const getTasksThisWeekLength = (rawTasks) => {
    const tasks = getUnfinishedTasks(rawTasks);
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)

    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 6); // End of the week (Saturday)

    const tasksThisWeek = tasks.filter((task) => {
      const taskDueDate = new Date(task.due_date);
      return taskDueDate >= startOfWeek && taskDueDate <= endOfWeek;
    });

    return tasksThisWeek.length;
  };

  const getTasksOnCurrentDayLength = (rawTasks) => {
    const tasks = getUnfinishedTasks(rawTasks);
    const currentDate = new Date();
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0); // Start of the day

    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999); // End of the day

    const tasksOnCurrentDay = tasks.filter((task) => {
      const taskDueDate = new Date(task.due_date);
      return taskDueDate >= startOfDay && taskDueDate <= endOfDay;
    });

    return tasksOnCurrentDay.length;
  };

  return {
    getTasksDoneLength,
    getTasksPercentDone,
    getRemainingTasksLength,
    getTasksThisWeekLength,
    getTasksOnCurrentDayLength,
    isNotTotallyCompleted,
  };
})();

export default statHelper;
