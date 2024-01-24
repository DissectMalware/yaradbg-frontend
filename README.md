# Introduction
YaraDbg is a free web-based Yara debugger to help security analysts to write hunting or detection rules with less effort and more confidence. By using YaraDbg, you can perform a thorough root-cause-analysis (RCA) on why some of your Yara rules did or did not match with a specific file. It can also help you to better maintain a large set of yara rules.

YaraDbg frontend, this project, is the frontend application for YaraDbg (live on: https://yaradbg.dev). If you are interested on the backend implementation visit [YaraDbg Backend](https://github.com/DissectMalware/yaradbg-backend) project.

# Features
Here is a list of main feature that YaraDbg offers:

1. Rule evaluation details
2. Fully-fledged Yara Editor with
* Syntax Highlighting 
* Intellisense
* Rule Navigation
* Snippet
3. Matched strings panel
4. Rule Dependency Navigator
5. Option to copy/pasting a link to a yara rule
6. Capability to drag/dropping a password-protected zip file to analyze its content (pass must be "infected")
  

# Demo
Please see: https://twitter.com/DissectMalware/status/1651336730937794560

# Live Yaradbg
Visit https://yaradbg.dev

# Run locally using Docker
Check this [YaraDbg Container](https://github.com/DissectMalware/yaradbg-container) project out.


