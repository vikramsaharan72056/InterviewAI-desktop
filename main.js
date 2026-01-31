const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow;
let overlayWindow;

function createMainWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: 380,
        height: 550,
        x: width - 400,
        y: 20,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: false,
        resizable: true,
        hasShadow: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');

    // Open DevTools in development
    if (process.argv.includes('--dev')) {
        mainWindow.webContents.openDevTools();
    }
}

function createOverlayWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    overlayWindow = new BrowserWindow({
        width: 350,
        height: 200,
        x: width - 370,
        y: height - 220,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        resizable: false,
        focusable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    overlayWindow.loadFile('overlay.html');
    overlayWindow.setIgnoreMouseEvents(false);
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// IPC handlers
ipcMain.on('show-overlay', (event, data) => {
    if (!overlayWindow) {
        createOverlayWindow();
    }
    overlayWindow.webContents.send('update-answer', data);
    overlayWindow.show();
});

ipcMain.on('hide-overlay', () => {
    if (overlayWindow) {
        overlayWindow.hide();
    }
});

ipcMain.on('toggle-always-on-top', (event, value) => {
    if (mainWindow) {
        mainWindow.setAlwaysOnTop(value);
    }
});
