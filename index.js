const express = require("express");
const app = express();

function findEven(obj) {
  let even = [];
  obj.data.forEach((item) => {
    if (typeof item == "string") {
      if (parseInt(item) % 2 == 0 && !/[a-zA-Z]/.test(item)) {
        even.push(item);
      }
    } else if (typeof item == "number") {
      if (item % 2 == 0 && !/[a-zA-Z]/.test(item)) {
        even.push(item);
      }
    }
  });
  return even;
}

function findOdd(obj) {
  let odd = [];
  obj.data.forEach((item) => {
    if (typeof item == "string") {
      if (parseInt(item) % 2 != 0 && !/[a-zA-Z]/.test(item)) {
        odd.push(item);
      }
    } else if (typeof item == "number" && !/[a-zA-Z]/.test(item)) {
      if (item % 2 != 0) {
        odd.push(item);
      }
    }
  });
  return odd;
}

function findAlphabet(obj) {
  let alpha = [];
  obj.data.forEach((item) => {
    if (/[a-zA-Z]/.test(item)) {
      alpha.push(item.toUpperCase());
    }
  });
  return alpha;
}

app.post("/bfhl", async (req, res) => {
  try {
    obj = req.body;
    let even = findEven(obj);
    let odd = findOdd(obj);
    let alpha = findAlphabet(obj);
    let body = {
      is_success: true,
      user_id: "Sarakshi_Kaur_20032003",
      email: "sarakshi1275.be21@chitkara.edu.in",
      roll_number: "2110991275",
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alpha,
    };
    res.send.json(body);
  } catch {
    res.send({
      is_success: false,
      user_id: "Sarakshi_Kaur_20032003",
      email: "sarakshi1275.be21@chitkara.edu.in",
      roll_number: "2110991275",
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
