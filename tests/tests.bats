#!/usr/bin/env bats

@test "CHEST_DIR gets auto created" {
  run ./codehawk
  echo "${lines[0]}"
}
