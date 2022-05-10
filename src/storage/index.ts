export function setItemToLocalStorage(name: string, value: any) {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  return localStorage.setItem(name, value);
}
export function getItemFromLocalStorage(name: string) {
  return localStorage.getItem(name);
}
