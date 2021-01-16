export const virtualData = {};
export let nextId = Object.keys(virtualData).length;
export const handleNextId = () => {
  nextId++;
};
