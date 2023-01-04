# This example is created with Create react app cli

To run locally

```sh
npm i
```

Change the values of `CLIENT_ID`, `FLOW_ID`, `KEY` and `VALUE` on lines 5 - 7.

- `CLIENT_ID`: The client id of your metamap account, get in [https://dashboard.getmati.com/dev](https://dashboard.getmati.com/dev);
- `FLOW_ID`: The flow id of your metamap, get in [https://dashboard.getmati.com/dev](https://dashboard.getmati.com/dev);
- `KEY`: A string value as a key;
- `VALUE`: A string value as a VALUE;

```javascript
const [clientid] = useState('CLIENT_ID');
const [flowid]   = useState('FLOW_ID');
const [metadata] = useState('{"KEY": "VALUE"}');
```

Start the application

```sh
npm run start
```