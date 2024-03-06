import APIConfig from './API-configuration'

const mockData = require('../component/mock/userAttributes.json')

export const getUserDetails = (setUserDetails) => {
    APIConfig.get('/v2/users/me')
        .then(res => {
            setUserDetails(res.data)
        })
        .catch(error => {
            setUserDetails(mockData)
        })
}