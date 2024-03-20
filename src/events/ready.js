module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Bot is ready!');
    },
};