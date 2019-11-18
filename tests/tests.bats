#!/usr/bin/env bats

echo "Running tests"

@test "Fresh installation is prompted for credentials" {
  run node ./bin/index.js
  echo "${lines[0]}"
}
