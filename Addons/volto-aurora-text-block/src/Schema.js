export const AuroraSchema = (props) => {

    return {
        required: [],
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['title','subtitle'],
          },
          {
            id: 'style_aurora',
            title: 'Style',
            fields: ['height','paddingTop','paddingBottom'],
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
          paddingBottom: {
            title: 'Padding Bottom',
            widget: 'text',
            default: '0vh',
          },
          paddingTop: {
            title: 'Padding Top',
            widget: 'text',
            default: '0vh',
          },
        },
      };
    };
  export default AuroraSchema;