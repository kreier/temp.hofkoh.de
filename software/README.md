# Software on the measuring station

The measurement and transmission of the data is done by an TP-Link TL-WR703N. The temperature sensor is a DS18S20 that is connected via USB with DS9490R.

## Operating system

The WR703N runs on OpenWrt r33212 from 2012-08-21. Additional software packets are installed with `opkg`. Mainly we need the "One Wire File System" __OWFS__. This can easily be done by

```
# opkg update
# opkg install owfs
```

## Scripts

There are 7 scripts to be installed on this station.
- /etc/init.d/S60cron
- /etc/init.d/example
- /usr/1wire/startowfs
- /usr/1wire/tempscript
- /usr/1wire/upload
- /usr/1wire/uploadscript
- /usr/1wire/uploadday

Additionally two files to be updated.
- /etc/config/wireless
- /etc/crontabs/root

## Website

On the website the data is stored in YYYYMMDD.log files in the /data folder. In the root folder there are these files:
- index.html
- data.js with variables uptime_now, tempe and wlan
- dynamic.js (updated 2020)
- history.html
- history.js

## Hardware

The hardware costs in 2013 were
- 22.80 € for TL-WR703N
- 18.90 € for DS9490R One-Wire USB dongle
- 11.69 € for 10 DS18S20 sensors

Combined that 53.39 € for this setup with a Atheros AR9331 400 MHz CPU, 32 MByte Ram and 4 MByte flash storage. WiFi is 11n.

For comparison: In 2019 the same task can be performed with an ESP8266 and a LM35 temperature sensor.
- 2.92 € [NodeMCU AI-Thinker](https://www.thegioiic.com/products/lua-esp8266-nodemcu-ch340-wifi-module-iot) (76000 VND)
- 0.85 € [LM35DZ/NOPB sensor from TI](https://www.thegioiic.com/products/lm35dz-nopb-cam-bien-nhiet-do) (22000 VND)

Combined that's 3.77 € or 7 percent of the price 6 years ago - 93% less!

