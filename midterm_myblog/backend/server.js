const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Article = require('./model/article');
const Profile = require('./model/profile');
const Password = require('./model/password');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
mongoose.connect('mongodb+srv://Peter:r980213r@cluster1-clsel.gcp.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// GET
router.get("/getArticle", (req, res) => {
    Article.find((err, data) => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// GET ONE
router.post("/getOneArticle", (req, res) => {
  const { id } = req.body;
  Article.findOne({ id }, (err, data) => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// GET PROFILE
router.get("/getProfile", (req, res) => {
    Profile.find((err, data) => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// GET PASSWORD
router.get("/getPassword", (req, res) => {
    Password.find((err, data) => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// UPDATE
router.post("/updateArticle", (req, res) => {
  const { id, update } = req.body;
  Article.findOneAndUpdate({ id }, update, err => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// UPDATE PROFILE
router.post("/updateProfile", (req, res) => {
  const { id, update } = req.body;
  Profile.findOneAndUpdate({ id }, update, err => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// DELETE
router.delete("/deleteArticle", (req, res) => {
  const { id } = req.body;
  Article.findOneAndDelete({ id }, err => {
    if(err)
      return res.send(err);
    return res.json({ success: true });
  });
});

// POST
router.post("/postArticle", (req, res) => {
  let postData = new Article();
  const { id, title, author, time, content, img_source } = req.body;

  if(!content || !title) {
    return res.json({ success: false, error: "INVALID INPUTS" });
  }

  postData.id = id;
  postData.title = title;
  postData.author = author;
  postData.time = time;
  postData.content = content;
  postData.img_source = img_source;
  postData.save(err => {
    if(err)
      return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
