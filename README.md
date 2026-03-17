# Windows 10 Web Simulator

A premium, high-fidelity Windows 10 desktop environment built entirely with HTML, CSS, and JavaScript. This project recreates the full Windows 10 experience in the browser — including a working desktop, taskbar, start menu, window management, and multiple functional system apps.

## Features

- **Realistic Boot Sequence** — Authentic Win10 boot spinner with orbiting dots and logo fade
- **Lock Screen & Login** — Win10 hero wallpaper, live clock, and sign-in flow
- **Desktop** — Draggable, resizable, snap-capable windows with real Win10 animations (open, close, minimize, maximize)
- **Taskbar** — Pinned apps, running app indicators, live preview thumbnails on hover, system tray with clock, Wi-Fi, volume, and battery
- **Start Menu** — Alphabetical app list, live tiles, search filtering, power options (sleep, shutdown, restart)
- **Context Menu** — Right-click desktop context menu with View, Sort, Refresh, New, Display settings, and Personalize
- **Window Manager** — Full multi-window support with focus tracking, z-index management, window snapping (left/right/maximize), and desktop selection box

### Apps

| App | Description |
|-----|-------------|
| Google Chrome | Multi-tab browser with Google search, URL bar navigation, quick links, and iframe page loading |
| File Explorer | Sidebar navigation, breadcrumb path bar, file/folder grid with icons |
| Calculator | Standard calculator with memory functions, matching Win10 dark theme |
| Notepad | Text editor with menu bar, status bar, line/column tracking |
| Command Prompt | Simulated CMD with working commands (help, dir, echo, cls, ping, tasklist, etc.) |
| Paint | Canvas drawing with brush, eraser, shapes, color palette, and size slider |
| Settings | Multi-section settings panel (System, Devices, Network, Personalization, etc.) |
| Photos | Photo gallery grid with collection view |
| Weather | Animated weather display with forecast, humidity, wind, and UV details |
| Calendar | Monthly calendar with mini calendar sidebar, day/week/month views |
| Microsoft Store | App store UI with featured apps, categories, and ratings |

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JavaScript**
- No frameworks or build tools — runs directly in any modern browser
- Custom SVG icon system for pixel-perfect Win10 icons
- Fluent Design inspired acrylic blur and micro-interactions

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge recommended)
3. That's it — no install, no build step

## Project Structure

```
Project X/
├── index.html              Main entry point
├── css/
│   ├── main.css            Core styles, boot, lock, login, desktop
│   ├── taskbar.css         Taskbar and preview thumbnails
│   ├── startmenu.css       Start menu layout and tiles
│   ├── windows.css         Window chrome, title bars, animations
│   ├── apps.css            All app-specific styles
│   └── contextmenu.css     Right-click context menu
├── js/
│   ├── icons.js            SVG icon definitions (Win10Icons)
│   ├── utils.js            Date/time formatting, ID generation
│   ├── windowManager.js    Window lifecycle, drag, resize, snap
│   ├── taskbar.js          Taskbar, system tray, calendar flyout
│   ├── startMenu.js        Start menu, app launcher, power options
│   ├── contextMenu.js      Desktop right-click menu
│   ├── main.js             Boot sequence, login, desktop init
│   └── apps/
│       ├── chrome.js        Google Chrome browser
│       ├── calculator.js    Calculator
│       ├── notepad.js       Notepad
│       ├── fileExplorer.js  File Explorer
│       ├── cmd.js           Command Prompt
│       ├── paint.js         Paint
│       ├── settings.js      Settings
│       ├── photos.js        Photos
│       ├── weather.js       Weather
│       ├── calendar.js      Calendar
│       └── store.js         Microsoft Store
└── README.md
```

## Warning

> **Disclaimer:** This is a simulated Windows 10 environment created for educational and demonstration purposes only. It is not affiliated with or endorsed by Microsoft Corporation. All trademarks, logos, and brand names are the property of their respective owners. No real system operations are performed. Use at your own discretion.

---

Made With 💘 By Vanshfr.one
