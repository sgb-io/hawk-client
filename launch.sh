#!/bin/bash

touch hawk.json
echo '{"uploadToken":"fake-upload-token"}' > hawk.json

node bin/hawk.js