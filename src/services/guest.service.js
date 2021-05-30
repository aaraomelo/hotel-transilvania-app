import axios from 'axios'

const url = `${process.env.VUE_APP_BASE_URL}/guests`;

export default {
    getAllGuests: () => {
        return axios.get(url)
            .then((response) => response.data)
            .catch((error) => error)
    },
    saveGuest: (guest) => {
        return axios.post(url, guest )
            .then((response) => response.data)
            .catch((error) => error)
    },
}

