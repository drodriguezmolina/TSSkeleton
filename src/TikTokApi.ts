import TikTokAPI, { getRequestParams } from 'tiktok-api';


const signURL = async (url: string, ts: any, deviceId: any) => {
    const as = 'anti-spam parameter 1';
    const cp = 'anti-spam parameter 2'
    const mas = 'anti-spam parameter 3';
    return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
}

const params = getRequestParams({
    device_id: '<device_id>',
    fp: '<device_fingerprint>',
    iid: '<install_id>',
    openudid: '<device_open_udid>',
});

export const api = new TikTokAPI(params, { signURL });