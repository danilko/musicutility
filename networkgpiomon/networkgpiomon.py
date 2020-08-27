#!/usr/bin/python
# Apache-2.0 License
# https://github.com/danilko/musicutility

# Reference: https://fedoraproject.org/wiki/Architectures/ARM/gpio

import gpiod
import time
import sys
import os

if __name__ == '__main__':
    def get_event():
        global currentValue
        event_lines = lines.event_wait(sec=1)
        if event_lines and len(event_lines) > 0:
            event = event_lines[0].event_read()
            if event.type == gpiod.LineEvent.FALLING_EDGE:
                function = "on"
                if currentValue == 0:
                    currentValue = 1
                else:
                    currentValue = 0
                    function = "off"
                os.system("sudo nmcli networking {}".format(function))
            elif not event.type == gpiod.LineEvent.RISING_EDGE:
                print("Invalid Event")

    def get_value():
        global currentValue
        values = lines.get_values()
        if values and len(values) > 0:
            function = "on"
            if values[0] == 0:
                currentValue = values[0]
            elif values[0] == 1:
                currentValue = values[0]
                function = "on"
            else:
                print("Invalid Value")

            os.system("sudo nmcli networking {}".format(function))
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
        currentValue = 1

        lines = chip.get_lines([int(offset)])

        lines.request(consumer=consumer, type=gpiod.LINE_REQ_EV_BOTH_EDGES)

        try:
            get_value()
            while True:
                get_event()
        except KeyboardInterrupt:
            sys.exit(0)

