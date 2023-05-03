import * as vscode from 'vscode';

let promptContent = '';

export function activate(context: vscode.ExtensionContext) {
  const addSelectionToPromptDisposable = vscode.commands.registerCommand(
    'extension.addSelectionToPrompt',
    async () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage('No active text editor found');
        return;
      }

      const selectedText = editor.document.getText(editor.selection);
      const filePath = editor.document.fileName;

      const dataToAppend = `\n\`${filePath}\`:\n\`\`\`\n${selectedText}\n\`\`\`\n`;
      promptContent += dataToAppend;

      vscode.window.showInformationMessage('Selection added to the prompt string');
    }
  );

  const copyAndClearPromptDisposable = vscode.commands.registerCommand(
    'extension.copyAndClearPrompt',
    async () => {
      if (!promptContent) {
        vscode.window.showErrorMessage('The prompt string is empty');
        return;
      }

      await vscode.env.clipboard.writeText(promptContent);
      promptContent = '';

      vscode.window.showInformationMessage('Copied & cleared the prompt string');
    }
  );

  context.subscriptions.push(addSelectionToPromptDisposable, copyAndClearPromptDisposable);
}

export function deactivate() {}
