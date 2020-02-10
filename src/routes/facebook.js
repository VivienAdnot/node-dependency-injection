const _ = require("lodash");
const express = require("express");
const boom = require("boom");

const config = require("config");
const createFacebookApi = config.get("createFacebookApi");

const createUrlNormalizer = require("../services/urlNormalizer");

const facebookApi = createFacebookApi();
const urlNormalizer = createUrlNormalizer(facebookApi);

const router = express.Router({ mergeParams: true });

router.post("/page", async (req, res, next) => {
  try {
    const { url } = req.body;
    const result = await urlNormalizer.normalize(url);
    return res.json(result);
  } catch (err) {
    return boom.internal(err.message);
  }
});

module.exports = router;
