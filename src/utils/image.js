function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

function isBase64(value) {
  if (!value) {
    return;
  }

  const cutValue = value.slice(0, 6);
  if (cutValue === "images") return false;

  return true;
}

export { convertBase64, isBase64 };
