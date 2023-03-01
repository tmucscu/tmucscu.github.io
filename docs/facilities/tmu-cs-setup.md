# Setting up your TMU CS Account

> Written on 2021-09-03 by tactidact#4140 on Discord

If you're a new student in the CS department at TMU, you'll have another account for just the CS department that is distinct from your my.torontomu/Google Workspace `@torontomu.ca` email account. You'll use this account to login to lab computers in the ENG building, both in Windows and Linux, and to the [CS Webmail Service](https://webmail.cs.torontomu.ca/).

This post will walk you through how to login to that account and set a new password for it via SSH. SSH stands for Secure Shell and it's simply put a way to connect to a remote computer or server. I'll also cover how to forward emails from this account to your `@torontomu.ca` so you don't have to check two inboxes to keep up with your emails.

<h3>1. Find your CS username / my.torontomu short ID</h3>

If you recieved an email from `request@cs.torontomu.ca`, this should contain your CS username and a link to a Google Drive folder with insrtuctions in PDFs and a video.

If you did not recieve it or have yet to do so, you can find your username by logging into [my.torontomu](https://my.torontomu.ca):

1. Click "Personal Account" under "Self Service"
2. Click "Personal Information" under "General"
3. The username under "my.torontomu Short ID" is very likely your CS username.

Your CS email address will be `<username>@cs.torontomu.ca`, where `<username>` is your username.

> Note: It's important to note that for some students that your my.torontomu username and short ID might be the same. If yours are not the same, then make sure to use your short ID as that's the username that the CS department appears to be using.

<h3>2. SSH into your CS Account</h3>

So now that you have your username we can SSH/login to the account, the instructions differ slightly on Mac/Linux and Windows so follow the relevant section for your OS.

<h3>Mac/Linux</h3>

1. Open the Terminal, on macOS you can find it by searching in Spotlight (<kbd>⌘</kbd> <kbd>Space</kbd>).
2. Type/paste in `ssh <username>@moon.cs.torontomu.ca` and hit <kbd>Enter</kbd>. **Make sure to replace `<username>` with your CS username.**
3. Now you'll have to type in your password, the default password is in the format `MMDDXXXX` where the first 4 digits are your date of birth and the last 4 digits are the last four digits of your TMU student ID number. So for example if your birthday is Nov 15 and your ID number is 501234567, then your password would be `11154567`.
   > Note: When typing in your password, you will see no characters such as \*\*\* asterisks in the terminal, don't be alarmed your input is being registered, go ahead and type the password and hit <kbd>Enter</kbd>.
4. You're now logged into the server and will be prompted to re-enter the default password, so go ahead and do that.
5. Now you must set a new password, make sure you password is **at least 8 characters and contains a combination of lowercase, uppercase and numbers**. After re-typing the password to confirm, if the process succeeded you'll be logged out.
6. Login in again using `ssh <username>@moon.cs.torontomu.ca` with your username and new password.

<h3>Windows 10</h3>

1. Download [Windows Terminal](https://aka.ms/terminal) from the Microsoft Store and launch it.
2. Type/paste in `ssh <username>@moon.cs.torontomu.ca` and hit <kbd>Enter</kbd>. **Make sure to replace `<username>` with your CS username.**
3. Now you'll have to type in your password, the default password is in the format `MMDDXXXX` where the first 4 digits are your date of birth and the last 4 digits are the last four digits of your TMU student ID number. So for example if your birthday is Nov 15 and your ID number is 501234567, then your password would be `11154567`.
   > Note: When typing in your password, you will see no characters such as \*\*\* asterisks in the terminal, don't be alarmed your input is being registered, go ahead and type the password and hit <kbd>Enter</kbd>.
4. You're now logged into the server and will be prompted to re-enter the default password.
5. Now you must set a new password, make sure you password is **at least 8 characters and contains a combination of lowercase, uppercase and numbers**. After re-typing the password to confirm, if the process succeeded you'll be logged out.
6. Login in again using `ssh <username>@moon.cs.torontomu.ca` with your username and new password.

<h3>3. Setup email forwarding to your `@torontomu.ca` account</h3>

Now that you've logged in via SSH to your account and set your password, we can setup email forwarding from your `@cs.torontomu.ca` account to your `@torontomu.ca` Google Workspace account. Make sure you're logged into your CS account via SSH using the instructions in the previous step.

1. Type/paste in `nano .forward` and hit <kbd>Enter</kbd>.
2. You will now be presented with the interace of nano, a terminal based text editor. Type your `@torontomu.ca` email address in the first line, then hit <kbd>Enter</kbd> and type your `@cs.torontomu.ca` email address in the second line.
3. Hit <kbd>Ctrl</kbd> <kbd>X</kbd> to close the file, then <kbd>Y</kbd> to select Yes to save the changes and finally <kbd>Enter</kbd> to confirm the filename.
4. Now we must run two commands to modify the file permissions of the home folder and our new `.forward` text file.
5. Type/paste `chmod 711 ~` into the terminal and hit <kbd>Enter</kbd>.
6. Type/paste `chmod 644 .forward` into the terminal and hit <kbd>Enter</kbd>.

Email forwarding should now be setup successfully and you can verify it's operating correctly by sending an email from your personal account to your `@cs.torontomu.ca`. A copy should appear in that email inbox and in your `@torontomu.ca` inbox, **make sure to check your spam folder in the `@torontomu.ca` account because forwarded mail might end up here until you mark it as "not spam"**. Now you should have no need to regularly check the [CS Webmail Service](https://webmail.cs.torontomu.ca/).

<h3>[OPTIONAL] Setting up an SSH shortcut</h3>

`ssh <username>@moon.cs.torontomu.ca` is a lot to type in everytime you want to SSH into the CS department server. So I'll show you a way to make it so you can just type `ssh torontomu` or something similar to accomplish the same thing.

<h3>Mac/Linux</h3>

1. Open Terminal
2. Type/paste in `nano ~/.ssh/config` and hit <kbd>Enter</kbd>.
3. You'll see the nano text editor again and you should paste the following text into it:

```
Host TMU
    HostName moon.cs.torontomu.ca
    User <username>
```

> Note: Make sure to replace `<username>` with your CS username.

4. Hit <kbd>Ctrl</kbd> <kbd>X</kbd> to close the file, then <kbd>Y</kbd> to select Yes to save the changes and finally <kbd>Enter</kbd> to confirm the filename.

Now you can simply type `ssh torontomu` into the terminal to SSH to the CS department server. You may change this by editing the `torontomu` in the first line of the file to any phrase you want (Avoid spaces or special characters).

<h3>Windows 10</h3>

1. Open File Explorer `C:\Users\{username}` or alternatively paste `%UserProfile%` into the address bar.
2. In the top left in the File Explorer window, click "File" and then "Options".
3. Under the "View" tab you should uncheck "Hide extensions for known file types" and select "Show hidden files, folders, and drives".
4. Now in your user folder locate the folder named `.ssh`.
5. Inside this folder creater a text file (Right click → New → Text document).
6. Name this text file `config` and make sure to delete the `.txt` extension.
7. Open this text file with Notepad, Notepad++, Visual Studio Code or any other text editor of your choice.
8. Paste the following text into it:

```
Host TMU
    HostName moon.cs.torontomu.ca
    User <username>
```

> Note: Make sure to replace `<username>` with your CS username.

4. Hit <kbd>Ctrl</kbd> <kbd>S</kbd> to save the file and close it.

Now you can simply type `ssh torontomu` into the terminal to SSH to the CS department server. You may change this by editing the `torontomu` in the first line of the file to any phrase you want (Avoid spaces or special characters).
