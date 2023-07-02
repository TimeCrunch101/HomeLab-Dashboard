const { pool } = require('../configs/DB')

const name = () => {
    return new Promise((resolve, reject) => {
        
    })
}

exports.getServices = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM dbo_services', (err, data) => {
            try {
                if (err) throw new Error('Could no get services', {cause: err.message});
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    })
}