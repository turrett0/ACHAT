//@ts-nocheck

export function throttle(callback: Function, latency: number) {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    callback.apply(this, null);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, latency);
  }
  return wrapper;
}
