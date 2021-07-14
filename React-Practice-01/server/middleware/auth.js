const { User } = require("../models/User")

// 인증 프로세스
let auth = (req, res, next) => {
    // 클라이언트 쿠키에서 토큰 가져온다.
    let token = req.cookies.x_auth;

    // 토큰 복호화 & 사용자 조회
    User.findByToken(token, (err, user) => {
        if (err) {
            return err;
        }
        if (!user) {
            return res.json({ isAuth: false, erorr: true })
        }

        req.token = token
        req.user = user
        next()
    })

}

module.exports = { auth }