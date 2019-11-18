#!/bin/bash

touch hawk.json
cat '{"uploadToken":"fake-upload-token"}' > hawk.json

node bin/hawk.js