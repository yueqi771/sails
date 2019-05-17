module.exports = {
    login: async function(req, res) {
        console.log(req.allParams());
        if(!req.allParams().name) {
            res.send({
                code:0,
                message: '请填写用户名'
            });
            return;
        }
        const userData = await User.findOne({
            name: req.allParams().name,
        });

        res.send({
            code:1,
            data: userData,
            message: 'success'
        });
    },
    updateInfo: async function(req, res) {
        const userId = req.allParams().id;
        const name = req.allParams().name;

        if(!(userId && name)) {
            res.send({
                code:0,
                message: '请填写用户名或id'
            });
            return;
        }

        await User.update({
            id: userId
        }).set({
            name: name
        }).then(response => {
            res.send({
                code: 1,
                message: '修改成功'
            });
        });
    },

    create: async function(req, res) {
        const { name, mobile, password, timezone, wechat, description } = req.allParams();

        if(!name || !mobile || !password || !timezone || !wechat || !description) {
            res.send({
                code:0,
                message: '缺少信息'
            });
            return;
        }

        await User.create({
            name,
            mobile,
            password,
            timezone,
            wechat,
            description
        });

        res.send({
            code: 1,
            message: '修改成功'
        });
    }
};
