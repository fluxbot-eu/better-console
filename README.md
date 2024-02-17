# better-console
Your console is 10x better with better-console's logger and colors

## Guide
You can see the guide that explains how to use better-console on the [wiki page](https://github.com/fluxbot-eu/better-console/wiki/Guide)

## Example of use:

```javascript
const log = new ConsoleLogger(
    new ConsoleConfig()
        .setFileLogger(
            new FileLogger(
                path.join("./logs/logs.log")
            )
        )
)


log.info("hello world")
log.success("hello world")
log.warn("hello world")
log.startup("hello world")
log.error("hello world")
log.debug("hello world")
log.database("hello world")

log.custom("prefix", Colors.Green, "hello world")

log.info(`${Colors.BgBlue}Hello world in BgBlue !${Colors.BgClose}`)
log.info(`${Colors.BgMagenta}Hello world in BgMagenta !${Colors.BgClose}`)

log.info(`${Colors.Blue}Hello world in Blue !${Colors.Close}`)
log.info(`${Colors.Magenta}Hello world in Magenta !${Colors.Close}`)
```

![image](https://github.com/fluxbot-eu/better-console/assets/106913620/8451278b-4712-48ae-b8da-e24735752986)
