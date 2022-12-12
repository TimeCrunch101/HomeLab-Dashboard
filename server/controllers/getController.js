const {pool} = require('../configs/DB')

exports.main = (req, res) => {
    res.send('hello world')
}

exports.getServices = (req, res) => {
    pool.query('SELECT service_id, title, service_icon FROM dbo_services', (err, data) => {
        if (err) throw err;
        res.json({
            status: "success",
            services: data
        })
    })
}

exports.getService = (req, res) => {
    const serviceID = req.params.service_id
    pool.query("SELECT * FROM dbo_services WHERE service_id = ?", [serviceID], (err, data) => {
        if (err) throw err;
        pool.query("SELECT * FROM dbo_hardware WHERE related_service = ?", [serviceID], (err, hardware) => {
            if (err) throw err;
            pool.query("SELECT * FROM dbo_creds WHERE related_service = ?", [serviceID], (err, creds) => {
                if (err) throw err;
                res.json({
                    status: 'success',
                    service_data: data[0],
                    hardwareData: hardware,
                    creds: creds
                })
            })
        })
    })
}

exports.getAssetList = (req, res) => {
    pool.query("SELECT * FROM dbo_hardware", (err, data) => {
        if (err) throw err;
        res.json({
            status: 'success',
            assets: data
        })
    })
}

exports.copyPassword = (req, res) => {
    pool.query("SELECT password FROM dbo_creds WHERE cred_id = ?", [req.params.cred_id], (err, pass) => {
        if (err) throw err;
        res.json({
            status: "success",
            password: pass[0]
        })
    })
}