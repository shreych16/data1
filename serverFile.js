var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port= 2410;

customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];
app.get("/getStudents", function(req, res) {
  let list = students;
  let course = req.query.course;
  list = filterParam(list, "courses", course);
  let result = pagination(list, parseInt(req.query.page));
  console.log('Array ',result)

  res.json({
    page: parseInt(req.query.page),
    items: result,
    totalItems: result.length,
    totalNum: list.length
  });
});
app.get("/getFaculties", function(req, res) {
  let list = faculties;
  let course = req.query.course;
  list = filterParam(list, "courses", course);
  let result = pagination(list, parseInt(req.query.page));
  console.log('Array ',result)

  res.json({
    page: parseInt(req.query.page),
    items: result,
    totalItems: result.length,
    totalNum: list.length
  });
});
let filterParam = (arr, name, values) => {
  console.log(arr, name, values);
  if (!values) return arr;
  let valuesArr = values.split(",");
  let arr1 = arr.filter((item) => item[name].some((course) => valuesArr.includes(course)));
  console.log(arr1,arr,valuesArr);
  return arr1;
};
app.post("/register", function(req, res) {
  const cust = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  cust.custId = customers.length + 1;
  customers.push(cust);
  if(cust.role==="student"){
    let json = {};
    json.id=students.length+1;
    json.name=cust.name;
    students.unshift(json);
  }
  else{
    let json = {};
    json.id=faculties.length+1;
    json.name=cust.name;
    faculties.unshift(json);
  }
  var customerRes= {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role
  }
  res.send(customerRes);
});
app.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var cust = customers.find(function(item) {
    return item.email === email && item.password === password;
  });
  console.log(cust);
  var custRec= {
    name: cust.name,
    email: cust.email,
    role: cust.role
  }
  //if null then send error
  res.send(custRec);
});
app.get("/getCourses", function(req, res) {
  res.send(courses);
});
app.get("/getStudentNames", function(req, res) {
  const StudentNames = students.map(stu=> stu.name);
  res.send(StudentNames);
});
app.get("/getFacultyNames", function(req, res) {
  const facultyNames = faculties.map(faculty => faculty.name);
  res.send(facultyNames);
});
app.put("/putCourse", function(req, res) {
  console.log(req.body);
  const course = {
    courseId: req.body.courseId,
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    faculty: req.body.faculty,
    students: req.body.students
  };
  let index = courses.findIndex((obj1) => obj1.courseId === course.courseId);
  if (index >= 0) {
    courses[index] = course;
    res.send(course);
  } else res.send("not found");
});
app.post("/postStudentDetails", function(req, res) {
  const stu = {
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender, 
    about: req.body.about
  };
  let find = students.find(st=>st.name===stu.name);
  stu.id = find.id;
  stu.courses = find.courses;
  console.log(stu);
  students.push(stu);
  res.send(stu);
});
app.get("/getStudentDetails/:name", function(req, res) {
  var name = req.params.name;
  console.log("name", name);
  const stu = students.find(function(item) {
    return item.name === name;
  });
  console.log(stu);
  if(stu) res.send(stu);
  else res.status(500).send("not found");
});
app.get("/getStudentCourse/:name", function(req, res) {
  var name = req.params.name;
  console.log("name", name);
  const stu = students.find(function(item) {
    return item.name === name;
  });
  let list = courses.filter((a1) => stu.courses.find((course) => course === a1.name));
  console.log(list);
  if(list) res.send(list);
  else res.status(500).send("not found");
});
app.get("/getStudentClass/:name", function(req, res) {
  var name = req.params.name;
  console.log("name", name);
  const stu = students.find(function(item) {
    return item.name === name;
  });
  let list = classes.filter((a1) => stu.courses.find((course) => course === a1.course));
  console.log(list);
  if(list) res.send(list);
  else res.status(500).send("not found");
});

app.get("/getFacultyCourse/:name", function(req, res) {
  var name = req.params.name;
  console.log("name", name);
  const fact = faculties.find(function(item) {
    return item.name === name;
  });
  let list = courses.filter((a1) => fact.courses.find((course) => course === a1.name));
  console.log(list);
  if(list) res.send(list);
  else res.status(500).send("not found");
});
app.get("/getFacultyClass/:name", function(req, res) {
  var name = req.params.name;
  console.log("name", name);
  const fact = faculties.find(function(item) {
    return item.name === name;
  });
  let list = classes.filter((a1) => fact.courses.find((course) => course === a1.course));
  console.log(list);
  if(list) res.send(list);
  else res.status(500).send("not found");
});

app.post("/postClass", function(req, res) {
  const clas = {
    course: req.body.course,
    time: req.body.time,
    endTime: req.body.endTime,
    topic: req.body.topic, 
    facultyName: req.body.facultyName
  };
  clas.id = classes.length + 1;
  console.log(clas);
  classes.push(clas);
  res.send(clas);
});
app.put("/putClass/:id", function(req, res) {
    var id = +req.params.id;
  console.log(req.body);
  const clas = {
    course: req.body.course,
    time: req.body.time,
    endTime: req.body.endTime,
    topic: req.body.topic, 
    facultyName: req.body.facultyName
  };
  let index = classes.findIndex((obj1) => obj1.id === id);
  if (index >= 0) {
    classes[index] = clas;
    res.send(clas);
  } else res.send("not found");
});
function pagination(obj, page) {
  var resArr = obj;
  resArr = resArr.slice(page * 3 - 3, page * 3);
  return resArr;
}

app.listen(port, () => console.log(`Node app listening on port ${port}!`));