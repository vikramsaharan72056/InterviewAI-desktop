# 🎯 Interview AI - Desktop Assistant

A privacy-focused desktop companion app for Interview AI that helps you during live interviews and meetings.

## 🔒 Privacy Features

### How It Works
1. **Always-on-Top Window**: Stays visible above all other windows
2. **Positionable**: Move it to a second monitor or outside screen share area
3. **Real-time Listening**: Continuously listens and transcribes questions
4. **Instant Answers**: AI-powered answers appear immediately
5. **Screen Share Safe**: Keep answers visible to you but hidden from others

### Privacy Modes

#### Option 1: Second Monitor (Recommended)
- Position the app on your second monitor
- Share only your primary monitor in the meeting
- Answers stay completely private

#### Option 2: Partial Screen Share
- Share only a specific window (e.g., browser, IDE)
- Keep the assistant window outside the shared area
- Answers remain invisible to others

#### Option 3: Small Corner Window
- Minimize the window to a small corner
- Position it where your camera/face would be
- Quick glances without being obvious

## 🚀 Quick Start

### Installation

```bash
cd desktop-app
npm install
```

### Running the App

```bash
# Make sure backend is running first
cd ../backend/InterviewAI_backend
npm run start:dev

# In another terminal, start desktop app
cd ../desktop-app
npm start
```

### Development Mode

```bash
npm run dev
```

## 📋 Usage

### Before the Interview

1. **Upload Documents**
   - Open the mobile/web app
   - Upload your resume and job description
   - This creates your context

2. **Start Backend**
   ```bash
   cd backend/InterviewAI_backend
   npm run start:dev
   ```

3. **Launch Desktop App**
   ```bash
   cd desktop-app
   npm start
   ```

### During the Interview

1. **Position the Window**
   - Move to second monitor, OR
   - Position outside screen share area

2. **Start Listening**
   - Click "🎤 Start Listening"
   - Grant microphone permission
   - App will continuously listen

3. **Get Answers**
   - Questions are auto-transcribed
   - AI answers appear instantly
   - Read answers naturally

4. **Stop When Done**
   - Click "⏹ Stop" to stop listening
   - Click "🗑 Clear" to clear history

## ⚙️ Settings

### Always on Top
- **Enabled**: Window stays above all others (recommended)
- **Disabled**: Normal window behavior

### Auto-scroll
- **Enabled**: Automatically scrolls to latest answer
- **Disabled**: Manual scrolling

## 🎯 Best Practices

### For Maximum Privacy

1. **Use Two Monitors**
   - Primary: Share this in meeting
   - Secondary: Keep assistant here

2. **Test Screen Share**
   - Before interview, test what's visible
   - Verify assistant window is hidden

3. **Natural Responses**
   - Don't read answers word-for-word
   - Use them as talking points
   - Add your own examples

### For Best Accuracy

1. **Good Microphone**
   - Use quality microphone
   - Reduce background noise
   - Position close to speakers

2. **Clear Audio**
   - Ensure interviewer's audio is clear
   - Adjust system volume if needed

3. **Internet Connection**
   - Stable connection required
   - API calls need low latency

## 🔧 Troubleshooting

### Microphone Not Working
```
Error: Microphone access denied
```
**Solution**: Grant microphone permission in system settings

### Backend Connection Failed
```
Error: Cannot connect to backend
```
**Solution**: 
1. Ensure backend is running on port 5000
2. Check `API_URL` in index.html (line 211)

### No Transcription
**Possible Causes**:
- Audio too quiet
- Background noise too loud
- OpenAI API key issue

**Solution**:
1. Check microphone volume
2. Verify OpenAI API key in backend/.env
3. Check backend console for errors

### Window Not Staying on Top
**Solution**: 
- Check "Always on Top" setting is enabled
- Restart the app

## 🎨 Customization

### Change Window Size
Edit `main.js`:
```javascript
mainWindow = new BrowserWindow({
  width: 400,  // Change this
  height: 600, // Change this
  // ...
});
```

### Change API URL
Edit `index.html`:
```javascript
const API_URL = 'http://localhost:5000'; // Change this
```

### Change Recording Interval
Edit `index.html`:
```javascript
setTimeout(() => {
  mediaRecorder.stop();
}, 3000); // Change 3000 (3 seconds) to your preference
```

## 🔐 Security Notes

### What's Stored
- **Nothing**: No data is stored locally
- **All in memory**: Cleared when app closes
- **Backend only**: Context stored in Supabase

### What's Shared
- **Audio**: Sent to OpenAI Whisper for transcription
- **Questions**: Sent to backend for answers
- **No recording**: Audio is not saved

### Privacy Recommendations
1. Use on trusted networks only
2. Close app when not in use
3. Clear history after each session
4. Don't share screen with app visible

## 📊 System Requirements

- **OS**: Windows 10+, macOS 10.13+, Linux
- **RAM**: 2GB minimum
- **Network**: Stable internet connection
- **Microphone**: Required

## 🎯 Keyboard Shortcuts (Future)

Coming soon:
- `Ctrl/Cmd + L`: Start/Stop listening
- `Ctrl/Cmd + K`: Clear history
- `Ctrl/Cmd + T`: Toggle always on top
- `Ctrl/Cmd + H`: Hide/Show window

## 📝 Known Limitations

1. **3-second chunks**: Records in 3-second intervals
2. **English only**: Currently optimized for English
3. **Internet required**: No offline mode
4. **Single user**: One user at a time

## 🚀 Future Enhancements

- [ ] Hotkey support
- [ ] Multiple language support
- [ ] Offline mode
- [ ] Custom themes
- [ ] Answer history export
- [ ] Confidence scores
- [ ] Multi-user support
- [ ] Mobile companion app sync

## 🤝 Contributing

This is part of the Interview AI project. See main README for contribution guidelines.

## 📄 License

MIT License - See main project LICENSE file

---

**Built with**: Electron, Node.js, OpenAI API  
**Part of**: Interview AI Project  
**Version**: 1.0.0
