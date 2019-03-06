const { send } = require('micro');
const { readTable } = require('./lib/airtable');

module.exports = async (req, res) => {
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
