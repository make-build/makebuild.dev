const { send } = require('micro');
const cors = require('micro-cors')();
const { readTable } = require('./lib/airtable');

const handler = async (req, res) => {
    const items = await readTable('Schedule', [
        'Activity',
        'Date & Time',
        'End Time',
        'Type',
        'Location',
    ]);
    send(
        res,
        200,
        items.sort(
            (a, b) =>
                new Date(a['Date & Time']).getTime() -
                new Date(b['Date & Time']).getTime(),
        ),
    );
};

module.exports = cors(handler);
