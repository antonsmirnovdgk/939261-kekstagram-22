const checkLengthOfStr = function(str, maxLength = 140) {
  return Number(str.length) <= maxLength;
};

// window.console.log(checkLengthOfStr(abc));

export {checkLengthOfStr};
