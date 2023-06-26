export const isDevEnv = () => {
  const env = process.env.NODE_ENV;

  return env !== 'production';
};
