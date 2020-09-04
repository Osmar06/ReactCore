function add(key, value) {
  try {
    localStorage.setItem(key, toSafeItem(value));
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

function get(key) {
  try {
    const result = localStorage.getItem(key);
    return transformItem(result);
  } catch (e) {
    return responseError(e);
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

function clearAll() {
  try {
    localStorage.clear();
  } catch (e) {
    return responseError(e);
  }
}

const toSafeItem = (value) => {
  const result = JSON.stringify({ value: value });
  console.log("Safe Item ", result);
  return result;
};

const transformItem = (value) => {
  try {
    if (!value) return value;
    const safeItem = JSON.parse(value);
    return safeItem.value;
  } catch (error) {
    return value;
  }
};

const responseSuccess = { success: true };

const responseError = (e) => {
  console.log("Local Storage access Failed", e);
  return { success: false, error: e };
};

export default {
  add,
  get,
  remove,
  clearAll,
};
