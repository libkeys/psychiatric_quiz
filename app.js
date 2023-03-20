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

app.post('/delete_class', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`delete from classes where id=${requestData.id};`,
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
    }).catch(error => {
      console.log(error)
    })
    // result.then(data => data.text()).then(data => console.log(data))
  }
  catch (error) {
    // console.log(error)
  }
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

app.post('/add_student', function (request, response) {
  let requestData = request.body;
  if (requestData.studentName == '') {
    requestData.studentName = 'Иван'
  }
  if (requestData.studentSurname == '') {
    requestData.studentSurname = 'Иванов'
  }
  if (requestData.studentLastname == '') {
    requestData.studentLastname = 'Иванович'
  }
  if (requestData.studentBirthDate == '') {
    requestData.studentBirthDate = '11.11.2011'
  }
  if (requestData.studentClass != 'Выберете класс') {
    console.log(requestData)
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
  }
  response.end(JSON.stringify('ok'))
})

app.post('/get_student', function (request, response) {
  let requestData = request.body
  let requestSQL = {
    string: `select * from students `,
    name: false,
    surname: false,
    lastname: false,
    class: false
  }
  if (requestData.studentName !== '') {
    requestSQL.name = true;
  }
  if (requestData.studentSurname !== '') {
    requestSQL.surname = true;
    requestSQL.string += ` where studentSurname like '${requestData.studentSurname}' `
  }
  if (requestData.studentLastname !== '') {
    requestSQL.lastname = true;
    requestSQL.string += `${requestSQL.surname ? 'and' : 'where'} studentLastname like '${requestData.studentLastname}' `
  }
  if (requestData.studentClass !== 'Выберете класс') {
    requestSQL.class = true;
    requestSQL.string += `${requestSQL.surname || requestSQL.lastname ? 'and' : 'where'} studentClass like '${requestData.studentClass}' `
  }
  if (requestSQL.name) {
    requestSQL.string += `${requestSQL.surname || requestSQL.lastname || requestSQL.class ? 'and' : 'where'} studentName like '${requestData.studentName}' `
  }
  requestSQL.string += ';';
  // if (requestData.studentName !== '') {
  //   requestSQL.name = true;
  // }
  // if (requestData.studentSurname !== '') {
  //   requestSQL.surname = true;
  //   requestSQL += `and studentSurname
  //   like '${requestData.studentSurname}' `
  // }
  // if (requestData.studentLastname !== '') {
  //   requestSQL.lastname = true;
  //   requestSQL += `and studentLastname like '${requestData.studentLastname}' `
  // }
  // if (requestData.studentClass !== 'Выберете класс') {
  //   requestSQL.class = true;
  //   if (requestData.studentName !== '' && requestData.studentSurname !== '' && requestData.studentLastname !== '') {
  //     requestSQL += `and studentClass like '${requestData.studentClass}';`
  //   }
  //   else {
  //     requestSQL += `studentClass like '${requestData.studentClass}';`
  //   }
  // }
  // if (requestSQL.name || requestSQL.surname || requestSQL.lastname || requestSQL.class) {
  //   requestSQL += ` where `
  //   if (requestSQL.name) {
  //     requestSQL += `studentName like '${requestData.studentName}' `
  //   }
  // }
  // else {
  //   requestSQL += ';'
  // }
  console.log(requestSQL)
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(requestSQL.string,
        function (err, results, fields) {
          // console.log(results);
          answer = {}
          if (err !== null) {
            answer.result = err;
            answer.message = 'something went wrong'
            console.log(err)
            reject(answer);
          }
          else {
            answer.result = results;
            answer.message = 'everything is fine'
            let resultCLasses = new Promise(function (resolve, reject) {
              connection.query(`SELECT id, classNumber, classLetter FROM classes;`,
                function (errClass, resultsClass, field) {
                  if (errClass) {
                    reject(errClass)
                  }
                  else {
                    answer.result.forEach(element => {
                      let objClass = resultsClass.find(elClass => elClass.id === element.studentClass)
                      element.studentClass = objClass.classNumber + objClass.classLetter
                    });
                    resolve()
                  }
                })
            })
            resultCLasses.then(data => {
              response.send(JSON.stringify(answer.result))
            })
            // const promise = new Promise((resolve, reject) => {
            //   const query = `SELECT id, classNumber, classLetter FROM classes`;
            //   connection.query(query, (error, results) => {
            //     if (error) {
            //       reject(error);
            //     } else {
            //       const modifiedResults = results.map((result) => {
            //         return {
            //           ...result,
            //           studentClass: result.classNumber + result.classLetter,
            //         };
            //       });
            //       resolve(modifiedResults);
            //     }
            //   });
            //   // Update each student's class with class name and letter

            // });
            // promise
            //   .then((results) => {
            //     response.send(JSON.stringify(results))
            //   })
            //   .catch((err) => {
            //     console.error(err);
            //   });
            resolve(answer);
          }
        })
    })
    // result.then(data => data.text()).then(data => console.log(data))
  }
  catch (error) {
    console.log(error)
  }
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});