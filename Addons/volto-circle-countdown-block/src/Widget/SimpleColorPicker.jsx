import React from 'react';
import { FormFieldWrapper, Icon } from '@plone/volto/components';
import { Button } from 'semantic-ui-react';
import clearSVG from '@plone/volto/icons/clear.svg';
import { SwatchesPicker } from 'react-color'


import loadable from '@loadable/component';
const GithubPicker = loadable(() => import('react-color/lib/Github'));

export default (props) => {
  const { id, value, onChange } = props;
 
  const [showPicker, setShowPicker] = React.useState(false);

  return (
    <FormFieldWrapper
      {...props}
      draggable={false}
      className="simple-color-picker-widgdet"
    >
      <div className="wrapper">
        <Button.Group>
          <Button
            style={{ backgroundColor: value }}
            onClick={() => setShowPicker(!showPicker)}
            size="huge"
            title="Pick color"
          >
            {''}
          </Button>
          <Button
            compact
            style={{ paddingLeft: '8px', paddingRight: '0px' }}
            onClick={() => {
              setShowPicker(false);
              onChange(id, null);
            }}
          >
            <Icon name={clearSVG} size="18px" color="red" />
          </Button>
        </Button.Group>

        {showPicker ? (
          // <GithubPicker
          //   width="220px"
          //   className="color-picker"
          //   colors={['#bbdbec', '#9dc6d4', '#5a93aa', '#005d7b', '#003d53', '#ebefc6', '#bdd494', '#6bb535', '#1e8339', '#025e37', '#464b0b', '#b5c234', '#777b1a', '#f4f1bc', '#e1e070', '#0070ae', '#fce6dc', '#f39a86', '#e73d5c', '#b92f47', '#8e1206', '#fff6a6', '#ffe525', '#f7a600', '#b94b19', '#8d4107', '#000000', '#6f6f6e', '#929291', '#bcbcbc', '#e3e3e3', '#ffffff']}
          //   color={value || '#000'}
          //   onChangeComplete={(value) => {
          //     setShowPicker(false);
          //     onChange(id, value.hex);
          //   }}
          // />
          <SwatchesPicker 
          onChangeComplete={(value) => {
                  setShowPicker(false);
                  onChange(id, value.hex);
              
              }}
                />
        ) : (
          ''
        )}
      </div>
    </FormFieldWrapper>
  );
};
