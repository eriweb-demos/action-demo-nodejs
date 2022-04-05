const core = require('@actions/core')

try {
    core.info('this is a nodejs based action')
} catch(error) {
    core.setFailed(error.message)
}