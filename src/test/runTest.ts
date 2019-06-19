import * as path from 'path';

import { runTests } from 'vscode-test';


async function main() {
	console.log("Inside user runTest.ts");
	console.log(process.env.PATH);

	const extensionPath = path.resolve(__dirname, '../../');
	const testRunnerPath = path.resolve(__dirname, '.');

	await runTests({ extensionPath, testRunnerPath });
}

main();
