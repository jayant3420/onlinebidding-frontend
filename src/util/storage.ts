/**
 *
 * @param {*} name
 * Takes key name as input and returns the respective key from local storage
 * @returns {*} key
 */
const getter = (name: string) => {
  return typeof window !== "undefined" ? localStorage.getItem(name) : null;
};

/**
 *
 * @param {*} name
 * @param {*} value
 * Takes key name and value as input and and stores the respective key value pair in local storage
 */
const setter = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

/**
 * @param {*} name
 * Takes key name as input and removes the respective key from local storage
 */
const remove = (name: string) => {
  localStorage.removeItem(name);
};

/*
Clear LocalStorage
*/
const clearStorage = () => {
  localStorage.clear();
};

export { getter, setter, remove, clearStorage };
