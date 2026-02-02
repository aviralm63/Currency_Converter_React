# Currency Converter React

A modern, real-time currency converter web application built with React and Vite for fast, seamless currency conversion.

## 📋 Project Overview

This is a **Real-Time Currency Converter** application that provides the following features:

### Key Features:
- 🔄 **Real-Time Currency Conversion** - Instantly convert any currency to another with live exchange rates
- 💱 **Dual Currency Support** - Easily swap between base and target currencies with a single click
- ⚡ **Lightning Fast Performance** - Built with Vite for ultra-fast development and production builds
- 🎨 **Beautiful UI** - Modern, clean interface powered by Tailwind CSS
- 📱 **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- 🔗 **Live Exchange Rates** - Fetches real-time currency rates from ExchangeRate API
- ⚠️ **Robust Error Handling** - Comprehensive error messages and input validation
- 🎯 **User-Friendly** - Intuitive interface that anyone can use

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Frontend Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 5.4.9 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **HTTP Client** | Axios | 1.7.7 |
| **CSS Processing** | PostCSS + Autoprefixer | Latest |
| **Code Quality** | ESLint | 9.13.0 |
| **Runtime** | Node.js | 14+ (recommended: 18+) |

## 📦 Project Structure

```
Currency_Converter_React/
│
├── src/                          # Source code directory
│   ├── api/
│   │   └── postApi.jsx           # Axios API configuration and currency converter function
│   ├── assets/                   # Static assets (images, icons, etc.)
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Application-specific styles
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles and Tailwind imports
│
├── public/                       # Static files served as-is
│   └── vite.svg                  # Vite logo
│
├── index.html                    # HTML template
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Dependency lock file
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── eslint.config.js              # ESLint configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher, preferably v18+) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional but recommended) - [Download from git-scm.com](https://git-scm.com/)

### Installation Instructions

#### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Currency_Converter_React
```

#### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages listed in `package.json`.

#### Step 3: Start the Development Server
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`. The page will automatically reload when you make changes to the code (Hot Module Replacement - HMR).

### Available npm Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## ⚙️ Configuration

### API Setup
The ExchangeRate API integration is located in `src/api/postApi.jsx`:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/YOUR_API_KEY",
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
```

**Important:** 
1. Get your free API key from [exchangerate-api.com](https://www.exchangerate-api.com/)
2. Replace `YOUR_API_KEY` with your actual API key
3. For production, use environment variables (create a `.env.local` file)

### Environment Variables (Optional for Production)
Create a `.env.local` file in the project root:
```
VITE_API_KEY=your_api_key_here
```

Then update the API configuration to use:
```javascript
baseURL: `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}`
```

### Tailwind CSS Configuration
The `tailwind.config.js` file allows you to customize:
- Colors and themes
- Spacing and sizing
- Typography
- Responsive breakpoints
- Custom plugins

### Vite Configuration
The `vite.config.js` includes:
- React plugin for JSX support
- Development server settings
- Build optimization options
- Module resolution rules

## 📝 How to Use the Application

1. **Enter Amount** - Type the amount you want to convert
2. **Select Source Currency** - Choose the currency you're converting FROM
3. **Select Target Currency** - Choose the currency you're converting TO
4. **Click Convert Button** - Instantly see the converted amount
5. **Swap Currencies** (Optional) - Use the swap button to quickly reverse the currencies

### Example:
- Input: 100
- From: USD
- To: INR
- Result: Real-time exchange rate calculation

## 🐛 Troubleshooting

### Issue: "Error fetching conversion rate"
**Solutions:**
- Verify your API key is valid and active
- Check your internet connection
- Ensure you haven't exceeded API rate limits (free tier: 1,500 requests/month)
- Check browser console for detailed error messages

### Issue: Development server not starting
**Solutions:**
- Make sure Node.js is installed: `node --version`
- Restart the terminal and run `npm run dev` again
- Check if port 5173 is available
- Delete `node_modules` and run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Issue: Hot reload not working
**Solutions:**
- Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Restart the dev server
- Check browser console for errors
- Ensure you're modifying files in the `src/` directory

### Issue: Build fails
**Solutions:**
- Run `npm run lint` to check for ESLint errors
- Ensure all imports are correct
- Check the console output for specific error messages
- Try clearing the dist folder and rebuilding

## 🔐 Security Considerations

- **Never commit API keys** - Always use environment variables
- **Git Ignore** - The `.gitignore` file is configured to exclude sensitive files
- **Environment Files** - Add `.env.local` to `.gitignore` before committing
- **HTTPS Only** - Always use HTTPS in production
- **Rate Limiting** - Implement rate limiting on the backend if you deploy this

## 📚 Learning Resources

- **React Official Docs** - https://react.dev/
- **Vite Documentation** - https://vitejs.dev/
- **Tailwind CSS** - https://tailwindcss.com/
- **Axios Documentation** - https://axios-http.com/
- **ExchangeRate API Docs** - https://www.exchangerate-api.com/docs

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Popular Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
Update `vite.config.js` to add `base: '/repository-name/'`

## 📋 Git Workflow

### Initial Setup
```bash
git clone <repository-url>
cd Currency_Converter_React
npm install
```

### Making Changes
```bash
# Create a new branch for your feature
git checkout -b feature/new-feature

# Make your changes
# Stage your changes
git add .

# Commit with a meaningful message
git commit -m "Add descriptive commit message"

# Push to remote repository
git push origin feature/new-feature
```

### Push to Repository
```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Update: Comprehensive README and project setup"

# Push to main/master branch
git push origin main
# or
git push origin master
```

## 🤝 Contributing

Want to improve this project? Follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes with clear commit messages
4. **Test** your changes thoroughly
5. **Push** to your branch: `git push origin feature/amazing-feature`
6. **Open** a Pull Request with a detailed description

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created with ❤️ for currency conversion enthusiasts.

---

## 📞 Support & Issues

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review existing GitHub Issues
3. Create a new GitHub Issue with detailed description
4. Include error messages, browser console logs, and environment details

---

**Happy Coding! 🚀**

Start converting currencies today and enjoy real-time exchange rates!

