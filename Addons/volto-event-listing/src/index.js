import eventListingTemplate from "./components/Blocks/listing/eventListingTemplate";

const applyConfig = (config) => {
// The applyConfig function will modify the config object by 
// adding a new variation to the listing block. The new variation
//  will have an id of "eventListing", a title of "Events", and a 
//  template property that points to the eventListingTemplate component.

  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: "eventListing",
      title: "Events",
      template: eventListingTemplate,
    },
  ];
  return config;
};

export default applyConfig;

