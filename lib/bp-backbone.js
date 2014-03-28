// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error   = cli.red.bold,
    warn    = cli.yellow,
    info    = cli.grey,
    notice  = cli.cyan,
    success = cli.green;


// // Welcome Message
// sh.echo(notice('→ Initializing...'));

// // Create
// sh.echo(info('→ Creating Structure'));
// sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md']);
// sh.mv('./lib/templates/backbone/*', './');
// sh.rm('-rf', ['./lib']);

// // Setup
// sh.echo(info('→ Setting up project'));
// // open sublime text
// // npm install
// // bower install
// // grunt

// sh.echo(success('✔ All Done!'));

sh.echo(error('→ I\'m still in progress. Sorry.'));

// # Run a build and test the now optimized assets.
// grunt default server:release

// To run Karma as a daemon:
// grunt karma:daemon

// To run Karma tests once and output the results:
// grunt karma:run