import React from "react";
import { useTranslation } from 'react-i18next';

const SearchForm = ({ text, onChange }) => {
    const [t] = useTranslation();
    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };

    const handleSearchChange = e => {
        console.log("I'm searching for: " + e.target.value);
        onChange(e.target.value)
    };

    return (
        <div className="form-outline ">
            <input
                required
                id="search-input"
                type="text"
                style={BarStyling}
                value={text}
                onChange={handleSearchChange}
                placeholder={t("search.searchTitle")}
            />
        </div>
    );
}
export default SearchForm;


