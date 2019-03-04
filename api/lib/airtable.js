/* eslint-disable no-param-reassign */
const EventPlanning = require('airtable').base('app8H03jdYYuJEbT8');

// Simple func for extracting our column list and mapping it to a
// JSON object.
const parseTable = (record, fields) =>
    fields.reduce((map, field) => {
        map[field] = record.get(field);
        return map;
    }, {});

const readTable = async (tableName, columns) =>
    new Promise((resolve, reject) => {
        const payload = [];
        // Read from table
        EventPlanning(tableName)
            .select()
            .eachPage(
                // For each page:
                (records, next) => {
                    records.forEach(rec => {
                        payload.push(parseTable(rec, columns));
                    });
                    next();
                },
                // On completion:
                err => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    resolve(payload);
                },
            );
    });

module.exports = { readTable };
