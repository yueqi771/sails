module.exports = {
    friendlyName: "fromat welcome message",
    
    description: 'return a personailzed geeting based on the provided name',
    
    inputs: {
        name: {
            type: 'string',
            example: 'ami',
            description: '用户名',
            require: true,
        }
    },

    fn: async function(inputs, exits) {
        sails.log.debug(inputs)
        const result = `hello, ${inputs.name}`;
        return exits.success(result);
    }
}