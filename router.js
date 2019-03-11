/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/newline-after-import: 0 */

require('dotenv').config();

const cors = require('micro-cors')();
const { router, get } = require('microrouter');
const config = ['/api/schedule', '/api/team'];

// Load the routes from now.json into microrouter `get` routes
const routes = config.map(r => get(r, require(`.${r}.js`)));

module.exports = cors(router(...routes));
