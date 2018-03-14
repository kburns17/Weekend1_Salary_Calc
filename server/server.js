
let express = require('express');

let app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.listen(5000, () => {
    console.log('all is running on port 5000');
});