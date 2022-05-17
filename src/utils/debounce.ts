//@ts-nocheck

export function throttle(callback: Function, latency: number) {
  let isThrottled = false;

  function wrapper() {
    if (isThrottled) {
      return;
    }
    callback.apply(this, null);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, latency);
  }
  return wrapper;
}

export function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}
