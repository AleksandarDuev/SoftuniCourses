const fs = require('fs');

const layout = fs.readFileSync('./static/layout.html').toString();

function loadFragment(name, callback) {
fs.readFile(`./static/${name}.html`,(err, data) => callback(data.toString()));
}

function render(body,title = 'Server Demo'){
return layout
.replace('{{{body}}}', body)
.replace('{{{title}}}', title);
};

module.exports = {
    loadFragment,
    render
};