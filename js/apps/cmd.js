var _0x4f7a=["\x76\x61\x6E\x73\x68\x66\x72"];(function(_0x1,_0x2){})(_0x4f7a);const CmdApp={open(){const id=wm.createWindow({title:'Command Prompt',icon:'cmd',width:680,height:420,app:'cmd',darkTitlebar:true,content:this.getHTML()});this.init(id);return id;},getHTML(){return`<div class="cmd-app"><div class="cmd-content"id="cmd-output">Microsoft Windows[Version 10.0.19045.3803]
(c)Microsoft Corporation.All rights reserved.</div><div class="cmd-line"><span class="cmd-prompt">C:\\Users\\User&gt;</span><input type="text"class="cmd-input"id="cmd-input"autofocus></div></div>`;},init(windowId){const windowEl=document.getElementById(windowId);if(!windowEl)return;const output=windowEl.querySelector('#cmd-output');const input=windowEl.querySelector('#cmd-input');const prompt=windowEl.querySelector('.cmd-prompt');let currentDir='C:\\Users\\User';let commandHistory=[];let historyIndex=-1;const commands={help:()=>{return`For more information on a specific command,type HELP command-name
CLS Clears the screen.COLOR Sets the console foreground and background colors.DATE Displays or sets the date.DIR Displays a list of files and subdirectories in a directory.ECHO Displays messages,or turns command echoing on or off.EXIT Quits the CMD.EXE program.HELP Provides Help information for Windows commands.HOSTNAME Prints the name of the current host.IPCONFIG Displays IP configuration.MKDIR Creates a directory.PING Sends ICMP ECHO_REQUEST to network hosts.SYSTEMINFO Displays system information.TASKLIST Displays all currently running tasks.TIME Displays or sets the system time.TITLE Sets the window title for a CMD.EXE session.VER Displays the Windows version.WHOAMI Displays user information.`;},ver:()=>'Microsoft Windows [Version 10.0.19045.3803]',cls:()=>{output.textContent='';return'';},date:()=>{const d=new Date();return`The current date is:${d.toLocaleDateString('en-US',{weekday:'short'})}${d.toLocaleDateString()}`;},time:()=>{const d=new Date();return`The current time is:${d.toLocaleTimeString()}`;},whoami:()=>'desktop-win10web\\user',hostname:()=>'DESKTOP-WIN10WEB',echo:(args)=>args.join(' '),dir:()=>{return`Volume in drive C has no label.Volume Serial Number is A1B2-C3D4
Directory of ${currentDir}
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>.${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>..${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Desktop
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Documents
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Downloads
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Music
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Pictures
${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}<DIR>Videos
0 File(s)0 bytes
8 Dir(s)256,789,012,480 bytes free`;},ipconfig:()=>{return`Windows IP Configuration
Ethernet adapter Ethernet:Connection-specific DNS Suffix.:local
IPv4 Address...........:192.168.1.100
Subnet Mask...........:255.255.255.0
Default Gateway.........:192.168.1.1
Wireless LAN adapter Wi-Fi:Connection-specific DNS Suffix.:local
IPv4 Address...........:192.168.1.105
Subnet Mask...........:255.255.255.0
Default Gateway.........:192.168.1.1`;},systeminfo:()=>{return`Host Name:DESKTOP-WIN10WEB
OS Name:Microsoft Windows 10 Pro
OS Version:10.0.19045 N/A Build 19045
System Manufacturer:Web Browser
System Model:Virtual Machine
System Type:x64-based PC
Processor(s):1 Processor(s)Installed.[01]:Web Browser Virtual Core@3.60GHz
Total Physical Memory:16,384 MB
Available Physical Memory:10,240 MB
Page File Space:18,432 MB`;},tasklist:()=>{return`Image Name PID Session Name Mem Usage=============================================================System Idle Process 0 Services 8 K
System 4 Services 148 K
smss.exe 312 Services 1,024 K
csrss.exe 432 Services 4,960 K
wininit.exe 500 Services 5,348 K
services.exe 568 Services 9,412 K
lsass.exe 576 Services 13,820 K
svchost.exe 676 Services 16,288 K
explorer.exe 1234 Console 85,640 K
chrome.exe 2345 Console 142,560 K
cmd.exe 3456 Console 4,120 K`;},ping:(args)=>{const host=args[0]||'localhost';return`Pinging ${host}with 32 bytes of data:Reply from 127.0.0.1:bytes=32 time<1ms TTL=128
Reply from 127.0.0.1:bytes=32 time<1ms TTL=128
Reply from 127.0.0.1:bytes=32 time<1ms TTL=128
Reply from 127.0.0.1:bytes=32 time<1ms TTL=128
Ping statistics for ${host}:Packets:Sent=4,Received=4,Lost=0(0%loss),Approximate round trip times in milli-seconds:Minimum=0ms,Maximum=0ms,Average=0ms`;},color:(args)=>{const colors={'0':'#0c0c0c','1':'#0037da','2':'#13a10e','3':'#3a96dd','4':'#c50f1f','5':'#881798','6':'#c19c00','7':'#cccccc','8':'#767676','9':'#3b78ff','a':'#16c60c','b':'#61d6d6','c':'#e74856','d':'#b4009e','e':'#f9f1a5','f':'#f2f2f2'};if(args[0]&&args[0].length===2){const bgChar=args[0][0].toLowerCase();const fgChar=args[0][1].toLowerCase();if(colors[bgChar]){windowEl.querySelector('.cmd-app').style.background=colors[bgChar];}
if(colors[fgChar]){windowEl.querySelector('.cmd-app').style.color=colors[fgChar];output.style.color=colors[fgChar];input.style.color=colors[fgChar];prompt.style.color=colors[fgChar];}}
return'';},title:(args)=>{wm.updateTitle(windowId,args.join(' '));return'';},exit:()=>{wm.closeWindow(windowId);return'';},mkdir:(args)=>args[0]?'':'The syntax of the command is incorrect.',calc:()=>{CalculatorApp.open();return'';},notepad:()=>{NotepadApp.open();return'';},explorer:()=>{FileExplorerApp.open();return'';},};const processCommand=(cmd)=>{const trimmed=cmd.trim();if(!trimmed)return;commandHistory.push(trimmed);historyIndex=commandHistory.length;const parts=trimmed.split(/\s+/);const command=parts[0].toLowerCase();const args=parts.slice(1);output.textContent+=`${currentDir}>${trimmed}\n`;if(commands[command]){const result=commands[command](args);if(result){output.textContent+=result+'\n';}}else{output.textContent+=`'${parts[0]}'is not recognized as an internal or external command,\noperable program or batch file.\n`;}
output.textContent+='\n';output.scrollTop=output.scrollHeight;};input.addEventListener('keydown',(e)=>{if(e.key==='Enter'){processCommand(input.value);input.value='';}else if(e.key==='ArrowUp'){e.preventDefault();if(historyIndex>0){historyIndex--;input.value=commandHistory[historyIndex];}}else if(e.key==='ArrowDown'){e.preventDefault();if(historyIndex<commandHistory.length-1){historyIndex++;input.value=commandHistory[historyIndex];}else{historyIndex=commandHistory.length;input.value='';}}});windowEl.querySelector('.cmd-app').addEventListener('click',()=>{input.focus();});setTimeout(()=>input.focus(),100);}};