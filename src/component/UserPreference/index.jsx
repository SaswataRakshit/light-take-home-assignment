import React, { useEffect, useState } from "react";
import { UserPreferenceDiv } from "./userPreference.styles";

const UserPreference = () => {
    const [userPreferenceData, setUserPreferenceData] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const [cloneData, setCloneData] = useState()

    useEffect(() => {
        let data = localStorage.getItem('userPreference')
        let updatedData = localStorage.getItem('userPreferenceUpdated')
        if (updatedData) {
            setUserPreferenceData(JSON.parse(updatedData))
            setCloneData(structuredClone(JSON.parse(updatedData)))
        }
        else {
            setUserPreferenceData(JSON.parse(data))
            setCloneData(structuredClone(JSON.parse(data)))
        }
    }, [])

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleCancel = () => {
        setIsEdit(false)
        setUserPreferenceData(cloneData)
    }

    const handleSave = () => {
        localStorage.setItem('userPreferenceUpdated', JSON.stringify(userPreferenceData))
    }

    const handleNameChange = (e) => {
        let updateData = { ...userPreferenceData, name: e.target.value }
        setUserPreferenceData(updateData)
    }

    const handleAgeChange = (e) => {
        let updateData = { ...userPreferenceData, age: e.target.value }
        setUserPreferenceData(updateData)
    }

    const handleGenderChange = (e) => {
        let updateData = { ...userPreferenceData, gender: e.target.value }
        setUserPreferenceData(updateData)
    }

    const handleInterest1Change = (e) => {
        let updateData = { ...userPreferenceData, interest1: e.target.value }
        setUserPreferenceData(updateData)
    }

    const handleInterest2Change = (e) => {
        let updateData = { ...userPreferenceData, interest2: e.target.value }
        setUserPreferenceData(updateData)
    }

    return (
        <UserPreferenceDiv>
            <h2>About User:</h2>
            {!isEdit ? <button onClick={handleEdit}>Edit</button>
                :
                <div style={{ display: 'flex' }}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel} style={{ marginLeft: 5 }}>Cancel</button>
                </div>
            }
            {userPreferenceData &&
                <div style={{ display: 'flex', marginTop: 12 }}>
                    <div className="detailsDiv">
                        <h4>Name:</h4>
                        {!isEdit ?
                            <span>{userPreferenceData.name}</span>
                            :
                            <input type="text" value={userPreferenceData.name} onChange={handleNameChange} />
                        }
                    </div>
                    <div className="detailsDiv">
                        <h4>Age:</h4>
                        {!isEdit ?
                            <span>{userPreferenceData.age}</span>
                            :
                            <input type="number" value={userPreferenceData.age} onChange={handleAgeChange} />
                        }
                    </div>
                    <div className="detailsDiv">
                        <h4>Gender:</h4>
                        {!isEdit ?
                            <span>{userPreferenceData.gender}</span>
                            :
                            <select name="gender" id="gender" value={userPreferenceData.gender.toLowerCase()}
                                onChange={handleGenderChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        }
                    </div>
                    <div className="detailsDiv">
                        <h4>Interest 1:</h4>
                        {!isEdit ?
                            <span>{userPreferenceData.interest1}</span>
                            :
                            <input type="text" value={userPreferenceData.interest1} onChange={handleInterest1Change} />
                        }
                    </div>
                    <div className="detailsDiv">
                        <h4>Interest 2:</h4>
                        {!isEdit ?
                            <span>{userPreferenceData.interest2}</span>
                            :
                            <input type="text" value={userPreferenceData.interest2} onChange={handleInterest2Change} />
                        }
                    </div>
                </div>
            }
        </UserPreferenceDiv>
    )
}

export default UserPreference;