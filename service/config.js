let isLive = false

var BaseURL = null;
if (isLive) {
    BaseURL = "https://www.live.com/api/";
} else {
    BaseURL = "https://www.dev.com/api/";
}

export default {
    baseURL: BaseURL,
}