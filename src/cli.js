#!/usr/bin/env node
import yargs from 'yargs';
import { _ } from 'cute-con';
_(`planetrenox!!`);
if (yargs.argv['-f'] === true) _(yargs.argv._[0]);
