#!/usr/bin/expect

spawn ./launch.sh

expect "Please ensure you have a hawk.json file in your project root. It must contain your uploadToken."

expect eof

# expect "Please enter your email (must match the one used to sign up with Hawk):\n"
# send "travis@codehawk.app"

# expect "Please enter your account auth token:\n"
# send "travis-fake-auth-token"

# expect "Unable to find git data, please re-run in a git repository."