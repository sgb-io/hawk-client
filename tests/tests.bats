#!/usr/bin/env bats

echo "Running tests"

@test "CHEST_DIR gets auto created" {
  run node ./bin/index.js
  echo "${lines[0]}"
}
