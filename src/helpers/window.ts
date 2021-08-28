export function safeSaveFromLocalStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error("cookies desabled");
  }
}

export function safeGetFromLocalStorage(key: string) {
  try {
    localStorage.getItem(key);
  } catch (e) {
    console.error("cookies desabled");
  }
}

export function safeSaveFromSessionStorage(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    console.error("cookies desabled");
  }
}

export function safeGetFromSessionStorage(key: string) {
  try {
    sessionStorage.getItem(key);
  } catch (e) {
    console.error("cookies desabled");
  }
}
