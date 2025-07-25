let formContainer = document.createElement("div");
let mainContainer = document.getElementById("main");
let listContainer = document.createElement("div");
listContainer.setAttribute(
  "class",
  "flex justify-start items-center p-4 flex-wrap gap-2"
);
formContainer.setAttribute("id", "form-box");
formContainer.innerHTML = `
<form class="shadow-xl w-[700px] h-[400px] flex justify-center items-center flex-col gap-3">
<h1 class="text-2xl font-bold">Student Portal Form</h1>
  <input required type="text" id="name-input" class=" focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter students name"/>
  <input required type="text" id="batch-input" class=" focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter batch name"/>
  <input required type="text" id="course-input" class=" focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter course name"/>
  <button  class="cursor-pointer bg-blue-500 p-2 w-36 rounded-sm text-black font-semibold">Save</button>
</form>
`;

mainContainer.append(formContainer, listContainer);
let nameInput = document.getElementById("name-input");
let batchInput = document.getElementById("batch-input");
let courseInput = document.getElementById("course-input");

function removeInputField() {
  nameInput.value = "";
  batchInput.value = "";
  courseInput.value = "";
}
let student_list = [];
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudentObj = {
    student_name: nameInput.value,
    student_batch: batchInput.value,
    student_course: courseInput.value,
  };
  if (newStudentObj) {
    console.log(newStudentObj);
    student_list.push(newStudentObj);
    removeInputField();
    createStudentCard(newStudentObj);
  }
});
const dummyObj = {
  student_name: "Sanjay",
  student_batch: "B29",
  student_course: "Full Stack",
};
function createStudentCard(studentObj) {
  listContainer.innerHTML += `
                    <div class="bg-slate-100 p-4 rounded-lg w-[150px] h-[150px] flex flex-col justify-between gap-2 shadow-md">
                    <div class="text-2xl text-center font-bold">${studentObj.student_name}</div>
                    <div>
                    <div class="opacity-75 font-semibold">${studentObj.student_batch}</div>
                    <div class="opacity-75 font-semibold">${studentObj.student_course}</div>
                    </div>
                    </div> 
                    `;
}

function renderAllStudentsCard(studenList) {
  studenList.map((stud_obj, index, accARR) => {
    createStudentCard(stud_obj);
  });
}
if (student_list.length > 0) {
  renderAllStudentsCard(student_list);
}
