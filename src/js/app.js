// TODO: write your code here
const checkProductCount = (count) => {
  try {
    if (/^[1-9]\d*$/.test(count) && count > 0) return Number(count);
    throw new Error('Ввод некорректен');
  } catch (e) {
    return e;
  }
};

export default checkProductCount;
