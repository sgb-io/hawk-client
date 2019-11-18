#!/bin/bash

cat '{"uploadToken":"fake-upload-token"}' > hawk.json

node bin/hawk.js