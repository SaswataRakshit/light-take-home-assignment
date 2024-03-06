import axios from "axios";

export const getIPAdress = (setUserIP) => {
    axios.get("https://api.ipify.org?format=json")
        .then(res => {
            console.log(res.data.ip)
            const { ip } = res.data
            setUserIP(ip)
        })
        .catch(err => console.log(err))
}
export const getUserLocation = (ip, setLocation) => {
    axios.get(`https://ipgeolocation.abstractapi.com/v1?api_key=31fbc39186084ec6952601c12fe22b0d&ip_address=${ip}`)
        .then(res => {
            console.log(res)
            const { city, region } = res.data
            setLocation(city + ', ' + region)
        })
        .catch(err => console.log(err))
}