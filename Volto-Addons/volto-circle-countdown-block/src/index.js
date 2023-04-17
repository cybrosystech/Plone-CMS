import clockSVG from '@plone/volto/icons/clock.svg';
import SimpleColorPicker from "./Widget/SimpleColorPicker";
import SliderWidget from './Widget/SliderWidget';
import View from './View';
import Edit from './Edit';


const applyConfig = (config) => {
  config.blocks.blocksConfig.realtimecountdown = {
    id: 'realtimecountdown',
    title: 'Cybro Countdown',
    icon: clockSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.widgets.widget.style_time_color = SimpleColorPicker;
  config.widgets.widget.slider = SliderWidget;

    return config;
};

export default applyConfig;

