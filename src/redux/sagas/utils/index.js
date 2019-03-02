export function not(predicate) {
  return (...args) => !predicate(...args);
}

export function nullOrEmpty(value) {
  return !value || !value.trim();
}
