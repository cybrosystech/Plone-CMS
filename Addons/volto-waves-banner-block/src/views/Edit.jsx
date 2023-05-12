import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import View from './View';
import WavesData from '../Data';

const Edit = (props) => {
    const { data, onChangeBlock, block, selected } = props;

 return (
   <>
     <View {...props} />
     <SidebarPortal selected={selected}>
        <WavesData
          key={block}
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
   </>
 );
};
export default Edit;