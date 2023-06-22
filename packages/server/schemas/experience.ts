export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      placeholder: 'YYYY-MM-DD',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      placeholder: 'YYYY-MM-DD',
    },
  ],
};
