export SESSION_SECRET=FakeSessionSecret
export IP_ADDRESS=0.0.0.0
export EXPRESS_PORT=8997
export DATA_API_URL=http://localhost:8998

npm i
forever start node_modules/@angular/cli/bin/ng serve --proxy-config proxy.config.json --host 0.0.0.0 --public schulzetenberg.com
forever start ./nodejs/server.js
