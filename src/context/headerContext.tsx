import React from "react";

type Props = {
    children: React.ReactNode
};
type VisibleContextType = {
    visible: boolean;
    toggle: () => void;
    setVisible: (val: boolean) => void;
};

const defaultTheme = false;
export const headerContext = React.createContext<VisibleContextType | undefined>(
    undefined
);
export const ThemeProvider = ({
    children
}: Props) => {
    const [visible, setVisible] = React.useState(
        defaultTheme
    );
    console.log("visible", visible);

    const toggle = () => {
        setVisible(!visible)
    }

    return (<headerContext.Provider value={{ visible, toggle, setVisible }} >
        { children}
    </headerContext.Provider>
    );
};