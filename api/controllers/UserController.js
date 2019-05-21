module.exports = {
    login: async function(req, res) {
        if(!req.allParams().name) {
            res.send({
                code:0,
                message: '请填写用户名'
            });
            return;
        }

        // 测试helper;
        const name = await sails.helpers.formatWelcomeMessage.with({name: '越祈'});
        sails.log.info(name);

        const userData = await User.findOne({
            name: req.allParams().name,
        });

        // 测试session
        // req.session.uid = userData.id;
        // req.session.save();

        sails.log.info('session', req.cookie);

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
