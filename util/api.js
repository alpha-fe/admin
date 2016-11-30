import axios from 'axios';



module.exports = function api(opts) {
    axios({
        method: opts.method,
        url: opts.url,
        data: opts.data
    }).then(opts.success).catch(opts.error);
}
