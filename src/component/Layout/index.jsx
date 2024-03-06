import React, { useEffect } from "react";
import Header from "./header";
import UserDetails from "../UserDetails";
import UserPreference from "../UserPreference";

const Layout = () => {
    const userPreferenceData = require('../mock/userPreference.json')
    useEffect(() => {
        localStorage.setItem('userPreference', JSON.stringify(userPreferenceData))
    }, [])

    return (
        <>
            <Header />
            <UserDetails />
            <UserPreference />
        </>
    )
}

export default Layout;