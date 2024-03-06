import React, { useEffect, useState } from "react";
import { getIPAdress, getUserDetails, getUserLocation } from "../../services";
import { UserDetailsDiv } from "./userDetails.styles";

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState()
    const [userIP, setUserIP] = useState()
    const [location, setLocation] = useState()
    const [locationField, setLocationField] = useState(false)

    useEffect(() => {
        if (!userDetails) {
            getUserDetails(setUserDetails)
            getIPAdress(setUserIP)
        }
    }, [])

    useEffect(() => {
        if (userIP) {
            getUserLocation(userIP, setLocation)
        }
    }, [userIP])

    const handleEditLocation = () => {
        setLocationField(true)
    }

    const handleLocationFieldChange = (e) => {
        setLocation(e.target.value)
    }

    const handleLocationChange = (e) => {
        if (e.key == 'Enter' || e.key == 'Return') {
            setLocationField(false)
        }
    }

    return (
        <UserDetailsDiv>
            {userDetails &&
                <>
                    <div>
                        <img src={userDetails.profile.avatar_uri} alt="placeholder" className="avatar" />
                    </div>
                    <div style={{ marginLeft: 50, textAlign: 'left' }}>
                        <h3>Username: {userDetails.profile.username}</h3>
                        <h3>Display Name: {userDetails.profile.display_name}</h3>
                        <h3>Email: {userDetails.profile.email}</h3>
                        {!locationField ?
                            <h3>
                                Location: {location}
                                {location && <span style={{ marginLeft: 5 }}><button onClick={handleEditLocation}>Edit</button></span>}
                            </h3>
                            :
                            <h3>
                                Location: <input type="text" value={location} onChange={handleLocationFieldChange} onKeyDown={handleLocationChange} />
                            </h3>
                        }
                    </div>
                </>
            }
        </UserDetailsDiv>
    )
}

export default UserDetails;