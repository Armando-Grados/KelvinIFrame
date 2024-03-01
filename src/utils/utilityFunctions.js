export const startsWith = (str, target) => {
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== str[i]) return false;
  }
  return true;
};

export const openUrlInNewTab = (url, target = "_blank") => {
  const newTab = window.open(url, target);
  if (newTab) {
    newTab.focus();
  }
};

export const uniqueId = (length = 10) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace(".", "")
  );
};
