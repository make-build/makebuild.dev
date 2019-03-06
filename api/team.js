const { send } = require('micro');
const { readTable } = require('./lib/airtable');

module.exports = async (req, res) =>
    send(res, 200, await readTable('Event Staff', ['Name', 'Role']));
