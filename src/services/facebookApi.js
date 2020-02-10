const createFacebookApi = () => {
  const page = pageId => {
    return {
      id: pageId,
      name: "foo",
      link: "https://facebook.com/foo/"
    };
  };

  return {
    page
  };
};

module.exports = createFacebookApi;
