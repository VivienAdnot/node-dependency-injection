const _ = require("lodash");
const express = require("express");
const boom = require("boom");

const createUrlNormalizer = require("../services/urlNormalizer");
const createFacebookApi = require("../services/facebookApi");

const router = express.Router({ mergeParams: true });

const facebookApi = createFacebookApi();
const urlNormalizer = createUrlNormalizer(facebookApi);

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
