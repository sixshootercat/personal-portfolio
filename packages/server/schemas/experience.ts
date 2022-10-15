export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [{ type: 'workExperience' }],
    },
  ],
};
