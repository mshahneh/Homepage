import React, { useRef, Component } from "react";
import "./App.scss";
import {
    motion,
    useScroll,
    useSpring,
    useMotionValue,
    useTransform,
    MotionValue
} from "framer-motion";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens } from './themes/theme';
import { IconButton } from '@mui/material';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

import Menu from "./Components/Menu"
import AboutMe from "./Components/AboutMe.js";
import Resume from "./Components/Resume.js";
import Projects from "./Components/Projects.js";
import Contacts from "./Components/Contacts.js";
import ReactGA from 'react-ga';


let menuItems = ["about", "resume", "projects", "contact"];
ReactGA.initialize('UA-187942706-1');
ReactGA.pageview(window.location.pathname + window.location.search);



export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [selectedScreen, setSelectedScreen] = React.useState(0);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState('light');

    React.useEffect(() => {
        if (localStorage.getItem('mode') !== null)
            setMode(localStorage.getItem('mode'));
        else
            setMode(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);

    React.useEffect(() => {
        // Update the document title using the browser API
        var url = window.location.href;
        if (url.includes("/about")) setSelectedScreen(0);
        else if (url.includes("/resume")) setSelectedScreen(1);
        else if (url.includes("/projects")) setSelectedScreen(2);
        else if (url.includes("/contact")) setSelectedScreen(3);
        else setSelectedScreen(0);
    });

    const handleAnimation = (key) => {
        console.log(key, selectedScreen);
        if (selectedScreen === key) return "inside";
        else if (selectedScreen < key) return "down";
        else return "up";
    }

    const menu_item_click = (num) => {
        setSelectedScreen(num);
        window.history.pushState(null, menuItems[num], `/${menuItems[num]}`);
    }

    React.useEffect(() => {
        localStorage.setItem('mode', mode)
    }, [mode]);

    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
                // localStorage.setItem('mode', mode)
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const ColorModeContext = React.createContext({
        toggleColorMode: () => {
            // This is intentional
        }
    });

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Menu click={(x) => menu_item_click(x)} selectedScreen={selectedScreen} />
                    <div className="mainView">
                        <motion.div
                            className="screen"
                            // initial={{ position: "absolute", zIndex: 15, top: "100vh", height: 0 }}
                            // animate={{ top: 0, height: "100vh" }}
                            // transition={{ duration: 3.5 }}
                            animate={handleAnimation(0)}
                            variants={variants}
                            key="0"
                        >
                            <AboutMe />
                        </motion.div>
                        <motion.div
                            className="screen"
                            key="1"
                            animate={handleAnimation(1)}
                            variants={variants}
                        >
                            <Resume />
                        </motion.div>
                        <motion.div
                            className="screen"
                            key="2"
                            animate={handleAnimation(2)}
                            variants={variants}
                        >
                            <Projects />
                        </motion.div>
                        <motion.div
                            key="3"
                            className="screen"
                            animate={handleAnimation(3)}
                            variants={variants}
                        >
                            <Contacts />
                        </motion.div>
                    </div>


                </div>
                <IconButton style={{ zIndex: 5, color: "black", position: "absolute", top: 10, right: 10 }} onClick={colorMode.toggleColorMode} aria-label="delete">
                    {mode === 'light' ? <BedtimeIcon /> : <LightModeIcon />}
                </IconButton>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}