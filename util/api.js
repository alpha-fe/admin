import axios from 'axios';


var util = {};


util.api = function(opts) {
    axios({
        method: opts.method,
        url: opts.url,
        data: opts.data
    })
    .then(opts.success)
    .catch(opts.error);
};


util.EMPTY_FN = function(){};


module.exports = util;
