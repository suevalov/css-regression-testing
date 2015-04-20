## Installation

`pip install huxley`

## Using

### Step 1: host your app somewhere

### Step 2: create a Huxleyfile

A Huxleyfile describes your test. Create one that looks like this:

```
[test_name]
url=http://localhost:8000/somepage.html
```

### Step 3: record the test

Huxley makes writing tests easy because it simply records your browser session -- specifically mouse clicks and key presses on a single page -- and can replay them in an automated way. To do this you need to install [Selenium Server](http://docs.seleniumhq.org/download/) and start it. It's as easy as `java -jar selenium-server-standalone-XXX.jar`.

Then, run Huxley in record mode: `huxley --record`. Huxley will bring up a browser using Selenium. Press enter in the Huxley console to take a screen shot of the initial page load. Then toggle the button in the browser a few times. After every click, switch back to the Huxley console to take a screen shot. When you've tested all of the functionality you want to test, simply type `q` and then enter in the Huxley console to exit.

### Step 4: playback

Simply run the `huxley` command in the same directory as the `Huxleyfile` to be sure that your app still works.
Huxley includes a simple image diff tool; simply run `huxley` with the `--save-diff` option to output a `diff.png` which will show you the pixels that changed.

### Step 5: update the test with new screen shots

You'll likely update the UI of the component a lot without changing its core functionality. Huxley can take new screen shots for you when this happens. Tweak the UI of the component in `toggle.html` somehow (maybe change the button color or something) and re-run `huxley`. It will warn you that the UI has changed and will automatically write new screen shots for you. If you run `huxley` again, the test will pass since the screen shots were updated.

The best part is, since the screen shots are checked into the repository, you can review the changes to the UI as part of the code review process if you'd like. At Instagram we have frontend engineers reviewing the JavaScript and designers reviewing the screenshots to ensure that they're pixel perfect.

### Step 6: run in CI mode

If you're using a continuous integration solution like [Jenkins](http://jenkins-ci.org/) you probably don't want to automatically rerecord screen shots on failure. Simply run `huxley --playback-only` to do this.

Additionally, you may find that you're dissatisfied with Huxley replaying your browsing session in real-time. You can speed it up (or slow it down) by editing your `Huxleyfile` to read:

```
[test_name]
url=http://localhost:8000/somepage.html
sleepfactor=0.5
```

This edit should cut the execution time in half.

## Can I test responsive design?

Of course! Simply add a `screensize` setting to your `Huxleyfile`. The default is `screensize=1024x768`.