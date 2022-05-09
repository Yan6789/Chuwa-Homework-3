const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

//task one
let app = document.getElementById("app");

//create table
const table = document.createElement("table");
table.className = "table";

//create the header for the table
const tableHeader = document.createElement("tr");
tableHeader.className = "header";
var tableHeaderItems = tableInfo.tableHeader.map((ele) => {
  const HeaderCell = document.createElement("th");
  HeaderCell.textContent = ele;
  return tableHeader.appendChild(HeaderCell);
});
table.append(tableHeader);

//create the content for the table
var tableItems = tableInfo.tableContent.map((ele) => {
  const contentRow = document.createElement("tr");
  contentRow.className = "tableContent";
  for (let key in ele) {
    const cell = document.createElement("td");
    cell.textContent = ele[key];
    contentRow.appendChild(cell);
  }
  return table.appendChild(contentRow);
});

//task 2
const unorderList = document.createElement("ul");
const orderList = document.createElement("ol");

const listNode = list.map((node) => {
  let li = document.createElement("li");
  li.textContent = node;
  li.className = "list";
  let cloneListNode = li.cloneNode(true);
  unorderList.append(li);
  return orderList.appendChild(cloneListNode);
});

//task 3
const dropdownBox = document.createElement("select");
dropdownBox.className = "dropdown";

const dropdownItems = dropDownList.map((ele) => {
  let dropdownItem = document.createElement("option");
  dropdownItem.value = ele.value;
  dropdownItem.textContent = ele.content;
  dropdownBox.appendChild(dropdownItem);
  return dropdownItem;
});

app.append(table, orderList, unorderList, dropdownBox);
