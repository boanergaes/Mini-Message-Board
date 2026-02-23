const df = require('date-fns')

function formatDate(date) {
    return df.format(date, 'MMM do yyyy h:ma')
}

module.exports = {formatDate}