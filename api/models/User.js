module.exports = {
    // datastore: 'user',
    tableName: 'user',
    attributes: {
        name: {
            type: 'string',
            required: true,
            maxLength: 120,
            example: 'yueqi'
        },
        mobile: {
            type: 'string',
            required: true,
            example: '越祈'
        },
        password: {
            type: 'string',
            required: true,
            example: '越祈'
        },
        timezone: {
            type: 'string',
            required: true,
            example: '越祈'
        },
        wechat: {
            type: 'string',
            required: true,
            example: '越祈'
        },
        description: {
            type: 'string',
            required: true,
            example: '越祈'
        }
    }
};
