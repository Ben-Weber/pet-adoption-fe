const express = require("express");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");

let users = { aa01: { name: "John", lastname: "doe" } };

// Parsings jsons for me
app.use{express.json()}; 

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/uesrs", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const { name, lastName, phoneNumber } = req.body;
  // validation
  if (name.length < 5) {
    res.status(400).send("user should have at leaste 5 characters");
    return;
  }
  const id = uuidv4();
  const userData = { name: name, lastname: lastName, phoneNumber: phoneNumber };
  try {
    users[id] = userData;
  } catch (e) {
    res.send({ err: e, msg: "something went wrong" });
  }
  res.send({ id: id, user: users[id] });
});


app.put('/user/:userid/phone', (req, res) => {
  const {userid} = req.params;
  const {newPhoneNumber} = req.body;
  // validate the phone number --> make a function
  if( typeof newPhoneNumber !== 'number') {
    res.status(400).send('phone number should be a number')
    return;
  }
  // validate the user id
  if ((!userid in users)) {
    res.status(400).send('user does not exist')
    return;
  }
  //update the user
  users[userid].phoneNumber = newPhoneNumber
  res.send(user[userid])
} )

app.get("/uesrs/:userid/pet/:petid/", (req, res) => {
  const { userid, petid } = req.qarams;
  if (userid in users) {
    res.send(users[userid]);
    return;
  }
  res.send("the id was not found");
  
  res.send(users);
});

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
