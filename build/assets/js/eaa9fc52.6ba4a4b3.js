"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={},i="Setting up your TMU CS Account",l={unversionedId:"facilities/tmu-cs-setup",id:"facilities/tmu-cs-setup",title:"Setting up your TMU CS Account",description:"Written on 2021-09-03 by tactidact#4140 on Discord",source:"@site/docs/facilities/tmu-cs-setup.md",sourceDirName:"facilities",slug:"/facilities/tmu-cs-setup",permalink:"/facilities/tmu-cs-setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to the Toronto Metropolitan University CSCU Wiki",permalink:"/"},next:{title:"About DCS Servers",permalink:"/facilities/about-dcs-servers"}},s={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-your-tmu-cs-account"},"Setting up your TMU CS Account"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Written on 2021-09-03 by tactidact#4140 on Discord")),(0,a.kt)("p",null,"If you're a new student in the CS department at TMU, you'll have another account for just the CS department that is distinct from your my.torontomu/Google Workspace ",(0,a.kt)("inlineCode",{parentName:"p"},"@torontomu.ca")," email account. You'll use this account to login to lab computers in the ENG building, both in Windows and Linux, and to the ",(0,a.kt)("a",{parentName:"p",href:"https://webmail.cs.torontomu.ca/"},"CS Webmail Service"),"."),(0,a.kt)("p",null,"This post will walk you through how to login to that account and set a new password for it via SSH. SSH stands for Secure Shell and it's simply put a way to connect to a remote computer or server. I'll also cover how to forward emails from this account to your ",(0,a.kt)("inlineCode",{parentName:"p"},"@torontomu.ca")," so you don't have to check two inboxes to keep up with your emails."),(0,a.kt)("h3",null,"1. Find your CS username / my.torontomu short ID"),(0,a.kt)("p",null,"If you recieved an email from ",(0,a.kt)("inlineCode",{parentName:"p"},"request@cs.torontomu.ca"),", this should contain your CS username and a link to a Google Drive folder with insrtuctions in PDFs and a video."),(0,a.kt)("p",null,"If you did not recieve it or have yet to do so, you can find your username by logging into ",(0,a.kt)("a",{parentName:"p",href:"https://my.torontomu.ca"},"my.torontomu"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Click "Personal Account" under "Self Service"'),(0,a.kt)("li",{parentName:"ol"},'Click "Personal Information" under "General"'),(0,a.kt)("li",{parentName:"ol"},'The username under "my.torontomu Short ID" is very likely your CS username.')),(0,a.kt)("p",null,"Your CS email address will be ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>@cs.torontomu.ca"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>")," is your username."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: It's important to note that for some students that your my.torontomu username and short ID might be the same. If yours are not the same, then make sure to use your short ID as that's the username that the CS department appears to be using.")),(0,a.kt)("h3",null,"2. SSH into your CS Account"),(0,a.kt)("p",null,"So now that you have your username we can SSH/login to the account, the instructions differ slightly on Mac/Linux and Windows so follow the relevant section for your OS."),(0,a.kt)("h3",null,"Mac/Linux"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the Terminal, on macOS you can find it by searching in Spotlight (",(0,a.kt)("kbd",null,"\u2318")," ",(0,a.kt)("kbd",null,"Space"),")."),(0,a.kt)("li",{parentName:"ol"},"Type/paste in ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh <username>@moon.cs.torontomu.ca")," and hit ",(0,a.kt)("kbd",null,"Enter"),". ",(0,a.kt)("strong",{parentName:"li"},"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"strong"},"<username>")," with your CS username.")),(0,a.kt)("li",{parentName:"ol"},"Now you'll have to type in your password, the default password is in the format ",(0,a.kt)("inlineCode",{parentName:"li"},"MMDDXXXX")," where the first 4 digits are your date of birth and the last 4 digits are the last four digits of your TMU student ID number. So for example if your birthday is Nov 15 and your ID number is 501234567, then your password would be ",(0,a.kt)("inlineCode",{parentName:"li"},"11154567"),".",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Note: When typing in your password, you will see no characters such as ","*","*","*"," asterisks in the terminal, don't be alarmed your input is being registered, go ahead and type the password and hit ",(0,a.kt)("kbd",null,"Enter"),"."))),(0,a.kt)("li",{parentName:"ol"},"You're now logged into the server and will be prompted to re-enter the default password, so go ahead and do that."),(0,a.kt)("li",{parentName:"ol"},"Now you must set a new password, make sure you password is ",(0,a.kt)("strong",{parentName:"li"},"at least 8 characters and contains a combination of lowercase, uppercase and numbers"),". After re-typing the password to confirm, if the process succeeded you'll be logged out."),(0,a.kt)("li",{parentName:"ol"},"Login in again using ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh <username>@moon.cs.torontomu.ca")," with your username and new password.")),(0,a.kt)("h3",null,"Windows 10"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/terminal"},"Windows Terminal")," from the Microsoft Store and launch it."),(0,a.kt)("li",{parentName:"ol"},"Type/paste in ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh <username>@moon.cs.torontomu.ca")," and hit ",(0,a.kt)("kbd",null,"Enter"),". ",(0,a.kt)("strong",{parentName:"li"},"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"strong"},"<username>")," with your CS username.")),(0,a.kt)("li",{parentName:"ol"},"Now you'll have to type in your password, the default password is in the format ",(0,a.kt)("inlineCode",{parentName:"li"},"MMDDXXXX")," where the first 4 digits are your date of birth and the last 4 digits are the last four digits of your TMU student ID number. So for example if your birthday is Nov 15 and your ID number is 501234567, then your password would be ",(0,a.kt)("inlineCode",{parentName:"li"},"11154567"),".",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Note: When typing in your password, you will see no characters such as ","*","*","*"," asterisks in the terminal, don't be alarmed your input is being registered, go ahead and type the password and hit ",(0,a.kt)("kbd",null,"Enter"),"."))),(0,a.kt)("li",{parentName:"ol"},"You're now logged into the server and will be prompted to re-enter the default password."),(0,a.kt)("li",{parentName:"ol"},"Now you must set a new password, make sure you password is ",(0,a.kt)("strong",{parentName:"li"},"at least 8 characters and contains a combination of lowercase, uppercase and numbers"),". After re-typing the password to confirm, if the process succeeded you'll be logged out."),(0,a.kt)("li",{parentName:"ol"},"Login in again using ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh <username>@moon.cs.torontomu.ca")," with your username and new password.")),(0,a.kt)("h3",null,"3. Setup email forwarding to your `@torontomu.ca` account"),(0,a.kt)("p",null,"Now that you've logged in via SSH to your account and set your password, we can setup email forwarding from your ",(0,a.kt)("inlineCode",{parentName:"p"},"@cs.torontomu.ca")," account to your ",(0,a.kt)("inlineCode",{parentName:"p"},"@torontomu.ca")," Google Workspace account. Make sure you're logged into your CS account via SSH using the instructions in the previous step."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type/paste in ",(0,a.kt)("inlineCode",{parentName:"li"},"nano .forward")," and hit ",(0,a.kt)("kbd",null,"Enter"),"."),(0,a.kt)("li",{parentName:"ol"},"You will now be presented with the interace of nano, a terminal based text editor. Type your ",(0,a.kt)("inlineCode",{parentName:"li"},"@torontomu.ca")," email address in the first line, then hit ",(0,a.kt)("kbd",null,"Enter")," and type your ",(0,a.kt)("inlineCode",{parentName:"li"},"@cs.torontomu.ca")," email address in the second line."),(0,a.kt)("li",{parentName:"ol"},"Hit ",(0,a.kt)("kbd",null,"Ctrl")," ",(0,a.kt)("kbd",null,"X")," to close the file, then ",(0,a.kt)("kbd",null,"Y")," to select Yes to save the changes and finally ",(0,a.kt)("kbd",null,"Enter")," to confirm the filename."),(0,a.kt)("li",{parentName:"ol"},"Now we must run two commands to modify the file permissions of the home folder and our new ",(0,a.kt)("inlineCode",{parentName:"li"},".forward")," text file."),(0,a.kt)("li",{parentName:"ol"},"Type/paste ",(0,a.kt)("inlineCode",{parentName:"li"},"chmod 711 ~")," into the terminal and hit ",(0,a.kt)("kbd",null,"Enter"),"."),(0,a.kt)("li",{parentName:"ol"},"Type/paste ",(0,a.kt)("inlineCode",{parentName:"li"},"chmod 644 .forward")," into the terminal and hit ",(0,a.kt)("kbd",null,"Enter"),".")),(0,a.kt)("p",null,"Email forwarding should now be setup successfully and you can verify it's operating correctly by sending an email from your personal account to your ",(0,a.kt)("inlineCode",{parentName:"p"},"@cs.torontomu.ca"),". A copy should appear in that email inbox and in your ",(0,a.kt)("inlineCode",{parentName:"p"},"@torontomu.ca")," inbox, ",(0,a.kt)("strong",{parentName:"p"},"make sure to check your spam folder in the ",(0,a.kt)("inlineCode",{parentName:"strong"},"@torontomu.ca"),' account because forwarded mail might end up here until you mark it as "not spam"'),". Now you should have no need to regularly check the ",(0,a.kt)("a",{parentName:"p",href:"https://webmail.cs.torontomu.ca/"},"CS Webmail Service"),"."),(0,a.kt)("h3",null,"[OPTIONAL] Setting up an SSH shortcut"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh <username>@moon.cs.torontomu.ca")," is a lot to type in everytime you want to SSH into the CS department server. So I'll show you a way to make it so you can just type ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh torontomu")," or something similar to accomplish the same thing."),(0,a.kt)("h3",null,"Mac/Linux"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Terminal"),(0,a.kt)("li",{parentName:"ol"},"Type/paste in ",(0,a.kt)("inlineCode",{parentName:"li"},"nano ~/.ssh/config")," and hit ",(0,a.kt)("kbd",null,"Enter"),"."),(0,a.kt)("li",{parentName:"ol"},"You'll see the nano text editor again and you should paste the following text into it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host TMU\n    HostName moon.cs.torontomu.ca\n    User <username>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>")," with your CS username.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Hit ",(0,a.kt)("kbd",null,"Ctrl")," ",(0,a.kt)("kbd",null,"X")," to close the file, then ",(0,a.kt)("kbd",null,"Y")," to select Yes to save the changes and finally ",(0,a.kt)("kbd",null,"Enter")," to confirm the filename.")),(0,a.kt)("p",null,"Now you can simply type ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh torontomu")," into the terminal to SSH to the CS department server. You may change this by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"torontomu")," in the first line of the file to any phrase you want (Avoid spaces or special characters)."),(0,a.kt)("h3",null,"Windows 10"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open File Explorer ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\{username}")," or alternatively paste ",(0,a.kt)("inlineCode",{parentName:"li"},"%UserProfile%")," into the address bar."),(0,a.kt)("li",{parentName:"ol"},'In the top left in the File Explorer window, click "File" and then "Options".'),(0,a.kt)("li",{parentName:"ol"},'Under the "View" tab you should uncheck "Hide extensions for known file types" and select "Show hidden files, folders, and drives".'),(0,a.kt)("li",{parentName:"ol"},"Now in your user folder locate the folder named ",(0,a.kt)("inlineCode",{parentName:"li"},".ssh"),"."),(0,a.kt)("li",{parentName:"ol"},"Inside this folder creater a text file (Right click \u2192 New \u2192 Text document)."),(0,a.kt)("li",{parentName:"ol"},"Name this text file ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," and make sure to delete the ",(0,a.kt)("inlineCode",{parentName:"li"},".txt")," extension."),(0,a.kt)("li",{parentName:"ol"},"Open this text file with Notepad, Notepad++, Visual Studio Code or any other text editor of your choice."),(0,a.kt)("li",{parentName:"ol"},"Paste the following text into it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host TMU\n    HostName moon.cs.torontomu.ca\n    User <username>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>")," with your CS username.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Hit ",(0,a.kt)("kbd",null,"Ctrl")," ",(0,a.kt)("kbd",null,"S")," to save the file and close it.")),(0,a.kt)("p",null,"Now you can simply type ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh torontomu")," into the terminal to SSH to the CS department server. You may change this by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"torontomu")," in the first line of the file to any phrase you want (Avoid spaces or special characters)."))}m.isMDXComponent=!0}}]);