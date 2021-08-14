const mysql = require('mysql');
const fs = require('fs')

const connection = mysql.createConnection({
    host: '153.92.7.151',
    user: 'u450268518_cerulean_piden',
    password: 'ePJMI5#n',
    database: 'u450268518_cerulean_piden'
});

let networksql = "SELECT * FROM `pident_participants_database` WHERE presentertype='network'";
connection.query(networksql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  let exportName = "network";
  fs.unlink(`./src/data/${exportName}.js`, function (err) {
	if (err) throw err;
	// if no error, file has been deleted successfully
	console.log('Old file deleted. Creating new file....');
});
  let tempArr = [];
  results.forEach(presenter => {
      tempArr.push({
          name: presenter.presentername,
          displayName: presenter.displayname,
          initials: presenter.presenterinitials,
          one: JSON.parse(presenter.one.toLowerCase()),
          six: JSON.parse(presenter.six.toLowerCase()),
          ten: JSON.parse(presenter.ten.toLowerCase()),
          generic: JSON.parse(presenter.generic.toLowerCase()),
        })
  });
  console.log(tempArr);
  fs.writeFileSync(`./src/data/${exportName}.js`, `const ${exportName}Data = ${JSON.stringify(tempArr)}; export default ${exportName}Data;`)
});

let regionalsql = "SELECT * FROM `pident_participants_database` WHERE presentertype='regional'";
connection.query(regionalsql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  let tempArr = [];
  let exportName = "local";
  fs.unlink(`./src/data/${exportName}.js`, function (err) {
	if (err) throw err;
	// if no error, file has been deleted successfully
	console.log('Old file deleted. Creating new file....');
});
  results.forEach(presenter => {
      tempArr.push({
          name: presenter.presentername,
          displayName: presenter.displayname,
          initials: presenter.presenterinitials,
          one: JSON.parse(presenter.one.toLowerCase()),
          six: JSON.parse(presenter.six.toLowerCase()),
          ten: JSON.parse(presenter.ten.toLowerCase()),
          generic: JSON.parse(presenter.generic.toLowerCase()),
        })
  });
  console.log(tempArr);
  fs.writeFileSync(`./src/data/${exportName}.js`, `const ${exportName}Data = ${JSON.stringify(tempArr)}; export default ${exportName}Data;`)
});

connection.end();




