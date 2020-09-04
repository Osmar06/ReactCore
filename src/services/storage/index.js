const { useState, useEffect } = require("react");
const { default: StorageService } = require("./StorageService");

const useStorage = (key, defaultValue) => {
  const [storageValue, setStorageValue] = useState(defaultValue);

  function getStorageValue() {
    let value = defaultValue;
    try {
      value = StorageService.get(key) || defaultValue;
    } catch (error) {
    } finally {
      setStorageValue(value);
    }
  }

  function updateStorage(newValue) {
    try {
      if (newValue === null || newValue === undefined)
        StorageService.remove(key);
      else StorageService.add(key, newValue);
    } catch (error) {
    } finally {
      setStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, []);

  return [storageValue, updateStorage];
};

export { useStorage, StorageService };
