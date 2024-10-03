//Damanpreet Singh - 101415046
const resolvedPromise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ message: "delayed success!" }), 500);
    });
  const rejectedPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject({ error: "delayed exception!" }), 500);
    });
resolvedPromise()
.then((message) => console.log(message))
.catch((error) => console.error(error));
rejectedPromise()
.then((message) => console.log(message))
.catch((error) => console.error (error));

