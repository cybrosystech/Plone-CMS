import AuroraEdit from "./Edit";
import AuroraView from "./View";
import textSVG from '@plone/volto/icons/text.svg';
export default (config) => {
 config.blocks.blocksConfig.text_aurora = {
   id: 'text_aurora',
   title: 'Aurora text',
   group: 'common',
   icon: textSVG,
   view: AuroraView,
   edit: AuroraEdit,
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
