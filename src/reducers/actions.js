export const TYPE_USERNAME = "TYPE_USERNAME";
export const TYPE_USERWORKPLACE = "TYPE_USERWORKPLACE";

export const typeUsername = text => ({
  type: TYPE_USERNAME,
  username: text
});

export const typeUserworkplace = text => ({
  type: TYPE_USERWORKPLACE,
  userworkplace: text
});
