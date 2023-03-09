export const formatString = str => {
  const splitStr = str?.split('-');
  const reverseStr = splitStr?.reverse();
  const newStr = reverseStr?.join('/');

  return {newStr};
};
