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
