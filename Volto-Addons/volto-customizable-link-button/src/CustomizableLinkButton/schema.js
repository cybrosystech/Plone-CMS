

export const schemaDownload = () => {
    return {
      required: [],
      fieldsets: [
        {
          id: 'default',
          title: 'Default',
          fields: ['title','titleTextColor', 'description','descriptionTextColor'],
        },
        {
          id: 'button',
          title: 'Button',
          fields: ['buttonTitle', 'buttonLink', 'otherLinkText', 'otherLink','buttonColor','buttonTextColor'],
        },
        {
          id: 'bannerDesign',
          title: 'Banner Style',
          fields: ['BGColor',"BlockStretch"],
        },
      ],
      properties: {
        title: {
          title: 'Title',
          widget: 'text',
        },
        titleTextColor: {
          title: 'Title Text Color',
          widget: 'style_simple_color',
        },
        description: {
          title: 'Description',
          widget: 'text',
        },
        descriptionTextColor: {
          title: 'Description Text Color',
          widget: 'style_simple_color',
        },
        buttonTitle: {
          title: 'Button Title',
          widget: 'text',
        },
        buttonLink: {
          title: 'Button link',
          widget: 'object_browser',
          mode: 'link',
          allowExternals: true,
        },
        otherLinkText: {
          title: 'Other link text',
          widget: 'text',
        },
        otherLink: {
          title: 'Other link',
          widget: 'object_browser',
          mode: 'link',
          allowExternals: true,
        },
        buttonColor:{
          title: 'Button Background Color',
          widget: 'style_simple_color'
        },
        buttonTextColor:{
          title: 'Button Text Color',
          widget: 'style_simple_color'
        },

        BGColor:{
          title: 'Color',
          widget: 'style_simple_color'
        },
        BlockStretch:{
          title: 'Stretch',
          type: "boolean",
        }
      },
    };
  };
  
  export default schemaDownload;