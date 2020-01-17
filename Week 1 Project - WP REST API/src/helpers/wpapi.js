const WPAPI = require( 'wpapi' );

let siteAddress = 'https://jsforwp.local/wp-json'

let wpapi = new WPAPI({endpoint: siteAddress})

export default wpapi