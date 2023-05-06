import CustomButtonView from "./CustomizableLinkButton/View";
import CustomButtonEdit from "./CustomizableLinkButton/Edit";
import  outdentSVG  from '@plone/volto/icons/outdent.svg';
import SimpleColorPicker from "./CustomizableLinkButton/Widget/SimpleColorPicker"
import Stretch from "./CustomizableLinkButton/Widget/Stretch";

const applyConfig = (config) => {
  config.blocks.blocksConfig.custombutton = {
    id: "custombutton",
    title: "Custom Button",
    icon: outdentSVG,
    group: "common",
    view: CustomButtonView,
    edit: CustomButtonEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,

  };

  config.widgets.widget.style_simple_color = SimpleColorPicker;



  
  return config;
};

export default applyConfig;
