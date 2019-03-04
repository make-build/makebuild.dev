const { send } = require('micro');
const { readTable } = require('./lib/airtable');

module.exports = async (req, res) =>
    send(
        res,
        200,
        await readTable('Schedule', [
            'Activity',
            'Date & Time',
            'End Time',
            'Type',
            'Location',
        ]),
    );
