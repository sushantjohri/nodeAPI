const Pool = require('pg').Pool

const pool = new Pool({
    user:"ctctwumhwcbnoh",
    host:"ec2-3-219-19-205.compute-1.amazonaws.com",
    database: "d4id4od2pp8irc",
    password:"4fd61ccbb9fa745849b238559b0fdbb62b7c63ddb6ebb43a6d3e9dba6111533f",
    port: 5432
})

module.exports = Pool;