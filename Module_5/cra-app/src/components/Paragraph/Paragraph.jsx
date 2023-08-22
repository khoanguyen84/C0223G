import React, { useContext } from "react";
import { themeContext } from "../../Context/ThemeProvider";

function Paragraph() {
    const {theme, handleChangeTheme} = useContext(themeContext)
    return (
        <>
            <p className={theme}>
                Commodo aute eu fugiat esse irure enim cupidatat fugiat irure excepteur sit velit elit. Consequat consectetur eu mollit voluptate duis ut deserunt mollit esse proident. Proident elit excepteur do velit aliquip consectetur dolore reprehenderit veniam dolor labore.
            </p>
            <button className="btn btn-sm btn-secondary"
                        onClick={handleChangeTheme}
                    >Change Theme</button>
        </>

    )
}

export default Paragraph;