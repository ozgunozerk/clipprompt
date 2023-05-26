# ClipPrompt README

ClipPrompt is a Visual Studio Code extension that allows users to quickly add code selections to a prompt string and copy the content of that string to the clipboard.

### Why? What is the problem we are solving here?
For generating effective prompts, it's crucial to supply relevant context.

In large projects, it's not ideal to include the entire repository as context, as this can lead to token wastage and reaching API limits. Instead, the context should be as concise and focused as possible.

ClipPrompt enables you to assemble snippets, automatically appending the full file path for each copied snippet, to create a more compact context.

This approach enhances the quality of your prompts and helps you conserve valuable tokens in the process!

## Features

Clipprompt adds two commands to the right-click context menu in the editor:

1. **Add Selection to Prompt (Default Keybinding: `Ctrl+Shift+A` on Windows/Linux, `Cmd+Shift+A` on macOS)**: Adds the selected text to the prompt string.
2. **Copy & Clear the Prompt (Default Keybinding: `Ctrl+Shift+C` on Windows/Linux, `Cmd+Shift+C` on macOS)**: Copies the content of the prompt string to the clipboard and clears the prompt string.

![Clipprompt in action](images/clipprompt-demo.gif)

These commands also have default keybindings, which you can customize in your Keyboard Shortcuts settings (`File > Preferences > Keyboard Shortcuts` or `Ctrl+K Ctrl+S`).

> Tip: The prompt string is not persisted across sessions or extension reloads. It is stored in memory and will be lost when the extension is deactivated or reloaded.

## Requirements

There are no special requirements or dependencies for Clipprompt. Just install the extension and start using it.

## Known Issues

There are no known issues at the moment. If you encounter any problems, please open an issue on the GitHub repository.

## Release Notes

### 1.0.0

Initial release of Clipprompt.

### 1.1.0

Added default keybindings for commands, which users can customize.

---


**Enjoy!**
