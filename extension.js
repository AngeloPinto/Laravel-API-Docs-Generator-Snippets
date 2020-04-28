// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension Laravel API Snippets is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('laravel-api-snippets.adjust_block', function () {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage("Editor does not exist");
			return;
		}

		const text = editor.document.getText(editor.selection);

		editor.edit(edit => {

			var a = text.split('\n');
			var newText = '';
			a.forEach(element => {
				newText += (`\t * ${element}\n`);
			});

			edit.replace(editor.selection, newText);
			vscode.window.showInformationMessage('Laravel API Docs - Block ajusted');

		});

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	vscode.window.showInformationMessage('Laravel API - See ya');
}

module.exports = {
	activate,
	deactivate
}
