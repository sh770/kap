const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");

let counter = 0;
document.getElementById("di1").textContent = counter;

// הוסף אירוע לחיצה על הכפתור
myButton1.addEventListener("click", () => {
  // קוד הפונקציה שתרצה להפעיל בעת לחיצה
  //   createTodoItem();
  //   alert("1")
  console.log(1);
  counter++;
  document.getElementById("di1").textContent = counter;
});
// הוסף אירוע לחיצה על הכפתור
myButton2.addEventListener("click", () => {
  // קוד הפונקציה שתרצה להפעיל בעת לחיצה
  //   createTodoItem();
  //   alert("2")
  console.log(2);

  counter--;
  document.getElementById("di1").textContent = counter;
});

// const counterTodoList = () => {
//   let counterComponents = "";
//   todos.forEach((counter) => {
//     counterComponents += createCounterComponent(counter);
//   });
//   todoListElemrnt.innerHTML = counterComponents;
// };

// const createCounterComponent=()=>{

// }

// פונקציה שמוסיפה קובייה לתוך ה-container
// function addCube() {
//   const cubesContainer = document.getElementById('cubesContainer');

//   // יצירת הקובייה
//   const cube = document.createElement('div');
//   cube.className = 'cube';

//   // הוספת הקובייה ל-container
//   cubesContainer.appendChild(cube);
// }

// function removeCube() {
//   const cubesContainer = document.getElementById('cubesContainer');

//   // בדיקה אם יש קוביות להסרה
//   if (cubesContainer.childElementCount > 0) {
//       // הסרת הקוביה האחרונה ב-container
//       cubesContainer.removeChild(cubesContainer.lastChild);
//   } else {
//       console.log('אין קוביות להסרה!');
//   }
// }

// // הוספת אירוע ללחיצה על הכפתור
// document.getElementById('addCubeBtn').addEventListener('click', addCube);
// document.getElementById('removeCubeBtn').addEventListener('click', removeCube);

const CubeManager = (function () {
  // פונקציה פנימית להוספת קובייה
  function addCube() {
    const cubesContainer = document.getElementById("cubesContainer");
    const cube = document.createElement("div");
    cube.className = "cube";
    cubesContainer.appendChild(cube);
  }

  // פונקציה פנימית להסרת קובייה
  function removeCube() {
    const cubesContainer = document.getElementById("cubesContainer");

    if (cubesContainer.childElementCount > 0) {
      cubesContainer.removeChild(cubesContainer.lastChild);
    } else {
      // alert('אין קוביות להסרה!');
      console.log("אין קוביות להסרה!");
      // הצגת הודעה במקום המתאים
      messageContainer.classList.remove("hidden");
      setTimeout(() => {
        messageContainer.classList.add("hidden");
      }, 3000); // הודעה תיסתר אוטומטית אחרי 3 שניות
    }
  }

  // חשיפת הפונקציות הרלוונטיות לחוץ
  return {
    addCube: addCube,
    removeCube: removeCube,
  };
})();

document
  .getElementById("addCubeBtn")
  .addEventListener("click", CubeManager.addCube);
document
  .getElementById("removeCubeBtn")
  .addEventListener("click", CubeManager.removeCube);
