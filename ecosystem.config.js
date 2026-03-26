module.exports = {

    apps: [
        {
            name: "asn_website",
            script: "npm",
            args: "start",

            env: {
                NODE_ENV: "production",
                PORT: 3000
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "300M",

            min_uptime: "10s",
            max_restarts: 5,

            restart_delay: 4000
        }
    ]
}