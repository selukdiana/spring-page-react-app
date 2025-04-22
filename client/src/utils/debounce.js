export const debounce = function (callee, timeoutMs) {
  let prevCall, lastCall, lastCallTimer;
  return function perform(...args) {
    prevCall = lastCall;
    lastCall = Date.now;
    if (prevCall && lastCall - prevCall <= timeoutMs) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
};
