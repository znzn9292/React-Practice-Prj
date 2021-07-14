const express = require('express')
const app = express()
const port = 5000
const { User } = require("./models/User")
const cookieParser = require('cookie-parser')
const config = require('./config/key')
const { auth } = require("./middleware/auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요!')
})

app.get('/api/hello', (req, res) => {
  res.send("Hello React ~")
})

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) {
      return res.json({ success: false, err })
    }

    return res.status(200).json({
      success: true
    })
  })
})

app.post('/api/users/login', (req, res) => {
  // 요청 이메일 유무 확인
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }

    // 비밀번호 일치 여부
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      }

      // 토큰 생성
      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err)
        }

        // 클라이언트에 토큰 저장(쿠키 또는 로컬스토리지)
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})

// 사용자 인증
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

// 사용자 로그아웃
app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) {
      return res.json({ success: false, err })
    }
    return res.status(200).send({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})