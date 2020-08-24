#!/usr/bin/env python3
# Apache-2.0 License
# https://github.com/danilko/musicutility

import gpiod
import time
import sys
import os

if __name__ == '__main__':
    def get_event():
        event_lines = lines.event_wait(sec=1)
        if event_lines and len(event_lines) > 0:
            event = event_lines[0].event_read()
            if event.type == gpiod.LineEvent.RISING_EDGE:
                print("DEAMON NETWORKING ON")
                os.system('sudo nmcli networking on')
            elif event.type == gpiod.LineEvent.FALLING_EDGE:
                print("DEAMON NETWORKING OFF")
                os.system('sudo nmcli networking off')
            else:
                raise TypeError("Invalid Event")

    def get_value():
        values = lines.get_values()
        if values and len(values) > 0:
            if values[0] == 0:
                print("INITIAL NETWORKING OFF")
                os.system('sudo nmcli networking off')
            elif values[0] == 1:
                print("INITIAL NETWORKING ON")
                os.system('sudo nmcli networking on')
            else:
                raise TypeError("Invalid Value")


    if len(sys.argv) < 3:
        raise TypeError("Incorrect parameter\nUsage wifigpiomon.py <chip> <offset>")
    
    consumer=sys.argv[0]
    chip=sys.argv[1]
    offset=sys.argv[2]

    if not chip.isnumeric():
        raise TypeError("Chip must be a number\nUsage wifigpiomon.py <chip> <offset>")
    
    if not offset.isnumeric():
        raise TypeError("Offset must be a number\nUsage wifigpiomon.py <chip> <offset>")

    with gpiod.Chip(chip) as chip:
        lines = chip.get_lines([int(offset)])

        lines.request(consumer=consumer, type=gpiod.LINE_REQ_EV_BOTH_EDGES)

        try:
            get_value()

            while True:
                get_event()
        except KeyboardInterrupt:
            sys.exit(0)
