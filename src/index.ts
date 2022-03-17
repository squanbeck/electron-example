import { BrowserWindow, app } from 'electron';
import * as path from 'path';

app.on('ready', () => {
    console.log('App is ready');
    const win = new BrowserWindow({
        // width: 600,
        // height: 400
    });
    const indexHTML = path.join(__dirname + '/index.html');
    win.webContents.openDevTools();
    win.loadFile(indexHTML).then(() => {

    });
});