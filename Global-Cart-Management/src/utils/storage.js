
export const loadData = (key, defaultValue) => {
  try {
    const savedData = localStorage.getItem(key);

    return savedData
      ? JSON.parse(savedData)
      : defaultValue;
  } catch (error) {
    console.error("Error loading data:", error);
    return defaultValue;
  }
};

export const saveData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
