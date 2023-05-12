import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import Schema from './Schema';

const WavesData = (props) => {
  const { data, block, onChangeBlock } = props;
  const schema = Schema({ ...props });
  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default WavesData;