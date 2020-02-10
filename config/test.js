const createFacebookApi = () => {
  const page = pageId => {
    return {
      id: pageId,
      name: "TEST-foo",
      link: "https://facebook.com/TEST-foo/"
    };
  };

  return {
    page
  };
};

module.exports = {
  createFacebookApi
};
