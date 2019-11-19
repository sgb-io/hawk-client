#!/usr/bin/expect

spawn ./launch.sh

expect "Please enter your email (must match the one used to sign up with Hawk):\n"
send "travis@codehawk.app"

expect "Please enter your account auth token:\n"
send "travis-fake-auth-token"

expect "Coverage not found, please generate it using instanbul/nyc.
        We expect the json-summary format (coverage/coverage-summary.json).
        If you don't have any tests, you can still continue."

expect "Unable to find git data, please re-run in a git repository."