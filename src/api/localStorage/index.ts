export function setItemToLocalStorage(name: string, value: any) {
  try {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    return localStorage.setItem(name, value);
  } catch (error) {
    alert("Нет доступа к Local Storage");
  }
}
export function getItemFromLocalStorage(name: string) {
  try {
    return localStorage.getItem(name);
  } catch (e) {
    alert("Нет доступа к Local Storage");
  }
}
