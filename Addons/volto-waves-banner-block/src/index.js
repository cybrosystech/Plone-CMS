import Edit from "./views/Edit";
import View from "./views/View";
import textSVG from '@plone/volto/icons/text.svg';
export default (config) => {
 config.blocks.blocksConfig.wavestext = {
   id: 'wavestext',
   title: 'Waves text',
   group: 'common',
   icon: textSVG,
   view: View,
   edit: Edit,
   restricted: false,
   mostUsed: true,
   sidebarTab: 1,
   security: {
     addPermission: [],
     view: [],
   },
 };
 return config;
};