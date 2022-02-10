const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  content: [
    "./hugo_stats.json",
    "./themes/launchist-theme/layouts/**/*.html",
    "./themes/hedgepie/layouts/**/*.html",
    "./themes/hedgepie/**/*.html",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: '.25em',
    },
    fontFamily: {
      sans: ['"Noto Sans"', 'sans-serif'],
      display: ['"Poppins"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange,
        neutral: colors.gray,
        cardGrey: '#F6FAFD',
        curiousBlue: "#1799DE",
        bleuDeFrance: "#1f7fde",
        darkishPink: "#de4686",
        salomie: "#EFA906",
        haiti: "#160E3A",
        darkElegant: "$16103A"

      },
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dalyoko/f_auto/hedgepie/Background.jpg')",
        'coin-pattern': "url('https://res.cloudinary.com/dalyoko/f_auto/hedgepie/Frame_1000002141.png')",
        'background-gradient': "url('https://res.cloudinary.com/dalyoko/f_auto/hedgepie/Background-gradient.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
  ],
};
