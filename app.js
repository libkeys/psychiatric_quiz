const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql = require('mysql2');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', cors(), (req, res) => {
  res.send('Hello, world!');
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'university_project',
  password: '4248SQL*'
});

connection.connect(function (err) {
  if (err) {
    return console.log(`There is an error ${err.message}`);
  }
  else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.post('/add_class', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`INSERT INTO classes(classNumber, classLetter) VALUES (${requestData.classNumber}, '${requestData.classLetter}');`, function (err, results, fields) {
        // console.log(results);
        answer = {}
        if (err !== null) {
          answer.result = err;
          answer.message = 'something went wrong'
          reject(answer);
        }
        else {
          answer.result = results;
          answer.message = 'everything is fine'
          resolve(answer);
        }
      })
    })

    // result.then(data => data.text()).then(data => console.log(data))
  }
  catch (error) {
    // console.log(error)
  }
  response.end(JSON.stringify('ok'))
})

app.post('/add_student', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`INSERT INTO students(studentName, studentSurname,
        studentLastname, studentBirthDate, studentClass) VALUES ('${requestData.studentName}',
          '${requestData.studentSurname}', '${requestData.studentLastname}',
          '${requestData.studentBirthDate}', ${requestData.studentClass});`,
        function (err, results, fields) {
          // console.log(results);
          answer = {}
          if (err !== null) {
            answer.result = err;
            answer.message = 'something went wrong'
            reject(answer);
          }
          else {
            answer.result = results;
            answer.message = 'everything is fine'
            resolve(answer);
          }
        })
    })

    // result.then(data => data.text()).then(data => console.log(data))
  }
  catch (error) {
    // console.log(error)
  }
  response.end(JSON.stringify('ok'))
})

app.get('/get_classes', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM classes;`,
        function (err, results, fields) {
          // console.log(results);
          answer = {}
          if (err !== null) {
            answer.result = err;
            answer.message = 'something went wrong'
            reject(answer);
          }
          else {
            answer.result = results;
            answer.message = 'everything is fine'
            resolve(answer);
          }
        }
      )
    })
    result.then(data => {
      console.log(data.result)
      response.end(JSON.stringify(data.result))
    })
    // result.then(data => data.text()).then(data => console.log(data))
  }
  catch (error) {
    // console.log(error)
  }
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});