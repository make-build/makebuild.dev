/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/newline-after-import: 0 */

require('dotenv').config();

const { router, get } = require('microrouter'); // routing
const config = ['/api/schedule'];

// Load the routes from now.json into microrouter `get` routes
const routes = config.map(r => get(r, require(`.${r}.js`)));

module.exports = router(...routes);
