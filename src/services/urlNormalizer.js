const { parse } = require("url");
const parseDomain = require("parse-domain");

const createUrlNormalizer = fbApi => {
  const _parseUrl = url => {
    if (typeof url !== "string")
      return { isValid: false, reason: "invalid type" };

    let finalUrl = url;
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      finalUrl = `https://${url}`;
    }

    let parsedUrl = parse(finalUrl);

    const { hostname } = parsedUrl;

    let domain = parseDomain(hostname);

    if (domain === null) {
      return { isValid: false, reason: "invalid domain" };
    }

    return {
      isValid: true,
      ...parsedUrl,
      ...domain
    };
  };

  const normalize = async url => {
    const parsedUrl = await _parseUrl(url);
    const { pathname } = parsedUrl;
    const pageInfo = await fbApi.page(pathname);
    return pageInfo;
  };

  return {
    normalize
  };
};

module.exports = createUrlNormalizer;
