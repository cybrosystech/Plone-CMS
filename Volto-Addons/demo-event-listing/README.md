# Event Listing Template

This is a customizable event listing template that can be used in a Volto-based project. This template provides a structured layout for displaying a list of events, and it can be easily modified to fit specific project requirements.

![Screenshot from 2023-04-21 13-55-51](https://user-images.githubusercontent.com/129945593/233585781-e0eececa-aecd-4fba-821f-262fef42849e.png)

## Usage

To use this template, you can follow these steps:

1. Copy the eventListingTemplate.jsx file into your project's src/components/Blocks/listing directory.

2. Copy the eventListingTemplateStyles.css file into your project's src/components/Blocks/listing directory.

3. Open the index.js file located in your project's src/ directory.

4. Import the eventListingTemplate component at the top of the file: import eventListingTemplate from "../../components/Blocks/listing/eventListingTemplate";

5. Add a new variation to the listing block by adding the following code inside the applyConfig function:

```javascript
config.blocks.blocksConfig.listing.variations = [
  ...config.blocks.blocksConfig.listing.variations,
  {
    id: "eventListing",
    title: "Events",
    template: eventListingTemplate,
  },
];
```

6. Save the file and start your project.

## Customization

This template can be customized to fit your specific project requirements. You can modify the layout, styling, and content of the template as needed.

## Layout

The layout of the template is based on the Semantic UI grid system. You can modify the number of columns and their widths by modifying the columns and width props on the Grid and Grid.Column components, respectively.

## Styling

The styles for this template are located in the ```eventListingTemplateStyles.css``` file. You can modify these styles or add new styles to the file to customize the appearance of the template.

## Content

The content for this template is populated by the items prop, which is an array of objects. You can modify the content of these objects to customize the list of events that is displayed in the template. Additionally, you can modify the JSX code in the eventListingTemplate.jsx file to add new content or modify the existing content.

## License

This template is released under the MIT License.





