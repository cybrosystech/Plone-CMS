export const WavesSchema = (props) => {

    return {
        required: [],
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['title','subtitle','height'],
          },
        ],
        properties: {
          title: {
            title: 'Title',
            widget: 'text',
            default:'Title here'

          },
          subtitle: {
            title: 'Subtitle',
            widget: 'text',
            default:'Subtitle here'

          },
            height: {
            title: 'Height',
            widget: 'text',
            default: '50vh',
          },
        },
      };

    };
  export default WavesSchema;