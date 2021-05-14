const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((res, rej) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    res({ allUsers, userName });
    return updatedUsers;
  });
};

const logger1 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger1);
toggleUserState(users, "Lux").then(logger1);

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а
// принимала всего два параметра allUsers и userName и возвращала промис.
