export const startsWith = (str, target) => {
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== str[i]) return false;
  }
  return true;
};
