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

![example](../documentation/screenshot2014.jpg)

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

![ESP8266](../documentation/2020_esp8266.jpg)

Of course the hardware is weaker, only 160 MHz (usually running on 80 MHz) with 80 kByte RAM and 1MByte flash. And the same 11n WiFi capabilities. It is still an overkill for this task, an Arduino Uno with 16 Mhz and 2 kByte of RAM could do it.

And for comparison: A Raspberry Pi Zero W from 2017 for 17.31 € (450.000 VND) has 1 GHz with 512 MByte of RAM - and WiFi and Bluetooth as well. Doable for 18.16 € then.

Another option: [Tanix TX3 Mini](https://www.lazada.vn/products/android-tivi-box-tx3-mini-ram-2gb-bo-nho-trong-16gb-bluetooth-android-9-bao-hanh-2-nam-i158019657-s169374849.html?spm=a2o4n.searchlist.list.13.6b6953f1NcMgKi&search=1) for 18.43 € (479.000 VND) with 2 GByte RAM, 16 GByte flash, 1.2 GHz Quadcore S905W Cortex-A53 and two USB ports, WiFi and enclosure and PSU included. Running with Ubuntu 16.04 LTS for more that a year for me (since 2018). Below 20 € and a complete overkill.
