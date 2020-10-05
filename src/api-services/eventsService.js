import CryptoJS from 'crypto-js';
import {Base64} from 'js-base64';
import axios from 'axios';

export async function lyyti_apiCall(call_string) {
    const public_key = process.env.REACT_APP_API_V2_PUBLIC_KEY;
    const private_key = process.env.REACT_APP_API_V2_PRIVATE_KEY;

    const timestamp = Math.floor(new Date()/1000);
    const signature = CryptoJS.HmacSHA256(
        Base64.encode(public_key+','+timestamp+','+call_string),
        private_key
    ).toString(CryptoJS.enc.Hex);

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Authorization': 'LYYTI-API-V2 public_key='+public_key+', timestamp='+timestamp+', signature='+signature
        }
    };

    const response = await axios.get(`https://api.lyyti.com/v2/${call_string}`, options);
    return response.data.results;
}
