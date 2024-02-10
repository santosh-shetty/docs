const fileData = [
  {
    name: "Sample.zip",
    lastModified: "2024-02-10 15:46",
    fileSize: "403 KB",
    href: "assets/files/sample.zip",
  },
  {
    name: "Text.txt",
    lastModified: "2024-02-10 15:46",
    fileSize: "403 KB",
    href: "assets/files/sample.txt", 
  },
];

//   Script for creating  the table dynamically from JSON Data
const fileListElement = document.getElementById("file-list");

function createFileRow(file) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.classList.add("name-col");
  const image = document.createElement("img");
  image.classList.add("folder-img");
  image.src = "assets/images/folder.svg";
  image.alt = "";
  nameCell.appendChild(image);
  const link = document.createElement("a");
  link.href = file.href;
  link.target = "_blank";
  link.textContent = file.name;
  nameCell.appendChild(link);
  row.appendChild(nameCell);

  const lastModifiedCell = document.createElement("td");
  lastModifiedCell.textContent = file.lastModified;
  row.appendChild(lastModifiedCell);

  const fileSizeCell = document.createElement("td");
  fileSizeCell.classList.add("file-size");
  fileSizeCell.textContent = file.fileSize;
  row.appendChild(fileSizeCell);

  return row;
}

function populateFileList() {
  fileData.forEach((file) => {
    const fileRow = createFileRow(file);
    fileListElement.appendChild(fileRow);
  });
}

populateFileList();


// Script for creating the table dynamically from JSON Data
// const fileData = [
//     {
//         name: "Sample.zip",
//         lastModified: "2024-02-10 15:46",
//         fileSize: "403 KB",
//         href: "assets/files/sample.zip",
//     },
//     {
//         name: "Text.txt",
//         lastModified: "2024-02-10 15:46",
//         fileSize: "403 KB",
//         href: "assets/files/sample.txt",
//     },
// ];

// const fileListElement = document.getElementById("file-list");

// function createFileRow(file) {
//     const row = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.classList.add("name-col");
//     const image = document.createElement("img");
//     image.classList.add("folder-img");
//     image.src = "assets/images/folder.svg";
//     image.alt = "";
//     nameCell.appendChild(image);
//     const link = document.createElement("a");
//     link.href = file.href;
//     link.textContent = file.name;
//     nameCell.appendChild(link);
//     row.appendChild(nameCell);

//     const lastModifiedCell = document.createElement("td");
//     lastModifiedCell.textContent = file.lastModified;
//     row.appendChild(lastModifiedCell);

//     const fileSizeCell = document.createElement("td");
//     fileSizeCell.classList.add("file-size");
//     fileSizeCell.textContent = file.fileSize;
//     row.appendChild(fileSizeCell);

//     return row;
// }

// function populateFileList() {
//     fileData.forEach((file) => {
//         const fileRow = createFileRow(file);
//         fileListElement.appendChild(fileRow);
//     });
// }

// populateFileList();

// // Add file form submission handling
// const addFileForm = document.getElementById("addFileForm");
// addFileForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const fileName = document.getElementById("fileName").value;
//     const fileSize = document.getElementById("fileSize").value;
//     const fileHref = document.getElementById("fileHref").value;
//     const newFile = {
//         name: fileName,
//         lastModified: new Date().toISOString().slice(0, 16).replace("T", " "),
//         fileSize: fileSize,
//         href: fileHref,
//     };
//     const newFileRow = createFileRow(newFile);
//     fileListElement.appendChild(newFileRow);
//     // Close modal
//     $('#addFileModal').modal('hide');
//     // Clear form fields
//     addFileForm.reset();
// });
