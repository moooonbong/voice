const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK b43d7a8591b90f60534bd571b63e0619';

const api = async params => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(API_URL + queryString, {
        headers: {Authorization: API_KEY}
    });
    return response.json();
}

export default api;