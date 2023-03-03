const express=require('express')
const route=require('./routes/route')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.connect("mongodb+srv://singhshreya425:shreyasingh1234@cluster0.yxxvuvg.mongodb.net/shreya526",{useNewUrlParser:true})
.then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
  const app = express();
const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  app.use(cors());
  app.use(express.json())
app.use("/",route)