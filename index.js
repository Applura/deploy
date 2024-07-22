import * as core from '@actions/core';
import { apiDeploy } from "applura/src/lib/api.js"
import { stdin, stdout, stderr } from "node:process";

try {
    const key = core.getInput('key');
    const deployFolder = core.getInput('directory');
    const releaseNote = core.getInput('note');
    const config = {
        serverURL: 'https://api.ops.applura.app'
    }
    apiDeploy(key, deployFolder, releaseNote, { stdin, stdout, stderr }, config)
        .then(() => {
            stderr.write("Deployment complete.\n");
        });
} catch (error) {
    console.log(error)
}
