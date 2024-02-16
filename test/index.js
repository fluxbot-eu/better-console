const { ConsoleConfig, ConsoleLogger, FileLogger, Colors } = require("../dist")
const path = require("path")

let config = new ConsoleConfig()
    .setFileLogger(
        new FileLogger(
            path.join(__dirname, "./file.txt")
        )
    )

const log = new ConsoleLogger(config)

log.info("Hello World", "Hello World v2")
log.success("Hello World", "Hello World v2")
log.warn("Hello World", "Hello World v2")
log.startup("Hello World", "Hello World v2")
log.error("Hello World", "Hello World v2")
log.debug("Hello World", "Hello World v2")
log.database("Hello World", "Hello World v2")


log.custom("NoahPrm", Colors.Green, "Hello World", "Hello World v2")

log.custom("OxyToan", Colors.Red, "aaaa")