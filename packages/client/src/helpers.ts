export const getRunningEnvironment = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return 'development';
  } else if (env === 'production') {
    return 'production';
  }
};
