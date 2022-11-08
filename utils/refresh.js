const { sign, verify, refreshVerify } = require("./jwt");
const jwt = require("jsonwebtoken");

const refresh = async (req, res) => {
    // Access Token과 Refresh Token의 존재 유무를 체크한다.
    if (req.headers.authorization && req.headers.refresh) {
        const authToken = req.headers.authorization;
        const refreshToken = req.headers.refresh;

        console.log(req.headers.authorization);
        console.log(authToken);
        console.log(refreshToken);

        // Access Token 검증 -> expired 여야 한다.
        const authResult = verify(authToken);

        // Access Token 디코딩하여 user의 정보를 가져온다.
        const decoded = jwt.decode(authToken);

        console.log(decoded);

        // 디코딩 결과가 없으면 권한이 없음을 응답한다.
        if (decoded === null) {
            res.status(401).send({
                ok: false,
                message: "No authorized!",
            });
        }

        // Access Token의 decoding 된 값에서
        // 유저의 id를 가져와 Refresh Token을 검증한다.
        const refreshResult = refreshVerify(refreshToken, decoded.id);

        // 재발급을 위해서는 Access Token이 만료되어 있어야 한다.
        console.log(authResult.ok);
        console.log(authResult.message);
        if (authResult.ok === false && authResult.message === "jwt expired") {
            if (refreshResult.ok === false) {
                // 1. Access Token이 만료되고, Refresh Token도 만료 된 경우 => 새로 로그인
                res.status(401).send({
                    ok: false,
                    message: "No authorized!",
                });
            } else {
                // 2. Access Token은 만료되고, Refresh Token은 만료되지 않은 경우 => 새로운 Access Token 발급
                const newAccessToken = sign({id: decoded.id});

                // 새로 발급한 Access Token과 Refresh Token 모두 클라이언트에게 반환한다.
                res.status(200).send({
                    ok: true,
                    data: {
                        accessToken: newAccessToken,
                        refreshToken,
                    }
                });
            }
        } else { // 3. Access Token이 만료되어있지 않은 경우 => refresh할 필요가 없다.
            res.status(400).send({
                ok: false,
                message: "Access Token is not expired!",
            });
        }
    } else { // Access Token 또는 Refresh Token이 헤더에 없는 경우
        res.status(400).send({
            ok: false,
            message: "Access Token and Refresh Token are need for refresh!",
        });
    }
};

module.exports = refresh;