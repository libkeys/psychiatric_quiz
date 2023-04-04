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
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7610462',
  database: 'sql7610462',
  password: 'W83pDjZ54F'
});

connection.connect(function (err) {
  if (err) {
    return console.log(`There is an error ${err.message}`);
  }
  else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
})

app.use(cors({ origin: 'http://localhost:5173' }));
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
    // console.log(requestData)
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
              console.log(answer.result)
              resolve(answer);
            }
          })
      }).then(data => {
        try {
          let resultRequest = new Promise(function (resolve, reject) {
            connection.query(`select * from classes where id = ${requestData.studentClass};`,
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
          resultRequest.catch(err => {
            console.log(err)
          })
          return resultRequest;
        }
        catch (error) {
          console.log(error)
        }
      }).then(data => {
        let dataClass = data.result[0]
        console.log(dataClass)
        try {
          let resultRequest = new Promise(function (resolve, reject) {
            connection.query(`update students set classLetter = '${dataClass.classLetter}', classNumber = ${dataClass.classNumber} where
            studentClass = ${dataClass.id}`,
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
          resultRequest.catch(err => {
            console.log(err)
          })
          return resultRequest;
        }
        catch (error) {
          console.log(error)
        }
      }).then(result => {
        console.log(result)
      })
    }
    catch (error) {
      console.log(error)
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
    requestSQL.string += ` where studentSurname like '%${requestData.studentSurname}%' `
  }
  if (requestData.studentLastname !== '') {
    requestSQL.lastname = true;
    requestSQL.string += `${requestSQL.surname ? 'and' : 'where'} studentLastname like '%${requestData.studentLastname}%' `
  }
  if (requestData.studentClass !== 'Выберете класс') {
    requestSQL.class = true;
    requestSQL.string += `${requestSQL.surname || requestSQL.lastname ? 'and' : 'where'} studentClass like '${requestData.studentClass}' `
  }
  if (requestSQL.name) {
    requestSQL.string += `${requestSQL.surname || requestSQL.lastname || requestSQL.class ? 'and' : 'where'} studentName like '%${requestData.studentName}%' `
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
  // console.log(requestSQL)
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
  }
  catch (error) {
    console.log(error)
  }
})

app.post('/delete_student', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`delete from students where id=${requestData.id};`,
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
  }
  catch (err) {
    console.log(err)
  }
})

app.get('/all_students', function (request, response) {
  let requestData = request.body;
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(`select * from students`,
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

            let resultClasses = new Promise(function (resolve, reject) {
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
            resultClasses.then(data => {
              response.end(JSON.stringify(answer.result))
            }).catch(error => {
              console.log(error)
            })
            resolve(answer);
          }
        }
      )
    })

  }
  catch (err) {
    console.log(err)
  }
})

// let studentId = 1
// app.post('/save_id_student', function (request, response) {
//   studentId = request.body.id
//   console.log(studentId)
//   response.end(JSON.stringify(studentId))
// })

app.post('/get_student_by_id', function (request, response) {
  let studentId = request.body.studentId
  console.log(request.body)
  let requestSQL = `select * from students where id = ${studentId}`
  try {
    let result = new Promise(function (resolve, reject) {
      connection.query(requestSQL,
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
            console.log(answer.result)
            response.end(JSON.stringify(answer.result))
            resolve(answer);
          }
        })
    })
  }

  catch (error) {
    console.log(error)
  }
})

// Route to handle the incoming request
app.post("/update_student", (req, res) => {
  // Get the data from the request body
  const { studentName, studentSurname, studentLastname, studentBirthDate, studentClassNumber, studentClassLetter } = req.body;

  // Construct the SQL query to update the student's record in the database
  function updateStudent() {
    let resultGettingClass = new Promise(function (resolve, reject) {
      connection.query(`select id from classes where classLetter = '${studentClassLetter}' and classNumber = ${studentClassNumber}`, function (err, results, fields) {
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
          resolve(answer);
        }
      })
    })
    resultGettingClass.then(data => {
      let idClass = data.result[0].id
      const query = `UPDATE students SET studentClass = ${idClass}, studentName = '${studentName}', studentSurname = '${studentSurname}', studentLastname = '${studentLastname}', studentBirthDate = '${studentBirthDate}', classNumber = ${studentClassNumber}, classLetter = '${studentClassLetter}' WHERE id = ${studentId}`;
      console.log(query)
      // let queryUpdate = new Promise((resolve, reject) => {
      // Execute the SQL query
      connection.query(query, (error, results) => {
        if (error) {
          // Handle the error
          console.error(error);
          res.status(500).send("Error updating student record");
        } else {
          // console.log(results)
          // Send a success response
          res.send("Student record updated successfully");
        }
      });
    })
  }
  // })

  // queryUpdate.then(() => console.log('before'))
  const queryCheckClassId = `SELECT id FROM classes WHERE classNumber = ${studentClassNumber} AND classLetter = '${studentClassLetter}'`;
  connection.query(queryCheckClassId, (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      if (results.length === 0) {
        let result = new Promise(function (resolve, reject) {
          connection.query(`INSERT INTO classes(classNumber, classLetter) VALUES (${studentClassNumber}, '${studentClassLetter}');`, function (err, results, fields) {
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
        result.then(data => {
          console.log(data)
        })
        updateStudent()
      }
      else {
        updateStudent()
      }
    }
  })

});

app.post('/choose_date', (request, response) => {
  let requestData = request.body
  console.log(requestData)
  let result = new Promise((resolve, reject) => {
    connection.query(`select * from polls where date =${requestData.date}`, function (err, results, fields) {
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
  }).catch(err => console.log(err))

  result.then(data => {
    console.log(data)
    if (data.result = []) {
      makeDateCreateRequest().then(data => {
        console.log(data)
        response.end(JSON.stringify(data))
      }).catch(err => console.log(err))
    }
    else {
      response.end(data)
    }
  })

  function makeDateCreateRequest() {
    return new Promise((resolve, reject) => {
      connection.query(`insert into polls(idStudent, date) values(${requestData.studentId}, '${requestData.date}');`, function (err, results, fields) {
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
    }).catch(err => console.log(err))
  }
})

app.post('/get_questions_id', (request, response) => {
  let requestData = request.body
  console.log(requestData)
})

app.post('/save_radio', (request, response) => {
  let requestData = request.body
  console.log(requestData)
  let result = new Promise((resolve, reject) => {
    connection.query(`INSERT INTO classes(classNumber, classLetter) VALUES (${studentClassNumber}, '${studentClassLetter}');`, function (err, results, fields) {

    })
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

