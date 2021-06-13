import React from "react";
import { headerContext } from '../context/headerContext'

export const useTheme = () =>
    React.useContext(headerContext);