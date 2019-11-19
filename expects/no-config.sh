#!/usr/bin/expect

spawn ./launch.sh

expect "Please ensure you have a hawk.json file in your project root. It must contain your uploadToken."

expect eof
